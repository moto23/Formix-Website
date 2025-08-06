import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PortfolioGallery from "./PortfolioGallery";
import clientAvatar1 from "@/assets/client-avatar-1.png";
import clientAvatar2 from "@/assets/client-avatar-2.png";
import clientAvatar3 from "@/assets/client-avatar-3.png";

const HeroSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 pb-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Badge */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <Badge 
              variant="secondary" 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full"
            >
              🔥 3 Spots Left
            </Badge>
            <Badge 
              variant="outline" 
              className="px-4 py-2 rounded-full border-border"
            >
              Available For Work
            </Badge>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-foreground">Unlimited Design For</span>
            <br />
            <span className="text-muted-foreground">Tech & AI Startups</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Fast, reliable, and scalable design solutions tailored for your growing startup.
          </p>
        </div>

        {/* Portfolio Gallery */}
        <div className="mb-12">
          <PortfolioGallery />
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-2">
              <img src={clientAvatar1} alt="Client 1" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
              <img src={clientAvatar2} alt="Client 2" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
              <img src={clientAvatar3} alt="Client 3" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-accent text-lg">★★★★★</span>
            </div>
            <span className="text-sm text-muted-foreground font-medium">50+</span>
            <span className="text-sm text-muted-foreground">Trusted by clients worldwide</span>
          </div>

          <Button 
            size="xl" 
            variant="hero"
            onClick={scrollToPricing}
            className="group"
          >
            See Pricing & Plans
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;