import React from 'react';
import './HomePage.css';
import { FaUser, FaShirt, FaMoneyBill, FaStethoscope, FaChalkboard, FaToolbox, FaHammer, FaPeopleArrows, FaChartBar, FaBell } from 'react-icons/fa6';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';

const stats = [
    { label: 'Bệnh nhân', value: 120, color: '#b71c1c' },
    { label: 'Điều trị', value: 45, color: '#f57c00' },
    { label: 'Thăm gặp', value: 78, color: '#fbc02d' },
];

const chartData = [
    [
        { name: 'T1', value: 90 },
        { name: 'T2', value: 110 },
        { name: 'T3', value: 120 },
        { name: 'T4', value: 105 },
        { name: 'T5', value: 120 },
    ],
    [
        { name: 'T1', value: 30 },
        { name: 'T2', value: 38 },
        { name: 'T3', value: 42 },
        { name: 'T4', value: 44 },
        { name: 'T5', value: 45 },
    ],
    [
        { name: 'T1', value: 60 },
        { name: 'T2', value: 65 },
        { name: 'T3', value: 70 },
        { name: 'T4', value: 75 },
        { name: 'T5', value: 78 },
    ],
];

const features = [
    { label: 'Quản lý hồ sơ cai nghiện', icon: <FaUser size={32} />, color: '#ffebee' },
    { label: 'Quản lý quân trang', icon: <FaShirt size={32} />, color: '#fff3e0' },
    { label: 'Quản lý tiền lưu ký', icon: <FaMoneyBill size={32} />, color: '#fffde7' },
    { label: 'Quản lý điều trị', icon: <FaStethoscope size={32} />, color: '#b71c1c', textColor: '#fff' },
    { label: 'Quản lý giáo dục tư vấn', icon: <FaChalkboard size={32} />, color: '#ffe0b2' },
    { label: 'Quản lý đào tạo nghề', icon: <FaToolbox size={32} />, color: '#fff9c4' },
    { label: 'Quản lý lao động trị liệu', icon: <FaHammer size={32} />, color: '#d32f2f', textColor: '#fff' },
    { label: 'Quản lý thăm gặp', icon: <FaPeopleArrows size={32} />, color: '#ffccbc' },
];

const chartColors = ['#b71c1c', '#f57c00', '#fbc02d'];

const Arrow = ({ x, y, axis }: { x: number; y: number; axis: 'x' | 'y' }) => {
    // axis: 'x' or 'y'
    if (axis === 'x') {
        return (
            <g>
                <polygon points={`${x - 6},${y - 4} ${x},${y} ${x - 6},${y + 4}`} fill="#888" />
            </g>
        );
    }
    if (axis === 'y') {
        return (
            <g>
                <polygon points={`${x - 4},${y + 6} ${x},${y} ${x + 4},${y + 6}`} fill="#888" />
            </g>
        );
    }
    return null;
};

const HomePage: React.FC = () => {
    return (
        <main className="homepage-main">
            {/* Container 1: Grid 5 cột */}
            <div className="homepage-grid-container grid-5-cols">
                {/* Số liệu thống kê (col span 1) */}
                <div className="homepage-grid-item feature-box" style={{ gridColumn: '1/2' }}>
                    <FaChartBar size={32} style={{ color: '#b71c1c', marginBottom: 8 }} />
                    <div style={{ fontWeight: 600, fontSize: 16, marginTop: 4, color: '#b71c1c' }}>Số liệu thống kê</div>
                </div>
                {/* Thông báo (col span 1) */}
                <div className="homepage-grid-item feature-box" style={{ gridColumn: '2/3' }}>
                    <FaBell size={32} style={{ color: '#f57c00', marginBottom: 8 }} />
                    <div style={{ fontWeight: 600, fontSize: 16, marginTop: 4, color: '#b71c1c' }}>Thông báo</div>
                </div>
                {/* 3 biểu đồ nhỏ (col span 3) */}
                <div className="homepage-grid-item stats-vertical-box feature-box" style={{ gridColumn: '3/6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                    {stats.map((stat, idx) => (
                        <div key={stat.label} style={{ width: '32%', minWidth: 100, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontWeight: 600, fontSize: 15, color: stat.color, marginBottom: 4 }}>{stat.label}</div>
                            <ResponsiveContainer width="100%" height={60}>
                                <LineChart data={chartData[idx]}>
                                    <XAxis dataKey="name" axisLine={{ stroke: '#bbb' }} tickLine={false} tick={{ fontSize: 10, fill: '#888' }}
                                        interval={0}
                                        label={{ value: 'Thời gian', position: 'insideBottomRight', offset: -8, fontSize: 10, fill: '#888' }}
                                    />
                                    <YAxis width={24} axisLine={{ stroke: '#bbb' }} tickLine={false} tick={{ fontSize: 10, fill: '#888' }}
                                        label={{ value: 'Giá trị', angle: -90, position: 'insideLeft', offset: 8, fontSize: 10, fill: '#888' }}
                                    />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="value" stroke={chartColors[idx]} strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                    {/* Mũi tên trục X */}
                                    <Arrow axis="x" x={90} y={55} />
                                    {/* Mũi tên trục Y */}
                                    <Arrow axis="y" x={18} y={5} />
                                </LineChart>
                            </ResponsiveContainer>
                            <div style={{ fontWeight: 700, fontSize: 18, color: stat.color, marginTop: 2 }}>{stat.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Container 2: Grid 5 cột, 2 hàng */}
            <div className="homepage-grid-container grid-5-cols feature-grid">
                {/* Hàng 1: 5 ô quản lý */}
                {features.slice(0, 5).map((feature) => (
                    <div className="homepage-grid-item feature-box" key={feature.label} style={{ background: feature.color, color: feature.textColor || '#b71c1c' }}>
                        <div style={{ marginBottom: 8 }}>{feature.icon}</div>
                        <div style={{ fontWeight: 600, fontSize: 16 }}>{feature.label}</div>
                    </div>
                ))}
                {/* Hàng 2: 3 ô quản lý còn lại, căn trái */}
                {features.slice(5).map((feature) => (
                    <div className="homepage-grid-item feature-box" key={feature.label} style={{ background: feature.color, color: feature.textColor || '#b71c1c' }}>
                        <div style={{ marginBottom: 8 }}>{feature.icon}</div>
                        <div style={{ fontWeight: 600, fontSize: 16 }}>{feature.label}</div>
                    </div>
                ))}
                {/* 2 ô trống cuối hàng 2 để giữ layout 5 cột */}
                <div className="homepage-grid-item empty-box"></div>
                <div className="homepage-grid-item empty-box"></div>
            </div>
        </main>
    );
};

export default HomePage; 