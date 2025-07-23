export interface QuanTrang {
    id: string
    name: string
    size: string | null
    quantity: number
    status: 'Đã cấp' | 'Chờ cấp' | 'Hỏng'
    issuedDate: string
}

export const fakeQuanTrang: QuanTrang[] = [
    {
        id: 'QT001',
        name: 'Quần dài',
        size: 'L',
        quantity: 2,
        status: 'Đã cấp',
        issuedDate: '2024-07-01'
    },
    {
        id: 'QT002',
        name: 'Áo sơ mi',
        size: 'M',
        quantity: 2,
        status: 'Đã cấp',
        issuedDate: '2024-07-01'
    },
    {
        id: 'QT003',
        name: 'Áo khoác',
        size: 'L',
        quantity: 1,
        status: 'Chờ cấp',
        issuedDate: '2024-07-20'
    },
    {
        id: 'QT004',
        name: 'Bàn chải đánh răng',
        size: null,
        quantity: 1,
        status: 'Đã cấp',
        issuedDate: '2024-07-05'
    },
    {
        id: 'QT005',
        name: 'Khăn mặt',
        size: null,
        quantity: 2,
        status: 'Đã cấp',
        issuedDate: '2024-07-03'
    },
    {
        id: 'QT006',
        name: 'Áo thun',
        size: 'XL',
        quantity: 3,
        status: 'Đã cấp',
        issuedDate: '2024-07-04'
    },
    {
        id: 'QT007',
        name: 'Quần đùi',
        size: 'M',
        quantity: 2,
        status: 'Chờ cấp',
        issuedDate: '2024-07-22'
    },
    {
        id: 'QT008',
        name: 'Mũ vải',
        size: 'Free',
        quantity: 1,
        status: 'Đã cấp',
        issuedDate: '2024-06-30'
    },
    {
        id: 'QT009',
        name: 'Giày thể thao',
        size: '42',
        quantity: 1,
        status: 'Đã cấp',
        issuedDate: '2024-07-01'
    },
    {
        id: 'QT010',
        name: 'Khăn tắm',
        size: null,
        quantity: 1,
        status: 'Hỏng',
        issuedDate: '2024-06-15'
    },
    {
        id: 'QT011',
        name: 'Áo mưa',
        size: 'XL',
        quantity: 1,
        status: 'Đã cấp',
        issuedDate: '2024-06-20'
    },
    {
        id: 'QT012',
        name: 'Dép nhựa',
        size: '41',
        quantity: 1,
        status: 'Đã cấp',
        issuedDate: '2024-07-02'
    },
    {
        id: 'QT013',
        name: 'Túi xách vải',
        size: null,
        quantity: 1,
        status: 'Chờ cấp',
        issuedDate: '2024-07-23'
    },
    {
        id: 'QT014',
        name: 'Lược',
        size: null,
        quantity: 1,
        status: 'Đã cấp',
        issuedDate: '2024-07-03'
    },
    {
        id: 'QT015',
        name: 'Áo ba lỗ',
        size: 'L',
        quantity: 2,
        status: 'Hỏng',
        issuedDate: '2024-07-01'
    }
]
