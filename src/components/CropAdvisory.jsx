import React, { useState } from 'react';
import { 
  GraduationCap, 
  HelpCircle, 
  Camera, 
  MessageCircle, 
  Phone, 
  Sprout, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function CropAdvisory({ lang }) {
  const [activeCropTab, setActiveCropTab] = useState('sugarcane');

  const cropGuides = {
    sugarcane: {
      nameEn: 'Sugarcane (ऊस)',
      nameMr: 'ऊस पीक पोषण व कीड व्यवस्थापन',
      stages: [
        {
          titleEn: 'Planting & Basal Stage (0-15 Days)',
          titleMr: 'लागवड व बेसल डोस (० ते १५ दिवस)',
          descEn: 'Apply IFFCO NPK 10:26:26 (3 bags/acre) + Urea (1 bag) + Neem Cake (2 bags). Dip sets in fungicide + insecticide solution to prevent smut and root rot.',
          descMr: 'इफको १०:२६:२६ (३ पोती) + युरिया (१ पोते) + निंबोळी पेंड (२ पोती). बेणेप्रक्रिया बुरशीनाशक व कीटकनाशकाने करूनच लागवड करावी.'
        },
        {
          titleEn: 'Tillering & Vegetative Phase (45-60 Days)',
          titleMr: 'फुटवे वाढ व कांडी फुटण्याची अवस्था (४५ ते ६० दिवस)',
          descEn: 'Foliar spray of 19:19:19 + Humic Acid + Chelated Micronutrients. Drench for early shoot borer (खोडकीड) prevention.',
          descMr: '१९:१९:१९ विद्राव्य खत + ह्युमिक ॲसिड + मायक्रोन्यूट्रियंट फवारणी. खोडकिडीचा प्रादुर्भाव रोखण्यासाठी प्रतिबंधक उपाय.'
        },
        {
          titleEn: 'Grand Growth & Big Earthing Up (110-135 Days)',
          titleMr: 'मोठी बांधणी व कांडी लांबी अवस्था (११० ते १३५ दिवस)',
          descEn: 'Apply 10:26:26 (3 bags) + Potash MOP (1 bag) + Urea (2 bags) + Magnesium Sulphate. Earthing up gives strong root grip and prevents cane lodging.',
          descMr: '१०:२६:२६ (३ पोती) + पोटॅश (१ पोते) + युरिया (२ पोती) + मॅग्नेशियम सल्फेट. मोठी बांधणी केल्याने उसाला मातीची मजबूत पकड मिळते.'
        },
        {
          titleEn: 'Maturity & Sugar Recovery (Post 250 Days)',
          titleMr: 'पक्वता व साखर उतारा वाढ (२५० दिवसांनंतर)',
          descEn: 'Apply 0:0:50 (Potassium Sulphate) through drip irrigation. Avoid excessive nitrogen to maximize sugar recovery at factory cutting.',
          descMr: 'ठिबक सिंचनातून ०:०:५० (एसओपी) चा वापर करावा. उसाचे वजन आणि कारखान्यातील साखर उतारा वाढवण्यासाठी नत्राचा वापर टाळावा.'
        }
      ]
    },
    onion: {
      nameEn: 'Onion (कांदा)',
      nameMr: 'कांदा पीक पोषण व करपा नियंत्रण',
      stages: [
        {
          titleEn: 'Transplanting & Basal Fertilizer (Day 0)',
          titleMr: 'पुनर्लागवड व बेसल डोस (दिवस ०)',
          descEn: 'Basal dose: NPK 10:26:26 (2 bags) + Single Super Phosphate (2 bags) + Sulphur 90% granules (10 kg). Root dip seedlings in Trichoderma.',
          descMr: '१०:२६:२६ (२ पोती) + एसएसपी (२ पोती) + सल्फर ९०% (१० किलो). पुनर्लागवडीपूर्वी रोपांची ट्रायकोडर्मामध्ये मुळे बुडवून प्रक्रिया करावी.'
        },
        {
          titleEn: 'Vegetative Growth & Leaf Care (25-35 Days)',
          titleMr: 'पातीची जोमदार वाढ व थ्रिप्स नियंत्रण (२५ ते ३५ दिवस)',
          descEn: 'Apply 19:19:19 + Bio-stimulant spray. Monitor for purple blotch (जांभळा करपा) and thrips (मावा/तुडतुडे). Spray systemic insecticide + contact fungicide.',
          descMr: '१९:१९:१९ + मायक्रोन्यूट्रियंट फवारणी. पानावरील जांभळा करपा व थ्रिप्स किडीसाठी शिफारस केलेले कीटकनाशक व स्टिकर वापरावे.'
        },
        {
          titleEn: 'Bulb Initiation & Sizing (50-75 Days)',
          titleMr: 'कांदा फुगवण व मान जाडी अवस्था (५० ते ७५ दिवस)',
          descEn: 'Drip fertigation with 0:52:34 (MKP) and foliar application of Micronutrient mix (Boron + Zinc). Avoid nitrogen to prevent thick necks (डोंगळे).',
          descMr: 'ठिबकद्वारे ०:५२:३४ चा डोस. बोरॉन व सूक्ष्म अन्नद्रव्यांची फवारणी केल्याने कांद्याची मान बारीक राहून कांदा चकाकदार व घट्ट बनतो.'
        },
        {
          titleEn: 'Maturity & Storage Hardening (85-105 Days)',
          titleMr: 'कांदा पक्वता व टिकवणक्षमता (८५ ते १०५ दिवस)',
          descEn: 'Apply 0:0:50. Stop irrigation 10-15 days before harvest to allow neck drying. Ensures 5-6 months rot-free storage.',
          descMr: '०:०:५० चा डोस दिल्याने कांद्याला आकर्षक लाल रंग येतो. काढणीपूर्वी १० दिवस पाणी बंद करावे जेणेकरून कांदा चाळीत सडत नाही.'
        }
      ]
    },
    grapes: {
      nameEn: 'Grapes & Vineyards (द्राक्षे)',
      nameMr: 'द्राक्ष बागायत रोग व खत व्यवस्थापन',
      stages: [
        {
          titleEn: 'Post-October Pruning to Sprouting',
          titleMr: 'ऑक्टोबर छाटणी ते फुटीची अवस्था',
          descEn: 'Paste canes with hydrogen cyanamide. Apply basal organic compost + DAP + Magnesium Sulphate to soil beds.',
          descMr: 'छाटणीनंतर पेस्टिंग, जमिनीतून शेणखत/सेंद्रिय खत व डीएपीचा डोस. एकसारखी व जोमदार फूट निघण्यासाठी योग्य ओलावा.'
        },
        {
          titleEn: 'Pre-bloom & Flowering Stage',
          titleMr: 'फुलोरा व घड जिरणे नियंत्रण',
          descEn: 'Foliar spray of 12:61:00 + Boron. Strict preventive sprays for Downy Mildew (केवडा) and Powdery Mildew (भुरी) based on humidity.',
          descMr: '१२:६१:०० + बोरॉन फवारणी. ढगाळ हवामानात भुरी व डाउनी रोगाचा प्रादुर्भाव रोखण्यासाठी आंतरप्रवाही बुरशीनाशक फवारणी.'
        },
        {
          titleEn: 'Berry Sizing & Elongation',
          titleMr: 'मनी वाढ, लांबी व विरळणी',
          descEn: 'Apply 0:52:34 + Calcium Nitrate through drip. Dip clusters in GA3 solution as per vineyard consultant recommendations.',
          descMr: 'ठिबकमधून ०:५२:३४ व कॅल्शियम नायट्रेट. मण्यांची लांबी व वजन वाढवण्यासाठी योग्य प्रमाणात जिब्रेलिक ॲसिडचा वापर.'
        },
        {
          titleEn: 'Veraison, Color & Sugar (Brix)',
          titleMr: 'साखर उतरणे व रंग विकास',
          descEn: 'Apply Potassium Sulphate 0:0:50. Enhances brix sweetness, uniform bunch ripening, and crisp texture for export/domestic market.',
          descMr: '०:०:५० विद्राव्य खताचा वापर. मण्यांना गोडी, चमक आणि निर्यातक्षम दर्जा मिळवून देतो.'
        }
      ]
    }
  };

  const currentGuide = cropGuides[activeCropTab] || cropGuides.sugarcane;

  return (
    <section id="advisory" className="advisory-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <GraduationCap size={16} />
            <span>{lang === 'mr' ? 'तज्ज्ञ पीक मार्गदर्शन' : 'Expert Agronomy Advice'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'mr' 
              ? 'स्थानिक हवामान व जमिनीनुसार अचूक पीक सल्ला' 
              : 'Crop Advisory Tailored for Western Maharashtra Soils'}
          </h2>
          <p className="section-subtitle">
            {lang === 'mr'
              ? 'संसार, इंदापूर आणि बारामती भागातील हवामान व जमिनीच्या गुणधर्मांनुसार प्रत्येक वाढीच्या टप्प्यातील अचूक मार्गदर्शन.'
              : 'Stage-by-stage agronomic roadmaps to maximize yield, cut unnecessary spray costs, and prevent crop diseases.'}
          </p>
        </div>

        {/* Feature Split Banner: Photo + WhatsApp Instant Diagnosis */}
        <div className="advisory-diagnosis-card">
          <div className="diagnosis-grid">
            
            {/* Visual Photo */}
            <div className="diagnosis-photo-wrapper">
              <img 
                src="/assets/farm_consultation.jpg" 
                alt="Sonali Fertilizers Field Advisory Service" 
                className="diagnosis-img"
              />
              <div className="diagnosis-photo-badge">
                <CheckCircle size={16} />
                <span>{lang === 'mr' ? 'थेट शेतात जाऊन मार्गदर्शन' : 'Field Advisory Service'}</span>
              </div>
            </div>

            {/* Content & Action */}
            <div className="diagnosis-content">
              <div className="badge badge-live" style={{ marginBottom: '0.5rem' }}>
                <Camera size={14} />
                <span>{lang === 'mr' ? 'व्हॉट्सॲप मोफत पीक तपासणी' : 'Free WhatsApp Crop Diagnosis'}</span>
              </div>
              
              <h3 className="diagnosis-title">
                {lang === 'mr' 
                  ? 'पिकावर रोग आलाय किंवा पाने पिवळी पडली आहेत?' 
                  : 'Notice Pest Attack or Crop Yellowing?'}
              </h3>

              <p className="diagnosis-desc">
                {lang === 'mr'
                  ? 'घाबरू नका! तुमच्या शेतातील बाधित पानाचा किंवा किडीचा स्पष्ट फोटो काढून आमच्या व्हॉट्सॲप नंबरवर पाठवा. आमचे तज्ज्ञ कृषी सल्लागार त्वरित अचूक औषध व डोस सांगतील.'
                  : 'Simply click a photo of the affected plant or pest and send it to our WhatsApp helpline (+91 94230 34155). Our experts will prescribe the exact corrective spray instantly.'}
              </p>

              <div className="diagnosis-steps">
                <div className="step-pill">
                  <span className="step-num">१</span>
                  <span>{lang === 'mr' ? 'पानाचा फोटो काढा' : 'Snap photo'}</span>
                </div>
                <div className="step-pill">
                  <span className="step-num">२</span>
                  <span>{lang === 'mr' ? 'व्हॉट्सॲपवर पाठवा' : 'Send on WhatsApp'}</span>
                </div>
                <div className="step-pill">
                  <span className="step-num">३</span>
                  <span>{lang === 'mr' ? '१० मिनिटांत सल्ला मिळवा' : 'Get instant remedy'}</span>
                </div>
              </div>

              <div className="diagnosis-actions">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Sonali%20Fertilizers,%20I%20am%20sending%20a%20photo%20of%20my%20crop%20for%20disease%20consultation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={20} />
                  <span>{lang === 'mr' ? 'व्हॉट्सॲपवर फोटो पाठवा' : 'Send Photo on WhatsApp'}</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="btn btn-outline btn-lg"
                >
                  <Phone size={18} />
                  <span>{lang === 'mr' ? 'सल्लागाराशी बोला' : 'Call Agronomist'}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Crop Stage-by-Stage Schedules Tabs */}
        <div className="crop-guides-wrapper">
          <div className="crop-tabs-header">
            {Object.keys(cropGuides).map((cropKey) => {
              const crop = cropGuides[cropKey];
              return (
                <button
                  key={cropKey}
                  type="button"
                  className={`crop-tab-btn ${activeCropTab === cropKey ? 'active' : ''}`}
                  onClick={() => setActiveCropTab(cropKey)}
                >
                  <Sprout size={18} />
                  <span>{lang === 'mr' ? crop.nameMr.split(' ')[0] : crop.nameEn.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          <div className="stages-timeline">
            {currentGuide.stages.map((stage, idx) => (
              <div key={idx} className="timeline-stage-card">
                <div className="stage-marker">
                  <span className="marker-number">{idx + 1}</span>
                  <div className="marker-line"></div>
                </div>
                <div className="stage-content">
                  <h4 className="stage-title">
                    {lang === 'mr' ? stage.titleMr : stage.titleEn}
                  </h4>
                  <p className="stage-text">
                    {lang === 'mr' ? stage.descMr : stage.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
