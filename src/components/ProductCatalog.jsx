import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MessageCircle, 
  Phone, 
  Package, 
  Check, 
  Sparkles, 
  Tag, 
  Info,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, BUSINESS_INFO } from '../data/businessData';

export default function ProductCatalog({ lang, onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products by category and search term
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();

    if (!query) return matchesCategory;

    const matchesNameEn = product.nameEn.toLowerCase().includes(query);
    const matchesNameMr = product.nameMr.toLowerCase().includes(query);
    const matchesBrand = product.brand.toLowerCase().includes(query);
    const matchesDesc = product.descriptionEn.toLowerCase().includes(query) || product.descriptionMr.toLowerCase().includes(query);
    const matchesBenefits = product.keyBenefits.some(b => b.toLowerCase().includes(query));

    return matchesCategory && (matchesNameEn || matchesNameMr || matchesBrand || matchesDesc || matchesBenefits);
  });

  return (
    <section id="products" className="products-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            <Package size={16} />
            <span>{lang === 'mr' ? 'अस्सल शेती उत्पादने' : 'Genuine Agricultural Products'}</span>
          </div>
          <h2 className="section-title">
            {lang === 'mr' 
              ? 'प्रमाणित खते, औषधे आणि संकरित बियाणे' 
              : 'Certified Fertilizers, Crop Care & Hybrid Seeds'}
          </h2>
          <p className="section-subtitle">
            {lang === 'mr'
              ? 'इफको, जीएसएफसी, महाधन, आरसीएफ व नामांकित कंपन्यांची १००% मूळ उत्पादने योग्य दरात उपलब्ध.'
              : '100% genuine products directly sourced from licensed manufacturers with valid lot testing.'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="catalog-toolbar">
          {/* Category Tabs */}
          <div className="category-scroll-container">
            <div className="category-pills">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {lang === 'mr' ? cat.nameMr : cat.nameEn}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="catalog-search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'mr' ? 'खत, बियाणे किंवा औषध शोधा...' : 'Search fertilizer, seed or spray...'}
              className="catalog-search-input"
            />
            {searchQuery && (
              <button 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="catalog-status-bar">
          <span className="results-count">
            {lang === 'mr' 
              ? `उपलब्ध उत्पादने: ${filteredProducts.length}` 
              : `Showing ${filteredProducts.length} Products`}
          </span>
          <span className="stock-notice">
            <span className="live-dot"></span>
            {lang === 'mr' ? 'सर्व उत्पादनांचा ताजा साठा उपलब्ध' : 'Fresh stock ready in store'}
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => {
              const productName = lang === 'mr' ? product.nameMr : product.nameEn;
              const productDesc = lang === 'mr' ? product.descriptionMr : product.descriptionEn;
              const waText = encodeURIComponent(
                `नमस्कार सोनाली फर्टिलायझर्स, मला "${productName}" (Packing: ${product.packaging}) बद्दल दर व उपलब्धतेची माहिती हवी आहे.`
              );

              return (
                <div key={product.id} className="card product-card">
                  
                  {/* Product Image & Badges */}
                  <div className="product-image-container">
                    <img 
                      src={product.image} 
                      alt={productName} 
                      className="product-card-img" 
                      loading="lazy"
                    />
                    <div className="product-brand-tag">
                      {product.brand}
                    </div>
                    <div className="product-packaging-tag">
                      <Tag size={12} />
                      <span>{product.packaging}</span>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="product-card-body">
                    <h3 className="product-title" title={productName}>
                      {productName}
                    </h3>

                    <p className="product-description">
                      {productDesc}
                    </p>

                    {/* Key Benefits List */}
                    <div className="product-benefits">
                      {product.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                        <div key={bIdx} className="benefit-item">
                          <Check size={14} className="icon-emerald" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div className="product-card-actions">
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${waText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-sm product-wa-btn"
                        title="Book / Inquire on WhatsApp"
                      >
                        <MessageCircle size={16} />
                        <span>{lang === 'mr' ? 'ऑर्डर करा' : 'Inquire'}</span>
                      </a>

                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="btn btn-outline btn-sm product-call-btn"
                        title="Call Store"
                      >
                        <Phone size={15} />
                        <span>{lang === 'mr' ? 'दर विचारा' : 'Call'}</span>
                      </a>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-products-found">
            <Package size={48} className="no-products-icon" />
            <h3>{lang === 'mr' ? 'कोणतेही उत्पादन सापडले नाही' : 'No Products Found'}</h3>
            <p>
              {lang === 'mr' 
                ? 'कृपया दुसरा शब्द शोधा किंवा सर्व उत्पादनांची वर्गवारी तपासा.' 
                : 'Try adjusting your search terms or select another category.'}
            </p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="btn btn-primary btn-sm"
              style={{ marginTop: '1rem' }}
            >
              {lang === 'mr' ? 'सर्व उत्पादने पहा' : 'View All Products'}
            </button>
          </div>
        )}

        {/* Bulk Order Farm Delivery Banner */}
        <div className="farm-delivery-banner">
          <div className="delivery-banner-content">
            <div className="delivery-banner-icon">
              <Sparkles size={32} />
            </div>
            <div className="delivery-banner-text">
              <h3>
                {lang === 'mr' 
                  ? 'मोठ्या प्रमाणावर खतांची आवश्यकता आहे का?' 
                  : 'Need Bulk Fertilizer Bags Directly at Your Farm?'}
              </h3>
              <p>
                {lang === 'mr'
                  ? 'ऊस लागवड, कांदा किंवा द्राक्ष बागेसाठी थेट बांधावर ट्रॅक्टर/टेम्पो द्वारे खते पोहोच उपलब्ध. विशेष सवलतीसाठी आजच संपर्क साधा.'
                  : 'We supply bulk shipments directly to fields across Sansar, Kurawali, Indapur and Baramati. Contact our dispatch team now.'}
              </p>
            </div>
          </div>
          <div className="delivery-banner-action">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="btn btn-white btn-lg"
            >
              <Phone size={18} />
              <span>{lang === 'mr' ? 'थेट फोन करा: ९४२३० ३४१५५' : 'Call: +91 94230 34155'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
