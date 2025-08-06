import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Twitter, Linkedin, Instagram, CheckCircle, Users, Clock, DollarSign, Zap, Timer, Eye } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.png";
import teamMember2 from "@/assets/team-member-2.png";
import teamMember3 from "@/assets/team-member-3.png";
import teamMember4 from "@/assets/team-member-4.png";
import teamMember5 from "@/assets/team-member-5.png";
import teamMember6 from "@/assets/team-member-6.png";

const WhyUsSection = () => {
  const features = [
    "Branding", "Website Design", "Mobile App Design", "Business Cards", 
    "Logos", "Packaging", "Web Design", "Framer Development"
  ];

  const teamMembers = [
    { image: teamMember1, bg: "bg-orange-500" },
    { image: teamMember2, bg: "bg-red-500" },
    { image: teamMember3, bg: "bg-blue-500" },
    { image: teamMember4, bg: "bg-yellow-500" },
    { image: teamMember5, bg: "bg-teal-500" },
    { image: teamMember6, bg: "bg-purple-500" }
  ];

  const stats = [
    { 
      icon: Zap, 
      title: "100+ Brands Served", 
      description: "Trusted by startups, creators, and growing teams worldwide.",
      dots: 1
    },
    { 
      icon: Timer, 
      title: "8 Years of Experience", 
      description: "Design expertise you can rely on — from concept to delivery.",
      dots: 2
    },
    { 
      icon: Eye, 
      title: "$1M+ Saved for Brands", 
      description: "Flat-rate pricing that replaces costly freelance and agency fees.",
      dots: 3
    }
  ];

  const achievements = [
    { number: "70", suffix: "+", label: "Satisfied clients" },
    { number: "100", suffix: "%", label: "Satisfaction rate" },
    { number: "8", suffix: "+", label: "Years of experience" },
    { number: "80", suffix: "k+", label: "Monthly visitors" }
  ];

  return (
    <section id="why-us" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-16">
          <div>
            <div className="flex justify-start mb-4">
              <span className="text-black text-sm uppercase tracking-wide font-medium px-3 py-1 rounded">
                // Why Us //
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why choose us?</h2>
          </div>
          <div className="text-right max-w-md">
            <p className="text-xl text-muted-foreground">
              We combine strategy, speed, and skill to deliver exceptional design — every time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          {/* Profile Card - Takes 1 column */}
          <div className="lg:col-span-1">
            <Card className="p-6 text-white border-0 relative overflow-hidden h-full">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/lovable-uploads/cccdf292-caae-4771-aa89-67adf48ea281.png" 
                  alt="Robert Park"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-700/80"></div>
              </div>
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 z-10">
                <div className="w-full h-full bg-repeat bg-[length:50px_50px]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23fff' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
              </div>
              
              <CardContent className="p-0 relative z-20 flex flex-col justify-end h-full min-h-[400px]">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Robert Park</h3>
                  <p className="text-white/70 mb-4">Founder of Formix</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Cards - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Expert Team Card */}
            <Card className="p-6 bg-gray-900 text-white border-0">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-white/70 mb-6">
                  A dedicated team that treats your brand like their own — focused on delivering great design that actually moves the needle.
                </p>
                
                <div className="flex space-x-2">
                  {teamMembers.map((member, index) => (
                    <div key={index} className={`w-10 h-10 rounded-lg ${member.bg} overflow-hidden`}>
                      <img 
                        src={member.image} 
                        alt={`Team member ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Design Without Limits Card */}
            <Card className="p-6 bg-card border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-2">Design Without Limits</h3>
                <p className="text-muted-foreground mb-6">
                  No limits, no hidden fees — just unlimited design requests delivered in a clear, focused workflow built for busy teams.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs px-3 py-1"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Cards - Takes 1 column */}
          <div className="lg:col-span-1 space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className="w-6 h-6 text-foreground" />
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }, (_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full ${
                            dotIndex < stat.dots ? 'bg-red-500' : 'bg-muted/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {achievement.number}
                <span className="text-foreground">{achievement.suffix}</span>
              </div>
              <p className="text-muted-foreground">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;