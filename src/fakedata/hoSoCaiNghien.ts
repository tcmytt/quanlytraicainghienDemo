export interface HoSoCaiNghien {
    id: string
    name: string
    age: number
    address: string
    identityNumber: string
    status: 'Đang điều trị' | 'Đã xuất viện' | 'Tái nghiện' | 'Chuyển viện'
    admissionDate: string // ISO format
}

export const fakeHoSoCaiNghien: HoSoCaiNghien[] = [
    {
        id: 'BN001',
        name: 'Nguyễn Văn Duy',
        age: 32,
        address: 'Hà Nội',
        identityNumber: '001234567890',
        status: 'Đang điều trị',
        admissionDate: '2024-11-01'
    },
    {
        id: 'BN002',
        name: 'Trần Thị Mai',
        age: 28,
        address: 'Hải Phòng',
        identityNumber: '012345678901',
        status: 'Đã xuất viện',
        admissionDate: '2024-06-15'
    },
    {
        id: 'BN003',
        name: 'Lê Quốc Toàn',
        age: 35,
        address: 'Nghệ An',
        identityNumber: '023456789012',
        status: 'Tái nghiện',
        admissionDate: '2023-12-22'
    },
    {
        id: 'BN004',
        name: 'Phạm Thị Hương',
        age: 24,
        address: 'Quảng Ninh',
        identityNumber: '034567890123',
        status: 'Đang điều trị',
        admissionDate: '2024-03-10'
    },
    {
        id: 'BN005',
        name: 'Vũ Minh Nhật',
        age: 30,
        address: 'Thái Nguyên',
        identityNumber: '045678901234',
        status: 'Chuyển viện',
        admissionDate: '2024-05-07'
    },
    {
        id: 'BN006',
        name: 'Hoàng Đức Anh',
        age: 29,
        address: 'Nam Định',
        identityNumber: '056789012345',
        status: 'Đang điều trị',
        admissionDate: '2024-04-25'
    },
    {
        id: 'BN007',
        name: 'Nguyễn Thị Hà',
        age: 27,
        address: 'Hưng Yên',
        identityNumber: '067890123456',
        status: 'Đã xuất viện',
        admissionDate: '2024-01-20'
    },
    {
        id: 'BN008',
        name: 'Trần Văn Cường',
        age: 33,
        address: 'Thanh Hóa',
        identityNumber: '078901234567',
        status: 'Tái nghiện',
        admissionDate: '2023-09-14'
    },
    {
        id: 'BN009',
        name: 'Đỗ Thị Kim Oanh',
        age: 22,
        address: 'Hà Tĩnh',
        identityNumber: '089012345678',
        status: 'Đang điều trị',
        admissionDate: '2024-07-01'
    },
    {
        id: 'BN010',
        name: 'Phan Văn Sơn',
        age: 38,
        address: 'Ninh Bình',
        identityNumber: '090123456789',
        status: 'Đã xuất viện',
        admissionDate: '2024-02-18'
    },
    {
        id: 'BN011',
        name: 'Lý Thị Bích Hằng',
        age: 26,
        address: 'Tuyên Quang',
        identityNumber: '101234567890',
        status: 'Đang điều trị',
        admissionDate: '2024-06-03'
    },
    {
        id: 'BN012',
        name: 'Mai Văn Hậu',
        age: 34,
        address: 'Yên Bái',
        identityNumber: '112345678901',
        status: 'Tái nghiện',
        admissionDate: '2023-11-27'
    },
    {
        id: 'BN013',
        name: 'Bùi Thị Trang',
        age: 25,
        address: 'Bắc Giang',
        identityNumber: '123456789012',
        status: 'Đang điều trị',
        admissionDate: '2024-07-15'
    },
    {
        id: 'BN014',
        name: 'Ngô Văn Hoàn',
        age: 36,
        address: 'Hà Nam',
        identityNumber: '134567890123',
        status: 'Chuyển viện',
        admissionDate: '2024-05-30'
    },
    {
        id: 'BN015',
        name: 'Trịnh Thị Phương',
        age: 29,
        address: 'Vĩnh Phúc',
        identityNumber: '145678901234',
        status: 'Đã xuất viện',
        admissionDate: '2024-04-12'
    }
]
