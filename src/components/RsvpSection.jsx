import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Heart, Send } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function RsvpSection({ onAddBlessing }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attendance: 'yes',
    guestCount: '1',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Fire festive celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#880505', '#ff4d6d', '#ffd166', '#06d6a0', '#118ab2']
      });
    } catch (err) {
      // Confetti fallback
    }

    if (formData.message.trim() && onAddBlessing) {
      onAddBlessing({
        name: formData.name.trim(),
        message: formData.message.trim()
      });
    }

    // Save to local storage for persistence
    try {
      const existingRsvp = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      existingRsvp.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('wedding_rsvps', JSON.stringify(existingRsvp));
    } catch (e) {}

    setIsSubmitted(true);
  };

  return (
    <section
      className="rsvp-section"
      style={{
        padding: '24px 16px 40px',
        position: 'relative',
        textAlign: 'center'
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
          Xác Nhận Tham Dự
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '26px',
            color: 'var(--color-primary)',
            fontWeight: '600'
          }}
        >
          Gửi Lời Phúc Chúc
        </h3>
        <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
          Để chúng mình chuẩn bị đón tiếp bạn chu đáo nhất nhé!
        </p>
      </div>

      <div
        className="reveal-item"
        style={{
          background: 'rgba(255, 255, 255, 0.96)',
          borderRadius: '24px',
          padding: '28px 20px',
          boxShadow: '0 12px 36px rgba(136, 5, 5, 0.08)',
          border: '1px solid rgba(136, 5, 5, 0.1)',
          maxWidth: '420px',
          margin: '0 auto 36px',
          textAlign: 'left'
        }}
      >
        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle2 size={48} color="var(--color-primary)" style={{ margin: '0 auto 12px' }} />
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                color: 'var(--color-primary)',
                marginBottom: '8px'
              }}
            >
              Cảm Ơn Bạn Rất Nhiều!
            </h4>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
              Chúng mình đã nhận được xác nhận từ <strong>{formData.name}</strong>. Rất mong được đón tiếp bạn trong ngày vui trọng đại!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              style={{
                marginTop: '18px',
                background: 'transparent',
                border: '1px solid var(--color-primary)',
                color: 'var(--color-primary)',
                padding: '6px 18px',
                borderRadius: '18px',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              Gửi lại phản hồi khác
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '6px' }}>
                Họ và tên của bạn <span style={{ color: 'var(--color-primary)' }}>*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nhập họ và tên..."
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #d8d0c2',
                  fontSize: '14px',
                  outline: 'none',
                  background: '#faf9f5'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                Bạn sẽ tham dự chứ?
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={formData.attendance === 'yes'}
                    onChange={() => setFormData({ ...formData, attendance: 'yes' })}
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span>Có, tôi sẽ tham dự</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={formData.attendance === 'no'}
                    onChange={() => setFormData({ ...formData, attendance: 'no' })}
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span>Tôi bận, rất tiếc không thể tham dự</span>
                </label>
              </div>
            </div>

            {formData.attendance === 'yes' && (
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '6px' }}>
                  Số người tham dự
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #d8d0c2',
                    fontSize: '14px',
                    background: '#faf9f5',
                    outline: 'none'
                  }}
                >
                  <option value="1">1 người (Đi một mình)</option>
                  <option value="2">2 người (Đi cùng người thương)</option>
                  <option value="3">3 người trở lên (Đi cùng gia đình)</option>
                </select>
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '6px' }}>
                Lời chúc gửi đến Cô dâu & Chú rể
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Gửi gắm lời chúc chân thành của bạn tại đây..."
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #d8d0c2',
                  fontSize: '14px',
                  outline: 'none',
                  background: '#faf9f5',
                  resize: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                marginTop: '6px',
                background: 'linear-gradient(135deg, var(--color-primary), #a31111)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 20px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 6px 20px rgba(136, 5, 5, 0.25)',
                transition: 'all 0.3s ease'
              }}
            >
              <Send size={16} />
              <span>Gửi Xác Nhận Ngay</span>
            </button>
          </form>
        )}
      </div>

      {/* Thank You Note & Closing Date */}
      <div className="reveal-item" style={{ padding: '0 20px' }}>
        {weddingData.quotes[3].closing.map((line, idx) => (
          <p
            key={idx}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '17px',
              color: '#333',
              lineHeight: '1.8'
            }}
          >
            {line}
          </p>
        ))}

        <div style={{ marginTop: '24px' }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '26px',
              fontWeight: '700',
              color: 'var(--color-primary)',
              letterSpacing: '4px'
            }}
          >
            20.09.2025
          </span>
        </div>
      </div>
    </section>
  );
}
