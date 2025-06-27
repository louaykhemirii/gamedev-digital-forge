
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C#", level: 95, color: "from-neon-blue to-neon-purple" },
        { name: "C++", level: 88, color: "from-neon-purple to-neon-pink" },
        { name: "JavaScript", level: 82, color: "from-neon-pink to-neon-blue" },
        { name: "Python", level: 75, color: "from-neon-green to-neon-blue" }
      ]
    },
    {
      title: "Game Engines",
      skills: [
        { name: "Unity", level: 93, color: "from-neon-blue to-neon-purple" },
        { name: "Unreal Engine", level: 87, color: "from-neon-purple to-neon-pink" },
        { name: "Godot", level: 70, color: "from-neon-pink to-neon-blue" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/Version Control", level: 90, color: "from-neon-blue to-neon-purple" },
        { name: "Blender", level: 85, color: "from-neon-purple to-neon-pink" },
        { name: "Photoshop", level: 80, color: "from-neon-pink to-neon-blue" },
        { name: "Jira/Agile", level: 88, color: "from-neon-green to-neon-blue" }
      ]
    },
    {
      title: "Specializations",
      skills: [
        { name: "Gameplay Programming", level: 95, color: "from-neon-blue to-neon-purple" },
        { name: "AI/Behavior Trees", level: 82, color: "from-neon-purple to-neon-pink" },
        { name: "Multiplayer/Networking", level: 78, color: "from-neon-pink to-neon-blue" },
        { name: "VR/AR Development", level: 75, color: "from-neon-green to-neon-blue" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-neon-blue text-neon-glow">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various game development technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card/50 backdrop-blur-sm border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold mb-6 text-neon-blue text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-neon-blue font-semibold">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-card/50 border border-neon-blue/20" 
                        />
                        <div 
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12 text-foreground">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Shader Programming", "Performance Optimization", "Cross-platform Development",
              "UI/UX Design", "Audio Integration", "Testing & QA",
              "Team Leadership", "Technical Documentation", "Code Review"
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-neon-blue/20 rounded-lg p-4 text-center hover:border-neon-blue/40 hover:bg-card/50 transition-all duration-300 group"
              >
                <span className="text-sm font-medium text-foreground/90 group-hover:text-neon-blue transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
