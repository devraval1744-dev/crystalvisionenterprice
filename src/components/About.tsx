import { Shield, Award, Users, Clock } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Security",
      description: "Industry-leading security solutions with certified equipment",
    },
    {
      icon: Award,
      title: "4+ Years Experience",
      description: "Proven track record in CCTV installation and maintenance",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified technicians with extensive training and expertise",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service and emergency assistance",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Crystal Vision Enterprise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading the way in professional security solutions across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded with a vision to make advanced security accessible to everyone, Crystal Vision Enterprise has grown to become one of India's most trusted names in CCTV installation and security solutions. With over a decade of experience, we've protected thousands of homes, offices, and commercial establishments.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our journey began with a simple belief: everyone deserves to feel safe. Today, we combine cutting-edge technology with exceptional service to deliver security solutions that exceed expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We don't just install cameras – we build peace of mind. Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for businesses and homeowners alike.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/10 to-tech-blue/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide cutting-edge, reliable, and affordable security solutions that empower individuals and businesses to protect what matters most, while delivering exceptional service and fostering long-term relationships built on trust.
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-action-orange/10 p-8 rounded-2xl border border-accent/20">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be India's most trusted and innovative security solutions provider, setting industry standards for quality, technology, and customer care, while making advanced surveillance accessible to every home and business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
