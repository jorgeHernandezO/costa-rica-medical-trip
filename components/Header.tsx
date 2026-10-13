"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";

export default function Header({ lang }: { lang: string }) {
  const pathname = usePathname();

  const switchLanguage = (newLang: string) => {
    if (!pathname) return `/${newLang}`;
    const segments = pathname.split("/");
    segments[1] = newLang;
    return segments.join("/");
  };

  return (
    <header className="w-full shadow-sm sticky top-0 z-50 flex flex-col bg-white">
      
      {/* Barra superior azul */}
      <div className="bg-[#007ACC] text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a 
            href="https://waze.com/ul?ll=9.9396956,-84.1059762&navigate=yes" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-blue-200 transition flex items-center cursor-pointer"
            title="Iniciar ruta en Waze"
          >
            📍 Distrito Médico Sabana Norte, San José, Costa Rica
          </a>
          <div className="flex space-x-2 items-center font-medium">
            <Link 
              href={switchLanguage("en")} 
              className={`hover:text-blue-200 transition ${lang === "en" ? "font-bold underline text-white" : ""}`}
            >
              English
            </Link>
            <span>|</span>
            <Link 
              href={switchLanguage("es")} 
              className={`hover:text-blue-200 transition ${lang === "es" ? "font-bold underline text-white" : ""}`}
            >
              Español
            </Link>
          </div>
        </div>
      </div>

      {/* Contenedor del Navbar principal con el logo flotante */}
      <div className="hidden md:block">
        <div className="relative bg-white z-50 h-24">
          <div className="max-w-7xl mx-auto px-4 h-full w-full flex justify-end items-center relative">
            
            {/* Logo flotante grande que sobresale hacia abajo */}
            <div className="absolute top-0 left-4 bg-white px-4 pb-6 pt-4 rounded-b-3xl shadow-lg border-b border-x border-gray-100 z-[60]">
              <Link href={`/${lang}`}>
                <img 
                  src="/images/LOGOBLANCO.jpeg" 
                  alt="Costa Rica Medical Trip Logo" 
                  className="h-36 w-auto object-contain" 
                />
              </Link>
            </div>

            {/* Elementos derechos: Teléfono y Botón de Valoración */}
            <div className="flex items-center space-x-8">
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                  {lang === "en" ? "Immediate Attention" : "Atención Inmediata"}
                </span>
                <a href="tel:40702510" className="flex items-center text-[#007ACC] font-heading font-bold text-2xl hover:text-blue-800 transition">
                  <Phone className="mr-2" size={24} />
                  4070-2510
                </a>
              </div>

              <Link 
                href={`/${lang}/valoracion`} 
                className="bg-[#82b440] hover:bg-[#72a035] text-white px-8 py-3 rounded-md font-bold flex items-center transition shadow-md hover:scale-105 text-lg"
              >
                <MessageCircle className="mr-2" size={24} />
                {lang === "en" ? "Get a Quote" : "Solicitar Valoración"}
              </Link>
            </div>

          </div>
        </div>

        {/* Barra gris inferior de navegación */}
        <div className="bg-gray-50 border-t border-b border-gray-200 relative z-40">
          <div className="max-w-7xl mx-auto px-4 h-14 flex justify-end items-center">
            <nav className="flex space-x-12 font-bold text-sm text-gray-700 uppercase tracking-wide">
              <Link className="hover:text-[#0444c4] transition" href={`/${lang}/tratamientos/implantes-dentales`}>
                {lang === "en" ? "TREATMENTS" : "TRATAMIENTOS"}
              </Link>
              <Link className="hover:text-[#0444c4] transition" href={`/${lang}/turismo-dental`}>
                {lang === "en" ? "Dental Tourism" : "Turismo Dental"}
              </Link>
              <Link className="hover:text-[#0444c4] transition" href={`/${lang}/casos-clinicos`}>
                {lang === "en" ? "Cases" : "Casos"}
              </Link>
              <Link className="hover:text-[#0444c4] transition" href={`/${lang}/blog`}>
                {lang === "en" ? "Medical Blog" : "Blog Médico"}
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Versión móvil */}
      <div className="md:hidden px-4 py-3 flex justify-between items-center bg-white border-b border-gray-100">
        <Link className="flex items-center" href={`/${lang}`}>
          <img src="/images/LOGOBLANCO.jpeg" alt="Costa Rica Medical Trip Logo" className="h-16 w-auto object-contain" />
        </Link>
        <button className="text-[#0444c4]">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>
        </button>
      </div>

    </header>
  );
}