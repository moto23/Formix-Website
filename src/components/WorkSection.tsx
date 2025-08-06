import { Card, CardContent } from "@/components/ui/card";

const WorkSection = () => {
  const projects = [
    {
      title: "Aven",
      subtitle: "Brand Identity + Website",
      image: "https://framerusercontent.com/images/hnVZOXiTRpBVsQ6SOl9xIaPVPRg.jpg",
      color: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "Etery",
      subtitle: "Branding, Web design",
      image: "https://framerusercontent.com/images/jO9MJRjVZu3o8KV1TAcdBp3k.webp",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Neonix",
      subtitle: "Landing Page Design",
      image: "https://framerusercontent.com/images/Y8q6F5LLQqEr65JidJXguLSU7M.jpg",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Genesy",
      subtitle: "Web Design + Strategy",
      image: "https://framerusercontent.com/images/ETCssBH90lwo0gbiqpQ7LHR8E.jpg",
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-start mb-4">
            <span className="text-black text-sm uppercase tracking-wide font-medium px-3 py-1 rounded">
              // Work //
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A look at some of the brands we've helped — and the outcomes we've delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border bg-background-alt hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;