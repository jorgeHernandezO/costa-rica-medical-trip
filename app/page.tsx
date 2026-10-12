import Link from "next/link";
import { ShieldCheck, Plane, Award, Clock, ArrowRight, CheckCircle2, Star, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION (Diseño Limpio) */}
      <section className="relative text-white pt-20 pb-32 lg:pt-28 lg:pb-40 overflow-hidden">
        
        {/* IMAGEN DE FONDO Y CAPA PROTECTORA */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Hero_Imagen.png" 
            alt="Costa Rica Medical Trip" 
            className="w-full h-full object-cover object-center"
          />
          {/* Filtro ajustado para oscurecer solo la izquierda y dejar la derecha transparente */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 via-primary-blue/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* CONTENEDOR DE TEXTO: Limitado a la izquierda (max-w-2xl) para no tapar a las personas */}
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight drop-shadow-md">
              Transforme su Sonrisa y Ahorre hasta un <span className="text-secondary-green drop-shadow-sm">60%</span>
            </h1>
            <p className="text-lg text-blue-50 drop-shadow-md font-medium">
              Especialistas certificados en implantes dentales, estética y rehabilitación oral integral para pacientes de Estados Unidos, Canadá y nacionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/valoracion" className="bg-secondary-green hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg text-center transition shadow-lg flex items-center justify-center text-lg inline-flex w-fit">
                Obtener Cotización <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 pt-4 text-sm text-blue-100 font-medium">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="drop-shadow-sm" />
                ))}
              </div>
              <p className="drop-shadow-md"><strong>4.9/5</strong> basado en pacientes internacionales satisfechos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE CONFIANZA Y GARANTÍAS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-xl bg-bg-light flex flex-col items-center hover:-translate-y-1 transition duration-300">
            <Award className="text-primary-blue w-12 h-12 mb-4" />
            <h4 className="font-bold text-lg text-primary-blue mb-2">Especialistas Certificados</h4>
            <p className="text-sm text-gray-600">Formación avanzada en implantología oral y estética.</p>
          </div>
          <div className="p-6 rounded-xl bg-bg-light flex flex-col items-center hover:-translate-y-1 transition duration-300">
            <ShieldCheck className="text-secondary-green w-12 h-12 mb-4" />
            <h4 className="font-bold text-lg text-primary-blue mb-2">Materiales FDA y ADA</h4>
            <p className="text-sm text-gray-600">Usamos marcas de primer nivel mundial con garantía respaldada.</p>
          </div>
          <div className="p-6 rounded-xl bg-bg-light flex flex-col items-center hover:-translate-y-1 transition duration-300">
            <Plane className="text-primary-blue w-12 h-12 mb-4" />
            <h4 className="font-bold text-lg text-primary-blue mb-2">Logística de Viaje</h4>
            <p className="text-sm text-gray-600">Asesoría integral en transporte y coordinación de citas.</p>
          </div>
          <div className="p-6 rounded-xl bg-bg-light flex flex-col items-center hover:-translate-y-1 transition duration-300">
            <Clock className="text-secondary-green w-12 h-12 mb-4" />
            <h4 className="font-bold text-lg text-primary-blue mb-2">Tecnología de Vanguardia</h4>
            <p className="text-sm text-gray-600">Diagnóstico 3D y tiempos optimizados para el turista médico.</p>
          </div>
        </div>
      </section>

      {/* 3. TRATAMIENTOS PRINCIPALES */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-green font-bold text-sm tracking-widest uppercase">Excelencia Odontológica</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-blue mt-2 mb-4">
              Nuestros Tratamientos Destacados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col p-8 justify-between group">
              <div>
                <span className="text-xs font-bold bg-blue-50 text-primary-blue px-3 py-1 rounded-full">Rehabilitación</span>
                <h3 className="text-2xl font-heading font-bold text-primary-blue mt-4 mb-3">Implantes Dentales</h3>
                <p className="text-gray-600 text-sm mb-6">Reemplace dientes perdidos de manera permanente.</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-secondary-green mr-2" /> Osteointegración</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-secondary-green mr-2" /> Aspecto natural</li>
                </ul>
              </div>
              <Link href="/tratamientos/implantes-dentales" className="text-primary-blue font-bold flex items-center group-hover:text-blue-800 transition">
                Conocer más <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
              </Link>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col p-8 justify-between group">
              <div>
                <span className="text-xs font-bold bg-green-50 text-secondary-green px-3 py-1 rounded-full">Estética VIP</span>
                <h3 className="text-2xl font-heading font-bold text-primary-blue mt-4 mb-3">Diseño de Sonrisa</h3>
                <p className="text-gray-600 text-sm mb-6">Armonice el color y la forma de sus dientes.</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-secondary-green mr-2" /> Estudio digital</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-secondary-green mr-2" /> Larga durabilidad</li>
                </ul>
              </div>
              <Link href="/tratamientos/estetica-dental" className="text-primary-blue font-bold flex items-center group-hover:text-blue-800 transition">
                Ver opciones <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
              </Link>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col p-8 justify-between group">
              <div>
                <span className="text-xs font-bold bg-blue-50 text-primary-blue px-3 py-1 rounded-full">Turismo Médico</span>
                <h3 className="text-2xl font-heading font-bold text-primary-blue mt-4 mb-3">Viaje Dental</h3>
                <p className="text-gray-600 text-sm mb-6">Reciba atención de clase mundial en Costa Rica.</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-secondary-green mr-2" /> Guía de hoteles</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-secondary-green mr-2" /> Gran ahorro</li>
                </ul>
              </div>
              <Link href="/turismo-dental" className="text-primary-blue font-bold flex items-center group-hover:text-blue-800 transition">
                Planear mi viaje <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-green font-bold text-sm tracking-widest uppercase">Fácil y Transparente</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-blue mt-2 mb-4">
              ¿Cómo Funciona su Viaje Dental?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-primary-blue font-heading font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-blue/20">1</div>
              <h4 className="font-bold text-lg text-primary-blue mb-2">Valoración Virtual</h4>
              <p className="text-sm text-gray-600">Envíenos sus fotos y reciba un presupuesto sin costo.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-primary-blue font-heading font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-blue/20">2</div>
              <h4 className="font-bold text-lg text-primary-blue mb-2">Coordinación</h4>
              <p className="text-sm text-gray-600">Le asesoramos con hotel y traslados.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-primary-blue font-heading font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-blue/20">3</div>
              <h4 className="font-bold text-lg text-primary-blue mb-2">Tratamiento</h4>
              <p className="text-sm text-gray-600">Atención con especialistas certificados.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-primary-blue font-heading font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-blue/20">4</div>
              <h4 className="font-bold text-lg text-primary-blue mb-2">Recuperación</h4>
              <p className="text-sm text-gray-600">Disfrute y regrese con una sonrisa renovada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="bg-primary-blue text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            ¿Listo para dar el primer paso hacia su nueva sonrisa?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a href="https://wa.me/50689592510" target="_blank" rel="noreferrer" className="bg-secondary-green hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition shadow-lg text-lg flex items-center justify-center hover:scale-105 duration-300">
              💬 Contáctanos, haz click!!!
            </a>
          </div>
          <p className="text-xs text-blue-200 pt-4 flex items-center justify-center">
            <MapPin size={14} className="mr-1" /> Sabana Norte, San José, Costa Rica.
          </p>
        </div>
      </section>

    </div>
  );
}