import React, { useState } from 'react';
import { Image, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/businessData';

export default function GallerySection({ lang }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            <Image size={16} />
            <span>{lang === 'mr' ? 'दुकान व साठा छायाचित्रे' : 'Store & Inventory Gallery'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'mr' 
              ? 'सोनाली फर्टिलायझर्सचे भव्य दालन व प्रत्यक्ष साठा' 
              : 'Explore Our Agro Store & Fresh Farm Inventory'}
          </h2>
          <p className="section-subtitle">
            {lang === 'mr'
              ? 'संसार (इंदापूर) येथील आधुनिक कृषी दालन, मूळ खतांचा साठा, बियाणे आणि शेतातील मार्गदर्शनाची क्षणचित्रे.'
              : 'Real photographs of our retail showroom, certified fertilizer stacks, hybrid seeds, and farmer interactions.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((imgItem, idx) => {
            const title = lang === 'mr' ? imgItem.titleMr : imgItem.titleEn;
            return (
              <div 
                key={idx} 
                className={`gallery-item item-${idx}`}
                onClick={() => openLightbox(idx)}
              >
                <img 
                  src={imgItem.url} 
                  alt={title} 
                  className="gallery-img" 
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-caption">
                    <span className="gallery-category">{imgItem.category}</span>
                    <h4 className="gallery-title">{title}</h4>
                  </div>
                  <div className="gallery-zoom-icon">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close image">
              <X size={26} />
            </button>

            <button className="lightbox-nav-btn prev" onClick={prevImage} aria-label="Previous image">
              <ChevronLeft size={30} />
            </button>

            <div className="lightbox-content">
              <img 
                src={GALLERY_IMAGES[selectedImageIndex].url} 
                alt={lang === 'mr' ? GALLERY_IMAGES[selectedImageIndex].titleMr : GALLERY_IMAGES[selectedImageIndex].titleEn}
                className="lightbox-img" 
              />
              <div className="lightbox-info">
                <span className="lightbox-caption">
                  {lang === 'mr' ? GALLERY_IMAGES[selectedImageIndex].titleMr : GALLERY_IMAGES[selectedImageIndex].titleEn}
                </span>
                <span className="lightbox-counter">
                  {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
                </span>
              </div>
            </div>

            <button className="lightbox-nav-btn next" onClick={nextImage} aria-label="Next image">
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
