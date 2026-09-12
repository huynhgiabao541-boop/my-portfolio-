# Tài liệu Thiết kế (Design Document)

## 1. Tổng quan
Dự án là trang Portfolio cá nhân của Huỳnh Gia Bảo, được thiết kế theo phong cách **Glassmorphism** hiện đại, hỗ trợ giao diện sáng/tối (Light/Dark Mode). Trang web tập trung vào trải nghiệm người dùng với các hiệu ứng chuyển động mượt mà và nền tương tác.

## 2. Typography (Kiểu chữ)
Dự án sử dụng 2 font chữ chính từ Google Fonts:
- **Font chính (Sans-serif):** `Inter` - Dùng cho phần lớn văn bản, tiêu đề. (Weight: 400, 500, 600, 700, 800)
- **Font phụ (Monospace):** `JetBrains Mono` - Dùng cho các thẻ tag, label, tên vai trò, tạo cảm giác "coder". (Weight: 400, 500, 600, 700)

## 3. Bảng màu (Color Palette)
- **Màu thương hiệu (Brand Colors):**
  - Cyan: `#22d3ee` (Màu chủ đạo cho nhấn mạnh, gradient, border)
  - Blue: `#3b82f6` (Kết hợp với Cyan tạo gradient)
  - Dark: `#0f172a` (Màu nhấn trong Dark Mode)
- **Màu nền (Background):**
  - Light Mode: `#f4f4f2`
  - Dark Mode: `#0b0c0e`
- **Hệ thống Grid nền:**
  - Sử dụng `linear-gradient` tạo ra lớp lưới mờ (grid) kích thước 64x64px ở dưới nền.

## 4. UI Components & Style (Thành phần giao diện)
- **Glassmorphism (Thẻ kính):** 
  - Class `.glass-card`, `.glass-nav`.
  - Kết hợp `backdrop-blur-xl`, nền trắng/trong suốt (white/30 hoặc slate-800/30).
  - Viền mờ (`border-white/40`), có đổ bóng (shadow) mượt.
- **Liquid Pill:**
  - Nút bấm bo góc dạng viên thuốc (`.liquid-pill`), hiệu ứng hover đổi màu nền và viền.
- **Gradient Borders:**
  - Class `.prism-good-border` với gradient từ Cyan tạo viền sáng đẹp mắt.
- **Text Gradient:**
  - Tiêu đề sử dụng `.text-gradient-cyan` (gradient từ Cyan sang Blue, và từ Cyan sang White ở Dark Mode).

## 5. Hiệu ứng (Animations & Effects)
- **Background Blobs:** 4 khối màu mờ (cyan, blue, purple) trôi nổi vô định ở background (`animation: float`).
- **Liquid Morph:** Hiệu ứng biến đổi hình dạng chất lỏng (`animate-liquid-morph`) xung quanh avatar.
- **Ripple Effect:** Hiệu ứng gợn sóng khi click vào các nút dạng `.liquid-pill` (được xử lý bằng JavaScript).
- **Preloader:** Màn hình chờ có ảnh GIF, mờ dần sau 2.5 giây.

## 6. Công nghệ sử dụng
- **Cấu trúc:** HTML5.
- **CSS Framework:** Tailwind CSS (nạp qua CDN với custom config).
- **Icons:** Phosphor Icons.
- **Tương tác:** Vanilla JavaScript (chuyển đổi theme, hiệu ứng ripple, preloader).
