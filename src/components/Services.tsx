import { Camera, Wrench, HardDrive, Smartphone, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import installationImg from "@/assets/service-installation.jpg";
import dvrImg from "@/assets/service-dvr.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import smartImg from "@/assets/service-smart.jpg";

export const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "CCTV Installation",
      description: "Professional installation of high-definition CCTV cameras for homes, offices, and commercial spaces. We handle everything from site survey to final setup.",
      image: installationImg,
      features: ["HD & IP Cameras", "Outdoor & Indoor", "Night Vision", "Wide Coverage"],
    },
    {
      icon: HardDrive,
      title: "DVR/NVR Setup",
      description: "Complete DVR and NVR recording system setup with remote viewing capabilities. Store and access your footage anytime, anywhere.",
      image: dvrImg,
      features: ["Cloud Storage", "Remote Access", "High Capacity", "Backup Systems"],
    },
    {
      icon: Wrench,
      title: "Maintenance & AMC",
      description: "Comprehensive annual maintenance contracts ensuring your security systems run flawlessly. Regular checkups, cleaning, and repairs included.",
      image: maintenanceImg,
      features: ["Regular Checkups", "Priority Support", "Free Repairs", "System Updates"],
    },
    {
      icon: Smartphone,
      title: "Smart Security Solutions",
      description: "Modern IoT-enabled security systems with smartphone integration. Monitor your property from anywhere with real-time alerts and notifications.",
      image: smartImg,
      features: ["Mobile App", "AI Detection", "Two-Way Audio", "Smart Alerts"],
    },
    {
      icon: Shield,
      title: "Security Consulting",
      description: "Expert security assessment and consultation to identify vulnerabilities and recommend optimal solutions tailored to your specific needs.",
      features: ["Risk Assessment", "Custom Solutions", "Expert Advice", "Site Survey"],
    },
    {
      icon: Zap,
      title: "Wiring & Infrastructure",
      description: "Professional wiring, cable management, and network infrastructure setup for seamless security system integration with minimal visual impact.",
      features: ["Clean Installation", "Cable Management", "Network Setup", "Power Backup"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security solutions tailored to protect your property
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              )}
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
