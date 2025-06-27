
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar, MapPin, Building } from 'lucide-react';

const ResumeSection = () => {
  const experiences = [
    {
      title: "Game Developer",
      company: "DM NOVA",
      location: "Sousse,Tun",
      period: "2023 - 2024",
      description: [
        "Micro Game developer in a SaaS mobile application for kids ",
        "Optimized the application's size from 180 MB to 80 MB by implementing clean code practices, reducing load times by 55% and improving overall performance",
        "conducted code reviews",
        "Implemented Game mechanics and UI system "
      ]
    },
    {
      title: "Game Developer",
      company: "Orange Tunisia",
      location: "Tunis, Tunisia",
      period: "2022 - 2023",
      description: [
        "Developed A serious game for kids to interract with the envirement inside the company building  ",
        "Collaborated with artists and designers to implement game features",
        "Optimized game performance for various platforms",
         "Worked with cross-functional teams in agile development environment",
        "Implemented the Backend of the Game "
      ]
    },
    {
      title: "Gameplay Programmer",
      company: "Freelancer",
      location: "Remote",
      period: "2014 - 2016",
      description: [
        "Created gameplay systems and mechanics for indie game projects",
        "Contributed to open-source game development tools",
        "Optimizing games and debugging code "
      ]
    }
  ];

  const education = [
    {
      degree: "Master's Degree in Computer Engineering ",
      school: "Wroclaw University of Science and Technology ",
      location: "Wroclaw, Poland",
      period: "2024 - 2025",
      details: "Specialized in Game Development and Interactive Media"
    },
   
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-neon-blue text-neon-glow">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Comprehensive overview of my professional experience and educational background in game development.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-background font-semibold transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Experience */}
          <div className="lg:col-span-8">
            <h3 className="text-3xl font-orbitron font-bold mb-8 text-foreground flex items-center">
              <Building className="w-8 h-8 mr-3 text-neon-blue" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-orbitron font-bold text-neon-blue mb-2">
                          {exp.title}
                        </h4>
                        <p className="text-lg text-foreground font-semibold mb-1">
                          {exp.company}
                        </p>
                        <div className="flex items-center text-foreground/70 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      <div className="flex items-center text-neon-purple font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-foreground/80 leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-orbitron font-bold mb-8 text-foreground flex items-center">
              <Calendar className="w-8 h-8 mr-3 text-neon-blue" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-orbitron font-bold text-neon-blue mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-foreground font-semibold mb-1">
                      {edu.school}
                    </p>
                    <div className="flex items-center text-foreground/70 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                    <div className="flex items-center text-neon-purple font-medium mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <p className="text-foreground/80 text-sm">
                      {edu.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="mt-8">
              <h4 className="text-xl font-orbitron font-bold mb-4 text-foreground">
                Key Achievements
              </h4>
              <Card className="bg-card/50 backdrop-blur-sm border-neon-blue/20">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="text-foreground/80 text-sm">• Published 3 commercial games with 500K+ downloads</li>
                    <li className="text-foreground/80 text-sm">• Unity Certified Developer</li>
                    <li className="text-foreground/80 text-sm">• Speaker at GameDev Conference 2023</li>
                    <li className="text-foreground/80 text-sm">• Open source contributor (10+ repositories)</li>
                    <li className="text-foreground/80 text-sm">• Led team of 8 developers on AAA project</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
