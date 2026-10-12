"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnglishClick = () => {
    alert("El motor de traducción al inglés (Fase 13) se activará inmediatamente después de publicar la versión principal en internet.");
  };

  return (
    <header className="w-full shadow-sm sticky top-0 z-50 flex flex-col bg-white">
      
      {/* NIVEL 1: Top Bar */}
      <div className="bg-primary-blue text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="https://waze.com/ul?ll=9.9396956,-84.1059762&navigate=yes" target="_blank" rel="noreferrer" className="hover:text-blue-200 transition flex items-center cursor-pointer" title="Iniciar ruta en Waze">
            📍 Distrito Médico Sabana Norte, San José, Costa Rica
          </a>
          <div className="flex space-x-2 items-center">
            <button onClick={handleEnglishClick} className="hover:text-blue-200 transition" title="English version">English</button>
            <span>|</span>
            <span className="font-bold cursor-default">Español</span>
          </div>
        </div>
      </div>

      {/* ESTRUCTURA DESKTOP (Oculta en móviles) */}
      <div className="hidden md:block">
        
        {/* Fila Blanca (Fija y delgada en h-24 para que no se estire) */}
        <div className="relative bg-white z-50 h-24">
          <div className="max-w-7xl mx-auto px-4 h-full w-full flex justify-end items-center relative">
            
            {/* LOGO TOTALMENTE INDEPENDIENTE: Rompe la caja blanca y cuelga hacia abajo */}
            <div className="absolute top-0 left-4 bg-white px-4 pb-6 pt-4 rounded-b-3xl shadow-lg border-b border-x border-gray-100 z-[60]">
              <Link href="/">
                <img 
                  src="/images/LOGOBLANCO.jpeg" 
                  alt="Costa Rica Medical Trip Logo" 
                  className="h-36 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Área de contacto (alineada a la derecha) */}
            <div className="flex items-center space-x-8">
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Atención Inmediata</span>
                <a href="tel:40702510" className="flex items-center text-primary-blue font-heading font-bold text-2xl hover:text-blue-800 transition">
                  <Phone size={24} className="mr-2" /> 4070-2510
                </a>
              </div>
              <Link href="/valoracion" className="bg-secondary-green text-white px-8 py-3 rounded-md font-bold flex items-center hover:bg-green-600 transition shadow-md hover:scale-105 text-lg">
                <MessageCircle size={24} className="mr-2" /> Solicitar Valoración
              </Link>
            </div>
          </div>
        </div>

        {/* Fila Gris de Navegación (Debajo de la blanca) */}
        <div className="bg-gray-50 border-t border-b border-gray-200 relative z-40">
          <div className="max-w-7xl mx-auto px-4 h-14 flex justify-end items-center">
            {/* Menú empujado a la derecha para no tocar el logo que cuelga */}
            <nav className="flex space-x-12 font-bold text-sm text-text-gray uppercase tracking-wide">
              <Link href="/tratamientos/implantes-dentales" className="hover:text-primary-blue transition">Implantes</Link>
              <Link href="/turismo-dental" className="hover:text-primary-blue transition">Turismo Dental</Link>
              <Link href="/casos-clinicos" className="hover:text-primary-blue transition">Casos</Link>
              <Link href="/blog" className="hover:text-primary-blue transition">Blog Médico</Link>
            </nav>
          </div>
        </div>

      </div>

      {/* ESTRUCTURA MOBILE (Celulares) */}
      <div className="md:hidden px-4 py-3 flex justify-between items-center bg-white border-b border-gray-100">
        <Link href="/" className="flex items-center">
          <img src="/images/LOGOBLANCO.jpeg" alt="Costa Rica Medical Trip Logo" className="h-16 w-auto object-contain" />
        </Link>
        <button className="text-primary-blue" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menú Desplegable en Celulares */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col space-y-4 shadow-lg absolute w-full left-0 top-full">
          <Link href="/tratamientos/implantes-dentales" className="text-text-gray font-semibold block py-3 border-b border-gray-50" onClick={() => setIsOpen(false)}>Implantes Dentales</Link>
          <Link href="/turismo-dental" className="text-text-gray font-semibold block py-3 border-b border-gray-50" onClick={() => setIsOpen(false)}>Turismo Dental</Link>
          <Link href="/casos-clinicos" className="text-text-gray font-semibold block py-3 border-b border-gray-50" onClick={() => setIsOpen(false)}>Casos de Éxito</Link>
          <Link href="/blog" className="text-text-gray font-semibold block py-3 border-b border-gray-50" onClick={() => setIsOpen(false)}>Blog Médico</Link>
          <button onClick={() => { setIsOpen(false); handleEnglishClick(); }} className="text-text-gray font-semibold block py-3 border-b border-gray-50 text-left">English Version</button>
          <Link href="/valoracion" className="bg-secondary-green text-white px-4 py-4 rounded-md font-bold text-center mt-2 flex justify-center items-center text-lg" onClick={() => setIsOpen(false)}>
            Solicitar Valoración
          </Link>
        </div>
      )}
    </header>
  );
}