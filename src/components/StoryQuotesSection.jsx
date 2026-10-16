import React from 'react';
import { Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function StoryQuotesSection() {
  return (
    <section
      className="story-quotes-section"
      style={{
        padding: '30px 16px',
        position: 'relative',
        textAlign: 'center'
      }}
    >
      {/* Poem 1 Card */}
      <div
        className="reveal-item"
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(6px)',
          borderRadius: '24px',
          padding: '28px 20px',
          border: '1px solid rgba(136, 5, 5, 0.08)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
          marginBottom: '36px'
        }}
      >
        <Sparkles size={18} color="var(--color-gold)" style={{ margin: '0 auto 12px', display: 'block' }} />
        
        {weddingData.quotes[0].poem.map((line, idx) => (
          <p
            key={idx}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '17px',
              color: '#333',
              lineHeight: '1.8',
              letterSpacing: '0.2px'
            }}
          >
            {line}
          </p>
        ))}

        <div
          style={{
            margin: '18px auto 0',
            display: 'inline-block',
            borderTop: '1px solid rgba(136, 5, 5, 0.2)',
            paddingTop: '12px'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '24px',
              color: 'var(--color-primary)',
              fontWeight: '600'
            }}
          >
            {weddingData.quotes[0].highlight}
          </span>
        </div>
      </div>

      {/* FALL IN LOVE Landscape Photo */}
      <div className="reveal-item" style={{ marginBottom: '36px' }}>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '15px',
            letterSpacing: '5px',
            color: 'var(--color-primary)',
            marginBottom: '14px',
            fontWeight: '700'
          }}
        >
          FALL IN LOVE
        </p>

        <div
          style={{
            width: '100%',
            height: '310px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '4px solid #ffffff',
            boxShadow: '0 14px 34px rgba(136, 5, 5, 0.12)',
            position: 'relative'
          }}
        >
          <img
            src="/assets/fall_in_love.jpeg"
            alt="Fall In Love"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '14px',
            fontStyle: 'italic',
            color: '#666',
            marginTop: '16px',
            padding: '0 16px',
            lineHeight: '1.6'
          }}
        >
          "{weddingData.quotes[1].quote}"
        </p>
      </div>

      {/* Poem 2 & Portrait */}
      <div className="reveal-item" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
          <img
            src="/assets/dec_vintage_label.png"
            alt="Vintage Label"
            style={{ width: '190px', height: 'auto' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          {weddingData.quotes[2].poem.map((line, idx) => (
            <p
              key={idx}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '17px',
                color: '#2b2b2b',
                lineHeight: '1.8'
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Portrait Photo */}
        <div
          style={{
            width: '100%',
            maxWidth: '360px',
            height: '480px',
            margin: '0 auto',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '4px solid #ffffff',
            boxShadow: '0 16px 36px rgba(136, 5, 5, 0.14)'
          }}
        >
          <img
            src="/assets/poem_portrait.jpeg"
            alt="Hải Đăng & Yến Nhi Portrait"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
