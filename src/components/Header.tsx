import React from 'react';
import { Container } from 'react-bootstrap';
import headerBg from '../assets/bg-head-new.png';
import policeBadge from '../assets/huy-hieu-cong-an-nhan.png';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header style={{ width: '100%', background: 'transparent', padding: 0, margin: 0 }}>
            <div
                style={{
                    width: '100vw',
                    backgroundImage: `url(${headerBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: 100,
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <div className="header-inner-container">
                    {/* Huy hiệu và tiêu đề */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={policeBadge}
                            alt="Huy hiệu Công an"
                            style={{ height: 80, width: 80, marginRight: 24, flexShrink: 0 }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ color: '#b71c1c', fontWeight: 700, fontSize: 28, lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: 1 }}>
                                Hệ thống quản lý cơ sở cai nghiện
                            </span>
                            <span style={{ color: '#b71c1c', fontWeight: 800, fontSize: 28, textTransform: 'uppercase', letterSpacing: 1, marginTop: 2, textAlign: 'center' }}>
                                Bộ công an
                            </span>
                        </div>
                    </div>
                    {/* Nút Đăng Nhập | Đăng Ký */}
                    <div className="header-auth-links">
                        <a href="#" className="header-link">Đăng Nhập</a>
                        <span style={{ margin: '0 8px', color: '#b71c1c', fontWeight: 600 }}>|</span>
                        <a href="#" className="header-link">Đăng Ký</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 