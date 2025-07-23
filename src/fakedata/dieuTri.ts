export interface DieuTri {
    patientId: string
    name: string
    treatmentType: 'Methadone' | 'Tâm lý' | 'Thuốc hỗ trợ' | 'Cai nghiện bắt buộc'
    startDate: string
    endDate: string
    result: 'Đang điều trị' | 'Hoàn thành' | 'Không hợp tác' | 'Tái nghiện'
}

export const fakeDieuTri: DieuTri[] = [
    {
        patientId: 'BN001',
        name: 'Nguyễn Văn Duy',
        treatmentType: 'Methadone',
        startDate: '2024-06-01',
        endDate: '2024-08-01',
        result: 'Hoàn thành'
    },
    {
        patientId: 'BN002',
        name: 'Trần Thị Mai',
        treatmentType: 'Tâm lý',
        startDate: '2024-07-10',
        endDate: '2024-09-10',
        result: 'Đang điều trị'
    },
    {
        patientId: 'BN003',
        name: 'Lê Quốc Toàn',
        treatmentType: 'Cai nghiện bắt buộc',
        startDate: '2024-01-15',
        endDate: '2024-07-15',
        result: 'Tái nghiện'
    },
    {
        patientId: 'BN004',
        name: 'Phạm Thị Hương',
        treatmentType: 'Thuốc hỗ trợ',
        startDate: '2024-06-20',
        endDate: '2024-07-20',
        result: 'Hoàn thành'
    },
    {
        patientId: 'BN005',
        name: 'Vũ Minh Nhật',
        treatmentType: 'Tâm lý',
        startDate: '2024-03-01',
        endDate: '2024-06-01',
        result: 'Không hợp tác'
    },
    {
        patientId: 'BN006',
        name: 'Hoàng Đức Anh',
        treatmentType: 'Methadone',
        startDate: '2024-04-10',
        endDate: '2024-07-10',
        result: 'Đang điều trị'
    },
    {
        patientId: 'BN007',
        name: 'Nguyễn Thị Hà',
        treatmentType: 'Thuốc hỗ trợ',
        startDate: '2024-05-15',
        endDate: '2024-07-15',
        result: 'Hoàn thành'
    },
    {
        patientId: 'BN008',
        name: 'Trần Văn Cường',
        treatmentType: 'Cai nghiện bắt buộc',
        startDate: '2023-12-01',
        endDate: '2024-06-01',
        result: 'Tái nghiện'
    },
    {
        patientId: 'BN009',
        name: 'Đỗ Thị Kim Oanh',
        treatmentType: 'Tâm lý',
        startDate: '2024-07-01',
        endDate: '2024-09-01',
        result: 'Đang điều trị'
    },
    {
        patientId: 'BN010',
        name: 'Phan Văn Sơn',
        treatmentType: 'Methadone',
        startDate: '2024-02-01',
        endDate: '2024-06-01',
        result: 'Hoàn thành'
    },
    {
        patientId: 'BN011',
        name: 'Lý Thị Bích Hằng',
        treatmentType: 'Thuốc hỗ trợ',
        startDate: '2024-06-15',
        endDate: '2024-08-15',
        result: 'Đang điều trị'
    },
    {
        patientId: 'BN012',
        name: 'Mai Văn Hậu',
        treatmentType: 'Cai nghiện bắt buộc',
        startDate: '2023-11-01',
        endDate: '2024-05-01',
        result: 'Hoàn thành'
    },
    {
        patientId: 'BN013',
        name: 'Bùi Thị Trang',
        treatmentType: 'Tâm lý',
        startDate: '2024-07-01',
        endDate: '2024-08-30',
        result: 'Đang điều trị'
    },
    {
        patientId: 'BN014',
        name: 'Ngô Văn Hoàn',
        treatmentType: 'Methadone',
        startDate: '2024-05-10',
        endDate: '2024-07-10',
        result: 'Không hợp tác'
    },
    {
        patientId: 'BN015',
        name: 'Trịnh Thị Phương',
        treatmentType: 'Thuốc hỗ trợ',
        startDate: '2024-06-01',
        endDate: '2024-07-15',
        result: 'Hoàn thành'
    }
]
