import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      "nav": {
        "about": "Về tôi",
        "education": "Học vấn",
        "experience": "Kinh nghiệm",
        "projects": "Dự án",
        "skills": "Kỹ năng"
      },
      "hero": {
        "hello": "Xin chào, tôi là",
        "role": "Backend Developer (.NET & NodeJS)",
        "exp_highlight": "Hơn 1 năm kinh nghiệm",
        "desc_1": " xây dựng hệ thống quy mô lớn với ",
        "desc_2": " và ",
        "desc_3": ". Đam mê thiết kế & tối ưu CSDL SQL. Từng trực tiếp phát triển phần mềm quản lý cho cơ quan nhà nước và tổ chức doanh nghiệp.",
        "view_projects": "Xem Dự Án",
        "download_cv": "Tải CV"
      },
      "education": {
        "gpa": "Điểm trung bình (GPA):",
        "desc": "Chuyên ngành Kỹ thuật Phần mềm, được đào tạo bài bản về kiến trúc phần mềm, cơ sở dữ liệu, và quy trình phát triển dự án."
      },
      "experience_list": {
        "1": {
          "role": "Backend & Frontend Developer",
          "company": "T.A Technical Consulting Co., Ltd.",
          "period": "04/2025 - Nay",
          "description": "Tham gia thiết kế và phát triển các hệ thống Web/API (E-commerce, Quản lý, Hạ tầng giao thông) sử dụng Node.js (TypeScript), .NET Core, ReactJS, và PostgreSQL. Áp dụng Clean Architecture, CQRS, GraphQL; tích hợp Cloud Services (AWS S3, Firebase); tự động hóa xử lý báo cáo và background tasks."
        },
        "2": {
          "role": "Backend Intern",
          "company": "Amazing Technology Solutions Company Limited",
          "period": "12/2024 - 04/2025",
          "description": "Phát triển Hệ thống Quản lý Sản xuất & QA/QC cho nhà máy may mặc: xây dựng backend services (.NET Core, Microservices, Clean Architecture) và tối ưu cơ sở dữ liệu SQL cho dữ liệu thời gian thực; số hóa quy trình và giảm thiểu sai sót thủ công."
        }
      },
      "projects_list": {
        "title": "Dự án nổi bật",
        "1": {
          "role": "Project Leader · Backend",
          "description": "Vai trò Project Leader, dẫn dắt đội ngũ phát triển bằng .NET Core, Clean Architecture và CQRS với MediatR. Phát triển các module cốt lõi như Authentication & Authorization, quản lý Sự kiện, xử lý khiếu nại. Thiết kế và tối ưu CSDL SQL Server hỗ trợ cấu trúc giải đấu phức tạp đa vai trò."
        },
        "2": {
          "role": "Backend · Frontend",
          "description": "Tiếp nhận và bảo trì hệ thống quản lý bán lẻ ERP (ReactJS, Node.js, PostgreSQL, Hasura GraphQL). Phân tích luồng dữ liệu, sửa lỗi, viết GraphQL queries/mutations và quản lý phân quyền Authorization qua JWT."
        },
        "3": {
          "role": "Backend",
          "description": "Phát triển hệ thống Backend mượn/trả sách thư viện với .NET 10/C#, tuân thủ Clean Architecture và CQRS. Tích hợp Hangfire xử lý background (tự động cập nhật trạng thái mượn, kiểm tra sách quá hạn)."
        },
        "4": {
          "role": "Backend",
          "description": "Phát triển RESTful APIs bằng Node.js/TypeScript số hóa báo cáo sự cố hạ tầng giao thông. Tạo module xuất báo cáo PDF/Excel/Word, xử lý ảnh với Sharp, lưu trữ AWS S3. Quản lý dữ liệu với Prisma ORM."
        },
        "5": {
          "role": "Backend",
          "description": "Phát triển hệ thống Backend quản lý dữ liệu người chơi, tiến độ học, ngân hàng câu hỏi game âm nhạc. Tích hợp Groq API tự động sinh câu hỏi bằng AI. Cấu hình Docker & Jenkins CI/CD."
        },
        "6": {
          "role": "Backend Intern",
          "description": "Triển khai hệ thống Microservices & Clean Architecture quản lý quy trình sản xuất và dữ liệu QA/QC. Tối ưu SQL server để truy vấn và xử lý dữ liệu kiểm tra thời gian thực."
        }
      },
      "skills_section": {
        "title": "Kỹ năng & Chuyên môn",
        "tools_and_soft_skills": "Công cụ & Kỹ năng mềm",
        "soft_skills_list": "Làm việc nhóm, Thuyết trình, Giải quyết vấn đề"
      },
      "footer": {
        "expected": "Dự kiến"
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "about": "About",
        "education": "Education",
        "experience": "Experience",
        "projects": "Projects",
        "skills": "Skills"
      },
      "hero": {
        "hello": "Hello, I am",
        "role": "Backend Developer (.NET & NodeJS)",
        "exp_highlight": "Over 1 year of experience",
        "desc_1": " building large-scale systems with ",
        "desc_2": " and ",
        "desc_3": ". Passionate about designing & optimizing SQL databases. Directly developed management software for government agencies and enterprise organizations.",
        "view_projects": "View Projects",
        "download_cv": "Download CV"
      },
      "education": {
        "gpa": "GPA:",
        "desc": "Software Engineering major, extensively trained in software architecture, databases, and project development processes."
      },
      "experience_list": {
        "1": {
          "role": "Backend & Frontend Developer",
          "company": "T.A Technical Consulting Co., Ltd.",
          "period": "04/2025 - Present",
          "description": "Participated in designing and developing Web/API systems (E-commerce, Management, Traffic Infrastructure) using Node.js (TypeScript), .NET Core, ReactJS, and PostgreSQL. Applied Clean Architecture, CQRS, GraphQL; integrated Cloud Services (AWS S3, Firebase); automated report generation and background tasks."
        },
        "2": {
          "role": "Backend Intern",
          "company": "Amazing Technology Solutions Company Limited",
          "period": "12/2024 - 04/2025",
          "description": "Developed Production & QA/QC Management System for a garment factory: built backend services (.NET Core, Microservices, Clean Architecture) and optimized SQL database for real-time data; digitized processes and minimized manual errors."
        }
      },
      "projects_list": {
        "title": "Featured Projects",
        "1": {
          "role": "Project Leader · Backend",
          "description": "Acted as Project Leader, leading the development team using .NET Core, Clean Architecture, and CQRS with MediatR. Developed core modules such as Authentication & Authorization, Event management, and complaint handling. Designed and optimized SQL Server database to support complex multi-role tournament structures."
        },
        "2": {
          "role": "Backend · Frontend",
          "description": "Took over and maintained the ERP retail management system (ReactJS, Node.js, PostgreSQL, Hasura GraphQL). Analyzed data flow, fixed bugs, wrote GraphQL queries/mutations, and managed Authorization via JWT."
        },
        "3": {
          "role": "Backend",
          "description": "Developed a Backend system for library book borrowing/returning using .NET 10/C#, adhering to Clean Architecture and CQRS. Integrated Hangfire for background processing (auto-updating borrow status, checking overdue books)."
        },
        "4": {
          "role": "Backend",
          "description": "Developed RESTful APIs using Node.js/TypeScript to digitize traffic infrastructure incident reports. Created modules to export PDF/Excel/Word reports, process images with Sharp, and store on AWS S3. Managed data with Prisma ORM."
        },
        "5": {
          "role": "Backend",
          "description": "Developed a Backend system to manage player data, learning progress, and music game question bank. Integrated Groq API to automatically generate questions using AI. Configured Docker & Jenkins CI/CD."
        },
        "6": {
          "role": "Backend Intern",
          "description": "Deployed Microservices & Clean Architecture system to manage production processes and QA/QC data. Optimized SQL server for real-time querying and processing of inspection data."
        }
      },
      "skills_section": {
        "title": "Skills & Expertise",
        "tools_and_soft_skills": "Tools & Soft Skills",
        "soft_skills_list": "Teamwork, Presentation, Problem Solving"
      },
      "footer": {
        "expected": "Expected"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React đã tự escape chống XSS
    }
  });

export default i18n;
