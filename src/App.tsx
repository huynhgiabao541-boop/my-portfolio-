import './i18n';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ExperienceTimeline from './sections/ExperienceTimeline';
import ProjectList from './sections/ProjectList';
import SkillsSection from './sections/SkillsSection';
import Preloader from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <div className="blob-1"></div>
      <div className="blob-2"></div>
      <div className="blob-3"></div>
      <div className="blob-4"></div>

      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <HeroSection />
        <ExperienceTimeline />
        <ProjectList />
        <SkillsSection />
      </main>

      <Footer />
    </>
  );
}
