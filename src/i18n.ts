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
        "exp_highlight": "Chuyên sâu về",
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
        "click_to_view": "Nhấn để xem đầy đủ",
        "modal_desc_title": "Mô tả dự án & Trách nhiệm thực hiện",
        "modal_tech_title": "Công nghệ sử dụng (Tech Stack)",
        "modal_view_site": "Xem trang web dự án",
        "modal_zoom_title": "Phóng to xem chi tiết",
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
        "soft_skills": {
          "0": "Làm việc nhóm",
          "1": "Thuyết trình",
          "2": "Giải quyết vấn đề"
        },
        "categories": {
          "backend": {
            "label": "Backend & Kiến trúc",
            "tagline": "Trọng tâm cốt lõi & Khả năng mở rộng cao",
            "desc": "Chuyên sâu xây dựng RESTful APIs quy mô lớn, áp dụng Clean Architecture, CQRS pattern, tích hợp background jobs tự động và xử lý nghiệp vụ phức tạp.",
            "highlight_1": "Thiết kế hệ thống đa tầng bảo trì dễ dàng và tách bạch domain logic.",
            "highlight_2": "Xử lý background task tự động với Hangfire.",
            "highlight_3": "Phân quyền đa tầng và JWT authentication an toàn."
          },
          "database": {
            "label": "Cơ sở dữ liệu & Tối ưu",
            "tagline": "CSDL quan hệ, Mô hình hóa & Hiệu năng",
            "desc": "Đam mê thiết kế cơ sở dữ liệu quan hệ chặt chẽ, tối ưu hóa chỉ mục (Indexes), Store Procedures và xử lý truy vấn thời gian thực cho dữ liệu khối lượng lớn.",
            "highlight_1": "Thiết kế và chuẩn hóa schema dữ liệu cho giải đấu và chuỗi bán lẻ ERP.",
            "highlight_2": "Tối ưu SQL Server hỗ trợ xử lý dữ liệu QA/QC thời gian thực.",
            "highlight_3": "Viết stored procedures và indexing tăng tốc độ truy vấn."
          },
          "devops": {
            "label": "DevOps & Đám mây",
            "tagline": "Container hóa, Tự động hóa & Triển khai",
            "desc": "Đóng gói sản phẩm bằng Docker, xây dựng pipeline tích hợp và triển khai tự động (CI/CD), quản lý server VPS độc lập và tích hợp lưu trữ đám mây.",
            "highlight_1": "Tự động hóa build, test và deploy qua Jenkins pipeline.",
            "highlight_2": "Container hóa các ứng dụng .NET và Node.js chạy ổn định trên Docker.",
            "highlight_3": "Tích hợp AWS S3 lưu trữ tệp tin và báo cáo."
          },
          "frontend": {
            "label": "Frontend & Công cụ",
            "tagline": "Tích hợp giao diện & Kỹ năng mềm",
            "desc": "Khả năng xây dựng giao diện hiện đại, responsive mượt mà với React, thành thạo công cụ phát triển chuyên nghiệp và kỹ năng phối hợp nhóm hiệu quả.",
            "highlight_1": "Xây dựng giao diện ERP dashboard tương tác với GraphQL API.",
            "highlight_2": "Quy trình làm việc chuẩn Git Flow, quản lý mã nguồn chặt chẽ.",
            "highlight_3": "Kỹ năng mềm: Làm việc nhóm, thuyết trình và giải quyết vấn đề."
          }
        }
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
        "exp_highlight": "Specializing in",
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
        "click_to_view": "Click to view full details",
        "modal_desc_title": "Project Overview & Key Responsibilities",
        "modal_tech_title": "Technologies Used (Tech Stack)",
        "modal_view_site": "Visit Project Website",
        "modal_zoom_title": "Zoom in to view details",
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
        "soft_skills": {
          "0": "Teamwork",
          "1": "Presentation",
          "2": "Problem Solving"
        },
        "categories": {
          "backend": {
            "label": "Backend & Architecture",
            "tagline": "Core Focus & High Scalability",
            "desc": "Specialized in building large-scale RESTful APIs, applying Clean Architecture, CQRS pattern, automated background tasks, and handling complex business logic.",
            "highlight_1": "Design multi-tier systems with high maintainability and domain separation.",
            "highlight_2": "Automated background task processing with Hangfire.",
            "highlight_3": "Multi-level authorization and secure JWT authentication."
          },
          "database": {
            "label": "Database & Tuning",
            "tagline": "Relational DBs, Modeling & Optimization",
            "desc": "Passionate about designing robust relational databases, optimizing indexes, stored procedures, and handling real-time queries for large data volumes.",
            "highlight_1": "Design and normalize data schemas for tournaments and ERP retail chains.",
            "highlight_2": "Optimize SQL Server to support real-time QA/QC inspection data.",
            "highlight_3": "Author stored procedures and indexing to significantly accelerate queries."
          },
          "devops": {
            "label": "DevOps & Cloud",
            "tagline": "Containerization, Automation & Deployment",
            "desc": "Containerize applications with Docker, build automated CI/CD pipelines, manage independent VPS servers, and integrate cloud storage.",
            "highlight_1": "Automated build, test, and deployment via Jenkins pipelines.",
            "highlight_2": "Containerize .NET and Node.js applications with stable Docker hosting.",
            "highlight_3": "Integrate AWS S3 for file storage and automated reporting."
          },
          "frontend": {
            "label": "Frontend & Tools",
            "tagline": "UI Integration & Soft Skills",
            "desc": "Capability to build modern, responsive UIs with React, proficiency in industry dev tools, and effective team collaboration skills.",
            "highlight_1": "Build ERP dashboard interfaces interacting with GraphQL APIs.",
            "highlight_2": "Standard Git Flow workflow and rigorous code review.",
            "highlight_3": "Soft skills: Teamwork, technical presentation, and problem solving."
          }
        }
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
