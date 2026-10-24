import React from 'react';
import { 
  Sprout, 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Footer({ lang, setLang }) {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Footer Top Grid */}
        <div className="footer-grid">
          
          {/* Column 1: Brand & Mission */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <div className="brand-icon-wrapper">
                <Sprout size={26} className="brand-icon" />
              </div>
              <span className="brand-name">
                {lang === 'mr' ? BUSINESS_INFO.nameMr : BUSINESS_INFO.name}
              </span>
            </div>
            
            <p className="footer-about">
              {lang === 'mr'
                ? 'संसार, कुरावली आणि इंदापूर परिसरातील शेतकऱ्यांचा विश्वासू कृषी साथीदार. अस्सल रासायनिक व सेंद्रिय खते, संकरित बियाणे आणि तज्ज्ञ पीक सल्ला देऊन शेतीची उत्पादकता वाढवणे हेच आमचे ध्येय.'
                : 'Dedicated to empowering the farming community across Sansar, Kurawali, and Indapur with genuine fertilizers, high-yield seeds, and professional agronomic guidance.'}
            </p>

            <div className="footer-trust-badge">
              <ShieldCheck size={18} className="icon-emerald" />
              <span>{lang === 'mr' ? 'शासकीय परवानाधारक कृषी केंद्र' : 'Licensed & Certified Agro Center'}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">
              {lang === 'mr' ? 'महत्त्वाच्या लिंक्स' : 'Quick Navigation'}
            </h4>
            <ul className="footer-links">
              <li>
                <a href="#home">
                  <ChevronRight size={14} />
                  <span>{lang === 'mr' ? 'मुख्यपृष्ठ' : 'Home'}</span>
                </a>
              </li>
              <li>
                <a href="#products">
                  <ChevronRight size={14} />
                  <span>{lang === 'mr' ? 'खते व उत्पादने' : 'Products & Stock'}</span>
                </a>
              </li>
              <li>
                <a href="#calculator">
                  <ChevronRight size={14} />
                  <span>{lang === 'mr' ? 'खत मात्रा गणक' : 'Fertilizer Calculator'}</span>
                </a>
              </li>
              <li>
                <a href="#advisory">
                  <ChevronRight size={14} />
                  <span>{lang === 'mr' ? 'पीक सल्ला' : 'Crop Advisory'}</span>
                </a>
              </li>
              <li>
                <a href="#reviews">
                  <ChevronRight size={14} />
                  <span>{lang === 'mr' ? 'शेतकरी मते' : 'Customer Reviews'}</span>
                </a>
              </li>
              <li>
                <a href="#gallery">
                  <ChevronRight size={14} />
                  <span>{lang === 'mr' ? 'छायाचित्रे' : 'Photo Gallery'}</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <ChevronRight size={14} />
                  <span>{lang === 'mr' ? 'संपर्क व नकाशे' : 'Contact & Map'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Crop Categories */}
          <div className="footer-col crops-col">
            <h4 className="footer-col-title">
              {lang === 'mr' ? 'विशेष पीक मार्गदर्शन' : 'Crop Specializations'}
            </h4>
            <ul className="footer-links">
              <li>
                <a href="#calculator">🌱 {lang === 'mr' ? 'ऊस पीक खत नियोजन' : 'Sugarcane Nutrition'}</a>
              </li>
              <li>
                <a href="#calculator">🧅 {lang === 'mr' ? 'कांदा फुगवण व करपा नियंत्रण' : 'Onion Production & Blight Control'}</a>
              </li>
              <li>
                <a href="#calculator">🍇 {lang === 'mr' ? 'द्राक्ष बागायत भुरी व डाउनी उपाय' : 'Grape Vineyard Mildew Management'}</a>
              </li>
              <li>
                <a href="#calculator">🍎 {lang === 'mr' ? 'डाळिंब बहार खते व फवारणी' : 'Pomegranate Bahar Management'}</a>
              </li>
              <li>
                <a href="#calculator">🌽 {lang === 'mr' ? 'हायब्रिड मका व भाजीपाला' : 'Hybrid Maize & Vegetables'}</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">
              {lang === 'mr' ? 'थेट संपर्क' : 'Contact & Help'}
            </h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="icon-gold" />
                <span>{lang === 'mr' ? BUSINESS_INFO.addressMr : BUSINESS_INFO.address}</span>
              </li>
              <li>
                <Phone size={18} className="icon-gold" />
                <a href={`tel:${BUSINESS_INFO.phone}`}>{BUSINESS_INFO.phone}</a>
              </li>
              <li>
                <MessageCircle size={18} className="icon-emerald" />
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Sonali%20Fertilizers`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +91 94230 34155
                </a>
              </li>
              <li>
                <Clock size={18} className="icon-gold" />
                <span>{lang === 'mr' ? BUSINESS_INFO.hoursMr : BUSINESS_INFO.hours}</span>
              </li>
            </ul>

            <div className="footer-lang-toggle">
              <button 
                onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
                className="btn btn-outline btn-sm"
              >
                {lang === 'en' ? 'मराठी आवृत्ती पहा' : 'View English Version'}
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} {BUSINESS_INFO.name} ({BUSINESS_INFO.nameMr}). {lang === 'mr' ? 'सर्व हक्क राखीव.' : 'All Rights Reserved.'}
          </p>
          <p className="attribution-text">
            {lang === 'mr' ? 'शेतकऱ्यांच्या समृद्धीसाठी सदैव तत्पर • संसार, इंदापूर (पुणे)' : 'Committed to Farmer Prosperity • Sansar, Indapur, Pune'}
          </p>
        </div>

      </div>
    </footer>
  );
}
