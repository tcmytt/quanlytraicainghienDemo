// src/fakedata/users.ts

export type UserRole = 'admin' | 'cong-an' | 'y-te' | 'giao-duc'

export interface User {
    id: string
    name: string
    username: string
    password: string
    role: UserRole
    description: string
    status: 'active' | 'inactive'
}

export const fakeUsers: User[] = [
    {
        id: 'u001',
        name: 'Trần Chí Đức',
        username: 'admin1',
        password: 'admin123',
        role: 'admin',
        description: 'Admin Quản lý hệ thống',
        status: 'active'
    },
    {
        id: 'u002',
        name: 'Nguyễn Hồng Phúc',
        username: 'admin2',
        password: 'admin456',
        role: 'admin',
        description: 'Admin Quản lý hệ thống',
        status: 'active'
    },
    {
        id: 'u003',
        name: 'Lý Hồng Bính',
        username: 'congan1',
        password: 'ca123',
        role: 'cong-an',
        description: 'Sĩ quan công an',
        status: 'active'
    },
    {
        id: 'u004',
        name: 'Nguyễn Văn Hải',
        username: 'congan2',
        password: 'ca456',
        role: 'cong-an',
        description: 'Sĩ quan công an',
        status: 'inactive'
    },
    {
        id: 'u005',
        name: 'Giang Quốc Hào',
        username: 'yte1',
        password: 'yt123',
        role: 'y-te',
        description: 'Cán bộ y tế',
        status: 'active'
    },
    {
        id: 'u006',
        name: 'Phạm Thị Lan',
        username: 'yte2',
        password: 'yt456',
        role: 'y-te',
        description: 'Cán bộ y tế',
        status: 'active'
    },
    {
        id: 'u007',
        name: 'Lê Minh Tuấn',
        username: 'giaoduc1',
        password: 'gd123',
        role: 'giao-duc',
        description: 'Cán bộ giáo dục',
        status: 'active'
    },
    {
        id: 'u008',
        name: 'Trịnh Thị Bích Ngọc',
        username: 'giaoduc2',
        password: 'gd456',
        role: 'giao-duc',
        description: 'Cán bộ giáo dục',
        status: 'inactive'
    }
]
