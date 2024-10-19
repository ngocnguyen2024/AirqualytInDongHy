# Quản Lý Chất Lượng Không Khí Huyện Đồng Hỷ

Dự án này nhằm mục đích phát triển một hệ thống quản lý chất lượng không khí cho huyện Đồng Hỷ, cung cấp thông tin về chất lượng không khí theo thời gian thực và các bài viết phân tích về ô nhiễm không khí.

## Tính Năng

- Đăng ký và đăng nhập người dùng
- Hiển thị chất lượng không khí theo thời gian thực
- Biểu đồ trực quan về các chỉ số chất lượng không khí
- Danh sách các bài viết phân tích về ô nhiễm không khí

## Công Nghệ Sử Dụng

- HTML, CSS, JavaScript
- Chart.js cho biểu đồ
- API AQI để lấy dữ liệu chất lượng không khí
- Firebase cho quản lý người dùng (nếu có)

## Hướng Dẫn Cài Đặt

1. **Clone Repository**
   ```bash
   git clone https://github.com/ngocnguyen2024/AirqualytInDongHy.git
   cd AirqualytInDongHy
project/
│
├── index.html            (Trang chính hoặc trang dashboard sau khi đăng nhập)
├── login.html            (Trang đăng nhập)
├── register.html         (Trang đăng ký)
├── style.css             (Tệp chứa các quy tắc CSS chung)
└── script.js             (Tệp chứa mã JavaScript)
