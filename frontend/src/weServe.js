// =====================================================================
//  WE SERVE — 4 disciplines, each serving 4 plant sectors.
//  Structure:  /we-serve/<discipline>/<plant>
//  Data-driven: category & detail pages render from this file.
// =====================================================================
import { IMAGES } from "./content";

const IMG = {
  mechanical: IMAGES.expertise[0],
  civil: "https://images.unsplash.com/photo-1712711649566-16c7cfcf341c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  electrical: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  additional: "https://images.unsplash.com/photo-1628158088791-89567a8e84ec?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  // plant sector images (reused on detail pages)
  cement: IMAGES.serviceCement,
  power: IMAGES.servicePower,
  steel: IMAGES.serviceSteel,
  fertilizer: IMAGES.serviceChemical,
  hero: IMAGES.expertise[1],
};

const PLANTS = [
  { slug: "cement-plant", name: "Cement Plant", image: IMG.cement },
  { slug: "power-plant", name: "Power Plant", image: IMG.power },
  { slug: "steel-plant", name: "Steel Plant", image: IMG.steel },
  { slug: "fertilizer-plant", name: "Fertilizer Plant", image: IMG.fertilizer },
];

// build a sub object from plant + provided desc/features
const sub = (plant, desc, features) => ({
  slug: plant.slug,
  title: plant.name,
  image: plant.image,
  desc,
  features,
});

export const WE_SERVE = [
  {
    slug: "mechanical-work",
    title: "Mechanical Work",
    short: "Mechanical Work",
    tagline: "Erection, equipment installation, piping and fabrication across every plant.",
    image: IMG.mechanical,
    intro: [
      "Mechanical works are at the heart of MME's capability — mechanical erection, equipment installation, heavy-equipment handling, piping and fabrication delivered to exacting engineering standards across India's core process industries.",
      "With our own machinery, skilled manpower and disciplined project management, we execute mechanical packages of any scale — from single-equipment erection to a plant's complete mechanical scope.",
    ],
    subs: [
      sub(PLANTS[0], "Complete mechanical erection and equipment installation for cement plants — mills, kilns, conveyors and material-handling systems.", ["Vertical & ball mill erection", "Kiln & preheater equipment", "Conveyor & bulk material handling", "Fans, ducts & separators", "Alignment, grouting & commissioning", "Shutdown mechanical works"]),
      sub(PLANTS[1], "Heavy mechanical erection and equipment installation for thermal and captive power plants.", ["Boiler pressure-part erection", "Turbine hall & auxiliary equipment", "Fans, mills & pumps", "HP/LP piping erection", "Ducting & expansion joints", "Alignment & commissioning"]),
      sub(PLANTS[2], "Precision mechanical erection for the demanding tolerances and scale of steel plants.", ["Rolling mill equipment", "Furnace & caster erection", "Heavy equipment rigging", "Utility & process piping", "Cranes & handling systems", "Precision alignment & testing"]),
      sub(PLANTS[3], "Mechanical installation for compliance-critical chemical and fertilizer facilities.", ["Reactor & vessel installation", "Rotating equipment erection", "Process & utility piping", "Skid & package units", "Exotic-alloy welding & NDT", "Pre-commissioning support"]),
    ],
  },
  {
    slug: "civil-work",
    title: "Civil Work",
    short: "Civil Work",
    tagline: "Foundations, RCC and complete civil packages built to last.",
    image: IMG.civil,
    intro: [
      "MME's civil works form the durable foundation of every plant — RCC structures, machine foundations, industrial buildings, roads, drainage and complete site development, executed with quality-controlled concrete and experienced supervision.",
      "From greenfield civil packages to brownfield modifications, we deliver structurally sound, compliant civil works that meet the toughest load and safety requirements.",
    ],
    subs: [
      sub(PLANTS[0], "Foundations, silos and civil structures engineered for cement plant loads.", ["Equipment & mill foundations", "Preheater tower civils", "RCC silos & structures", "Roads, drains & paving", "Packing plant civils", "Quality-controlled concrete"]),
      sub(PLANTS[1], "Heavy civil works for turbine, boiler and balance-of-plant structures.", ["Turbine & boiler foundations", "Cooling tower & pump house", "Chimney & duct civils", "Coal & ash handling civils", "Cable trenches & pits", "Site development"]),
      sub(PLANTS[2], "Heavy machine foundations and RCC works for integrated steel plants.", ["Heavy machine foundations", "Mill & furnace civils", "RCC structures", "Pits, trenches & sumps", "Roads & hardstanding", "Utility civils"]),
      sub(PLANTS[3], "Chemical-resistant civil works for fertilizer and process plants.", ["Process building civils", "Equipment foundations", "Chemical-resistant flooring", "Bunds & containment", "Drainage & effluent channels", "Pipe-rack & utility civils"]),
    ],
  },
  {
    slug: "electrical-work",
    title: "Electrical Work",
    short: "Electrical Work",
    tagline: "HT/LT systems, cabling and power distribution — fully commissioned.",
    image: IMG.electrical,
    intro: [
      "MME delivers complete electrical works for process plants — installation, HT/LT systems, cable laying and termination, lighting, power distribution and maintenance — all executed to code with rigorous testing and safety.",
      "Our qualified electrical teams integrate seamlessly with mechanical and civil scope to hand over fully commissioned, reliable electrical systems.",
    ],
    subs: [
      sub(PLANTS[0], "Electrical installation, distribution and commissioning for cement plants.", ["MCC & switchgear installation", "Motor & drive wiring", "HT/LT distribution", "Cable laying & termination", "Earthing & lighting systems", "Testing & commissioning"]),
      sub(PLANTS[1], "Switchyard, HT systems and power distribution for power plants.", ["Switchyard & HT systems", "Transformer & panel installation", "Cable & bus-duct works", "Protection & relay coordination", "Earthing & lightning protection", "Commissioning support"]),
      sub(PLANTS[2], "Heavy-drive electrical works and distribution for steel plants.", ["Heavy-drive & motor wiring", "HT/LT power distribution", "Cable trenches & trays", "Substation equipment", "Lighting & earthing", "Testing & energisation"]),
      sub(PLANTS[3], "Hazardous-area compliant electrical works for fertilizer plants.", ["Hazardous-area (Ex) wiring", "Instrumentation power supply", "HT/LT distribution", "Cable laying & glanding", "Earthing & lighting", "Safety testing & commissioning"]),
    ],
  },
  {
    slug: "additional-services",
    title: "Additional Services",
    short: "Additional Services",
    tagline: "Project management, manpower and support that de-risk delivery.",
    image: IMG.additional,
    intro: [
      "Beyond our core disciplines, MME provides the engineering support that de-risks delivery — project management, manpower supply, equipment support, shutdown services, site supervision and technical consultancy.",
      "These services give clients a single, dependable partner for planning, mobilising and delivering complex plant projects with confidence.",
    ],
    subs: [
      sub(PLANTS[0], "Project management, manpower and shutdown support for cement plants.", ["Project management & planning", "Skilled manpower supply", "Shutdown & turnaround support", "Equipment & crane support", "Site supervision & QA/QC", "Technical consultancy"]),
      sub(PLANTS[1], "O&M, shutdown and site support services for power plants.", ["O&M support", "Shutdown management", "Manpower mobilisation", "Equipment & tooling support", "Site supervision", "Technical advisory"]),
      sub(PLANTS[2], "Heavy-equipment, manpower and maintenance support for steel plants.", ["Heavy-equipment support", "Skilled manpower supply", "Shutdown & maintenance", "Project management", "Site supervision", "Technical consultancy"]),
      sub(PLANTS[3], "Turnaround, safety and technical support for fertilizer plants.", ["Turnaround services", "Safety-permit management", "Manpower supply", "Equipment support", "Site supervision", "Technical consultancy"]),
    ],
  },
];

export const findCategory = (slug) => WE_SERVE.find((c) => c.slug === slug);
export const findSub = (cat, subSlug) => cat && cat.subs.find((s) => s.slug === subSlug);

export const WE_SERVE_NAV = WE_SERVE.map((c) => ({
  label: c.title,
  to: `/we-serve/${c.slug}`,
}));

export const WESERVE_HERO = IMG.hero;
