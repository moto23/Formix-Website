import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Clock, RefreshCw, Shield, Star, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Predictable Pricing",
      description: "Simple pricing structure that gives you unlimited design without the guesswork."
    },
    {
      icon: Clock,
      title: "Fast Turnarounds",
      description: "Quick and reliable results to keep your business moving forward."
    },
    {
      icon: RefreshCw,
      title: "Unlimited Requests",
      description: "We'll handle them one by one — or two at a time with the Pro plan."
    },
    {
      icon: Shield,
      title: "Dedicated Design Portal",
      description: "Manage tasks, revisions, and updates inside a clean, organized dashboard."
    },
    {
      icon: Star,
      title: "Top-tier Quality",
      description: "Built with care by a team that treats your brand like their own."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-start mb-4">
            <span className="text-black text-sm uppercase tracking-wide font-medium px-3 py-1 rounded">
              // Benefits //
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Membership Benefits</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-background-alt">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;