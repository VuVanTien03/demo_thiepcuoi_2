import fs from 'fs';

const html = fs.readFileSync('C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\f05aef90-98bb-49cb-97ba-a68b477c20d6\\scratch\\template28_converted.html', 'utf8');

// We will build a React component CineloveWedding28 that has:
// 1. All the exact 51 nodes
// 2. Dynamic live countdown
// 3. Dynamic RSVP form
// 4. Interactive floating toolbar with Bắn tim, Gửi lời chúc, Hộp quà, Like count
// 5. Audio control
// 6. Bank modal popup

const componentTemplate = `
import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, X, Copy, Check, Send } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import FallingPetals from './FallingPetals';
import '../cinelove.css';

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

  // RSVP Form state
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpAttendance, setRsvpAttendance] = useState('yes');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

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
  const scrollContainerRef = useRef(null);

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

  // Live countdown timer calculation
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
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

    const updateTimer = () => {
      const diff = target - Date.now();
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
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

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#880505', '#ff4d6d', '#ffd166', '#06d6a0']
      });
    } catch (e) {}

    setBlessings(prev => [{ name: rsvpName.trim(), text: 'Đã xác nhận tham dự lễ cưới!' }, ...prev]);
    setRsvpSubmitted(true);
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
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', width: '100vw', paddingTop: '3vh', paddingBottom: '3vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      
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
          <div ref={scrollContainerRef} id="main-scroll-container" style={{ width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}>
            
            {/* 1:1 CineLove Canvas */}
            <div id="root-page-container" style={{ backgroundColor: '#f9f8f3', width: '500px', height: '7523px', position: 'relative', margin: '0 auto' }}>
              
              {/* Insert the exact extracted CineLove elements */}
              REPLACE_WITH_CANVAS_NODES

            </div>
          </div>

          {/* Live Blessing Stream Box */}
          {currentBlessing && (
            <div id="blessing-box" style={{ opacity: 1, zIndex: 1000, position: 'absolute', bottom: '68px', left: '16px', maxWidth: '300px', pointerEvents: 'none' }}>
              <div className="blessing-message" style={{ background: 'rgba(225, 117, 117, 0.75)', backdropFilter: 'blur(4px)', color: '#fff', fontSize: '12px', padding: '5px 12px', borderRadius: '14px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={14} color="#ffd166" />
                <span><strong>{currentBlessing.name}:</strong> {currentBlessing.text}</span>
              </div>
            </div>
          )}

          {/* CineLove Floating Bottom Toolbar */}
          <div id="cinelove-toolbar" style={{ position: 'absolute', left: 0, bottom: 0, zIndex: 1000, width: '100%', height: '64px', boxSizing: 'border-box' }}>
            <div className="toolbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', width: '100%', height: '100%' }}>
              
              {/* Left: Quick wish button */}
              <div className="toolbar-left">
                <div onClick={() => setShowWishModal(true)} className="message-box-button" style={{ cursor: 'pointer', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)', padding: '0 10px 0 16px', borderRadius: '30px', color: '#fff', fontSize: '13px', width: '150px', height: '39px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Gửi lời chúc...</span>
                  <img src="/assets/message.png" alt="message" style={{ height: '24px' }} />
                </div>
              </div>

              {/* Right: Bắn tim, Gift, Thích */}
              <div className="toolbar-right" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                
                {/* Bắn tim */}
                <div id="animation-gift-preview-btn" onClick={handleShootHeart} style={{ cursor: 'pointer', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)', padding: '0 12px', borderRadius: '30px', color: '#fff', fontSize: '13px', height: '39px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <img src="/assets/biubiu.png" alt="heart" style={{ height: '26px' }} />
                  <span>Bắn tim</span>
                </div>

                {/* Hộp quà mừng cưới */}
                <div id="cinelove-gift-button" onClick={() => setIsBankModalOpen(true)} style={{ width: '39px', height: '39px', cursor: 'pointer', backgroundImage: 'url(/assets/gift-box.png)', backgroundSize: '100%', backgroundRepeat: 'no-repeat', animation: 'bounceGift 4s ease infinite' }}></div>

                {/* Nút Thích */}
                <div id="cinelove-like-button" onClick={handleShootHeart} style={{ width: '39px', height: '39px', position: 'relative', cursor: 'pointer', backgroundImage: 'url(/assets/like.png)', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                  <div id="cinelove-like-count" style={{ position: 'absolute', right: '-4px', top: '-4px', width: '18px', height: '18px', lineHeight: '18px', color: '#fff', fontSize: '9px', fontWeight: 'bold', background: 'linear-gradient(#ff9aa6, #ff4969)', borderRadius: '50%', textAlign: 'center' }}>
                    {likeCount}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Flying Hearts Particles Animation */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1001 }}>
            {flyingHearts.map(h => (
              <div key={h.id} style={{ position: 'absolute', bottom: '70px', left: \`\${h.left}%\`, color: h.color, animation: 'flyHeart 1.8s ease-out forwards', animationDelay: \`\${h.delay}ms\` }}>
                <Heart size={h.size} fill={h.color} />
              </div>
            ))}
          </div>

          {/* Toolbar Toggle Button on bottom right */}
          <div onClick={() => setShowToolbar(!showToolbar)} className="toolbar-toggle-button toolbar-toggle-has-thumbnail" style={{ position: 'absolute', right: '8px', bottom: showToolbar ? '68px' : '20px', width: '36px', height: '36px', borderRadius: '50%', zIndex: 999, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="toolbar-toggle-pill" style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: '68px', background: 'linear-gradient(#ff9aa6, #ff4969)', borderRadius: '35px' }}>
              <img src="/assets/hero_cover.jpeg" alt="Thumbnail" className="thumbnail" style={{ position: 'absolute', left: '50%', top: '-4px', transform: 'translateX(-50%)', borderRadius: '50%', width: '37px', height: '37px', objectFit: 'cover', border: '1px solid #fff' }} />
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', bottom: '7px', left: '50%', transform: 'translateX(-50%)' }}>
                <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
              </svg>
            </div>
          </div>

          {/* Watermark Vertical */}
          <div className="watermark" style={{ position: 'absolute', bottom: '148px', right: '7px', textAlign: 'center', transform: 'rotate(-90deg)', width: '20px', whiteSpace: 'nowrap', zIndex: 999 }}>
            <span style={{ fontSize: '12px', letterSpacing: '1px', color: '#666' }}>
              Made with <strong style={{ color: '#1c1c1c' }}>CineLove</strong>
            </span>
          </div>

        </div>
      </div>

      {/* Bank QR Modal */}
      {isBankModalOpen && (
        <div onClick={() => setIsBankModalOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999999, backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '380px', background: '#fff', borderRadius: '24px', padding: '24px 20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', position: 'relative' }}>
            <button onClick={() => setIsBankModalOpen(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: '#f0ede6', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
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

    </div>
  );
}
`;

// Now let's extract the exact canvas content inside #root-page-container
// from template28_converted.html
const startTag = '<div style="position:relative;user-select:auto;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:500px;height:7523px;min-width:50px;min-height:50px">';
const startIndex = html.indexOf(startTag);
if (startIndex === -1) {
  console.log("Could not find start tag");
  process.exit(1);
}

// Slice from startTag to the end of #root-page-container
let canvasHtml = html.slice(startIndex);
// Clean closing div tags if any
if (canvasHtml.endsWith('</div></div>')) {
  canvasHtml = canvasHtml.slice(0, -12);
}

// Replace the countdown div with dynamic active countdown JSX:
const countdownOldRegex = /<div style="color:#880505;background-color:rgba\(249, 248, 243, 0\);width:100%;height:100%;font-size:16px;font-family:&quot;Arial&quot;;--spacing:20px" className="jsx-3272123691 countdown componentBOX ">[\s\S]*?<\/div><\/div><\/div><\/div><\/div>/;

const countdownNewJsx = \`<div style={{ color: '#880505', width: '100%', height: '100%', fontSize: '16px', display: 'flex', justifyContent: 'space-between', gap: '15px' }} className="countdown">
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%' }}><div style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'Signora, serif' }}>{countdown.days}</div><div style={{ fontSize: '14px' }}>ngày</div></div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%' }}><div style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'Signora, serif' }}>{countdown.hours}</div><div style={{ fontSize: '14px' }}>giờ</div></div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%' }}><div style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'Signora, serif' }}>{countdown.minutes}</div><div style={{ fontSize: '14px' }}>phút</div></div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%' }}><div style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'Signora, serif' }}>{countdown.seconds}</div><div style={{ fontSize: '14px' }}>giây</div></div>
</div></div></div></div></div>\`;

canvasHtml = canvasHtml.replace(countdownOldRegex, countdownNewJsx);

// Replace RSVP form with active interactive React form
const rsvpOldRegex = /<div className="rsvp-form" style="background-color:#ffffff;[\s\S]*?<\/div><\/div><\/div><\/div>/;

const rsvpNewJsx = \`<div className="rsvp-form" style={{ backgroundColor: '#ffffff', color: '#333333', boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.1)', borderRadius: '5px', padding: '16px', minHeight: '100%', width: '100%', fontSize: '14px', fontFamily: 'Arial', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #e0e0e0' }}>
  <h3 style={{ marginBottom: '1.15em', color: '#333333', fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}>Xác nhận tham dự</h3>
  {rsvpSubmitted ? (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <p style={{ color: '#880505', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>Cảm ơn bạn {rsvpName}!</p>
      <p style={{ fontSize: '13px', color: '#666' }}>Chúng mình đã ghi nhận xác nhận của bạn.</p>
    </div>
  ) : (
    <form onSubmit={handleRsvpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15em', width: '100%' }}>
      <div>
        <label htmlFor="rsvp-name" style={{ display: 'block', marginBottom: '0.43em', fontSize: '14px' }}>Họ và tên</label>
        <input type="text" required value={rsvpName} onChange={e => setRsvpName(e.target.value)} style={{ width: '100%', padding: '0.4em 0.6em', borderRadius: '4px', border: '1px solid #e0e0e0', fontSize: '14px', backgroundColor: 'white', color: '#333' }} placeholder="Nhập tên của bạn" id="rsvp-name" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.43em', fontSize: '14px' }}>Bạn sẽ tham dự chứ?</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.57em' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
            <input type="radio" name="rsvp-attendance" value="yes" checked={rsvpAttendance === 'yes'} onChange={() => setRsvpAttendance('yes')} style={{ accentColor: '#880505' }} />
            <span>Có, tôi sẽ tham dự</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
            <input type="radio" name="rsvp-attendance" value="no" checked={rsvpAttendance === 'no'} onChange={() => setRsvpAttendance('no')} style={{ accentColor: '#880505' }} />
            <span>Tôi bận, rất tiếc không thể tham dự</span>
          </label>
        </div>
      </div>
      <button type="submit" style={{ backgroundColor: '#880505', color: '#ffffff', padding: '0.5em 1em', borderRadius: '4px', border: 'none', fontSize: '14px', cursor: 'pointer', marginTop: '0.57em', fontWeight: 'bold' }}>
        Gửi xác nhận
      </button>
    </form>
  )}
</div></div></div></div>\`;

canvasHtml = canvasHtml.replace(rsvpOldRegex, rsvpNewJsx);

const finalCode = componentTemplate.replace('REPLACE_WITH_CANVAS_NODES', canvasHtml);

fs.writeFileSync('d:\\demo_thiepcuoi_2\\src\\components\\CineloveWedding28.jsx', finalCode);
console.log("Successfully created CineloveWedding28.jsx, size:", finalCode.length);
