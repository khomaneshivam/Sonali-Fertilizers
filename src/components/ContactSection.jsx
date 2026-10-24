import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  Navigation, 
  Truck,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO, FAQ_DATA } from '../data/businessData';

export default function ContactSection({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    village: '',
    crop: 'Sugarcane',
    requirement: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    let msg = `नमस्कार सोनाली फर्टिलायझर्स,\n`;
    msg += `माझे नाव: ${formData.name || 'शेतकरी मित्र'}\n`;
    msg += `फोन नंबर: ${formData.phone || 'उपलब्ध नाही'}\n`;
    msg += `गाव/परिसर: ${formData.village || 'इंदापूर परिसर'}\n`;
    msg += `पीक: ${formData.crop}\n`;
    msg += `चौकशी/मागणी: ${formData.requirement || 'खते व औषधांचे दर हवे आहेत'}\n`;
    
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <MapPin size={16} />
            <span>{lang === 'mr' ? 'दुकान पत्ता व संपर्क' : 'Store Location & Contact'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'mr' 
              ? 'सोनाली फर्टिलायझर्सला आजच भेट द्या किंवा संपर्क साधा' 
              : 'Visit Sonali Fertilizers or Get in Touch Today'}
          </h2>
          <p className="section-subtitle">
            {lang === 'mr'
              ? 'संसार-कुरावली रस्त्यावर मुख्य ठिकाणी आमचे दालन आहे. थेट भेट द्या किंवा घरपोच खतांसाठी फोन करा.'
              : 'Conveniently located on Sansar-Kurawali Road, Mankarwadi, Indapur. We are open all 7 days.'}
          </p>
        </div>

        {/* Main Grid: Contact Cards & Form */}
        <div className="contact-grid">
          
          {/* Left Column: Business Info & Direct Action */}
          <div className="contact-info-cards">
            
            {/* Address Card */}
            <div className="card info-box">
              <div className="info-box-icon">
                <MapPin size={24} />
              </div>
              <div className="info-box-content">
                <h4 className="info-box-title">
                  {lang === 'mr' ? 'दुकानाचा पत्ता (Store Address)' : 'Store Address'}
                </h4>
                <p className="info-box-text">
                  {lang === 'mr' ? BUSINESS_INFO.addressMr : BUSINESS_INFO.address}
                </p>
                <a 
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direction-btn"
                >
                  <Navigation size={15} />
                  <span>{lang === 'mr' ? 'गुगल मॅप्सवर दिशा पहा (Get Directions)' : 'Navigate on Google Maps'}</span>
                </a>
              </div>
            </div>

            {/* Phone & Order Lines Card */}
            <div className="card info-box">
              <div className="info-box-icon icon-phone">
                <Phone size={24} />
              </div>
              <div className="info-box-content">
                <h4 className="info-box-title">
                  {lang === 'mr' ? 'फोन व व्हॉट्सॲप संपर्क (Phone & WhatsApp)' : 'Phone Numbers & Orders'}
                </h4>
                <p className="info-box-text">
                  <strong>{lang === 'mr' ? 'मुख्य संपर्क:' : 'Primary Hotline:'}</strong>{' '}
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="phone-link">
                    {BUSINESS_INFO.phone}
                  </a>
                  <br />
                  <strong>{lang === 'mr' ? 'पर्यायी नंबर:' : 'Support Line:'}</strong>{' '}
                  <a href={`tel:${BUSINESS_INFO.phoneSecondary}`} className="phone-link">
                    {BUSINESS_INFO.phoneSecondary}
                  </a>
                </p>
                <div className="quick-contact-actions">
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">
                    <Phone size={15} />
                    <span>{lang === 'mr' ? 'कॉल करा' : 'Call Now'}</span>
                  </a>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Sonali%20Fertilizers`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    <MessageCircle size={15} />
                    <span>{lang === 'mr' ? 'व्हॉट्सॲप' : 'WhatsApp'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Working Timings Card */}
            <div className="card info-box">
              <div className="info-box-icon icon-clock">
                <Clock size={24} />
              </div>
              <div className="info-box-content">
                <h4 className="info-box-title">
                  {lang === 'mr' ? 'दुकानाची वेळ (Store Timings)' : 'Operating Hours'}
                </h4>
                <p className="info-box-text">
                  <span className="timing-highlight">
                    {lang === 'mr' ? BUSINESS_INFO.hoursMr : BUSINESS_INFO.hours}
                  </span>
                  <br />
                  <span className="timing-note">
                    {lang === 'mr' ? '• आठवड्याचे सर्व ७ दिवस अखंड सेवा' : '• Open 7 Days a week for farmers'}
                  </span>
                </p>
              </div>
            </div>

            {/* Farm Delivery Area Card */}
            <div className="card info-box">
              <div className="info-box-icon icon-truck">
                <Truck size={24} />
              </div>
              <div className="info-box-content">
                <h4 className="info-box-title">
                  {lang === 'mr' ? 'डिलिव्हरी कार्यक्षेत्र (Delivery Coverage)' : 'Doorstep Delivery Coverage'}
                </h4>
                <p className="info-box-text">
                  {lang === 'mr' 
                    ? 'संसार, कुरावली, मानकरवाडी, इंदापूर शहर, बारामती हद्द, लासुर्णे, पळसदेव आणि लगतची सर्व शेती गावे.' 
                    : 'Sansar, Kurawali, Mankarwadi, Indapur town, Baramati border, Lasurne, Palasdev & surrounding agricultural villages.'}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form & Interactive Google Map */}
          <div className="contact-form-column">
            
            {/* Inquiry Form Card */}
            <div className="card contact-form-card">
              <div className="form-card-header">
                <h3 className="form-title">
                  {lang === 'mr' ? 'खते व बियाणे चौकशी अर्ज' : 'Fertilizer & Seed Inquiry Form'}
                </h3>
                <p className="form-subtitle">
                  {lang === 'mr'
                    ? 'तुमची मागणी नोंदवा, आमचे प्रतिनिधी त्वरित कॉल करून दर व डिलिव्हरीची माहिती देतील.'
                    : 'Fill in your details below and our team will get back to you with prices and delivery slots.'}
                </p>
              </div>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle size={48} className="success-icon" />
                  <h4>{lang === 'mr' ? 'धन्यवाद! तुमची नोंद झाली आहे.' : 'Thank you! Inquiry Received.'}</h4>
                  <p>
                    {lang === 'mr'
                      ? 'आम्ही लवकरच आपल्याशी फोनवर संपर्क साधू. तातडीच्या चौकशीसाठी खालील बटनावर क्लिक करून थेट व्हॉट्सॲपवर बोला.'
                      : 'Our representative will call you shortly. For immediate response, reach us directly on WhatsApp.'}
                  </p>
                  <button 
                    onClick={handleSendWhatsApp}
                    className="btn btn-whatsapp btn-lg"
                    style={{ marginTop: '1rem', width: '100%' }}
                  >
                    <MessageCircle size={18} />
                    <span>{lang === 'mr' ? 'व्हॉट्सॲपवर उघडा' : 'Open in WhatsApp'}</span>
                  </button>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline btn-sm"
                    style={{ marginTop: '0.75rem' }}
                  >
                    {lang === 'mr' ? 'नवीन अर्ज भरा' : 'Send Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label>{lang === 'mr' ? 'शेतकऱ्याचे नाव (Full Name) *' : 'Farmer Full Name *'}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'mr' ? 'उदा. सचिन खोमणे' : 'e.g. Sachin Khomane'}
                      />
                    </div>

                    <div className="form-field">
                      <label>{lang === 'mr' ? 'मोबाईल नंबर (Phone Number) *' : 'Mobile Phone Number *'}</label>
                      <input 
                        type="tel" 
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={lang === 'mr' ? '१० अंकी मोबाईल नंबर' : '10-digit Mobile Number'}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label>{lang === 'mr' ? 'गाव / तालुका (Village / Area) *' : 'Village / Area *'}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.village}
                        onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                        placeholder={lang === 'mr' ? 'उदा. संसार / कुरावली' : 'e.g. Sansar / Kurawali'}
                      />
                    </div>

                    <div className="form-field">
                      <label>{lang === 'mr' ? 'मुख्य पीक (Select Crop)' : 'Primary Crop'}</label>
                      <select 
                        value={formData.crop}
                        onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                      >
                        <option value="Sugarcane">{lang === 'mr' ? 'ऊस (Sugarcane)' : 'Sugarcane'}</option>
                        <option value="Onion">{lang === 'mr' ? 'कांदा (Onion)' : 'Onion'}</option>
                        <option value="Grapes">{lang === 'mr' ? 'द्राक्षे (Grapes)' : 'Grapes'}</option>
                        <option value="Pomegranate">{lang === 'mr' ? 'डाळिंब (Pomegranate)' : 'Pomegranate'}</option>
                        <option value="Vegetables">{lang === 'mr' ? 'भाजीपाला (Vegetables)' : 'Vegetables'}</option>
                        <option value="Maize">{lang === 'mr' ? 'मका (Maize)' : 'Maize'}</option>
                        <option value="Other">{lang === 'mr' ? 'इतर पीक (Other)' : 'Other'}</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>{lang === 'mr' ? 'खते, बियाणे किंवा औषधांची मागणी (Requirement Details)' : 'Fertilizer / Seed Requirements'}</label>
                    <textarea 
                      rows={3}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      placeholder={lang === 'mr' ? 'उदा. इफको १०:२६:२६ - १० पोती, युरिया - ५ पोती, नाशिक कांदा बियाणे २ किलो...' : 'e.g. Need 10 bags IFFCO 10:26:26 and 5 bags Urea for 2 acres sugarcane planting...'}
                    ></textarea>
                  </div>

                  <div className="form-submit-buttons">
                    <button type="submit" className="btn btn-primary btn-lg submit-btn">
                      <Send size={18} />
                      <span>{lang === 'mr' ? 'अर्ज पाठवा (Submit Inquiry)' : 'Submit Inquiry'}</span>
                    </button>

                    <button 
                      type="button" 
                      onClick={handleSendWhatsApp}
                      className="btn btn-whatsapp btn-lg submit-wa-btn"
                    >
                      <MessageCircle size={18} />
                      <span>{lang === 'mr' ? 'व्हॉट्सॲपवर पाठवा' : 'Send via WhatsApp'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>

            {/* Embedded Google Maps Box */}
            <div className="card map-embed-card">
              <div className="map-card-header">
                <MapPin size={18} className="icon-emerald" />
                <span>
                  {lang === 'mr' ? 'गुगल नकाशे स्थान (Google Map Location)' : 'Google Maps Location: Sansar, Indapur'}
                </span>
              </div>
              <div className="map-iframe-wrapper">
                <iframe
                  title="Sonali Fertilizers Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15160.0!2d74.92!3d18.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAzJzM2LjAiTiA3NMKwNTUnMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="map-footer-link">
                <a 
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%' }}
                >
                  <Navigation size={15} />
                  <span>{lang === 'mr' ? 'गुगल मॅप्स ॲपमध्ये उघडा' : 'Open in Google Maps App'}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Frequently Asked Questions (FAQ) Accordion */}
        <div className="faq-wrapper">
          <h3 className="faq-title text-center">
            {lang === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न (FAQ)' : 'Frequently Asked Questions'}
          </h3>
          <div className="faq-grid">
            {FAQ_DATA.map((faq, i) => (
              <div key={i} className="card faq-card">
                <h4 className="faq-q">
                  {lang === 'mr' ? faq.qMr : faq.qEn}
                </h4>
                <p className="faq-a">
                  {lang === 'mr' ? faq.aMr : faq.aEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
