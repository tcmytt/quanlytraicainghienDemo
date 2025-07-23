export interface LaoDongTriLieu {
    patientId: string
    name: string
    jobType: string
    workingHours: number
    date: string
    evaluation: 'Tốt' | 'Đạt' | 'Chưa đạt' | 'Không hợp tác'
}

export const fakeLaoDongTriLieu: LaoDongTriLieu[] = [
    {
        patientId: 'BN001',
        name: 'Nguyễn Văn Duy',
        jobType: 'Làm vườn',
        workingHours: 4,
        date: '2024-07-01',
        evaluation: 'Tốt'
    },
    {
        patientId: 'BN002',
        name: 'Trần Thị Mai',
        jobType: 'Dọn dẹp khuôn viên',
        workingHours: 3,
        date: '2024-07-02',
        evaluation: 'Đạt'
    },
    {
        patientId: 'BN003',
        name: 'Lê Quốc Toàn',
        jobType: 'Chế biến thực phẩm',
        workingHours: 2,
        date: '2024-07-03',
        evaluation: 'Chưa đạt'
    },
    {
        patientId: 'BN004',
        name: 'Phạm Thị Hương',
        jobType: 'Đan lát thủ công',
        workingHours: 5,
        date: '2024-07-04',
        evaluation: 'Tốt'
    },
    {
        patientId: 'BN005',
        name: 'Vũ Minh Nhật',
        jobType: 'Dọn dẹp nhà bếp',
        workingHours: 2,
        date: '2024-07-05',
        evaluation: 'Không hợp tác'
    },
    {
        patientId: 'BN006',
        name: 'Hoàng Đức Anh',
        jobType: 'Làm cỏ khuôn viên',
        workingHours: 3,
        date: '2024-07-06',
        evaluation: 'Đạt'
    },
    {
        patientId: 'BN007',
        name: 'Nguyễn Thị Hà',
        jobType: 'Gấp bao bì đóng gói',
        workingHours: 4,
        date: '2024-07-07',
        evaluation: 'Tốt'
    },
    {
        patientId: 'BN008',
        name: 'Trần Văn Cường',
        jobType: 'Làm vườn',
        workingHours: 3,
        date: '2024-07-08',
        evaluation: 'Đạt'
    },
    {
        patientId: 'BN009',
        name: 'Đỗ Thị Kim Oanh',
        jobType: 'Chăm sóc cây cảnh',
        workingHours: 2,
        date: '2024-07-09',
        evaluation: 'Tốt'
    },
    {
        patientId: 'BN010',
        name: 'Phan Văn Sơn',
        jobType: 'Chế biến rau củ',
        workingHours: 3,
        date: '2024-07-10',
        evaluation: 'Đạt'
    },
    {
        patientId: 'BN011',
        name: 'Lý Thị Bích Hằng',
        jobType: 'Đóng gói sản phẩm',
        workingHours: 2,
        date: '2024-07-11',
        evaluation: 'Chưa đạt'
    },
    {
        patientId: 'BN012',
        name: 'Mai Văn Hậu',
        jobType: 'Làm vệ sinh khu nhà ăn',
        workingHours: 4,
        date: '2024-07-12',
        evaluation: 'Tốt'
    },
    {
        patientId: 'BN013',
        name: 'Bùi Thị Trang',
        jobType: 'Dọn rác sân trại',
        workingHours: 2,
        date: '2024-07-13',
        evaluation: 'Đạt'
    },
    {
        patientId: 'BN014',
        name: 'Ngô Văn Hoàn',
        jobType: 'Gấp quần áo',
        workingHours: 3,
        date: '2024-07-14',
        evaluation: 'Tốt'
    },
    {
        patientId: 'BN015',
        name: 'Trịnh Thị Phương',
        jobType: 'Tưới cây và chăm vườn',
        workingHours: 4,
        date: '2024-07-15',
        evaluation: 'Tốt'
    }
]
