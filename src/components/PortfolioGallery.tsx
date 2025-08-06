import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const PortfolioGallery = () => {
  const portfolioItems = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio1, // Duplicate for infinite scroll effect
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="flex space-x-6 animate-scroll">
        {portfolioItems.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <img
              src={image}
              alt={`Portfolio piece ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
    </div>
  );
};

export default PortfolioGallery;