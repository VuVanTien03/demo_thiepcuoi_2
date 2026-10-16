import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function GallerySection() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const images = weddingData.gallery;

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  return (
    <section
      className="gallery-section"
      style={{
        padding: '24px 16px 36px',
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <div className="reveal-item" style={{ marginBottom: '20px' }}>
        <p
          style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: 'var(--color-gold)',
            fontWeight: '600',
            marginBottom: '4px'
          }}
        >
          Kỷ Niệm Tình Yêu
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '26px',
            color: 'var(--color-primary)',
            fontWeight: '600'
          }}
        >
          Album Ảnh Cưới
        </h3>
        <p style={{ fontSize: '13px', color: '#777', fontStyle: 'italic', marginTop: '2px' }}>
          (Chạm vào ảnh để phóng to)
        </p>
      </div>

      {/* 2-Column Photo Grid */}
      <div
        className="reveal-item"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          maxWidth: '440px',
          margin: '0 auto 24px'
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            style={{
              height: idx % 3 === 0 ? '240px' : '190px',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
              border: '3px solid #ffffff'
            }}
          >
            <img
              src={img.src}
              alt={img.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
            />

            {/* Hover zoom overlay badge */}
            <div
              style={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
                borderRadius: '50%',
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}
            >
              <ZoomIn size={14} />
            </div>
          </div>
        ))}
      </div>

      {/* Decorative leaf */}
      <div className="reveal-item" style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src="/assets/dec_bottom_leaf.png"
          alt="Leaf"
          style={{ width: '210px', height: 'auto', opacity: 0.8 }}
        />
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          onClick={() => setSelectedIdx(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIdx(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <X size={22} />
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Active Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src={images[selectedIdx].src}
              alt={images[selectedIdx].title}
              style={{
                maxWidth: '100%',
                maxHeight: '78vh',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
              }}
            />
            <div style={{ color: '#fff', marginTop: '14px', fontSize: '14px', fontFamily: 'var(--font-serif)' }}>
              {images[selectedIdx].title} — ({selectedIdx + 1} / {images.length})
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
