import React from 'react';
import { 
  Star, 
  CheckCircle2, 
  MapPin, 
  Quote, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/businessData';

export default function ReviewsSection({ lang }) {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Star size={16} fill="#f59e0b" />
            <span>{lang === 'mr' ? 'गुगल बिझनेस प्रोफाइल रेटिंग' : 'Google Business Profile'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'mr' 
              ? 'परिसरातील प्रगतशील शेतकऱ्यांचे प्रत्यक्ष अनुभव' 
              : 'Trusted by Hardworking Farmers Across Indapur'}
          </h2>
          <p className="section-subtitle">
            {lang === 'mr'
              ? 'संसार, कुरावली, मानकरवाडी व इंदापूर तालुक्यातील ६० हून अधिक शेतकऱ्यांनी गुगलवर व्यक्त केलेले प्रामाणिक मत.'
              : 'Authentic 4.2★ customer satisfaction rating reflecting genuine products, timely delivery, and caring agronomy support.'}
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="rating-overview-card">
          <div className="overview-left">
            <div className="big-rating-number">{BUSINESS_INFO.rating}</div>
            <div className="big-stars-row">
              <Star size={22} fill="#f59e0b" color="#f59e0b" />
              <Star size={22} fill="#f59e0b" color="#f59e0b" />
              <Star size={22} fill="#f59e0b" color="#f59e0b" />
              <Star size={22} fill="#f59e0b" color="#f59e0b" />
              <Star size={22} fill="transparent" color="#f59e0b" strokeWidth={2} />
            </div>
            <span className="overview-total-reviews">
              {BUSINESS_INFO.reviewsCount}+ {lang === 'mr' ? 'तपासलेली मते (Google Reviews)' : 'Verified Google Reviews'}
            </span>
            <div className="google-badge-pill">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span>{lang === 'mr' ? 'गुगल प्रमाणित व्यवसाय' : 'Google Verified Business'}</span>
            </div>
          </div>

          <div className="overview-center">
            {/* Rating distribution progress bars */}
            <div className="bar-row">
              <span className="bar-label">5 {lang === 'mr' ? 'स्टार' : 'Star'}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '80%' }}></div>
              </div>
              <span className="bar-pct">80%</span>
            </div>
            <div className="bar-row">
              <span className="bar-label">4 {lang === 'mr' ? 'स्टार' : 'Star'}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '15%' }}></div>
              </div>
              <span className="bar-pct">15%</span>
            </div>
            <div className="bar-row">
              <span className="bar-label">3 {lang === 'mr' ? 'स्टार' : 'Star'}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '5%' }}></div>
              </div>
              <span className="bar-pct">5%</span>
            </div>
          </div>

          <div className="overview-right">
            <h4 className="trust-pitch-title">
              {lang === 'mr' ? 'आमचे वचन' : 'Our Quality Guarantee'}
            </h4>
            <p className="trust-pitch-text">
              {lang === 'mr'
                ? 'प्रत्येक खत गोणीवर मूळ बारकोड, अचूक वजन आणि पक्के संगणकीय बिल. शेतकऱ्यांची फसवणूक नाही हीच आमची खरी ओळख!'
                : 'Original batch codes, certified net weight, and authorized billing on every single purchase. No compromise on farmer prosperity.'}
            </p>
            <a 
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm write-review-btn"
            >
              <ExternalLink size={15} />
              <span>{lang === 'mr' ? 'गुगलवर मत नोंदवा' : 'Write a Review on Google'}</span>
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="reviews-grid">
          {REVIEWS.map((review) => {
            const reviewerName = lang === 'mr' ? review.nameMr : review.name;
            const reviewerVillage = lang === 'mr' ? review.villageMr : review.village;
            const reviewComment = lang === 'mr' ? review.commentMr : review.commentEn;

            return (
              <div key={review.id} className="card review-card">
                
                {/* Header with Quote & Stars */}
                <div className="review-card-header">
                  <div className="review-stars-row">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <Quote size={24} className="review-quote-icon" />
                </div>

                {/* Review Text */}
                <p className="review-comment-text">
                  "{reviewComment}"
                </p>

                {/* Crop tag */}
                <div className="review-crop-badge">
                  <span>🌱 {review.crop}</span>
                </div>

                {/* Reviewer Details */}
                <div className="reviewer-info-row">
                  <div className="reviewer-avatar">
                    {reviewerName.charAt(0)}
                  </div>
                  <div className="reviewer-meta">
                    <h4 className="reviewer-name">
                      {reviewerName}
                      <CheckCircle2 size={15} className="verified-icon" title="Verified Customer" />
                    </h4>
                    <span className="reviewer-location">
                      <MapPin size={12} />
                      {reviewerVillage} • {review.date}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
