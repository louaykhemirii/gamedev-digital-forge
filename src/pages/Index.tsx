
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-neon-blue/20 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-foreground/70">
              © 2025 Game Developer Portfolio. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-neon-blue mt-2 font-orbitron">
              Crafting the future of interactive entertainment
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
