import { Button } from "@/components/ui/button";
import { Shield, Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern CCTV Security Camera"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-tech-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Premium Security Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Crystal Vision
            <span className="block text-gradient mt-2">Enterprise</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Your Trusted Partner in Advanced CCTV Installation & Security Solutions Across India
          </p>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Protect what matters most with cutting-edge surveillance technology, expert installation, and 24/7 support. From homes to enterprises, we secure your peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Book Installation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="action" size="xl" asChild>
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Projects Completed", value: "2000+" },
              { label: "Happy Clients", value: "1500+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Camera Animation - CSS only */}
      <div className="absolute bottom-10 right-10 hidden lg:block z-20">
        <div className="relative w-32 h-32 animate-float">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-tech-blue rounded-2xl transform rotate-12 opacity-20 blur-xl" />
          <div className="absolute inset-4 bg-card rounded-xl shadow-glow flex items-center justify-center">
            <Shield className="w-16 h-16 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
