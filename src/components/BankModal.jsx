import React, { useState } from 'react';
import { X, Copy, Check, QrCode } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function BankModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('groom');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentPerson = activeTab === 'groom' ? weddingData.groom : weddingData.bride;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(currentPerson.bank.accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '380px',
          background: '#ffffff',
          borderRadius: '24px',
          padding: '24px 20px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          position: 'relative',
          animation: 'fadeInUp 0.3s ease-out'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#f0ede6',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '18px' }}>
          <p
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--color-gold)',
              fontWeight: '700'
            }}
          >
            Mừng Cưới
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '22px',
              color: 'var(--color-primary)',
              fontWeight: '700',
              marginTop: '2px'
            }}
          >
            Hộp Mừng Hạnh Phúc
          </h3>
          <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
            Cảm ơn tình cảm chân thành của bạn dành cho chúng mình!
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'flex',
            background: '#f4efe8',
            borderRadius: '16px',
            padding: '4px',
            marginBottom: '18px'
          }}
        >
          <button
            onClick={() => {
              setActiveTab('groom');
              setCopied(false);
            }}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: '12px',
              border: 'none',
              background: activeTab === 'groom' ? '#ffffff' : 'transparent',
              color: activeTab === 'groom' ? 'var(--color-primary)' : '#666',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: activeTab === 'groom' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Mừng Chú Rể
          </button>
          <button
            onClick={() => {
              setActiveTab('bride');
              setCopied(false);
            }}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: '12px',
              border: 'none',
              background: activeTab === 'bride' ? '#ffffff' : 'transparent',
              color: activeTab === 'bride' ? 'var(--color-primary)' : '#666',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: activeTab === 'bride' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Mừng Cô Dâu
          </button>
        </div>

        {/* Bank & QR Details */}
        <div style={{ textAlign: 'center' }}>
          {/* QR Code Container */}
          <div
            style={{
              width: '180px',
              height: '180px',
              margin: '0 auto 16px',
              padding: '8px',
              background: '#fff',
              borderRadius: '16px',
              border: '2px solid var(--color-border)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={currentPerson.bank.qrCodeUrl}
              alt="Mã QR Chuyển Khoản"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }}
            />
          </div>

          <div
            style={{
              background: '#faf7f2',
              borderRadius: '14px',
              padding: '12px 14px',
              border: '1px solid #e8e2d5',
              marginBottom: '14px',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '13px' }}>
              <span style={{ color: '#777' }}>Ngân hàng:</span>
              <strong style={{ color: '#222' }}>{currentPerson.bank.bankName}</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '13px' }}>
              <span style={{ color: '#777' }}>Chủ tài khoản:</span>
              <strong style={{ color: '#222' }}>{currentPerson.bank.accountName}</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
              <span style={{ color: '#777' }}>Số tài khoản:</span>
              <strong style={{ color: 'var(--color-primary)', fontSize: '15px' }}>{currentPerson.bank.accountNumber}</strong>
            </div>
          </div>

          <button
            onClick={handleCopyAccount}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: copied ? '#1e7e34' : 'var(--color-primary)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '14px',
              padding: '12px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px rgba(136, 5, 5, 0.2)'
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Đã Sao Chép Số Tài Khoản!' : 'Sao Chép Số Tài Khoản'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
