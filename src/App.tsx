import './i18n';
import { useState, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import { useDarkMode } from './hooks/useDarkMode';
import HeroSection from './sections/HeroSection';
import ExperienceTimeline from './sections/ExperienceTimeline';
import Preloader from './components/Preloader';
import ScrollReveal from './components/ScrollReveal';
import AnimatedBlobs from './components/AnimatedBlobs';
import SEO from './components/SEO';
import { CloudShader } from './components/ui/cloud-shader';

// Lazy loading các component ở dưới cùng của trang
const ProjectList = lazy(() => import('./sections/ProjectList'));
const SkillsSection = lazy(() => import('./sections/SkillsSection'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useDarkMode();

  const cloudProps = theme === 'dark'
    ? {
      cloudColor: "#4a5a7a",
      skyTopColor: "#050818",
      skyBottomColor: "#1a2942"
    }
    : {
      cloudColor: "#fbf8f2",
      skyTopColor: "#3876ba",
      skyBottomColor: "#8cbfe8"
    };

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  // Component chờ khi lazy load
  const Loader = () => (
    <div className="flex justify-center items-center py-12 text-brand-cyan">
      <i className="ph-bold ph-spinner animate-spin text-3xl"></i>
    </div>
  );

  return (
    <HelmetProvider>
      <SEO />
      <CloudShader className="fixed inset-0 -z-10 w-full h-screen" {...cloudProps} />
      <AnimatedBlobs />
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>

        <ScrollReveal>
          <ExperienceTimeline />
        </ScrollReveal>

        <Suspense fallback={<Loader />}>
          <ScrollReveal>
            <ProjectList />
          </ScrollReveal>

          <ScrollReveal>
            <SkillsSection />
          </ScrollReveal>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </HelmetProvider>
  );
}
