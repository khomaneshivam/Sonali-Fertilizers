import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Phone, CheckCircle, Sprout } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function QuickOrderModal({ isOpen, onClose, lang }) {
  const [farmerName, setFarmerName] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    let msg = `नमस्कार सोनाली फर्टिलायझर्स,\n`;
    msg += `माझे नाव: ${farmerName || 'शेतकरी मित्र'}\n`;
    msg += `फोन: ${phone || 'उपलब्ध नाही'}\n`;
    msg += `गाव: ${village || 'इंदापूर परिसर'}\n`;
    msg += `खते/औषधांची मागणी: ${notes || 'मला चालू दर जाणून घ्यायचे आहेत'}\n`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-icon-badge">
            <Sprout size={22} />
          </div>
          <h3 className="modal-title">
            {lang === 'mr' ? 'खते व बियाणे थेट चौकशी' : 'Quick Order & Fertilizer Inquiry'}
          </h3>
          <p className="modal-subtitle">
            {lang === 'mr'
              ? 'सोनाली फर्टिलायझर्स, संसार (इंदापूर) • फोन: ९४२३० ३४१५५'
              : 'Sonali Fertilizers, Sansar (Indapur) • Hotline: +91 94230 34155'}
          </p>
        </div>

        {submitted ? (
          <div className="modal-success-state">
            <CheckCircle size={48} className="success-icon" />
            <h4>{lang === 'mr' ? 'नोंद यशस्वीरीत्या पूर्ण झाली!' : 'Inquiry Submitted Successfully!'}</h4>
            <p>
              {lang === 'mr'
                ? 'आमचे प्रतिनिधी आपल्याशी लवकरच संपर्क साधतील. जलद उत्तरासाठी व्हॉट्सॲपवर संपर्क साधा.'
                : 'Our representative will get in touch shortly. You can also chat with us directly on WhatsApp.'}
            </p>
            <button 
              onClick={handleWhatsAppSend}
              className="btn btn-whatsapp btn-lg"
              style={{ width: '100%', marginTop: '1rem' }}
            >
              <MessageCircle size={18} />
              <span>{lang === 'mr' ? 'व्हॉट्सॲपवर पाठवा' : 'Open in WhatsApp'}</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-field">
              <label>{lang === 'mr' ? 'शेतकऱ्याचे नाव (Name) *' : 'Farmer Name *'}</label>
              <input
                type="text"
                required
                value={farmerName}
                onChange={(e) => setFarmerName(e.target.value)}
                placeholder={lang === 'mr' ? 'आपले नाव प्रविष्ट करा' : 'Enter your name'}
              />
            </div>

            <div className="form-field">
              <label>{lang === 'mr' ? 'मोबाईल नंबर (Phone Number) *' : 'Phone Number *'}</label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={lang === 'mr' ? '१० अंकी मोबाईल नंबर' : '10-digit mobile number'}
              />
            </div>

            <div className="form-field">
              <label>{lang === 'mr' ? 'गाव / परिसर (Village / Area) *' : 'Village / Location *'}</label>
              <input
                type="text"
                required
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                placeholder={lang === 'mr' ? 'उदा. संसार / कुरावली / मानकरवाडी' : 'e.g. Sansar / Kurawali'}
              />
            </div>

            <div className="form-field">
              <label>{lang === 'mr' ? 'मागणी तपशील (Fertilizer / Seeds / Spray)' : 'Requirement Details'}</label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={lang === 'mr' ? 'कोणती खते किंवा बियाणे हवी आहेत?' : 'Which fertilizers or seeds do you need?'}
              ></textarea>
            </div>

            <div className="modal-btn-group">
              <button type="submit" className="btn btn-primary btn-lg" style={{ flex: 1 }}>
                <Send size={18} />
                <span>{lang === 'mr' ? 'नोंदवा' : 'Submit'}</span>
              </button>

              <button 
                type="button" 
                onClick={handleWhatsAppSend}
                className="btn btn-whatsapp btn-lg"
                style={{ flex: 1 }}
              >
                <MessageCircle size={18} />
                <span>{lang === 'mr' ? 'व्हॉट्सॲप' : 'WhatsApp'}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
