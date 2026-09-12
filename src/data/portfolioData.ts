export const experiences = [
  {
    id: 1,
    role: "Backend & Frontend Developer",
    company: "T.A Technical Consulting Co., Ltd.",
    period: "04/2025 - Nay",
    description: "Tham gia thiết kế và phát triển các hệ thống Web/API (E-commerce, Quản lý, Hạ tầng giao thông) sử dụng Node.js (TypeScript), .NET Core, ReactJS, và PostgreSQL. Áp dụng Clean Architecture, CQRS, GraphQL; tích hợp Cloud Services (AWS S3, Firebase); tự động hóa xử lý báo cáo và background tasks.",
  },
  {
    id: 2,
    role: "Backend Intern",
    company: "Amazing Technology Solutions Company Limited",
    period: "12/2024 - 04/2025",
    description: "Phát triển Hệ thống Quản lý Sản xuất & QA/QC cho nhà máy may mặc: xây dựng backend services (.NET Core, Microservices, Clean Architecture) và tối ưu cơ sở dữ liệu SQL cho dữ liệu thời gian thực; số hóa quy trình và giảm thiểu sai sót thủ công.",
  }
];

export const projects = [
  {
    id: 1,
    name: "SEAL System",
    role: "Project Leader · Backend",
    description: "Vai trò Project Leader, dẫn dắt đội ngũ phát triển bằng .NET Core, Clean Architecture và CQRS với MediatR. Phát triển các module cốt lõi như Authentication & Authorization, quản lý Sự kiện, xử lý khiếu nại. Thiết kế và tối ưu CSDL SQL Server hỗ trợ cấu trúc giải đấu phức tạp đa vai trò.",
    techStack: [".NET Core", "CQRS", "Clean Architecture", "SQL Server"],
    link: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_82zqNZcxeduWadvnISzoWU25JTF6Y9bAp43sFv4lIM3q_5NuVNhq39C&s=10"
  },
  {
    id: 2,
    name: "Task24h",
    role: "Backend · Frontend",
    description: "Tiếp nhận và bảo trì hệ thống quản lý bán lẻ ERP (ReactJS, Node.js, PostgreSQL, Hasura GraphQL). Phân tích luồng dữ liệu, sửa lỗi, viết GraphQL queries/mutations và quản lý phân quyền Authorization qua JWT.",
    techStack: ["ReactJS", "Node.js", "GraphQL", "PostgreSQL"],
    link: "https://erp.task24h.com/",
    image: "https://cdn.hstatic.net/200000962736/file/kho-van-la-gi-3_ad072632eb57422aa8cf76333267b2b8.jpg"
  },
  {
    id: 3,
    name: "Library System",
    role: "Backend",
    description: "Phát triển hệ thống Backend mượn/trả sách thư viện với .NET 10/C#, tuân thủ Clean Architecture và CQRS. Tích hợp Hangfire xử lý background (tự động cập nhật trạng thái mượn, kiểm tra sách quá hạn).",
    techStack: [".NET 10", "EF Core", "Hangfire", "CQRS"],
    link: "https://thuvienxaloiphat.vn",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=9000&w=1200&fit=clip&fm=jpg"
  },
  {
    id: 4,
    name: "Traffic Infrastructure",
    role: "Backend",
    description: "Phát triển RESTful APIs bằng Node.js/TypeScript số hóa báo cáo sự cố hạ tầng giao thông. Tạo module xuất báo cáo PDF/Excel/Word, xử lý ảnh với Sharp, lưu trữ AWS S3. Quản lý dữ liệu với Prisma ORM.",
    techStack: ["Node.js (TS)", "Prisma", "AWS S3", "PostgreSQL"],
    link: "https://xn2.caupha.net",
    image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/5/11/1338596/Cau-Ben-Rung.jpg"
  },
  {
    id: 5,
    name: "Rhymo",
    role: "Backend",
    description: "Phát triển hệ thống Backend quản lý dữ liệu người chơi, tiến độ học, ngân hàng câu hỏi game âm nhạc. Tích hợp Groq API tự động sinh câu hỏi bằng AI. Cấu hình Docker & Jenkins CI/CD.",
    techStack: [".NET Core", "Groq API", "Docker", "Jenkins CI/CD"],
    link: "",
    image: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/hinh_nen_am_nhac_cover_735bc482b1.png"
  },
  {
    id: 6,
    name: "Production & QA/QC",
    role: "Backend Intern",
    description: "Triển khai hệ thống Microservices & Clean Architecture quản lý quy trình sản xuất và dữ liệu QA/QC. Tối ưu SQL server để truy vấn và xử lý dữ liệu kiểm tra thời gian thực.",
    techStack: [".NET Core", "Microservices", "SQL Server"],
    link: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqb5MxmKDFpnXADc8pMFId3OxoGDvhHvV2mDy_iBCAXoLohbcMiTqqDeY&s=10"
  }
];

export const skills = {
  backend: [".NET (C#)", "Node.js (Express, NestJS)", "RESTful API"],
  frontend: ["React", "Tailwind CSS", "Vite"],
  databases: ["SQL Server", "MySQL", "PostgreSQL"],
  devops: ["Docker", "Portainer", "Jenkins", "Cloud Server (VPS)", "CI/CD"],
  tools: ["Visual Studio", "VS Code", "Git/GitHub", "Postman"],
  softSkills: ["Làm việc nhóm", "Thuyết trình", "Giải quyết vấn đề"]
};
