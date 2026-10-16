import React from 'react';
import { Calendar as CalendarIcon, Heart, PlusCircle } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function CalendarSection() {
  // Calendar matrix for September 2025
  // Sep 1, 2025 was a Monday.
  const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleAddToGoogleCalendar = () => {
    const title = encodeURIComponent(`Lễ Cưới: ${weddingData.groom.name} & ${weddingData.bride.name}`);
    const details = encodeURIComponent(`Trân trọng kính mời bạn đến tham dự lễ cưới của Hải Đăng & Yến Nhi tại ${weddingData.event.venueName}`);
    const location = encodeURIComponent(`${weddingData.event.venueName}, ${weddingData.event.address}`);
    // 2025-09-20 from 12:00 to 15:00 UTC+7 (05:00 to 08:00 UTC)
    const dates = '20250920T050000Z/20250920T080000Z';
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    window.open(url, '_blank');
  };

  return (
    <section
      className="calendar-section"
      style={{
        padding: '30px 16px',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      {/* Heart Ornament */}
      <div className="reveal-item" style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
        <img
          src="/assets/dec_heart_ornament.png"
          alt="Heart Ornament"
          style={{ width: '84px', height: 'auto' }}
        />
      </div>

      <div className="reveal-item" style={{ marginBottom: '22px' }}>
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
          Save The Date
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '24px',
            color: 'var(--color-primary)',
            fontWeight: '600'
          }}
        >
          Ngày vui đã chọn, trân trọng mời bạn
        </h3>
      </div>

      {/* Calendar Card */}
      <div
        className="reveal-item"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '24px',
          padding: '24px 18px',
          boxShadow: '0 10px 30px rgba(136, 5, 5, 0.08)',
          border: '1px solid rgba(136, 5, 5, 0.1)',
          maxWidth: '380px',
          margin: '0 auto 20px'
        }}
      >
        <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <CalendarIcon size={18} color="var(--color-primary)" />
          <h4
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '20px',
              color: 'var(--color-primary)',
              fontWeight: '700'
            }}
          >
            Tháng 09 / 2025
          </h4>
        </div>

        {/* Days of week header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '4px',
            marginBottom: '10px',
            fontSize: '13px',
            fontWeight: '700',
            color: 'var(--color-gold)'
          }}
        >
          {weekDays.map((d, i) => (
            <div key={i} style={{ padding: '4px 0' }}>{d}</div>
          ))}
        </div>

        {/* Month Days */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '6px',
            fontSize: '15px',
            fontFamily: 'var(--font-serif)'
          }}
        >
          {daysInMonth.map((day) => {
            const isWeddingDay = day === 20;
            return (
              <div
                key={day}
                style={{
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  fontWeight: isWeddingDay ? '700' : '400',
                  color: isWeddingDay ? '#ffffff' : '#333'
                }}
              >
                {isWeddingDay ? (
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src="/assets/calen_heart.png"
                      alt="Ngày cưới"
                      className="heart-beat"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                    <span
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        color: '#fff',
                        fontSize: '15px',
                        fontWeight: '700',
                        marginTop: '-2px'
                      }}
                    >
                      {day}
                    </span>
                  </div>
                ) : (
                  <span>{day}</span>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: '18px',
            paddingTop: '14px',
            borderTop: '1px dashed rgba(136, 5, 5, 0.15)',
            fontSize: '14px',
            color: 'var(--color-primary)',
            fontWeight: '600'
          }}
        >
          Thứ Bảy, ngày 20 tháng 09 năm 2025<br />
          <span style={{ fontSize: '13px', color: '#666', fontWeight: '400' }}>
            Ngày 08 tháng 08 năm Ất Tỵ — 12:00 PM
          </span>
        </div>
      </div>

      {/* Add to Google Calendar Button */}
      <div className="reveal-item">
        <button
          onClick={handleAddToGoogleCalendar}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, var(--color-primary), #a31111)',
            color: '#fff',
            border: 'none',
            borderRadius: '24px',
            padding: '10px 22px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 6px 18px rgba(136, 5, 5, 0.25)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <PlusCircle size={16} />
          <span>Thêm Vào Lịch Nhắc Hẹn</span>
        </button>
      </div>
    </section>
  );
}
