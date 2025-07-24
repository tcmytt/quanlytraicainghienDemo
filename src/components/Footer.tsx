import React from 'react';
import footerBg from '../assets/bg-bca-footer-1.png';
import policeBadge from '../assets/huy-hieu-cong-an-nhan.png';

const Footer: React.FC = () => {
    return (
        <footer style={{ width: '100%', background: 'transparent', padding: 0, margin: 0 }}>
            <div
                style={{
                    width: '100vw',
                    backgroundImage: `url(${footerBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: 120,
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={policeBadge}
                    alt="Huy hiệu Công an"
                    style={{ height: 64, width: 64, margin: '16px 0 8px 0', display: 'block' }}
                />
                <div style={{ color: '#b71c1c', fontWeight: 700, fontSize: 18, textAlign: 'center', marginBottom: 12 }}>
                    © {new Date().getFullYear()} Bộ Công An - Hệ thống Quản lý Cơ sở Cai Nghiện
                </div>
            </div>
        </footer>
    );
};

export default Footer; 