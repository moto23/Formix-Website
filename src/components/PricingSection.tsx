import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Zap, CheckCircle, Settings, Infinity, Clock, MessageCircle, Palette, Pause } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      icon: Plus,
      title: "Subscribe",
      description: "Pick a plan that fits your workflow",
      redDots: 1
    },
    {
      icon: Zap,
      title: "Design Retainer",
      price: "$5K",
      period: "/mo",
      description: "Great for founders who need fast, reliable design help.",
      features: [
        { icon: Settings, text: "Development + $1000", toggle: true },
        { icon: Infinity, text: "Unlimited requests" },
        { icon: Clock, text: "One request at a time" },
        { icon: CheckCircle, text: "Fixed monthly rate" },
        { icon: MessageCircle, text: "Async communication" },
        { icon: Palette, text: "Flexible scope" },
        { icon: Pause, text: "Pause anytime" }
      ],
      redDots: 2,
      buttonText: "Book Free Call",
      buttonVariant: "outline" as const
    },
    {
      icon: Zap,
      title: "Design Retainer Pro",
      price: "$6K",
      period: "/mo",
      description: "Perfect for fast-paced teams who need two designs at once.",
      features: [
        { icon: Settings, text: "Development + $1000", toggle: true },
        { icon: Infinity, text: "Unlimited requests" },
        { icon: Clock, text: "Two request at a time" },
        { icon: CheckCircle, text: "Fixed monthly rate" },
        { icon: MessageCircle, text: "Async communication" },
        { icon: Palette, text: "Flexible scope" },
        { icon: Pause, text: "Pause anytime" }
      ],
      redDots: 3,
      buttonText: "Book Free Call",
      buttonVariant: "default" as const,
      isPopular: true
    }
  ];

  const steps = [
    { icon: Plus, title: "Subscribe", description: "Pick a plan that fits your workflow", redDots: 1 },
    { icon: Settings, title: "Request", description: "Submit tasks via your design portal", redDots: 2 },
    { icon: CheckCircle, title: "Approve or revise", description: "Receive designs in 2–3 business days", redDots: 3 }
  ];

  const logos = [
    "https://framerusercontent.com/images/99CutKVhaCpfKyyx4QDQTOjqoFw.png",
    "https://framerusercontent.com/images/SntGnaXbfmd4SDpZt5NbUpqoMY.png",
    "https://framerusercontent.com/images/aq47127VvLe0RHaHMHA2SPfBywU.png",
    "https://framerusercontent.com/images/jeVqVvAipE1VxRWt03nKgkbaXVo.png",
    "https://framerusercontent.com/images/GMLQ7mKo1bzfW8UARIqyYlMM.png",
    "https://framerusercontent.com/images/CcGb0lxrD0L3pt85JVy0kd8L7c.png",
    "https://framerusercontent.com/images/LzC7qK2uDFUBXPVa1VHFfU7mb8.png"
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-start mb-4">
            <span className="text-black text-sm uppercase tracking-wide font-medium px-3 py-1 rounded">
              // Pricing //
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pricing Plans.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Pick your plan and start designing today. One flat fee. Unlimited design. Zero stress.
          </p>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-6 ${plan.isPopular ? 'bg-foreground text-background' : 'bg-background'} border-border hover:shadow-lg transition-all duration-300`}
            >
              {/* Red dots indicator */}
              <div className="absolute top-4 right-4 flex space-x-1">
                {Array.from({ length: plan.redDots }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-red-500 rounded-full"></div>
                ))}
              </div>

              <CardContent className="p-0">
                <div className="mb-6">
                  <plan.icon className={`w-8 h-8 mb-4 ${plan.isPopular ? 'text-background' : 'text-foreground'}`} />
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  {plan.price && (
                    <div className="flex items-baseline space-x-1 mb-2">
                      <span className="text-2xl font-bold">{plan.price}</span>
                      <span className={`text-sm ${plan.isPopular ? 'text-background/70' : 'text-muted-foreground'}`}>{plan.period}</span>
                    </div>
                  )}
                  <p className={`text-sm ${plan.isPopular ? 'text-background/70' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>
                </div>

                {plan.features && (
                  <>
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <feature.icon className={`w-4 h-4 ${plan.isPopular ? 'text-background/70' : 'text-muted-foreground'}`} />
                            <span className="text-sm">{feature.text}</span>
                          </div>
                          {feature.toggle && (
                            <div className={`w-10 h-5 rounded-full ${plan.isPopular ? 'bg-background/20' : 'bg-muted'} relative`}>
                              <div className={`w-4 h-4 rounded-full ${plan.isPopular ? 'bg-background' : 'bg-foreground'} absolute top-0.5 right-0.5 transition-all`}></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant={plan.buttonVariant}
                      size="lg" 
                      className={`w-full ${plan.isPopular ? 'bg-background text-foreground hover:bg-background/90' : ''}`}
                      onClick={scrollToContact}
                    >
                      {plan.buttonText}
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">Proudly worked with:</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;