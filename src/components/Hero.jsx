import React from 'react';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  GraduationCap, 
  BadgePercent, 
  PhoneCall, 
  MessageCircle, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO, HIGHLIGHTS } from '../data/businessData';

export default function Hero({ lang, onOpenInquiry }) {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="highlight-icon" size={24} />,
    Truck: <Truck className="highlight-icon" size={24} />,
    GraduationCap: <GraduationCap className="highlight-icon" size={24} />,
    BadgePercent: <BadgePercent className="highlight-icon" size={24} />
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">
          
          {/* Left Column: Text & CTAs */}
          <div className="hero-text-content">
            {/* Trust Chip */}
            <div className="hero-chip">
              <span className="chip-stars">
                <Star size={16} className="star-filled" fill="#f59e0b" />
                <Star size={16} className="star-filled" fill="#f59e0b" />
                <Star size={16} className="star-filled" fill="#f59e0b" />
                <Star size={16} className="star-filled" fill="#f59e0b" />
                <Star size={16} className="star-filled" fill="#f59e0b" />
              </span>
              <span className="chip-text">
                <strong>4.2 / 5.0</strong> ({BUSINESS_INFO.reviewsCount}+ {lang === 'mr' ? 'शेतकरी मते' : 'Google Reviews'})
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              {lang === 'mr' ? (
                <>
                  दर्जेदार खते, प्रमाणित बियाणे आणि <span className="highlight-gradient">तज्ज्ञ पीक सल्ला</span>
                </>
              ) : (
                <>
                  High-Yield Fertilizers, Certified Seeds & <span className="highlight-gradient">Expert Crop Advisory</span>
                </>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="hero-subheading">
              {lang === 'mr' 
                ? 'इंदापूर, संसार आणि कुरावली परिसरातील शेतकऱ्यांसाठी १००% अस्सल इफको, जीएसएफसी, महाधन खते आणि थेट बांधावर घरपोच डिलिव्हरी.' 
                : 'Serving farmers in Sansar, Kurawali, Indapur & Baramati with authentic IFFCO, GSFC, Mahadhan fertilizers, certified hybrid seeds, and doorstep farm delivery.'}
            </p>

            {/* Key benefits list */}
            <ul className="hero-bullets">
              <li>
                <CheckCircle2 size={18} className="bullet-check" />
                <span>{lang === 'mr' ? 'इफको व नामांकित कंपन्यांचे अधिकृत विक्रेते' : 'Authorized IFFCO, GSFC & RCF Stockist'}</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="bullet-check" />
                <span>{lang === 'mr' ? 'ऊस, कांदा, द्राक्षे पिकांसाठी विशेष खत वेळापत्रक' : 'Customized Dosage Plans for Sugarcane, Onion & Grapes'}</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="bullet-check" />
                <span>{lang === 'mr' ? 'थेट शेतात ट्रॅक्टर/टेम्पो द्वारे खते पोहोच' : 'Doorstep Bulk Farm Delivery Available'}</span>
              </li>
            </ul>

            {/* Primary Action Buttons */}
            <div className="hero-cta-group">
              <a href="#calculator" className="btn btn-gold btn-lg hero-calc-btn">
                <Sparkles size={20} />
                <span>{lang === 'mr' ? 'खत मात्रा गणक (कॅल्क्युलेटर)' : 'Fertilizer Calculator'}</span>
              </a>

              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Sonali%20Fertilizers,%20I%20need%20details%20about%20fertilizer%20rates`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} />
                <span>{lang === 'mr' ? 'व्हॉट्सॲपवर दर विचारा' : 'Order on WhatsApp'}</span>
              </a>

              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-outline btn-lg">
                <PhoneCall size={20} />
                <span>{lang === 'mr' ? 'कॉल करा' : 'Call: 94230 34155'}</span>
              </a>
            </div>

            {/* Operating info row */}
            <div className="hero-quick-meta">
              <div className="meta-item">
                <span className="meta-label">{lang === 'mr' ? 'कामाचे दिवस:' : 'Working Days:'}</span>
                <span className="meta-val">{lang === 'mr' ? 'सोम - रवी (८:०० AM ते ७:०० PM)' : 'Mon – Sun (8:00 AM – 7:00 PM)'}</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span className="meta-label">{lang === 'mr' ? 'स्थान:' : 'Location:'}</span>
                <span className="meta-val">{lang === 'mr' ? 'संसार-कुरावली रोड, इंदापूर' : 'Sansar, Indapur, Pune'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Media Showcase */}
          <div className="hero-media-wrapper">
            <div className="hero-image-card">
              <img 
                src="/assets/hero_storefront.jpg" 
                alt="Sonali Fertilizers Storefront Sansar Indapur" 
                className="hero-main-img" 
                loading="eager"
              />
              <div className="hero-img-overlay-badge">
                <div className="overlay-badge-content">
                  <span className="overlay-store-name">
                    {lang === 'mr' ? 'सोनाली फर्टिलायझर्स' : 'Sonali Fertilizers'}
                  </span>
                  <span className="overlay-sub-text">
                    {lang === 'mr' ? '★ ४.२ रेटिंग • प्रमाणित कृषी केंद्र' : '★ 4.2 Rating • Certified Agro Center'}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating floating card */}
            <div className="hero-float-card">
              <div className="float-card-icon">
                <Truck size={22} />
              </div>
              <div className="float-card-text">
                <span className="float-card-title">
                  {lang === 'mr' ? 'बांधावर थेट पोहोच' : 'Farm Doorstep Delivery'}
                </span>
                <span className="float-card-desc">
                  {lang === 'mr' ? 'संसार, कुरावली, इंदापूर परिसर' : 'Sansar & Indapur Region'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Highlights Grid */}
        <div className="hero-highlights-strip">
          {HIGHLIGHTS.map((item) => (
            <div key={item.id} className="highlight-box">
              <div className="highlight-icon-wrap">
                {iconMap[item.icon]}
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">
                  {lang === 'mr' ? item.titleMr : item.titleEn}
                </h3>
                <p className="highlight-desc">
                  {lang === 'mr' ? item.descMr : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
