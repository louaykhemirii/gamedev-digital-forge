import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Play, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Cyber Runner VR",
      description: "An immersive VR parkour game set in a cyberpunk metropolis. Players navigate through neon-lit cityscapes using advanced movement mechanics and time manipulation abilities.",
      image: "https://raw.githubusercontent.com/louaykhemirii/Img/refs/heads/master/Kids.png",
      technologies: ["Unity", "C#", "VR SDK", "Blender"],
      role: "Lead Developer",
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Puzzle Quest",
      description: "A mind-bending puzzle platformer that explores quantum mechanics through innovative gameplay. Features parallel dimensions and reality-shifting mechanics.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      technologies: ["Unreal Engine", "C++", "Blueprint", "Perforce"],
      role: "Gameplay Programmer",
      demoLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 3,
      title: "Neon Racers",
      description: "High-speed arcade racing game with customizable vehicles and dynamic track generation. Features multiplayer support and real-time lighting effects.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop",
      technologies: ["Unity", "C#", "Photon", "Shader Graph"],
      role: "Technical Lead",
      demoLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-neon-blue text-neon-glow">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore my latest game development projects showcasing innovative gameplay mechanics and cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project) => (
            <Card key={project.id} className="lg:col-span-8 bg-card/50 backdrop-blur-sm border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-neon-blue text-background">Featured</Badge>
              </div>
              <CardContent className="p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-neon-blue/30 text-neon-blue">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm text-neon-blue mb-6">Role: {project.role}</p>
                <div className="flex gap-4">
                  <Button className="bg-neon-blue hover:bg-neon-purple text-background transition-colors duration-300">
                    <Play className="w-4 h-4 mr-2" />
                    Play Demo
                  </Button>
                  <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-colors duration-300">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Other Projects */}
          <div className="lg:col-span-4 space-y-6">
            {projects.filter(p => !p.featured).map((project) => (
              <Card key={project.id} className="bg-card/50 backdrop-blur-sm border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="outline" className="border-neon-blue/30 text-neon-blue text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <p className="text-xs text-neon-blue mb-4">Role: {project.role}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-neon-blue hover:bg-neon-purple text-background transition-colors duration-300 text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-colors duration-300 text-xs">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
