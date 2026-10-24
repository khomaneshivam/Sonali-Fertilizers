import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Sprout, 
  Languages, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Navbar({ lang, setLang, onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'mr' : 'en'));
  };

  const navLinks = [
    { href: '#home', labelEn: 'Home', labelMr: 'मुख्यपृष्ठ' },
    { href: '#products', labelEn: 'Products & Fertilizers', labelMr: 'खते व उत्पादने' },
    { href: '#calculator', labelEn: 'Fertilizer Calculator', labelMr: 'खत गणक' },
    { href: '#advisory', labelEn: 'Crop Advisory', labelMr: 'पीक सल्ला' },
    { href: '#reviews', labelEn: 'Farmer Reviews', labelMr: 'शेतकरी अनुभव' },
    { href: '#gallery', labelEn: 'Photos', labelMr: 'दुकान छायाचित्रे' },
    { href: '#contact', labelEn: 'Contact & Map', labelMr: 'पत्ता व संपर्क' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Top Notification Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="badge badge-live">
              <span className="live-indicator">
                <span className="ping"></span>
                <span></span>
              </span>
              {lang === 'mr' ? 'आज चालू: सकाळी ८ ते संध्या. ७' : 'Open Today: 8:00 AM – 7:00 PM'}
            </span>
            <span className="top-location-text">
              <MapPin size={14} className="icon-gold" />
              {lang === 'mr' ? 'संसार-कुरावली रोड, इंदापूर, पुणे' : 'Sansar-Kurawali Rd, Indapur, Pune'}
            </span>
          </div>

          <div className="top-bar-right">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="top-contact-link">
              <Phone size={14} />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage} 
              className="lang-switcher-btn"
              title={lang === 'en' ? 'मराठीत बदला' : 'Switch to English'}
              aria-label="Switch language"
            >
              <Languages size={15} />
              <span className="lang-label">
                {lang === 'en' ? 'मराठी' : 'English'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="container main-navbar-content">
          {/* Logo */}
          <a href="#home" className="brand-logo">
            <div className="brand-icon-wrapper">
              <Sprout size={28} className="brand-icon" />
            </div>
            <div className="brand-text">
              <span className="brand-name">
                {lang === 'mr' ? BUSINESS_INFO.nameMr : BUSINESS_INFO.name}
              </span>
              <span className="brand-sub">
                {lang === 'mr' ? 'कृषी सेवा केंद्र • संसार (इंदापूर)' : 'Agro Service Center • Sansar, Indapur'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="desktop-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {lang === 'mr' ? link.labelMr : link.labelEn}
                </a>
              </li>
            ))}
          </ul>

          {/* Action CTAs */}
          <div className="nav-actions">
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Sonali%20Fertilizers,%20I%20want%20to%20inquire%20about%20fertilizers`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-sm nav-wa-btn"
            >
              <MessageCircle size={16} />
              <span>{lang === 'mr' ? 'व्हॉट्सॲप ऑर्डर' : 'WhatsApp'}</span>
            </a>

            <button 
              onClick={onOpenInquiry}
              className="btn btn-primary btn-sm inquiry-cta-btn"
            >
              <span>{lang === 'mr' ? 'चौकशी करा' : 'Inquire Now'}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-logo">
                <Sprout size={24} className="brand-icon" />
                <span className="brand-name" style={{ fontSize: '1.15rem' }}>
                  {lang === 'mr' ? BUSINESS_INFO.nameMr : BUSINESS_INFO.name}
                </span>
              </div>
              <button 
                className="close-drawer-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={22} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              <button onClick={toggleLanguage} className="mobile-lang-btn">
                <Languages size={18} />
                <span>{lang === 'en' ? 'मराठी भाषेत वाचा' : 'Switch to English'}</span>
              </button>

              <ul className="mobile-nav-links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={handleLinkClick} className="mobile-nav-link">
                      <span>{lang === 'mr' ? link.labelMr : link.labelEn}</span>
                      <ChevronRight size={18} className="link-arrow" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mobile-drawer-footer">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="btn btn-primary btn-lg" 
                  style={{ width: '100%', marginBottom: '0.75rem' }}
                >
                  <Phone size={18} />
                  <span>{lang === 'mr' ? 'कॉल करा' : 'Call Store'}</span>
                </a>

                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Sonali%20Fertilizers,%20I%20want%20to%20order`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp btn-lg" 
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} />
                  <span>{lang === 'mr' ? 'व्हॉट्सॲपवर मेसेज करा' : 'Chat on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
