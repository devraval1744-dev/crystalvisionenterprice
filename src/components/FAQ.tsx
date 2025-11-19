import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What types of CCTV cameras do you install?",
      answer: "We install a wide range of CCTV cameras including HD analog cameras, IP cameras, dome cameras, bullet cameras, PTZ cameras, and specialized cameras for night vision and outdoor use. We recommend the best option based on your specific security needs and budget.",
    },
    {
      question: "How long does installation take?",
      answer: "Installation time varies based on the project size. A typical home installation (4-8 cameras) takes 1-2 days, while larger commercial projects may take 3-7 days. We provide a detailed timeline during the site survey.",
    },
    {
      question: "Do you provide warranties?",
      answer: "Yes! We provide manufacturer warranties on all equipment (typically 1-3 years) and a 2-year warranty on our installation workmanship. We also offer extended warranty options and AMC packages for long-term peace of mind.",
    },
    {
      question: "Can I view footage remotely?",
      answer: "Absolutely! All our modern systems come with remote viewing capabilities through mobile apps and web browsers. You can access live feeds and recorded footage from anywhere in the world with an internet connection.",
    },
    {
      question: "What maintenance is required?",
      answer: "Regular maintenance includes camera cleaning, checking connections, testing recording systems, and software updates. We recommend quarterly maintenance checks, which are included free in our AMC packages for the first year.",
    },
    {
      question: "Do you service other brands?",
      answer: "Yes, we service and maintain CCTV systems from all major brands, even if they weren't installed by us. Our experienced technicians can repair, upgrade, or expand existing security systems.",
    },
    {
      question: "What's included in your AMC?",
      answer: "Our Annual Maintenance Contract includes regular system checkups, cleaning, priority support, free minor repairs, software updates, and a 24/7 helpline. Major repairs and part replacements are offered at discounted rates.",
    },
    {
      question: "How much does installation cost?",
      answer: "Costs vary based on the number of cameras, type of cameras, storage requirements, and installation complexity. Contact us for a free site survey and customized quote. We offer competitive pricing with no hidden charges.",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 shadow-soft hover:shadow-medium transition-shadow border-0"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/10 to-tech-blue/10 rounded-2xl border border-primary/20">
          <p className="text-lg text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md font-semibold bg-gradient-to-r from-primary to-tech-blue text-white hover:shadow-glow transform hover:scale-105 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
