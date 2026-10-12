import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // El mensaje predeterminado que aparecerá en el chat del usuario
  const mensaje = "Hola, me interesa obtener información sobre un tratamiento dental en Costa Rica.";
  const urlWa = `https://wa.me/50689592510?text=${encodeURIComponent(mensaje)}`;

  return (
    <a 
      href={urlWa}
      target="_blank" 
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-green-500 transition-all duration-300 flex items-center justify-center border-2 border-white"
    >
      <MessageCircle size={32} />
      {/* Indicador visual de notificación */}
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
      </span>
    </a>
  );
}
