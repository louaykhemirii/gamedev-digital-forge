
import { Card } from '@/components/ui/card';
import { Code, Gamepad2, Lightbulb, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Expertise",
      description: "Proficient in C#, C++, and modern game development frameworks"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Game Engines",
      description: "Advanced experience with Unity and Unreal Engine development"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Vision",
      description: "Innovative approach to gameplay mechanics and user experience"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Player",
      description: "Collaborative experience in agile development environments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-neon-blue text-neon-glow">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a passionate game developer with over 5 years of experience creating immersive gaming experiences. 
              My journey began with a fascination for interactive storytelling and has evolved into expertise in 
              cutting-edge game development technologies.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              I believe in the power of games to inspire, educate, and bring people together. My development 
              philosophy centers around creating engaging gameplay mechanics while maintaining clean, scalable code 
              architecture that enables seamless collaboration with cross-functional teams.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              When I'm not coding, you'll find me exploring the latest gaming trends, contributing to open-source 
              projects, or experimenting with emerging technologies like VR and AR to push the boundaries of 
              what's possible in interactive entertainment.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300 hover:bg-card/70 group">
                <div className="text-neon-blue group-hover:text-neon-purple transition-colors duration-300 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-orbitron font-semibold mb-3 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
