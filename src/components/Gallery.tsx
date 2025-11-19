import installationImg from "@/assets/service-installation.jpg";
import dvrImg from "@/assets/service-dvr.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import smartImg from "@/assets/service-smart.jpg";

export const Gallery = () => {
  const projects = [
    {
      image: installationImg,
      title: "Corporate Office Installation",
      category: "Commercial",
      description: "50+ camera installation with advanced surveillance",
    },
    {
      image: dvrImg,
      title: "Multi-Location Monitoring",
      category: "Enterprise",
      description: "Centralized DVR system for retail chain",
    },
    {
      image: maintenanceImg,
      title: "Residential Security",
      category: "Residential",
      description: "Complete home security solution with mobile access",
    },
    {
      image: smartImg,
      title: "Smart Home Integration",
      category: "Smart Home",
      description: "IoT-enabled security with AI detection",
    },
    {
      image: installationImg,
      title: "Warehouse Security",
      category: "Industrial",
      description: "Large-scale surveillance for logistics facility",
    },
    {
      image: dvrImg,
      title: "Restaurant Chain",
      category: "Hospitality",
      description: "Multi-location security management system",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful installations across various sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 p-8 bg-card rounded-2xl shadow-medium">
          {[
            { label: "Projects Completed", value: "2000+" },
            { label: "Cities Covered", value: "50+" },
            { label: "Cameras Installed", value: "15K+" },
            { label: "Client Satisfaction", value: "99%" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
