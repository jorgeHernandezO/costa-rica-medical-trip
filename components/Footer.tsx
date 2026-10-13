import Link from "next/link";

export default function Footer({ lang }: { lang: string }) {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Columna 1: Logo, Descripción y Redes Sociales */}
        <div>
          <img src="/images/LOGOBLANCO.jpeg" alt="Logo Footer" className="h-20 w-auto mb-4 bg-white p-1 rounded-sm" />
          <p className="text-gray-400 mb-4">
            {lang === "en"
              ? "Premium dental clinic specialized in dental implants, aesthetics, and comprehensive care for national and international patients."
              : "Clínica odontológica premium especializada en implantes dentales, estética y atención integral para pacientes nacionales e internacionales."}
          </p>
          
          <div className="flex space-x-5 mt-6">
            <a href="https://facebook.com/costaricamedicaltrip" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform bg-white rounded-full flex items-center justify-center w-15 h-15 shadow-md" title="Síguenos en Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                <path fill="#fff" d="M16.671 15.542l.532-3.469h-3.328V9.824c0-.949.465-1.874 1.956-1.874h1.513V5.002s-1.375-.235-2.686-.235c-2.74 0-4.533 1.662-4.533 4.669v2.633H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796z" />
              </svg>
            </a>
            <a href="https://instagram.com/costaricamedicaltrip" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform bg-white rounded-2xl flex items-center justify-center w-15 h-15 shadow-md" title="Síguenos en Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="igGradXLarge" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433"/><stop offset="25%" stopColor="#e6683c"/><stop offset="50%" stopColor="#dc2743"/><stop offset="75%" stopColor="#cc2366"/><stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <path fill="url(#igGradXLarge)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Columna 2: Contacto Rápido */}
        <div>
          <h3 className="text-lg font-heading font-bold mb-4 text-secondary-green">
            {lang === "en" ? "Quick Contact" : "Contacto Rápido"}
          </h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center">
              <img src="https://img.icons8.com/color/48/phone.png" alt="Teléfono" className="w-5 h-5 mr-1.5 shrink-0" />
              <a href="tel:40702510" className="hover:text-blue-400 text-gray-300 font-bold transition">
                {lang === "en" ? "Calls: 4070-2510" : "Llamadas: 4070-2510"}
              </a>
            </li>
            <li className="flex items-center">
              <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" className="w-5 h-5 mr-1.5 shrink-0" />
              <a href="https://wa.me/50689592510" target="_blank" rel="noreferrer" className="hover:text-[#25D366] text-gray-300 font-bold transition">
                WhatsApp: 8959-2510
              </a>
            </li>
            <li className="flex items-center">
              <img src="https://img.icons8.com/color/48/new-post.png" alt="Correo" className="w-5 h-5 mr-1.5 shrink-0" />
              <a href="mailto:info@costaricamedicaltrip.com" className="hover:text-red-400 text-gray-300 font-bold transition break-all">
                info@costaricamedicaltrip.com
              </a>
            </li>
            <li className="flex flex-col mt-4">
              <div className="flex items-start mb-3">
                <img src="https://img.icons8.com/color/48/marker--v1.png" alt="Ubicación" className="w-5 h-5 mr-1.5 mt-1 shrink-0" />
                <div>
                  <span className="text-gray-300 font-bold">
                    {lang === "en" ? "Sabana Norte, near the National Stadium, San José, Costa Rica." : "Sabana Norte, cerca del Estadio Nacional, San José, Costa Rica."}
                  </span>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <a href="https://waze.com/ul?ll=9.9396956,-84.1059762&navigate=yes" target="_blank" rel="noreferrer" className="flex items-center w-max bg-blue-50 text-blue-600 text-xs font-bold px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition shadow-sm">
                      <img src="https://img.icons8.com/color/48/waze.png" alt="Waze" className="w-5 h-5 mr-2" />
                      {lang === "en" ? "Go with Waze" : "Ir con Waze"}
                    </a>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=9.9396956,-84.1059762" target="_blank" rel="noreferrer" className="flex items-center w-max bg-blue-50 text-blue-600 text-xs font-bold px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition shadow-sm">
                      <img src="https://img.icons8.com/color/48/google-maps-new.png" alt="Google Maps" className="w-5 h-5 mr-2" />
                      {lang === "en" ? "Go with Maps" : "Ir con Maps"}
                    </a>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=9.9396956,-84.1059762" 
                target="_blank" 
                rel="noreferrer" 
                className="block w-full h-32 rounded-lg overflow-hidden mt-1 shadow-sm border border-gray-700 relative group cursor-pointer"
              >
                <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white text-blue-600 font-bold px-4 py-2 rounded-md shadow-lg flex items-center transition-all">
                    <img src="https://img.icons8.com/color/48/google-maps-new.png" alt="Maps" className="w-4 h-4 mr-2" />
                    {lang === "en" ? "Start Route" : "Iniciar Ruta"}
                  </span>
                </div>
                <iframe 
                  src="https://maps.google.com/maps?q=9.9396956,-84.1059762&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none"
                >
                </iframe>
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Tratamientos */}
        <div>
          <h3 className="text-lg font-heading font-bold mb-4 text-secondary-green">
            {lang === "en" ? "Treatments" : "Tratamientos"}
          </h3>
          <ul className="space-y-2 text-gray-400 flex flex-col">
            <Link href={`/${lang}/tratamientos/implantes-dentales`} className="hover:text-white transition">
              {lang === "en" ? "Dental Implants" : "Implantes Dentales"}
            </Link>
            <Link href={`/${lang}/tratamientos/estetica-dental`} className="hover:text-white transition">
              {lang === "en" ? "Aesthetics & Veneers" : "Estética y Carillas"}
            </Link>
            <Link href={`/${lang}/turismo-dental`} className="hover:text-white transition">
              {lang === "en" ? "Dental Tourism" : "Turismo Dental"}
            </Link>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 Costa Rica Medical Trip. {lang === "en" ? "All rights reserved." : "Todos los derechos reservados."}</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href={`/${lang}/politica-privacidad`} className="hover:text-white">
            {lang === "en" ? "Privacy Policy" : "Política de Privacidad"}
          </Link>
          <Link href={`/${lang}/terminos-condiciones`} className="hover:text-white">
            {lang === "en" ? "Terms & Conditions" : "Términos y Condiciones"}
          </Link>
        </div>
      </div>
    </footer>
  );
}