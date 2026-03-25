import { CheckCircle, Award, Headphones, Wrench, Shield, TrendingUp } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "4+ Years Experience",
      description: "Over a decade of expertise in security solutions with 2000+ successful installations",
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Only certified equipment from leading brands with manufacturer warranties",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service and emergency technical assistance",
    },
    {
      icon: Wrench,
      title: "Free AMC",
      description: "Complimentary 1-year maintenance contract with every installation",
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Installation",
      description: "Professional installation with 1-year warranty on workmanship",
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Best rates in the market without compromising on quality",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stand out with our commitment to quality, service, and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-card p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-tech-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-blue rounded-xl flex items-center justify-center mb-6 shadow-glow">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-tech-blue/10 to-accent/10 p-12 rounded-3xl border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Secure Your Property?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Crystal Vision Enterprise for their security needs. Get a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md font-semibold bg-gradient-to-r from-primary to-tech-blue text-white hover:shadow-glow transform hover:scale-105 transition-all"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+916355227404"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-medium hover:shadow-strong transform hover:scale-105 transition-all"
            >
              Call: +91 6355227404
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
