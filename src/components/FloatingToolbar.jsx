import React, { useState, useEffect } from 'react';
import { Gift, Heart, MessageSquare, Send, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FloatingToolbar({ onOpenBank, blessings, onAddBlessing }) {
  const [likesCount, setLikesCount] = useState(268);
  const [isLiked, setIsLiked] = useState(false);
  const [flyingHearts, setFlyingHearts] = useState([]);
  const [showWishModal, setShowWishModal] = useState(false);
  const [wishName, setWishName] = useState('');
  const [wishText, setWishText] = useState('');

  // Floating blessing index for the live ticker
  const [activeBlessingIdx, setActiveBlessingIdx] = useState(0);

  useEffect(() => {
    if (!blessings || blessings.length === 0) return;
    const interval = setInterval(() => {
      setActiveBlessingIdx((prev) => (prev + 1) % blessings.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [blessings]);

  // Handle shooting hearts
  const handleShootHearts = (e) => {
    e.stopPropagation();
    setLikesCount((prev) => prev + 1);
    setIsLiked(true);

    const heartColors = ['#ff4d6d', '#ff758f', '#e63946', '#ffd166', '#880505'];
    const newHearts = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + Math.random(),
      left: 70 + (Math.random() * 20 - 10), // % from left inside phone container
      size: Math.random() * 12 + 16,
      color: heartColors[Math.floor(Math.random() * heartColors.length)],
      delay: i * 80
    }));

    setFlyingHearts((prev) => [...prev, ...newHearts]);

    // Cleanup after animation finishes
    setTimeout(() => {
      setFlyingHearts((prev) => prev.filter((h) => !newHearts.some((nh) => nh.id === h.id)));
    }, 2000);
  };

  const handleSendQuickWish = (e) => {
    e.preventDefault();
    if (!wishName.trim() || !wishText.trim()) return;

    onAddBlessing({
      name: wishName.trim(),
      message: wishText.trim()
    });

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (e) {}

    setWishName('');
    setWishText('');
    setShowWishModal(false);
  };

  const currentBlessing = blessings && blessings.length > 0 ? blessings[activeBlessingIdx] : null;

  return (
    <>
      {/* Flying Hearts Animation Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 80
        }}
      >
        {flyingHearts.map((h) => (
          <div
            key={h.id}
            className="flying-heart-particle"
            style={{
              position: 'absolute',
              bottom: '70px',
              left: `${h.left}%`,
              color: h.color,
              animation: 'flyHeart 1.8s ease-out forwards',
              animationDelay: `${h.delay}ms`
            }}
          >
            <Heart size={h.size} fill={h.color} />
          </div>
        ))}
      </div>

      {/* Floating Live Blessings Ticker (Like Livestream) */}
      {currentBlessing && (
        <div
          className="blessing-ticker"
          style={{
            position: 'absolute',
            bottom: '72px',
            left: '12px',
            maxWidth: '260px',
            zIndex: 70,
            pointerEvents: 'none',
            animation: 'fadeInUp 0.5s ease-out'
          }}
        >
          <div
            style={{
              background: 'rgba(136, 5, 5, 0.72)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              padding: '6px 12px',
              borderRadius: '16px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <Sparkles size={12} color="#ffd166" style={{ flexShrink: 0 }} />
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <strong>{currentBlessing.name}:</strong> {currentBlessing.message}
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Bottom Toolbar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '62px',
          zIndex: 75,
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(136, 5, 5, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 12px',
          boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.05)'
        }}
      >
        {/* Left: Quick Wish Button */}
        <button
          onClick={() => setShowWishModal(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(136, 5, 5, 0.08)',
            border: '1px solid rgba(136, 5, 5, 0.15)',
            borderRadius: '20px',
            padding: '6px 14px',
            color: 'var(--color-primary)',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <MessageSquare size={15} />
          <span>Gửi lời chúc...</span>
        </button>

        {/* Right: Interactive Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Heart Shoot / Bắn Tim Button */}
          <button
            onClick={handleShootHearts}
            className="shoot-hearts-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'linear-gradient(135deg, #ff4d6d, #e63946)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '20px',
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(230, 57, 70, 0.3)',
              transition: 'transform 0.15s ease'
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.92)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Heart size={14} fill="#ffffff" />
            <span>Bắn tim</span>
            <span
              style={{
                background: 'rgba(255,255,255,0.3)',
                padding: '1px 5px',
                borderRadius: '8px',
                fontSize: '10px'
              }}
            >
              {likesCount}
            </span>
          </button>

          {/* Gift Box Button */}
          <button
            onClick={onOpenBank}
            className="bounce-gift"
            title="Mừng cưới"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #c3922e, #e0c885)',
              border: '2px solid #ffffff',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(195, 146, 46, 0.35)',
              flexShrink: 0
            }}
          >
            <Gift size={18} />
          </button>
        </div>
      </div>

      {/* Quick Wish Modal */}
      {showWishModal && (
        <div
          onClick={() => setShowWishModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '480px',
              background: '#ffffff',
              borderRadius: '24px 24px 0 0',
              padding: '20px 18px 28px',
              boxShadow: '0 -10px 40px rgba(0,0,0,0.25)',
              position: 'relative',
              animation: 'slideUpModal 0.3s ease-out'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-primary)' }}>
                Gửi Lời Chúc Mừng
              </h4>
              <button
                onClick={() => setShowWishModal(false)}
                style={{
                  background: '#f4ede4',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSendQuickWish} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="text"
                required
                placeholder="Tên của bạn..."
                value={wishName}
                onChange={(e) => setWishName(e.target.value)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid #dcd4c6',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <textarea
                required
                rows={3}
                placeholder="Lời chúc mừng đến đôi bạn..."
                value={wishText}
                onChange={(e) => setWishText(e.target.value)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid #dcd4c6',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--color-primary)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '12px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Send size={15} />
                <span>Gửi Lời Chúc Ngay</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Keyframes */}
      <style>{`
        @keyframes flyHeart {
          0% {
            opacity: 1;
            transform: translateY(0) scale(0.6) rotate(0deg);
          }
          50% {
            opacity: 0.9;
            transform: translateY(-220px) scale(1.2) rotate(-15deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-440px) scale(1.4) rotate(20deg);
          }
        }
        @keyframes slideUpModal {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
