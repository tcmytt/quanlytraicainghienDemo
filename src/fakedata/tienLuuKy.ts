export interface TienLuuKy {
    id: string
    patientId: string
    amount: number
    date: string
    source: 'Gia đình' | 'Tự đóng' | 'Ủng hộ'
    status: 'Đã nhận' | 'Đang xử lý' | 'Bị từ chối'
}

export const fakeTienLuuKy: TienLuuKy[] = [
    {
        id: 'GD001',
        patientId: 'BN001',
        amount: 500000,
        date: '2024-07-01',
        source: 'Gia đình',
        status: 'Đã nhận'
    },
    {
        id: 'GD002',
        patientId: 'BN002',
        amount: 300000,
        date: '2024-07-02',
        source: 'Tự đóng',
        status: 'Đang xử lý'
    },
    {
        id: 'GD003',
        patientId: 'BN003',
        amount: 200000,
        date: '2024-07-03',
        source: 'Gia đình',
        status: 'Đã nhận'
    },
    {
        id: 'GD004',
        patientId: 'BN004',
        amount: 1000000,
        date: '2024-07-04',
        source: 'Ủng hộ',
        status: 'Đã nhận'
    },
    {
        id: 'GD005',
        patientId: 'BN005',
        amount: 250000,
        date: '2024-07-05',
        source: 'Tự đóng',
        status: 'Bị từ chối'
    },
    {
        id: 'GD006',
        patientId: 'BN006',
        amount: 600000,
        date: '2024-07-06',
        source: 'Gia đình',
        status: 'Đã nhận'
    },
    {
        id: 'GD007',
        patientId: 'BN007',
        amount: 400000,
        date: '2024-07-07',
        source: 'Tự đóng',
        status: 'Đang xử lý'
    },
    {
        id: 'GD008',
        patientId: 'BN008',
        amount: 150000,
        date: '2024-07-08',
        source: 'Ủng hộ',
        status: 'Đã nhận'
    },
    {
        id: 'GD009',
        patientId: 'BN009',
        amount: 700000,
        date: '2024-07-09',
        source: 'Gia đình',
        status: 'Đã nhận'
    },
    {
        id: 'GD010',
        patientId: 'BN010',
        amount: 300000,
        date: '2024-07-10',
        source: 'Tự đóng',
        status: 'Bị từ chối'
    },
    {
        id: 'GD011',
        patientId: 'BN011',
        amount: 800000,
        date: '2024-07-11',
        source: 'Gia đình',
        status: 'Đã nhận'
    },
    {
        id: 'GD012',
        patientId: 'BN012',
        amount: 450000,
        date: '2024-07-12',
        source: 'Ủng hộ',
        status: 'Đang xử lý'
    },
    {
        id: 'GD013',
        patientId: 'BN013',
        amount: 550000,
        date: '2024-07-13',
        source: 'Tự đóng',
        status: 'Đã nhận'
    },
    {
        id: 'GD014',
        patientId: 'BN014',
        amount: 200000,
        date: '2024-07-14',
        source: 'Gia đình',
        status: 'Đã nhận'
    },
    {
        id: 'GD015',
        patientId: 'BN015',
        amount: 350000,
        date: '2024-07-15',
        source: 'Ủng hộ',
        status: 'Đã nhận'
    }
]
