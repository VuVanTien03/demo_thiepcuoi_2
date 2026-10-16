import fs from 'fs';

const canvasHtml = fs.readFileSync('C:/Users/admin/.gemini/antigravity-ide/brain/f05aef90-98bb-49cb-97ba-a68b477c20d6/scratch/template28_pristine_canvas.html', 'utf8');

const code = `import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, X, Copy, Check, Send } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import FallingPetals from './FallingPetals';
import '../cinelove.css';

const canvasRawHtml = ${JSON.stringify(canvasHtml)};

export default function CineloveWedding28() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [likeCount, setLikeCount] = useState(36);
  const [showToolbar, setShowToolbar] = useState(true);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [activeBankTab, setActiveBankTab] = useState('groom');
  const [copiedBank, setCopiedBank] = useState(false);
  
  // Quick wish modal
  const [showWishModal, setShowWishModal] = useState(false);
  const [wishName, setWishName] = useState('');
  const [wishText, setWishText] = useState('');

  // Flying hearts particles
  const [flyingHearts, setFlyingHearts] = useState([]);

  // Live blessing stream
  const [blessings, setBlessings] = useState([
    { name: 'Hương', text: 'Đồng tâm đồng lòng, xây đắp tổ ấm thịnh vượng!' },
    { name: 'Mai', text: 'Chúc cho tình yêu của hai bạn mỗi ngày một lớn mạnh!' },
    { name: 'Hiền', text: 'Mong rằng tình yêu của hai bạn mãi đẹp như ngày hôm nay!' },
    { name: 'Ngọc Anh', text: 'Chúc hai bạn trăm năm hạnh phúc, đầu bạc răng long!' },
    { name: 'Tuấn Kiệt', text: 'Chúc đôi bạn luôn yêu thương và cùng nhau sẻ chia mọi khoảnh khắc!' }
  ]);
  const [visibleBlessingIdx, setVisibleBlessingIdx] = useState(0);

  const audioRef = useRef(null);
  const canvasRef = useRef(null);

  // Auto-play audio on first user gesture
  useEffect(() => {
    const handleGesture = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };
    window.addEventListener('click', handleGesture, { once: true });
    window.addEventListener('touchstart', handleGesture, { once: true });
    return () => {
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('touchstart', handleGesture);
    };
  }, [isPlaying]);

  // Blessing stream interval
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleBlessingIdx(prev => (prev + 1) % blessings.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [blessings.length]);

  // Update dynamic countdown and RSVP inside the rendered canvas
  useEffect(() => {
    if (!canvasRef.current) return;

    // Connect countdown timer
    let target = new Date('2025-09-20T12:00:00').getTime();
    const now = Date.now();
    if (target < now) {
      const nextDate = new Date();
      nextDate.setMonth(8); // September
      nextDate.setDate(20);
      nextDate.setHours(12, 0, 0, 0);
      if (nextDate.getTime() < now) {
        nextDate.setFullYear(nextDate.getFullYear() + 1);
      }
      target = nextDate.getTime();
    }

    const countdownBoxes = canvasRef.current.querySelectorAll('.countdown > div > div:first-child');
    const updateCountdown = () => {
      const diff = target - Date.now();
      if (diff > 0 && countdownBoxes.length >= 4) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        countdownBoxes[0].textContent = d;
        countdownBoxes[1].textContent = h;
        countdownBoxes[2].textContent = m;
        countdownBoxes[3].textContent = s;
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    // Connect RSVP form submission
    const rsvpForm = canvasRef.current.querySelector('.rsvp-form form');
    if (rsvpForm) {
      rsvpForm.onsubmit = (e) => {
        e.preventDefault();
        const nameInput = rsvpForm.querySelector('input[name="rsvp-name"]');
        const name = nameInput ? nameInput.value.trim() : '';
        if (!name) return;

        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 }
          });
        } catch (e) {}

        const submitBtn = rsvpForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.textContent = '✓ Đã Xác Nhận Tham Dự!';
          submitBtn.style.backgroundColor = '#1e7e34';
          submitBtn.disabled = true;
        }
      };
    }

    return () => clearInterval(interval);
  }, []);

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const handleShootHeart = (e) => {
    e.stopPropagation();
    setLikeCount(prev => prev + 1);
    
    // Create floating heart particles
    const newHearts = Array.from({ length: 4 }, (_, i) => ({
      id: Date.now() + Math.random(),
      left: Math.random() * 60 + 20,
      size: Math.random() * 12 + 18,
      color: ['#ff4d6d', '#ff758f', '#ff85a1', '#e63946'][Math.floor(Math.random() * 4)],
      delay: i * 70
    }));

    setFlyingHearts(prev => [...prev, ...newHearts]);
    setTimeout(() => {
      setFlyingHearts(prev => prev.filter(h => !newHearts.some(nh => nh.id === h.id)));
    }, 2000);
  };

  const handleSendWish = (e) => {
    e.preventDefault();
    if (!wishName.trim() || !wishText.trim()) return;

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (e) {}

    setBlessings(prev => [{ name: wishName.trim(), text: wishText.trim() }, ...prev]);
    setWishName('');
    setWishText('');
    setShowWishModal(false);
  };

  const handleCopyBank = () => {
    const person = activeBankTab === 'groom' ? weddingData.groom : weddingData.bride;
    navigator.clipboard.writeText(person.bank.accountNumber).then(() => {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    });
  };

  const currentBlessing = blessings[visibleBlessingIdx];
  const currentBankPerson = activeBankTab === 'groom' ? weddingData.groom : weddingData.bride;

  return (
    <div className="pc-container" style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', width: '100vw', paddingTop: '3vh', paddingBottom: '3vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      
      {/* Falling petals romantic layer */}
      <FallingPetals />

      <audio ref={audioRef} src="/assets/wedding_music.mp3" preload="auto" loop />

      {/* PC Frame Container */}
      <div className="pc-content" style={{ width: '500px', height: '94vh', position: 'relative', border: '1px solid #e0e0e0', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#fff' }}>
        
        <div id="app-view-index" className={showToolbar ? '' : 'hide-toolbar'} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
          
          {/* Audio Control Top Right */}
          <div id="audio-control-wrapper" onClick={toggleAudio} style={{ position: 'absolute', right: '12px', top: '12px', zIndex: 1000, width: '32px', height: '32px', cursor: 'pointer' }}>
            <div className={\`audio-toggle \${isPlaying ? 'mrotate' : ''}\`} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', borderRadius: '50%', overflow: 'hidden' }}>
              <img src="/assets/audio-1.png" alt="music" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {!isPlaying && (
                <div className="icon-cancel" style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ transform: 'rotate(45deg)', width: '100%', height: '2px', background: '#fff' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Main Scrollable Canvas */}
          <div id="main-scroll-container" style={{ width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}>
            
            {/* 1:1 Exact CineLove Canvas */}
            <div 
              id="root-page-container" 
              ref={canvasRef}
              style={{ backgroundColor: '#f9f8f3', width: '500px', height: '7523px', position: 'relative', margin: '0 auto' }}
              dangerouslySetInnerHTML={{ __html: canvasRawHtml }}
            />
          </div>

          {/* Floating Live Blessings Stream */}
          <div id="blessing-box" style={{ opacity: showToolbar ? 1 : 0 }}>
            {currentBlessing && (
              <div key={visibleBlessingIdx} className="blessing-message" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 'bold' }}>{currentBlessing.name}:</span>
                <span>{currentBlessing.text}</span>
              </div>
            )}
          </div>

          {/* Interactive Bottom Toolbar */}
          <div id="cinelove-toolbar">
            <div className="toolbar">
              <button 
                type="button" 
                className="message-box-button"
                onClick={() => setShowWishModal(true)}
                style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
              >
                <span>Gửi lời chúc...</span>
                <img src="/assets/message.png" alt="wish" style={{ height: '20px' }} />
              </button>

              <div className="toolbar-right">
                {/* Gift Button */}
                <div 
                  id="cinelove-gift-button" 
                  onClick={() => setIsBankModalOpen(true)}
                  title="Gửi mừng hạnh phúc"
                />

                {/* Like / Heart Shooting Button */}
                <div 
                  id="cinelove-like-button" 
                  onClick={handleShootHeart}
                  title="Bắn tim chúc mừng"
                >
                  <span id="cinelove-like-count">{likeCount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Heart Particles */}
          <div style={{ position: 'absolute', bottom: '70px', right: '20px', width: '120px', height: '350px', pointerEvents: 'none', zIndex: 9999999, overflow: 'visible' }}>
            {flyingHearts.map(heart => (
              <div
                key={heart.id}
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  right: \`\${heart.left}px\`,
                  color: heart.color,
                  animation: 'flyHeart 1.8s ease-out forwards',
                  animationDelay: \`\${heart.delay}ms\`
                }}
              >
                <Heart size={heart.size} fill={heart.color} />
              </div>
            ))}
          </div>

          {/* Toolbar Collapse Toggle */}
          <div 
            className="toolbar-toggle-button toolbar-toggle-has-thumbnail" 
            onClick={() => setShowToolbar(prev => !prev)}
            title="Đóng / mở thanh tương tác"
          >
            <div className="toolbar-toggle-pill" style={{ height: showToolbar ? '68px' : '36px' }}>
              <img src="/assets/groom_avatar.jpeg" alt="avatar" className="thumbnail" />
            </div>
          </div>

          {/* CineLove Watermark */}
          <div className="watermark" style={{ right: '6px', bottom: showToolbar ? '150px' : '40px' }}>
            <span className="watermark-content">
              <span>Cung cấp bởi </span>
              <a href="https://cinelove.me" target="_blank" rel="noreferrer" className="watermark-link">CineLove</a>
            </span>
          </div>

        </div>
      </div>

      {/* Bank QR Modal */}
      {isBankModalOpen && (
        <div onClick={() => setIsBankModalOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999999, backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '380px', background: '#fff', borderRadius: '24px', padding: '24px 20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', position: 'relative' }}>
            <button onClick={() => setIsBankModalOpen(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: '#f4ede4', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <X size={18} />
            </button>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#880505', fontWeight: 'bold' }}>Hộp Mừng Hạnh Phúc</h3>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Cảm ơn tình cảm chân thành của bạn!</p>
            </div>
            <div style={{ display: 'flex', background: '#f4efe8', borderRadius: '16px', padding: '4px', marginBottom: '16px' }}>
              <button onClick={() => { setActiveBankTab('groom'); setCopiedBank(false); }} style={{ flex: 1, padding: '8px 0', borderRadius: '12px', border: 'none', background: activeBankTab === 'groom' ? '#ffffff' : 'transparent', color: activeBankTab === 'groom' ? '#880505' : '#666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>
                Mừng Chú Rể
              </button>
              <button onClick={() => { setActiveBankTab('bride'); setCopiedBank(false); }} style={{ flex: 1, padding: '8px 0', borderRadius: '12px', border: 'none', background: activeBankTab === 'bride' ? '#ffffff' : 'transparent', color: activeBankTab === 'bride' ? '#880505' : '#666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>
                Mừng Cô Dâu
              </button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '180px', height: '180px', margin: '0 auto 16px', padding: '8px', background: '#fff', borderRadius: '16px', border: '2px solid #e8e2d5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={currentBankPerson.bank.qrCodeUrl} alt="Mã QR" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ background: '#faf7f2', borderRadius: '14px', padding: '12px 14px', border: '1px solid #e8e2d5', marginBottom: '14px', textAlign: 'left', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ color: '#777' }}>Ngân hàng:</span><strong>{currentBankPerson.bank.bankName}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ color: '#777' }}>Chủ tài khoản:</span><strong>{currentBankPerson.bank.accountName}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#777' }}>Số tài khoản:</span><strong style={{ color: '#880505', fontSize: '15px' }}>{currentBankPerson.bank.accountNumber}</strong>
                </div>
              </div>
              <button onClick={handleCopyBank} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: copiedBank ? '#1e7e34' : '#880505', color: '#fff', border: 'none', borderRadius: '14px', padding: '12px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                {copiedBank ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedBank ? 'Đã Sao Chép Số Tài Khoản!' : 'Sao Chép Số Tài Khoản'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Wish Modal */}
      {showWishModal && (
        <div onClick={() => setShowWishModal(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999999, backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '500px', background: '#fff', borderRadius: '24px 24px 0 0', padding: '20px 18px 28px', boxShadow: '0 -10px 40px rgba(0,0,0,0.25)', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#880505', fontWeight: 'bold' }}>Gửi Lời Chúc Mừng</h4>
              <button onClick={() => setShowWishModal(false)} style={{ background: '#f4ede4', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <X size={16} />
              </button>
            </div>
            <form onSubmit={handleSendWish} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input type="text" required placeholder="Tên của bạn..." value={wishName} onChange={e => setWishName(e.target.value)} style={{ padding: '10px 14px', borderRadius: '12px', border: '1px solid #dcd4c6', fontSize: '14px', outline: 'none' }} />
              <textarea required rows={3} placeholder="Gửi lời chúc đến đôi bạn trẻ..." value={wishText} onChange={e => setWishText(e.target.value)} style={{ padding: '10px 14px', borderRadius: '12px', border: '1px solid #dcd4c6', fontSize: '14px', outline: 'none', resize: 'none' }} />
              <button type="submit" style={{ background: '#880505', color: '#fff', border: 'none', borderRadius: '14px', padding: '12px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Send size={15} />
                <span>Gửi Lời Chúc Ngay</span>
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{\`
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
        @media (max-width: 500px) {
          .pc-container {
            padding: 0 !important;
            height: 100vh !important;
            width: 100vw !important;
          }
          .pc-content {
            width: 100vw !important;
            height: 100vh !important;
            border-radius: 0 !important;
            border: none !important;
          }
          #root-page-container {
            zoom: calc(100vw / 500) !important;
          }
        }
      \`}</style>

    </div>
  );
}
`;

fs.writeFileSync('src/components/CineloveWedding28.jsx', code);
console.log('Successfully wrote src/components/CineloveWedding28.jsx');
