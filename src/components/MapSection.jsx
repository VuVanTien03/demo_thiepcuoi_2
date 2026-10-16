import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function MapSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(weddingData.event.address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      className="map-section"
      style={{
        padding: '24px 16px 36px',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div className="reveal-item" style={{ marginBottom: '16px' }}>
        <img
          src="/assets/dec_ribbon.png"
          alt="Ribbon"
          style={{ width: '160px', height: 'auto', display: 'block', margin: '0 auto 10px' }}
        />
        <p
          style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            color: 'var(--color-gold)',
            fontWeight: '600',
            marginBottom: '4px'
          }}
        >
          Địa Điểm Tổ Chức
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '24px',
            color: 'var(--color-primary)',
            fontWeight: '600'
          }}
        >
          Bản Đồ Chỉ Đường
        </h3>
        <p style={{ fontSize: '14px', color: '#555', marginTop: '4px' }}>
          {weddingData.event.address}
        </p>
      </div>

      {/* Map Iframe Container */}
      <div
        className="reveal-item"
        style={{
          width: '100%',
          maxWidth: '420px',
          height: '260px',
          margin: '0 auto 18px',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '4px solid #ffffff',
          boxShadow: '0 10px 28px rgba(0,0,0,0.08)',
          position: 'relative'
        }}
      >
        <iframe
          title="Bản đồ địa điểm cưới"
          src={weddingData.event.mapIframeUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Action Buttons */}
      <div
        className="reveal-item"
        style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '380px',
          margin: '0 auto'
        }}
      >
        <a
          href={weddingData.event.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--color-primary)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '24px',
            padding: '10px 20px',
            fontSize: '13px',
            fontWeight: '600',
            boxShadow: '0 4px 14px rgba(136, 5, 5, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          <Navigation size={15} />
          <span>Mở Chỉ Đường</span>
        </a>

        <button
          onClick={handleCopy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#ffffff',
            color: copied ? '#1e7e34' : 'var(--color-primary)',
            border: '1px solid rgba(136, 5, 5, 0.2)',
            borderRadius: '24px',
            padding: '10px 20px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
            transition: 'all 0.3s ease'
          }}
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          <span>{copied ? 'Đã Sao Chép!' : 'Chép Địa Chỉ'}</span>
        </button>
      </div>
    </section>
  );
}
