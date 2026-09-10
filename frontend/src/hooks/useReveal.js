import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Adds `in-view` class to any element with class `reveal` once it enters viewport.
// Re-scans on every route change so pages navigated to via SPA links reveal correctly
// (previously the effect ran only on mount, leaving new pages blank until a hard refresh).
export default function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    let obs;
    const scan = () => {
      const els = document.querySelectorAll(".reveal:not(.in-view)");
      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("in-view"));
        return;
      }
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
      els.forEach((el) => obs.observe(el));
    };
    // Defer to next frame so the newly navigated page has committed to the DOM.
    const raf = requestAnimationFrame(scan);
    // Safety fallback: reveal anything still hidden shortly after navigation.
    const fallback = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add("in-view");
      });
    }, 500);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
      if (obs) obs.disconnect();
    };
  }, [pathname]);
}

// Animated counter hook
export function useCounter(target, run, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return value;
}
