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
        "view_projects": "Xem Dự Án",
        "download_cv": "Tải CV"
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
        "view_projects": "View Projects",
        "download_cv": "Download CV"
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
