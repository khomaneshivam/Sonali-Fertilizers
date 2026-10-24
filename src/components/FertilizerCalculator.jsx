import React, { useState } from 'react';
import { 
  Calculator, 
  Sprout, 
  Scale, 
  Layers, 
  Droplets, 
  Calendar, 
  MessageCircle, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';
import { FERTILIZER_CALCULATOR_DATA, BUSINESS_INFO } from '../data/businessData';

export default function FertilizerCalculator({ lang }) {
  const [selectedCropId, setSelectedCropId] = useState('sugarcane');
  const [area, setArea] = useState(1);
  const [unit, setUnit] = useState('acre'); // 'acre' or 'guntha'

  const currentCrop = FERTILIZER_CALCULATOR_DATA.crops.find(c => c.id === selectedCropId) || FERTILIZER_CALCULATOR_DATA.crops[0];

  // Convert area to acres for baseline calculations (1 acre = 40 gunthas)
  const areaInAcres = unit === 'acre' ? parseFloat(area) || 1 : (parseFloat(area) || 40) / 40;

  // Compute estimated bags
  const calculatedBags = Object.entries(currentCrop.avgBasalBags).map(([fertName, bagsPerAcre]) => {
    const totalBags = Math.round(bagsPerAcre * areaInAcres * 10) / 10;
    return {
      name: fertName,
      bags: Math.max(0.5, totalBags)
    };
  });

  const getWhatsAppMessage = () => {
    const cropName = lang === 'mr' ? currentCrop.nameMr : currentCrop.nameEn;
    const unitText = unit === 'acre' ? (lang === 'mr' ? 'एकर' : 'Acres') : (lang === 'mr' ? 'गुंठे' : 'Gunthas');
    
    let text = `नमस्कार सोनाली फर्टिलायझर्स, मला खतांची आवश्यकता आहे:\n`;
    text += `🌱 पीक: ${cropName}\n`;
    text += `📐 क्षेत्र: ${area} ${unitText}\n\n`;
    text += `अपेक्षित खते (Estimated Requirement):\n`;
    calculatedBags.forEach(item => {
      text += `• ${item.name}: ${item.bags} पोती (Bags)\n`;
    });
    text += `\nकृपया चालू दर आणि डिलिव्हरी वेळेची माहिती द्यावी.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header text-center">
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Calculator size={16} />
            <span>{lang === 'mr' ? 'डिजिटल खत मात्रा गणक' : 'Crop Fertilizer Calculator'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'mr' 
              ? 'तुमच्या पिकासाठी अचूक खत नियोजन करा' 
              : 'Calculate Accurate Fertilizer Dosage for Your Farm'}
          </h2>
          <p className="section-subtitle">
            {lang === 'mr'
              ? 'पीक आणि क्षेत्राची निवड करा; आमचे सॉफ्टवेअर अचूक बेसल डोस आणि आवश्यक पोत्यांची संख्या क्षणात मोजेल.'
              : 'Select your crop and farm acreage to get precise basal dose recommendations and bags needed.'}
          </p>
        </div>

        <div className="calc-card-container">
          <div className="calc-grid">
            
            {/* Input Controls */}
            <div className="calc-inputs-panel">
              <h3 className="calc-panel-title">
                <Sprout size={20} className="icon-emerald" />
                <span>{lang === 'mr' ? '१. पीक आणि क्षेत्राची माहिती' : '1. Select Crop & Farm Area'}</span>
              </h3>

              {/* Crop Selector */}
              <div className="input-group">
                <label className="input-label">
                  {lang === 'mr' ? 'पीक निवडा (Select Crop):' : 'Select Crop:'}
                </label>
                <div className="crop-pills-selector">
                  {FERTILIZER_CALCULATOR_DATA.crops.map((crop) => (
                    <button
                      key={crop.id}
                      type="button"
                      className={`crop-pill-btn ${selectedCropId === crop.id ? 'active' : ''}`}
                      onClick={() => setSelectedCropId(crop.id)}
                    >
                      {lang === 'mr' ? crop.nameMr : crop.nameEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area & Unit Selector */}
              <div className="input-group">
                <label className="input-label">
                  {lang === 'mr' ? 'शेतजमीन क्षेत्र (Area):' : 'Farm Land Area:'}
                </label>
                <div className="area-input-wrapper">
                  <input
                    type="number"
                    min="0.25"
                    step="0.25"
                    value={area}
                    onChange={(e) => setArea(Math.max(0.25, parseFloat(e.target.value) || 1))}
                    className="calc-number-input"
                    placeholder="Enter area"
                  />
                  <div className="unit-toggle-buttons">
                    <button
                      type="button"
                      className={`unit-btn ${unit === 'acre' ? 'active' : ''}`}
                      onClick={() => setUnit('acre')}
                    >
                      {lang === 'mr' ? 'एकर (Acre)' : 'Acre'}
                    </button>
                    <button
                      type="button"
                      className={`unit-btn ${unit === 'guntha' ? 'active' : ''}`}
                      onClick={() => setUnit('guntha')}
                    >
                      {lang === 'mr' ? 'गुंठा (Guntha)' : 'Guntha'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="calc-quick-tips">
                <Info size={18} className="icon-gold" />
                <p>
                  {lang === 'mr'
                    ? 'टिप: जमीन सुपीकता व माती परीक्षणानुसार मात्रेत थोडाफार बदल होऊ शकतो. अचूक मार्गदर्शनासाठी आमचे कृषी तज्ज्ञ सदैव उपलब्ध आहेत.'
                    : 'Tip: Dosage can vary slightly depending on your soil test report. Our agronomists are available for custom tailored schedules.'}
                </p>
              </div>
            </div>

            {/* Results Display */}
            <div className="calc-results-panel">
              <div className="results-header">
                <div>
                  <h3 className="calc-panel-title" style={{ marginBottom: '0.2rem' }}>
                    <Scale size={20} className="icon-emerald" />
                    <span>{lang === 'mr' ? '२. शिफारस केलेले खतांचे प्रमाण' : '2. Recommended Fertilizer Quantity'}</span>
                  </h3>
                  <p className="crop-summary-tag">
                    {lang === 'mr' ? currentCrop.nameMr : currentCrop.nameEn} • {area} {unit === 'acre' ? (lang === 'mr' ? 'एकर' : 'Acre') : (lang === 'mr' ? 'गुंठा' : 'Guntha')}
                  </p>
                </div>
              </div>

              {/* Bags Count Cards */}
              <div className="bags-grid">
                {calculatedBags.map((item, idx) => (
                  <div key={idx} className="bag-result-card">
                    <div className="bag-qty-badge">
                      <span className="qty-number">{item.bags}</span>
                      <span className="qty-unit">{lang === 'mr' ? 'पोती' : 'Bags'}</span>
                    </div>
                    <div className="bag-details">
                      <h4 className="bag-name">{item.name}</h4>
                      <span className="bag-type">
                        {lang === 'mr' ? 'बेसल डोस ॲप्लिकेशन' : 'Basal Dose Application'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Top dressing & Drip Tips Accordion Box */}
              <div className="schedule-box">
                <div className="schedule-item">
                  <div className="schedule-header">
                    <Calendar size={18} className="icon-emerald" />
                    <strong>{lang === 'mr' ? 'पुढील खत मात्रा (Top Dressing Schedule):' : 'Top Dressing Schedule:'}</strong>
                  </div>
                  <p className="schedule-text">
                    {lang === 'mr' ? currentCrop.topDressingMr : currentCrop.topDressing}
                  </p>
                </div>

                <div className="schedule-item" style={{ marginTop: '0.85rem' }}>
                  <div className="schedule-header">
                    <Droplets size={18} className="icon-blue" />
                    <strong>{lang === 'mr' ? 'ठिबक सिंचन वेळापत्रक (Drip Fertigation Tips):' : 'Drip Fertigation Tips:'}</strong>
                  </div>
                  <p className="schedule-text">
                    {lang === 'mr' ? currentCrop.waterSolubleTipsMr : currentCrop.waterSolubleTips}
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Order CTA with this exact plan */}
              <div className="calc-cta-row">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg calc-wa-order-btn"
                >
                  <MessageCircle size={20} />
                  <span>
                    {lang === 'mr' 
                      ? 'हा खत प्लॅन व्हॉट्सॲपवर पाठवून दर विचारा' 
                      : 'Send This Plan to WhatsApp for Quotation'}
                  </span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
