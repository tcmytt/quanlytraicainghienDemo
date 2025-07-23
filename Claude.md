# Hệ thống Quản lý Cơ sở Cai Nghiện

## Giới thiệu dự án

### Tên dự án
Hệ thống Quản lý Cơ sở Cai Nghiện

### Mục tiêu
Xây dựng giao diện front-end mẫu để trình bày UI/UX cho giai đoạn thầu dự án chính thức. Giao diện phải:
- Tuân thủ phong cách thiết kế nghiêm túc, đơn giản, dễ thao tác.
- Phù hợp với đặc thù của Bộ Công An.

### Đối tượng sử dụng
- Cán bộ trưởng quản lý trại (Admin)
- Sĩ quan công an
- Cán bộ y tế
- Cán bộ giáo dục và tư vấn

## Công nghệ & Công cụ

### Framework chính
- ReactJS

### Thư viện UI
- React Bootstrap (chỉ sử dụng các thành phần có sẵn, không tự thiết kế ngoài hệ thống này)

### CSS Framework
- Bootstrap (sử dụng qua CDN, không dùng Tailwind)

### Quản lý biểu mẫu
- React Hook Form

### Quản lý trạng thái
- Redux Toolkit

### Biểu tượng
- React Icons (FontAwesome, Bootstrap Icons)

### Cách nhúng thư viện
- Ưu tiên CDN cho Bootstrap CSS & JS.
- Cài đặt qua npm cho các thư viện còn lại.

## Quy tắc phát triển giao diện

### Cấu trúc
- Tuân thủ cấu trúc component-based của React.
- Chia UI thành các thành phần nhỏ, tái sử dụng (ví dụ: `FormInput`, `TableRow`, `SidebarItem`).
- Tổ chức thư mục rõ ràng:
  - `components/`
  - `pages/`
  - `features/`
  - `store/`
  - `types/`
  - `hooks/`

### Yêu cầu UI
- **Đáp ứng**: Tối ưu cho mọi độ phân giải nội bộ, ưu tiên desktop-first.
- **Khả năng tiếp cận (a11y)**: Sử dụng semantic HTML, `tabindex`, ARIA khi cần.
- **Tùy chỉnh**: Tránh over-custom; chỉ override nhẹ (font-size, màu sắc, border) để phù hợp phong cách Bộ Công An.

### Phong cách
- Màu sắc: Đỏ đậm (chủ đạo), vàng nhạt, trắng, xám đậm.
- Biểu tượng: Nghiêm túc, tránh icon hoạt hình hoặc quá hiện đại.
- Hiệu ứng: Không sử dụng hiệu ứng động phức tạp hay màu sắc sinh động.

## Hướng dẫn dành cho AI Assistant (Claude)

### Quy tắc tạo component
- Tuân thủ cấu trúc dự án đã định.
- Tách biệt logic (Redux, hooks) và UI (component).
- Tạo component gọn gàng, dễ đọc, tích hợp kiểm tra lỗi cơ bản với React Hook Form.
- Sử dụng `<Container>`, `<Row>`, `<Col>` từ React Bootstrap cho layout chuẩn.

### Biểu mẫu nhập liệu
- Sử dụng `react-hook-form`.
- Tạo các component riêng cho `Input`, `Select`, `DatePicker`.
- Khai báo kiểu dữ liệu chung trong file `types.ts` nếu cần.

### Nguyên tắc chung
- Sử dụng thành phần có sẵn từ React Bootstrap cho nút bấm, thẻ, biểu mẫu...
- Tránh tự thiết kế thành phần mới khi đã có sẵn trong Bootstrap hoặc thư viện UI.
- Không sử dụng inline-style hoặc CSS thuần, chỉ dùng class từ Bootstrap.

## Cấu trúc thư mục đề xuất

```
src/
├── components/         # Component giao diện tái sử dụng (FormInput, Table, Navbar, etc.)
├── features/           # Module tính năng (hồ sơ, quân trang, tư vấn...)
├── pages/              # Trang (Dashboard, Login, etc.)
├── store/              # Redux Toolkit slices và config store
├── hooks/              # Custom React hooks
├── types/              # Định nghĩa kiểu TypeScript
├── utils/              # Hàm tiện ích dùng chung
└── index.tsx           # Entry point
```

## Ghi chú bổ sung
- Giao diện phải truyền tải tính chính quy, nghiêm túc, dễ sử dụng cho cán bộ hành chính.
- Ưu tiên sự đơn giản, rõ ràng, phù hợp với môi trường quản lý hành chính.
- Code từng phần , không gộp lại khi hết mỗi phần phải hỏi ý kiến để được code tiếp