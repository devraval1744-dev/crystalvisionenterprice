import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      location: "Mumbai",
      rating: 5,
      text: "Crystal Vision transformed our office security. Their team was professional, the installation was seamless, and we now have complete peace of mind. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      role: "Homeowner",
      location: "Delhi",
      rating: 5,
      text: "Outstanding service from start to finish! They helped us choose the right cameras for our home and the mobile app access is fantastic. Worth every rupee!",
    },
    {
      name: "Amit Patel",
      role: "Restaurant Manager",
      location: "Bangalore",
      rating: 5,
      text: "We needed security across 5 locations. Crystal Vision handled everything perfectly - from planning to execution. Their support team is always there when we need them.",
    },
    {
      name: "Sneha Reddy",
      role: "IT Professional",
      location: "Hyderabad",
      rating: 5,
      text: "Impressed by their technical expertise and customer service. They installed smart cameras with AI detection at our home. The quality and reliability are top-notch!",
    },
    {
      name: "Vikram Singh",
      role: "Factory Owner",
      location: "Pune",
      rating: 5,
      text: "Crystal Vision secured our entire manufacturing facility with advanced surveillance. Their AMC service ensures everything runs smoothly. Best decision we made!",
    },
    {
      name: "Meera Joshi",
      role: "Retail Chain Owner",
      location: "Ahmedabad",
      rating: 5,
      text: "Managing security across multiple stores is easy now thanks to Crystal Vision's centralized system. Professional team, excellent products, and amazing support!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-tech-blue/10 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform" />
              
              <CardContent className="pt-6 relative">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-primary mt-1">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">1500+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">99%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};
