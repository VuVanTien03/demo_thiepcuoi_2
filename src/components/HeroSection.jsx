import React from 'react';
import { ChevronDown, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function HeroSection() {
  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '32px' }}>
      {/* Top Left Decorative Vine */}
      <img
        src="/assets/dec_top_left.png"
        alt="Ornament"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '180px',
          opacity: 0.85,
          pointerEvents: 'none',
          zIndex: 10
        }}
      />

      {/* Top Center Delicate Floral Header */}
      <div style={{ textAlign: 'center', paddingTop: '45px', paddingBottom: '12px', position: 'relative', zIndex: 10 }}>
        <img
          src="/assets/dec_header_ornament.png"
          alt="Vintage Floral Header"
          style={{ width: '82%', maxWidth: '380px', height: 'auto', display: 'inline-block' }}
        />
      </div>

      {/* Vertical Styled Date Stamp */}
      <div
        style={{
          position: 'absolute',
          top: '190px',
          right: '18px',
          zIndex: 25,
          textAlign: 'center',
          fontFamily: 'var(--font-serif)',
          color: 'var(--color-primary)',
          lineHeight: 1,
          background: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(4px)',
          padding: '8px 6px',
          borderRadius: '16px',
          boxShadow: '0 4px 14px rgba(136, 5, 5, 0.1)',
          border: '1px solid rgba(136, 5, 5, 0.12)'
        }}
      >
        <span style={{ display: 'block', fontSize: '26px', fontWeight: '700', letterSpacing: '-0.5px' }}>20</span>
        <span style={{ display: 'block', fontSize: '18px', margin: '2px 0', opacity: 0.6 }}>/</span>
        <span style={{ display: 'block', fontSize: '24px', fontWeight: '700', letterSpacing: '-0.5px' }}>09</span>
      </div>

      {/* Main Arch Hero Photo Frame */}
      <div className="reveal-item" style={{ padding: '0 16px', position: 'relative', zIndex: 15 }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '460px',
            borderRadius: '240px 240px 18px 18px',
            overflow: 'hidden',
            boxShadow: '0 16px 36px rgba(136, 5, 5, 0.16)',
            border: '4px solid #ffffff'
          }}
        >
          <img
            src="/assets/hero_cover.jpeg"
            alt="Hải Đăng & Yến Nhi Wedding"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              transition: 'transform 8s ease'
            }}
          />
          {/* Subtle gradient vignette at bottom */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 65%, rgba(136, 5, 5, 0.35) 100%)'
            }}
          />
        </div>
      </div>

      {/* Couple Name Banners */}
      <div
        className="reveal-item"
        style={{
          marginTop: '28px',
          padding: '0 20px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 20
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/assets/dec_yen_nhi.png"
              alt="Yến Nhi"
              style={{ width: '130px', height: 'auto', display: 'block', margin: '0 auto' }}
            />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '26px',
                color: 'var(--color-primary)',
                fontWeight: '600',
                marginTop: '4px'
              }}
            >
              {weddingData.bride.name}
            </h2>
          </div>

          <div
            style={{
              padding: '6px',
              color: 'var(--color-primary)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Heart size={20} className="heart-beat" fill="var(--color-primary)" />
            <span style={{ fontSize: '13px', fontStyle: 'italic', fontFamily: 'var(--font-script)', marginTop: '2px' }}>
              &
            </span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src="/assets/dec_hai_dang.png"
              alt="Hải Đăng"
              style={{ width: '130px', height: 'auto', display: 'block', margin: '0 auto' }}
            />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '26px',
                color: 'var(--color-primary)',
                fontWeight: '600',
                marginTop: '4px'
              }}
            >
              {weddingData.groom.name}
            </h2>
          </div>
        </div>

        {/* Elegant Invitation Verse */}
        <div
          style={{
            marginTop: '22px',
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(6px)',
            borderRadius: '16px',
            border: '1px solid rgba(136, 5, 5, 0.08)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '15px',
              lineHeight: '1.75',
              color: '#3d3032',
              fontStyle: 'italic'
            }}
          >
            "Thời gian trôi, tình yêu đong đầy.<br />
            Chúng mình trân trọng kính mời bạn đến dự lễ cưới,<br />
            Cùng chúng mình sẻ chia ngày vui trọn vẹn này!"
          </p>
        </div>

        {/* Scroll Indicator */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              color: 'var(--color-primary)',
              opacity: 0.7,
              cursor: 'pointer'
            }}
            onClick={() => {
              window.scrollBy({ top: 400, behavior: 'smooth' });
            }}
          >
            <span style={{ fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>Cuộn xem tiếp</span>
            <ChevronDown size={18} style={{ animation: 'bounceGift 2s ease infinite' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
