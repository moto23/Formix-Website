import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const scrollToWhyUs = () => {
    const element = document.getElementById("why-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-background-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <span className="text-black text-sm uppercase tracking-wide font-medium px-3 py-1 rounded">
            // About Us //
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          We're a small, dedicated design studio helping startups, founders, and growing businesses move faster with high-quality design on subscription.
        </h2>
        
        <Button 
          variant="outline" 
          size="lg"
          onClick={scrollToWhyUs}
          className="group"
        >
          Why Choose Us
          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;