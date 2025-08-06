import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The quality and speed were unmatched. We submitted our request on Monday and had polished designs by Wednesday.",
      author: "Jesse Leigh",
      role: "CEO & Founder",
      avatar: "https://framerusercontent.com/images/cFl24iPInxckRrL32eRgadp9ZJM.png"
    },
    {
      quote: "It felt like having an in-house design team. Communication was seamless, and revisions were spot on.",
      author: "Amy Louise",
      role: "Customer Success Manager",
      avatar: "https://framerusercontent.com/images/E3vzjdpFuSWiVeurdyPGMrSWk.png"
    },
    {
      quote: "Formix completely transformed the way we approach design. The turnaround time is insane and the output's always on-brand.",
      author: "Michael Joseph",
      role: "Head of Content",
      avatar: "https://framerusercontent.com/images/jC7KwluILkhO0KHxk6qWEttOxhE.png"
    },
    {
      quote: "We've tried other design subscriptions — none compare to Formix. Professional, reliable, and seriously creative.",
      author: "Benjamin Daul",
      role: "Head of Engineering",
      avatar: "https://framerusercontent.com/images/blCNrfmP2RtprpiBXSGbUYelY.png"
    }
  ];

  const clientAvatars = [
    "https://framerusercontent.com/images/eTTTIcVnwyKXnDY6kbVhA1AyzQ.png",
    "https://framerusercontent.com/images/jC7KwluILkhO0KHxk6qWEttOxhE.png",
    "https://framerusercontent.com/images/dlhgx3fMLQZlK7XF8F8pg5OGE.png",
    "https://framerusercontent.com/images/rlvYoRhlsWjRBGPlikiJhJis3E.png",
    "https://framerusercontent.com/images/choacRujU9Zc8QZqOwfKt79Y0WI.png"
  ];

  return (
    <section id="testimonials" className="py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-start mb-4">
            <span className="text-black text-sm uppercase tracking-wide font-medium px-3 py-1 rounded">
              // Clients //
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover how our design subscription helps innovative brands grow smarter and faster.
          </p>

          {/* Client Avatars */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex -space-x-2">
              {clientAvatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Client ${index + 1}`}
                  className="w-12 h-12 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div className="text-center ml-6">
              <div className="text-2xl font-bold">94</div>
              <p className="text-sm text-muted-foreground">Satisfied clients</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-2">Success Stories</h3>
            <p className="text-muted-foreground">
              Real results from fast-moving startups and ambitious founders. Rated 4.9+ for standout design, smooth delivery, and dedicated support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Success Stories Card */}
          <Card className="bg-foreground text-background p-8 md:row-span-2">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
              <p className="text-background/70 mb-8 leading-relaxed">
                Real results from fast-moving startups and ambitious founders. Rated 4.9+ for standout design, smooth delivery, and dedicated support.
              </p>
              
              {/* Client Avatars */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex -space-x-2">
                  {clientAvatars.slice(0, 5).map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`Client ${index + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                <div className="bg-background/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-2">
                  <span className="text-2xl font-bold">94</span>
                  <span className="text-sm text-background/70">Satisfied clients</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-background border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <blockquote className="text-base mb-6 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;