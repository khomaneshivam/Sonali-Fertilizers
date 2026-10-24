import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FertilizerCalculator from './components/FertilizerCalculator';
import ProductCatalog from './components/ProductCatalog';
import CropAdvisory from './components/CropAdvisory';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickOrderModal from './components/QuickOrderModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

export default function App() {
  // Language state: 'mr' for Marathi (default for Maharashtra farming community) or 'en' for English
  const [lang, setLang] = useState('mr');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleOpenInquiry = () => {
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
  };

  return (
    <div className="app-root">
      {/* Top Bar & Main Navigation */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenInquiry={handleOpenInquiry} 
      />

      <main>
        {/* Hero Section */}
        <Hero 
          lang={lang} 
          onOpenInquiry={handleOpenInquiry} 
        />

        {/* Interactive Fertilizer Dosage Calculator */}
        <FertilizerCalculator 
          lang={lang} 
        />

        {/* Categorized Product Catalog */}
        <ProductCatalog 
          lang={lang} 
          onOpenInquiry={handleOpenInquiry} 
        />

        {/* Crop Advisory & WhatsApp Diagnosis */}
        <CropAdvisory 
          lang={lang} 
        />

        {/* Google Business Profile Ratings & Reviews */}
        <ReviewsSection 
          lang={lang} 
        />

        {/* Real Photo Gallery */}
        <GallerySection 
          lang={lang} 
        />

        {/* Contact, Timings, Maps & Inquiry Form */}
        <ContactSection 
          lang={lang} 
        />
      </main>

      {/* Footer */}
      <Footer 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Quick Order Modal */}
      <QuickOrderModal 
        isOpen={isInquiryModalOpen} 
        onClose={handleCloseInquiry} 
        lang={lang} 
      />

      {/* Sticky Floating WhatsApp & Mobile Action Bar */}
      <FloatingWhatsApp 
        lang={lang} 
      />
    </div>
  );
}
