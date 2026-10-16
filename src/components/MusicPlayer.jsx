import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.55;

    const startAudio = () => {
      if (!hasInteracted.current) {
        hasInteracted.current = true;
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Browser autoplay restrictions - will play on next manual tap
          });
      }
    };

    // User gesture trigger
    window.addEventListener('click', startAudio, { once: true });
    window.addEventListener('touchstart', startAudio, { once: true });
    window.addEventListener('scroll', startAudio, { once: true });

    return () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('scroll', startAudio);
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingData.music.url} loop preload="auto" />
      
      <div
        onClick={togglePlay}
        className="music-toggle-btn"
        title={isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc nền'}
        aria-label="Toggle background music"
        style={{
          position: 'absolute',
          top: 14,
          right: 14,
          zIndex: 60,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(136, 5, 5, 0.18)',
          borderRadius: 24,
          padding: '4px 10px 4px 6px',
          boxShadow: '0 4px 12px rgba(136, 5, 5, 0.12)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Vinyl disc */}
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #333 30%, #111 70%, #222 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #e0c885',
            animation: isPlaying ? 'spinSlow 4s linear infinite' : 'none',
            boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
            position: 'relative'
          }}
        >
          {/* Vinyl center hole */}
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#880505',
              border: '1.5px solid #fff'
            }}
          />
        </div>

        {/* Equalizer Wave / State */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 14 }}>
          {isPlaying ? (
            <>
              <span className="eq-bar eq-1" />
              <span className="eq-bar eq-2" />
              <span className="eq-bar eq-3" />
            </>
          ) : (
            <VolumeX size={14} color="#880505" />
          )}
        </div>

        <style>{`
          .eq-bar {
            width: 2.5px;
            background-color: #880505;
            border-radius: 2px;
          }
          .eq-1 {
            height: 12px;
            animation: eqAnim 0.7s ease infinite alternate;
          }
          .eq-2 {
            height: 8px;
            animation: eqAnim 0.9s ease 0.2s infinite alternate;
          }
          .eq-3 {
            height: 14px;
            animation: eqAnim 0.6s ease 0.4s infinite alternate;
          }
          @keyframes eqAnim {
            0% { height: 4px; }
            100% { height: 14px; }
          }
        `}</style>
      </div>
    </>
  );
}
