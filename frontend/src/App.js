import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useReveal from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import AboutCompanyPage from "./pages/AboutCompanyPage";
import BoardOfDirectorsPage from "./pages/BoardOfDirectorsPage";
import OurTeamPage from "./pages/OurTeamPage";
import OurClientsPage from "./pages/OurClientsPage";
import AnnualReportPage from "./pages/AnnualReportPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import IndustriesPage from "./pages/IndustriesPage";
import ClientsPage from "./pages/ClientsPage";
import GalleryPage from "./pages/GalleryPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

function Layout({ children }) {
  useReveal();
  return (
    <div className="App">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/we-are" element={<AboutCompanyPage />} />
          <Route path="/we-are/about-company" element={<AboutCompanyPage />} />
          <Route path="/we-are/board-of-directors" element={<BoardOfDirectorsPage />} />
          <Route path="/we-are/our-team" element={<OurTeamPage />} />
          <Route path="/we-are/our-clients" element={<OurClientsPage />} />
          <Route path="/we-are/annual-report" element={<AnnualReportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
