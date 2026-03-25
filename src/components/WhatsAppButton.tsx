import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "6355227404"; // Replace with actual WhatsApp business number
  const message = encodeURIComponent("Hi! I'm interested in your CCTV installation services.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-success-green hover:bg-success-green/90 text-white rounded-full flex items-center justify-center shadow-strong hover:shadow-glow transition-all hover:scale-110 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
};
