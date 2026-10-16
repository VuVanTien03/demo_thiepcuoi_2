import React from 'react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function CoupleSection() {
  return (
    <section
      className="couple-section"
      style={{
        padding: '24px 16px 36px',
        position: 'relative'
      }}
    >
      <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '28px' }}>
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
          Cô Dâu & Chú Rể
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '26px',
            color: 'var(--color-primary)',
            fontWeight: '600'
          }}
        >
          Đôi Uyên Ương
        </h3>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          maxWidth: '440px',
          margin: '0 auto'
        }}
      >
        {/* Groom Card */}
        <div
          className="reveal-item"
          style={{
            background: 'rgba(255, 255, 255, 0.92)',
            borderRadius: '20px',
            padding: '20px 12px',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(136, 5, 5, 0.05)',
            border: '1px solid rgba(136, 5, 5, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--color-gold)',
              padding: '3px',
              background: '#fff',
              boxShadow: '0 6px 16px rgba(136, 5, 5, 0.12)',
              marginBottom: '12px'
            }}
          >
            <img
              src={weddingData.groom.avatar}
              alt={weddingData.groom.fullName}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>

          <span
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'var(--color-primary)',
              fontWeight: '700',
              background: 'var(--color-primary-light)',
              padding: '3px 10px',
              borderRadius: '12px',
              marginBottom: '8px'
            }}
          >
            {weddingData.groom.role}
          </span>

          <h4
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '19px',
              color: 'var(--color-primary)',
              fontWeight: '700',
              marginBottom: '4px'
            }}
          >
            {weddingData.groom.name}
          </h4>

          <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>
            {weddingData.groom.father}<br />
            {weddingData.groom.mother}
          </p>
        </div>

        {/* Bride Card */}
        <div
          className="reveal-item"
          style={{
            background: 'rgba(255, 255, 255, 0.92)',
            borderRadius: '20px',
            padding: '20px 12px',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(136, 5, 5, 0.05)',
            border: '1px solid rgba(136, 5, 5, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--color-gold)',
              padding: '3px',
              background: '#fff',
              boxShadow: '0 6px 16px rgba(136, 5, 5, 0.12)',
              marginBottom: '12px'
            }}
          >
            <img
              src={weddingData.bride.avatar}
              alt={weddingData.bride.fullName}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>

          <span
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'var(--color-primary)',
              fontWeight: '700',
              background: 'var(--color-primary-light)',
              padding: '3px 10px',
              borderRadius: '12px',
              marginBottom: '8px'
            }}
          >
            {weddingData.bride.role}
          </span>

          <h4
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '19px',
              color: 'var(--color-primary)',
              fontWeight: '700',
              marginBottom: '4px'
            }}
          >
            {weddingData.bride.name}
          </h4>

          <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>
            {weddingData.bride.father}<br />
            {weddingData.bride.mother}
          </p>
        </div>
      </div>
    </section>
  );
}
