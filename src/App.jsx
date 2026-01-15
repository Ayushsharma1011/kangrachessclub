import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Tournaments from "@/pages/Tournaments";
import Gallery from "@/pages/Gallery";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import ScrollToTop from "@/components/ScrollToTop"; 
import Admin from "@/pages/Admin"; 
import AdminGallery from "./pages/AdminGallery";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAnnouncement from "@/pages/AdminAnnouncement";
import AdminSubmissions from "@/pages/AdminSubmissions";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* to scroll upwards */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin-gallery" element={<AdminGallery />} />
            <Route path="/admin-announcement" element={<AdminAnnouncement />} />
            <Route path="/admin-submissions" element={<AdminSubmissions />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
