import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Phone validation
    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    emailjs
      .send(
        "service_yjeo6h3",
        "template_q1xu54h",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "RLeVEtdBH9kVaAbWQ"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          toast.success("Message sent successfully!");

          // Reset form
          setFormData({ name: "", email: "", phone: "", message: "" });

          // Hide animation after 3s
          setTimeout(() => setSuccess(false), 3000);
        },
        () => {
          setLoading(false);
          toast.error("Failed to send message. Try again.");
        }
      );
  };



  const validatePhone = (phone: string) => {
    return /^[0-9]{10}$/.test(phone);
  };


  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 6355227404",
      link: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email",
      content: "crystalvision3299@gmail.com",
      link: "mailto:info@crystalvision.in",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Crystal Vision Enterprice, Shop No. 9, Shreeji Complex, Satyam Colony Road, Near Airforce 2, Jamnagar, 361006",
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 8:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to secure your property? Contact us for a free consultation and quote
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">

          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Reach out to us through any of these channels. We're here to answer your questions and provide expert guidance.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{info.title}</div>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-medium h-64 space-y-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15169.675422231092!2d77.53111845!3d12.932016099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39571528c4a8d821%3A0xa2cfa94c553b4856!2sCrystal%20vision%20Enterprise!5e1!3m2!1sen!2sin!4v1765358936857!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crystal Vision Enterprise Location"
            />
          </div>
        </div>

        <div className="space-y-6">

          {/* Map */}

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-medium space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Your Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your security requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="mt-2 min-h-32"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2"
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>

              {success && (
                <div className="p-3 bg-green-600/20 text-green-300 rounded-lg text-center animate-fadeInScale">
                  ✅ Your message has been sent!
                </div>
              )}


            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

