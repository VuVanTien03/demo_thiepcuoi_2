import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function InvitationSection() {
  return (
    <section
      className="invitation-section"
      style={{
        position: 'relative',
        padding: '36px 16px 24px',
        textAlign: 'center'
      }}
    >
      {/* Heart Ribbon Ornament */}
      <div className="reveal-item" style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
        <img
          src="/assets/dec_heart_ornament.png"
          alt="Heart Ornament"
          style={{ width: '92px', height: 'auto' }}
        />
      </div>

      {/* Title */}
      <div className="reveal-item">
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '22px',
            color: 'var(--color-primary)',
            fontWeight: '600',
            letterSpacing: '0.3px',
            lineHeight: '1.4'
          }}
        >
          Gặp lại trong ngày hạnh phúc của chúng mình
        </h3>
        <img
          src="/assets/dec_date_bar.png"
          alt="Date Bar"
          style={{ width: '220px', height: 'auto', margin: '8px auto 20px', display: 'block' }}
        />
      </div>

      {/* Arched Photo Frame with Vintage Border */}
      <div className="reveal-item" style={{ position: 'relative', margin: '0 auto 24px', maxWidth: '340px' }}>
        <div
          style={{
            width: '100%',
            height: '420px',
            borderRadius: '170px 170px 12px 12px',
            overflow: 'hidden',
            border: '5px solid #ffffff',
            boxShadow: '0 12px 30px rgba(136, 5, 5, 0.12)',
            position: 'relative'
          }}
        >
          <img
            src="/assets/couple_arch.jpeg"
            alt="Đôi uyên ương Hải Đăng & Yến Nhi"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Floating "Tụi mình kết hôn rồi" badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '-18px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <img
            src="/assets/dec_we_get_married.png"
            alt="Tụi mình kết hôn rồi"
            style={{
              width: '190px',
              height: 'auto',
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))'
            }}
          />
        </div>
      </div>

      {/* Event Details Card */}
      <div
        className="reveal-item"
        style={{
          marginTop: '34px',
          padding: '24px 20px',
          background: 'rgba(255, 255, 255, 0.92)',
          borderRadius: '20px',
          border: '1px solid rgba(136, 5, 5, 0.1)',
          boxShadow: '0 8px 24px rgba(136, 5, 5, 0.05)',
          textAlign: 'center'
        }}
      >
        <img
          src="/assets/dec_mini_flower.png"
          alt="Floral"
          style={{ width: '85px', height: 'auto', margin: '0 auto 12px', display: 'block' }}
        />

        <p
          style={{
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--color-gold)',
            fontWeight: '600',
            marginBottom: '6px'
          }}
        >
          Hôn Lễ Được Tổ Chức Tại
        </p>

        <h4
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '22px',
            color: 'var(--color-primary)',
            fontWeight: '700',
            marginBottom: '4px'
          }}
        >
          {weddingData.event.venueName}
        </h4>

        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
          {weddingData.event.venueDetail}
        </p>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(136, 5, 5, 0.2), transparent)',
            margin: '14px 0'
          }}
        />

        {/* Time and Date */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)' }}>
            <Clock size={16} />
            <span style={{ fontWeight: '600', fontSize: '16px' }}>{weddingData.event.time}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2b2b2b' }}>
            <Calendar size={16} color="var(--color-gold)" />
            <span style={{ fontWeight: '600', fontSize: '16px', fontFamily: 'var(--font-serif)' }}>
              {weddingData.event.dayOfWeek}, {weddingData.event.solarDate}
            </span>
          </div>

          <p style={{ fontSize: '13px', color: '#888', fontStyle: 'italic' }}>
            ({weddingData.event.lunarDate})
          </p>
        </div>
      </div>
    </section>
  );
}
