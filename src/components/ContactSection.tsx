
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "gamedev@example.com",
      link: "mailto:gamedev@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      url: "https://github.com/gamedev",
      color: "hover:text-neon-blue"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/gamedev",
      color: "hover:text-neon-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-neon-blue text-neon-glow">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Ready to collaborate on your next game development project? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <Card className="bg-card/50 backdrop-blur-sm border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold mb-6 text-foreground">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-neon-blue/30 focus:border-neon-blue text-foreground"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-neon-blue/30 focus:border-neon-blue text-foreground"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-neon-blue/30 focus:border-neon-blue text-foreground"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-neon-blue/30 focus:border-neon-blue text-foreground resize-none"
                      placeholder="Tell me about your project idea..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-background font-semibold transition-all duration-300 w-full md:w-auto"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="lg:col-span-4 space-y-8">
            {/* Contact Information */}
            <Card className="bg-card/50 backdrop-blur-sm border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold mb-6 text-foreground">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-neon-blue">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-foreground hover:text-neon-blue transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold mb-6 text-foreground">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 text-foreground ${social.color} transition-colors duration-300 hover:translate-x-2 transform transition-transform`}
                    >
                      {social.icon}
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-card/50 backdrop-blur-sm border-neon-blue/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-orbitron font-bold mb-4 text-foreground">
                  Availability
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Currently available for freelance projects and full-time opportunities. 
                  I typically respond to messages within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
