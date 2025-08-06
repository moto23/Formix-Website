import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the subscription model work?",
      answer: "You pay a fixed monthly fee and get access to a dedicated design team. Submit unlimited requests, and we'll deliver them one by one (or two at a time with the Pro plan). No hourly billing, no contracts — cancel or pause anytime."
    },
    {
      question: "What kind of design tasks can I request?",
      answer: "We handle all types of design work including web design, mobile app design, branding, marketing graphics, pitch decks, social media content, packaging design, and much more. If it's design-related, we can help."
    },
    {
      question: "How fast will I receive my designs?",
      answer: "Most design requests are completed within 2-3 business days. More complex projects may take longer, but we'll always communicate expected timelines upfront and keep you updated throughout the process."
    },
    {
      question: "What tools do you use to manage the work?",
      answer: "We provide you with a dedicated design portal where you can submit requests, track progress, provide feedback, and manage revisions. Everything is organized and transparent so you always know the status of your projects."
    },
    {
      question: "Is there a limit to how many requests I can make?",
      answer: "No, there's no limit! You can submit as many design requests as you need. We work through them systematically - one at a time with the standard plan, or two simultaneously with the Pro plan."
    },
    {
      question: "Can I cancel or pause anytime?",
      answer: "Absolutely! You can pause your subscription when you don't need design work and resume when you do. You can also cancel anytime without any penalties or long-term commitments."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-start mb-4">
            <span className="text-black text-sm uppercase tracking-wide font-medium px-3 py-1 rounded">
              // FAQs //
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Questions & Answers</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to know about our design subscription service.
          </p>
          
          <div className="bg-background-alt p-6 rounded-lg border border-border">
            <p className="text-muted-foreground mb-4">
              Can't find your answer? Get in touch with our support team, they are friendly!
            </p>
            <Button 
              variant="default" 
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Book Free Call
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background-alt rounded-lg border border-border px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;