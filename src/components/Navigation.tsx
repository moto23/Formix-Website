import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-primary-foreground rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-foreground">Formix</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              See Pricing
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              onClick={() => scrollToSection("pricing")}
            >
              See Pricing
            </Button>
            <Button 
              variant="default"
              onClick={() => scrollToSection("contact")}
            >
              Menu
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Pricing
              </button>
              <div className="px-3 py-2 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => scrollToSection("pricing")}
                >
                  See Pricing
                </Button>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Book Free Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;