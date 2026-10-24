import React from 'react';
import { MessageCircle, Phone, Calculator } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function FloatingWhatsApp({ lang }) {
  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button */}
      <aside className="floating-action-cluster" aria-label="Quick contact buttons">
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Sonali%20Fertilizers,%20I%20am%20inquiring%20from%20your%20website`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-wa-btn"
          aria-label="Chat on WhatsApp"
        >
          <div className="wa-pulse-ring"></div>
          <MessageCircle size={28} className="wa-icon" />
          <span className="wa-tooltip">
            {lang === 'mr' ? 'व्हॉट्सॲपवर ऑर्डर करा' : 'Chat on WhatsApp'}
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Action Bar with iOS Safe-Area support */}
      <nav className="mobile-bottom-bar" aria-label="Mobile quick actions">
        <a href={`tel:${BUSINESS_INFO.phone}`} className="bottom-bar-btn call-action">
          <Phone size={17} />
          <span>{lang === 'mr' ? 'कॉल' : 'Call'}</span>
        </a>
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Sonali%20Fertilizers,%20I%20want%20to%20order`}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-bar-btn wa-action"
        >
          <MessageCircle size={17} />
          <span>{lang === 'mr' ? 'व्हॉट्सॲप' : 'WhatsApp'}</span>
        </a>
        <a href="#calculator" className="bottom-bar-btn calc-action">
          <Calculator size={17} />
          <span>{lang === 'mr' ? 'खत गणक' : 'Calculator'}</span>
        </a>
      </nav>
    </>
  );
}
