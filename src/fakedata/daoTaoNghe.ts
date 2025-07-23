export interface DaoTaoNghe {
    patientId: string
    name: string
    skill: string
    duration: string
    score: number
    certificate: 'Đã cấp' | 'Chưa cấp'
}

export const fakeDaoTaoNghe: DaoTaoNghe[] = [
    {
        patientId: 'BN001',
        name: 'Nguyễn Văn Duy',
        skill: 'May mặc',
        duration: '3 tháng',
        score: 8.5,
        certificate: 'Đã cấp'
    },
    {
        patientId: 'BN002',
        name: 'Trần Thị Mai',
        skill: 'Chế biến thực phẩm',
        duration: '2 tháng',
        score: 7.0,
        certificate: 'Đã cấp'
    },
    {
        patientId: 'BN003',
        name: 'Lê Quốc Toàn',
        skill: 'Cơ khí cơ bản',
        duration: '4 tháng',
        score: 6.5,
        certificate: 'Chưa cấp'
    },
    {
        patientId: 'BN004',
        name: 'Phạm Thị Hương',
        skill: 'Trồng rau sạch',
        duration: '1.5 tháng',
        score: 9.0,
        certificate: 'Đã cấp'
    },
    {
        patientId: 'BN005',
        name: 'Vũ Minh Nhật',
        skill: 'Điện dân dụng',
        duration: '3 tháng',
        score: 5.5,
        certificate: 'Chưa cấp'
    },
    {
        patientId: 'BN006',
        name: 'Hoàng Đức Anh',
        skill: 'Cắt tóc nam nữ',
        duration: '2 tháng',
        score: 8.0,
        certificate: 'Đã cấp'
    },
    {
        patientId: 'BN007',
        name: 'Nguyễn Thị Hà',
        skill: 'Nấu ăn gia đình',
        duration: '1 tháng',
        score: 9.5,
        certificate: 'Đã cấp'
    },
    {
        patientId: 'BN008',
        name: 'Trần Văn Cường',
        skill: 'Cơ khí sửa xe máy',
        duration: '3 tháng',
        score: 6.0,
        certificate: 'Chưa cấp'
    },
    {
        patientId: 'BN009',
        name: 'Đỗ Thị Kim Oanh',
        skill: 'Trang điểm cá nhân',
        duration: '1 tháng',
        score: 9.2,
        certificate: 'Đã cấp'
    },
    {
        patientId: 'BN010',
        name: 'Phan Văn Sơn',
        skill: 'Chế tác gỗ',
        duration: '3.5 tháng',
        score: 7.8,
        certificate: 'Đã cấp'
    },
    {
        patientId: 'BN011',
        name: 'Lý Thị Bích Hằng',
        skill: 'Tin học văn phòng',
        duration: '2 tháng',
        score: 8.7,
        certificate: 'Đã cấp'
    },
    {
        patientId: 'BN012',
        name: 'Mai Văn Hậu',
        skill: 'Chăn nuôi gà',
        duration: '2.5 tháng',
        score: 7.2,
        certificate: 'Chưa cấp'
    },
    {
        patientId: 'BN013',
        name: 'Bùi Thị Trang',
        skill: 'Nấu ăn tập thể',
        duration: '2 tháng',
        score: 9.0,
        certificate: 'Đã cấp'
    },
    {
        patientId: 'BN014',
        name: 'Ngô Văn Hoàn',
        skill: 'Làm vườn hữu cơ',
        duration: '3 tháng',
        score: 6.8,
        certificate: 'Chưa cấp'
    },
    {
        patientId: 'BN015',
        name: 'Trịnh Thị Phương',
        skill: 'Thêu tay thủ công',
        duration: '1.5 tháng',
        score: 8.9,
        certificate: 'Đã cấp'
    }
]
