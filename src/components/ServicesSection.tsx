import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Code, Palette, Image, FileText } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web & UI Design",
      description: "Modern, conversion-focused interfaces for websites and apps.",
      items: ["Landing pages", "SaaS dashboard", "Marketing site", "Website redesign"],
      dots: 1
    },
    {
      icon: Code,
      title: "Framer Development",
      description: "Perfect for portfolios, startups, and product launches.",
      items: ["Figma to Framer", "CMS setup", "Animation", "SEO optimization"],
      dots: 2
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Visual systems that make your brand memorable and cohesive.",
      items: ["Logo design", "Color palette", "Guidelines", "Social branding"],
      dots: 2
    },
    {
      icon: Image,
      title: "Marketing Graphics",
      description: "Quick, polished visuals for daily content, campaigns, and launches.",
      items: ["Social media posts", "Ad creatives", "Blog thumbnails", "Email visuals"],
      dots: 4
    },
    {
      icon: FileText,
      title: "Pitch & Product Collateral",
      description: "Assets that elevate your messaging and boost perception.",
      items: ["Pitch decks", "Case study", "One-pagers", "Screenshots"],
      dots: 5
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-16">
          <div>
            <div className="flex justify-start mb-4">
              <span className="text-black text-sm uppercase tracking-wide font-medium px-3 py-1 rounded">
                // Services //
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What's Included</h2>
          </div>
          <div className="text-right max-w-md">
            <p className="text-xl text-muted-foreground">
              Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-background-alt p-6">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-lg bg-muted/20">
                    <service.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full ${
                          dotIndex < service.dots ? 'bg-red-500' : 'bg-muted/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-4 h-4 rounded border border-border flex items-center justify-center bg-muted/20">
                        <service.icon className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;