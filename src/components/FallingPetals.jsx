import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function FallingPetals() {
  const canvasRef = useRef(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const petalCount = 8;
    const petals = [];

    // Realistic delicate pink & peach petal colors with gentle transparency
    const colors = [
      'rgba(255, 183, 197, 0.45)',
      'rgba(255, 209, 220, 0.5)',
      'rgba(247, 143, 167, 0.4)',
      'rgba(255, 224, 230, 0.45)',
      'rgba(225, 90, 120, 0.35)'
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 6 + 5,
        speedX: Math.random() * 1.0 - 0.5,
        speedY: Math.random() * 0.8 + 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.025 + 0.01
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.swayAngle += p.swaySpeed;
        p.x += Math.sin(p.swayAngle) * 0.9 + p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Draw elegant curved petal shape
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, -p.size / 4, p.size, p.size / 2);
        ctx.bezierCurveTo(p.size, p.size, p.size / 2, p.size * 1.2, 0, p.size);
        ctx.bezierCurveTo(-p.size / 2, p.size * 1.2, -p.size, p.size, -p.size, p.size / 2);
        ctx.bezierCurveTo(-p.size, -p.size / 4, -p.size / 2, -p.size / 2, 0, 0);
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="petals-canvas"
        style={{ display: isActive ? 'block' : 'none' }}
      />
      <button
        onClick={() => setIsActive(!isActive)}
        title={isActive ? 'Tắt hiệu ứng cánh hoa' : 'Bật hiệu ứng cánh hoa'}
        aria-label="Toggle Petals"
        style={{
          position: 'absolute',
          top: 14,
          left: 14,
          zIndex: 60,
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(136, 5, 5, 0.15)',
          borderRadius: '50%',
          width: 34,
          height: 34,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: isActive ? 'var(--color-primary)' : '#999',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease'
        }}
      >
        <Sparkles size={16} />
      </button>
    </>
  );
}
