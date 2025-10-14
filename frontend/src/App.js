import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

// Import Components
import Header from "./components/Header";
import ContactPage from "./components/Contact";
import CategoriesPage from "./components/Categoriespage";
import Hero from "./components/Hero";
import ClothTypes from "./components/ClothTypes";
import ImageUpload from "./components/ImageUpload";
import Categories from "./components/Categories";
import RandomScan from "./components/RandomScan";
import LearnMore from "./components/LearnMore";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatbotButton from "./components/ChatbotButton";
import About from "./components/About";
import ScanPage from "./components/ScanPage";
import Upload from "./components/upload";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ClothTypes />
        <Upload />
        <Categories />
        <RandomScan />
        <LearnMore />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <ChatbotButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
                    <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/scan" element={<ScanPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;