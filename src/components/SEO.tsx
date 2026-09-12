import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import avatarImg from '../assets/482029458_2469570630053863_8634627401507065921_n.jpg';

export default function SEO() {
  const { i18n } = useTranslation();
  
  const title = i18n.language === 'vi' 
    ? "Huỳnh Gia Bảo — Backend Developer"
    : "Huynh Gia Bao — Backend Developer";
    
  const description = i18n.language === 'vi'
    ? "Portfolio của Huỳnh Gia Bảo - Backend Developer chuyên về .NET Core và Node.js. Hơn 1 năm kinh nghiệm xây dựng hệ thống quy mô lớn, API và tối ưu cơ sở dữ liệu."
    : "Portfolio of Huynh Gia Bao - Backend Developer specializing in .NET Core and Node.js. Over 1 year of experience building scalable systems, APIs and optimizing databases.";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={avatarImg} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={avatarImg} />
    </Helmet>
  );
}
