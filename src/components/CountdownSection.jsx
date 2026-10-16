import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    let target = new Date(weddingData.event.dateISO).getTime();
    const now = new Date().getTime();

    // If target date has passed, count down to the next upcoming celebration of Sep 20
    if (target < now) {
      const nextDate = new Date();
      nextDate.setMonth(8); // September (0-indexed: 8 is Sep)
      nextDate.setDate(20);
      nextDate.setHours(12, 0, 0, 0);
      if (nextDate.getTime() < now) {
        nextDate.setFullYear(nextDate.getFullYear() + 1);
      }
      target = nextDate.getTime();
    }

    const updateTimer = () => {
      const current = new Date().getTime();
      const difference = target - current;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Ngày', value: timeLeft.days },
    { label: 'Giờ', value: timeLeft.hours },
    { label: 'Phút', value: timeLeft.minutes },
    { label: 'Giây', value: timeLeft.seconds }
  ];

  return (
    <section
      className="countdown-section"
      style={{
        padding: '28px 16px',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div className="reveal-item" style={{ marginBottom: '20px' }}>
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
          Thời Khắc Trọng Đại
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '24px',
            color: 'var(--color-primary)',
            fontWeight: '600'
          }}
        >
          Đếm Ngược Ngày Cưới
        </h3>
      </div>

      <div
        className="reveal-item"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          maxWidth: '420px',
          margin: '0 auto'
        }}
      >
        {timeUnits.map((item, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '16px',
              padding: '16px 6px',
              boxShadow: '0 8px 20px rgba(136, 5, 5, 0.08)',
              border: '1px solid rgba(136, 5, 5, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top gold accent bar */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--color-primary), var(--color-gold))'
              }}
            />

            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '28px',
                fontWeight: '700',
                color: 'var(--color-primary)',
                lineHeight: '1.1'
              }}
            >
              {String(item.value).padStart(2, '0')}
            </span>

            <span
              style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#777',
                marginTop: '6px',
                fontWeight: '500'
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div
        className="reveal-item"
        style={{
          marginTop: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          color: 'var(--color-primary)',
          fontSize: '13px'
        }}
      >
        <Heart size={14} className="heart-beat" fill="var(--color-primary)" />
        <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
          Hẹn gặp bạn vào lúc 12:00 ngày 20 tháng 09 năm 2025
        </span>
      </div>
    </section>
  );
}
