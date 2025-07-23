# Todo List - Hệ thống Quản lý Cơ sở Cai Nghiện

1. [ ] Khởi tạo dự án ReactJS
   1.1. [ ] Sử dụng lệnh: `npx create-react-app my-app --template typescript` (khuyến nghị TypeScript).
2. [ ] Cài đặt các thư viện cần thiết
   2.1. [ ] Chạy lệnh: `npm install react-bootstrap bootstrap react-hook-form @reduxjs/toolkit react-icons`.
3. [ ] Cấu hình `public/index.html`
   3.1. [ ] Thêm CDN: Bootstrap CSS, React Bootstrap JS, React Hook Form, Redux Toolkit, React Icons.
4. [ ] Tạo cấu trúc thư mục
   4.1. [ ] Tạo `/src/components`.
   4.2. [ ] Tạo `/src/pages`.
   4.3. [ ] Tạo `/src/store`.
   4.4. [ ] Tạo `/src/utils`.
   4.5. [ ] Tạo `/src/assets`.

5. [ ] Xây dựng component `Header`
   5.1. [ ] Thiết kế trạng thái trước đăng nhập
      5.1.1. [ ] Thêm logo Bộ Công an.
      5.1.2. [ ] Thêm "Hệ thống Quản lý Cơ sở Cai Nghiện - Bộ Công An".
      5.1.3. [ ] Thêm nút "Đăng nhập".
   5.2. [ ] Thiết kế trạng thái sau đăng nhập
      5.2.1. [ ] Thêm ảnh cán bộ.
      5.2.2. [ ] Thêm "Tên cán bộ - Vai trò" (ví dụ: Nguyễn Văn A - Cán bộ trưởng).
      5.2.3. [ ] Thêm menu (Cài đặt, Đăng xuất, Hỗ trợ).

6. [ ] Tạo trang `HomePage`
   6.1. [ ] Xây dựng phần trên (hỗ trợ)
      6.1.1. [ ] Tạo số liệu tổng quan (bảng/sơ đồ với chỉ số chung chung: "Tổng số bệnh nhân", "Số ca điều trị", "Số lượt thăm gặp").
      6.1.2. [ ] Tạo khu vực thông báo (ví dụ: "Cập nhật quy trình mới").
   6.2. [ ] Xây dựng phần dưới (8 ô chức năng)
      6.2.1. [ ] Tạo 8 ô chữ nhật (responsive, màu sắc: đỏ nhạt, cam, vàng nhạt, đỏ đậm, cam nhạt, vàng, đỏ, cam đậm).
      6.2.2. [ ] Thêm icon (fa-user, fa-shirt, fa-money-bill, fa-stethoscope, fa-chalkboard, fa-tools, fa-hammer, fa-people-arrows).
      6.2.3. [ ] Thêm văn bản tên chức năng (ví dụ: "Quản lý hồ sơ cai nghiện").
      6.2.4. [ ] Thêm hiệu ứng hover (chuyển màu đậm, viền nổi).
      6.2.5. [ ] Thiết lập chuyển hướng đến phần quản lý.
      6.2.6. [ ] Áp dụng phân quyền cho các ô.

7. [ ] Tạo trang `QuanLyHoSoCaiNghien`
   7.1. [ ] Tạo thanh tìm kiếm ngang với nút "Tìm kiếm".
   7.2. [ ] Thêm nút "Thêm".
   7.3. [ ] Tạo bộ lọc (filter) cho Tình trạng bệnh và Ngày nhập viện.
   7.4. [ ] Tạo bảng dữ liệu
      7.4.1. [ ] Liệt kê: Mã bệnh nhân, Tên, Tuổi, Quê quán, Số căn cước, Tình trạng bệnh, Ngày nhập viện.
      7.4.2. [ ] Thêm nút sửa, xóa, xuất dữ liệu từng hàng.
   7.5. [ ] Tạo phân trang (mặc định 10, cho phép nhập).
   7.6. [ ] Tạo popup thêm/sửa/xóa ở góc phải dưới (có xác nhận).
   7.7. [ ] Tích hợp dữ liệu fake (15 bản ghi).

8. [ ] Tạo trang `QuanLyQuanTrang`
   8.1. [ ] Tạo thanh tìm kiếm ngang với nút "Tìm kiếm".
   8.2. [ ] Thêm nút "Thêm".
   8.3. [ ] Tạo bộ lọc (filter) cho Trạng thái và Ngày cấp phát.
   8.4. [ ] Tạo bảng dữ liệu
      8.4.1. [ ] Liệt kê: Mã quân trang, Tên quân trang, Kích thước, Số lượng, Trạng thái, Ngày cấp phát.
      8.4.2. [ ] Thêm nút sửa, xóa, xuất dữ liệu từng hàng.
   8.5. [ ] Tạo phân trang (mặc định 10, cho phép nhập).
   8.6. [ ] Tạo popup thêm/sửa/xóa ở góc phải dưới (có xác nhận).
   8.7. [ ] Tích hợp dữ liệu fake (15 bản ghi).

9. [ ] Tạo trang `QuanLyTienLuuKy`
   9.1. [ ] Tạo thanh tìm kiếm ngang với nút "Tìm kiếm".
   9.2. [ ] Thêm nút "Thêm".
   9.3. [ ] Tạo bộ lọc (filter) cho Trạng thái và Ngày gửi.
   9.4. [ ] Tạo bảng dữ liệu
      9.4.1. [ ] Liệt kê: Mã giao dịch, Mã bệnh nhân, Số tiền, Ngày gửi, Nguồn tiền, Trạng thái.
      9.4.2. [ ] Thêm nút sửa, xóa, xuất dữ liệu từng hàng.
   9.5. [ ] Tạo phân trang (mặc định 10, cho phép nhập).
   9.6. [ ] Tạo popup thêm/sửa/xóa ở góc phải dưới (có xác nhận).
   9.7. [ ] Tích hợp dữ liệu fake (15 bản ghi).

10. [ ] Tạo trang `QuanLyDieuTriCaiNghien`
    10.1. [ ] Tạo thanh tìm kiếm ngang với nút "Tìm kiếm".
    10.2. [ ] Thêm nút "Thêm".
    10.3. [ ] Tạo bộ lọc (filter) cho Loại điều trị và Ngày bắt đầu.
    10.4. [ ] Tạo bảng dữ liệu
       10.4.1. [ ] Liệt kê: Mã bệnh nhân, Tên, Loại điều trị, Ngày bắt đầu, Ngày kết thúc, Kết quả.
       10.4.2. [ ] Thêm nút sửa, xóa, xuất dữ liệu từng hàng.
    10.5. [ ] Tạo phân trang (mặc định 10, cho phép nhập).
    10.6. [ ] Tạo popup thêm/sửa/xóa ở góc phải dưới (có xác nhận).
    10.7. [ ] Tích hợp dữ liệu fake (15 bản ghi).

11. [ ] Tạo trang `QuanLyGiaoDucTuVan`
    11.1. [ ] Tạo thanh tìm kiếm ngang với nút "Tìm kiếm".
    11.2. [ ] Thêm nút "Thêm".
    11.3. [ ] Tạo bộ lọc (filter) cho Chủ đề tư vấn và Ngày thực hiện.
    11.4. [ ] Tạo bảng dữ liệu
       11.4.1. [ ] Liệt kê: Mã bệnh nhân, Tên, Chủ đề tư vấn, Ngày thực hiện, Người tư vấn, Ghi chú.
       11.4.2. [ ] Thêm nút sửa, xóa, xuất dữ liệu từng hàng.
    11.5. [ ] Tạo phân trang (mặc định 10, cho phép nhập).
    11.6. [ ] Tạo popup thêm/sửa/xóa ở góc phải dưới (có xác nhận).
    11.7. [ ] Tích hợp dữ liệu fake (15 bản ghi).

12. [ ] Tạo trang `QuanLyDaoTaoNghe`
    12.1. [ ] Tạo thanh tìm kiếm ngang với nút "Tìm kiếm".
    12.2. [ ] Thêm nút "Thêm".
    12.3. [ ] Tạo bộ lọc (filter) cho Nghề học và Chứng chỉ.
    12.4. [ ] Tạo bảng dữ liệu
       12.4.1. [ ] Liệt kê: Mã bệnh nhân, Tên, Nghề học, Thời gian đào tạo, Điểm số, Chứng chỉ.
       12.4.2. [ ] Thêm nút sửa, xóa, xuất dữ liệu từng hàng.
    12.5. [ ] Tạo phân trang (mặc định 10, cho phép nhập).
    12.6. [ ] Tạo popup thêm/sửa/xóa ở góc phải dưới (có xác nhận).
    12.7. [ ] Tích hợp dữ liệu fake (15 bản ghi).

13. [ ] Tạo trang `QuanLyLaoDongTriLieu`
    13.1. [ ] Tạo thanh tìm kiếm ngang với nút "Tìm kiếm".
    13.2. [ ] Thêm nút "Thêm".
    13.3. [ ] Tạo bộ lọc (filter) cho Loại công việc và Ngày thực hiện.
    13.4. [ ] Tạo bảng dữ liệu
       13.4.1. [ ] Liệt kê: Mã bệnh nhân, Tên, Loại công việc, Số giờ làm, Ngày thực hiện, Đánh giá.
       13.4.2. [ ] Thêm nút sửa, xóa, xuất dữ liệu từng hàng.
    13.5. [ ] Tạo phân trang (mặc định 10, cho phép nhập).
    13.6. [ ] Tạo popup thêm/sửa/xóa ở góc phải dưới (có xác nhận).
    13.7. [ ] Tích hợp dữ liệu fake (15 bản ghi).

14. [ ] Tạo trang `QuanLyThamGap`
    14.1. [ ] Tạo thanh tìm kiếm ngang với nút "Tìm kiếm".
    14.2. [ ] Thêm nút "Thêm".
    14.3. [ ] Tạo bộ lọc (filter) cho Tần suất và Thời gian gặp.
    14.4. [ ] Tạo bảng dữ liệu
       14.4.1. [ ] Liệt kê: Mã bệnh nhân, Tên, Tên người thăm, Thời gian gặp, Tần suất, Ghi chú.
       14.4.2. [ ] Thêm nút sửa, xóa, xuất dữ liệu từng hàng.
    14.5. [ ] Tạo phân trang (mặc định 10, cho phép nhập).
    14.6. [ ] Tạo popup thêm/sửa/xóa ở góc phải dưới (có xác nhận).
    14.7. [ ] Tích hợp dữ liệu fake (15 bản ghi).

15. [ ] Thiết lập Redux store
    15.1. [ ] Tạo reducers cho phân quyền và dữ liệu.
16. [ ] Áp dụng phân quyền
    16.1. [ ] Admin Quản lý hệ thống: Tất cả 8 chức năng.
    16.2. [ ] Sĩ quan công an: Hồ sơ, Quân trang, Tiền lưu ký, Thăm gặp.
    16.3. [ ] Cán bộ y tế: Hồ sơ, Điều trị, Lao động trị liệu.
    16.4. [ ] Cán bộ giáo dục: Hồ sơ, Giáo dục, Đào tạo nghề.
17. [ ] Tích hợp tính năng tìm kiếm
    17.1. [ ] Triển khai chức năng tìm kiếm với nút "Tìm kiếm".
18. [ ] Tích hợp tính năng phân trang
    18.1. [ ] Thiết lập phân trang (mặc định 10, cho phép nhập).
19. [ ] Tích hợp tính năng lọc dữ liệu
    19.1. [ ] Triển khai bộ lọc (filter) riêng cho từng chức năng.
20. [ ] Tích hợp tính năng thêm/sửa/xóa
    20.1. [ ] Tạo popup ở góc phải dưới với xác nhận.
21. [ ] Tích hợp tính năng xuất dữ liệu
    21.1. [ ] Thêm nút xuất từng hàng/cả bảng với popup xác nhận.