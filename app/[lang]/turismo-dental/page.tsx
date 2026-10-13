import Link from "next/link";
import { Plane, ShieldCheck, Clock, MapPin, ArrowRight, Hotel, Car, Headphones, Cpu, HeartPulse } from "lucide-react";

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function TurismoDentalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen bg-bg-light">
      
      {/* 1. HERO DE TURISMO DENTAL */}
      <section className="relative text-white py-20 lg:py-28 overflow-hidden bg-primary-blue">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center max-w-3xl space-y-6">
          <span className="text-secondary-green font-bold text-sm tracking-widest uppercase">
            {lang === 'en' ? 'Dental Tourism in Costa Rica' : 'Turismo Dental en Costa Rica'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold leading-tight">
            {lang === 'en' ? 'Save up to 60% on Your Dental Treatment' : 'Ahorre hasta un 60% en su Tratamiento Dental'}
          </h1>
          <p className="text-lg text-blue-100 font-medium">
            {lang === 'en'
              ? 'Combine world-class dental care with an unforgettable vacation in Costa Rica. We coordinate your logistics from airport pickup to hotel and clinic.'
              : 'Combine atención dental de clase mundial con unas vacaciones inolvidables en Costa Rica. Coordinamos su logística desde la llegada al aeropuerto hasta el hotel y la clínica.'}
          </p>
          <div className="pt-4">
            <Link 
              href={`/${lang}/valoracion`} 
              className="bg-secondary-green hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition shadow-lg inline-flex items-center text-lg"
            >
              {lang === 'en' ? 'Plan Your Trip Today' : 'Planifique su Viaje Hoy'} <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. LOGÍSTICA Y CONCIERGE MÉDICO */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary-green font-bold text-sm tracking-widest uppercase">
              {lang === 'en' ? 'Concierge Service' : 'Servicio de Concierge'}
            </span>
            <h2 className="text-3xl font-heading font-bold text-primary-blue mt-2">
              {lang === 'en' ? 'Your Trip, Completely Coordinated' : 'Su Viaje, Completamente Coordinado'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-bg-light flex flex-col items-center text-center space-y-3">
              <Car className="text-primary-blue w-12 h-12 mb-2" />
              <h4 className="font-bold text-lg text-primary-blue">
                {lang === 'en' ? 'Airport & Local Transfers' : 'Traslados y Aeropuerto'}
              </h4>
              <p className="text-sm text-gray-600">
                {lang === 'en'
                  ? 'Safe pickup from SJO airport and private transportation between your hotel and our clinic in Sabana Norte.'
                  : 'Recogida segura en el aeropuerto SJO y transporte privado entre su hotel y nuestra clínica en Sabana Norte.'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-bg-light flex flex-col items-center text-center space-y-3">
              <Hotel className="text-secondary-green w-12 h-12 mb-2" />
              <h4 className="font-bold text-lg text-primary-blue">
                {lang === 'en' ? 'Partner Hotels & Recovery' : 'Hoteles Asociados y Recuperación'}
              </h4>
              <p className="text-sm text-gray-600">
                {lang === 'en'
                  ? 'Special corporate rates at premium boutique hotels near our facilities, perfectly adapted for post-op rest.'
                  : 'Tarifas corporativas especiales en hoteles boutique prémium cerca de nuestras instalaciones, ideales para el descanso postoperatorio.'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-bg-light flex flex-col items-center text-center space-y-3">
              <Headphones className="text-primary-blue w-12 h-12 mb-2" />
              <h4 className="font-bold text-lg text-primary-blue">
                {lang === 'en' ? 'Bilingual Patient Coordinators' : 'Coordinadores Bilingües'}
              </h4>
              <p className="text-sm text-gray-600">
                {lang === 'en'
                  ? 'A dedicated coordinator assisting you step-by-step in English before, during, and after your medical trip.'
                  : 'Un coordinador dedicado asistiéndole paso a paso en inglés antes, durante y después de su viaje médico.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUEVA SECCIÓN: TECNOLOGÍA Y LABORATORIO INTERNO */}
      <section className="py-16 bg-bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-secondary-green font-bold text-sm tracking-widest uppercase">
              {lang === 'en' ? 'Advanced Infrastructure' : 'Infraestructura Avanzada'}
            </span>
            <h2 className="text-3xl font-heading font-bold text-primary-blue">
              {lang === 'en' ? 'In-House Digital Laboratory & 3D Diagnostics' : 'Laboratorio Digital Interno y Diagnóstico 3D'}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {lang === 'en'
                ? 'Unlike clinics that outsource their dental pieces abroad, we feature an advanced in-house digital lab. This allows our specialists to design and craft custom Zirconia crowns, veneers, and prosthetics with absolute precision in record time.'
                : 'A diferencia de las clínicas que tercerizan sus piezas dentales al extranjero, contamos con un laboratorio digital interno avanzado. Esto permite a nuestros especialistas diseñar y fabricar coronas de Zirconia, carillas y prótesis personalizadas con absoluta precisión en tiempo récord.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Cpu className="text-primary-blue w-8 h-8 mb-2" />
                <h4 className="font-bold text-primary-blue mb-1">{lang === 'en' ? 'CAD/CAM Technology' : 'Tecnología CAD/CAM'}</h4>
                <p className="text-xs text-gray-600">{lang === 'en' ? 'Digital impressions and instant milling for flawless fits.' : 'Impresiones digitales y fresado instantáneo para ajustes perfectos.'}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <HeartPulse className="text-secondary-green w-8 h-8 mb-2" />
                <h4 className="font-bold text-primary-blue mb-1">{lang === 'en' ? 'Optimized Recovery' : 'Recuperación Optimizada'}</h4>
                <p className="text-xs text-gray-600">{lang === 'en' ? 'Fewer appointments required so you can enjoy your vacation.' : 'Menor cantidad de citas requeridas para que disfrute sus vacaciones.'}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="text-xl font-heading font-bold text-primary-blue">
              {lang === 'en' ? 'Why International Patients Trust Us' : 'Por qué confían en nosotros los pacientes internacionales'}
            </h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start">
                <ShieldCheck className="text-secondary-green mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span>{lang === 'en' ? 'FDA and ADA approved medical-grade materials with certified warranties.' : 'Materiales de grado médico aprobados por la FDA y ADA con garantías certificadas.'}</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="text-secondary-green mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span>{lang === 'en' ? 'Board-certified oral surgeons and implantologists with US training.' : 'Cirujanos orales e implantólogos certificados con formación internacional.'}</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="text-secondary-green mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span>{lang === 'en' ? 'Transparent pricing with zero hidden fees and written guarantees.' : 'Precios transparentes sin costos ocultos y garantías por escrito.'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. PROCESO PASO A PASO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-green font-bold text-sm tracking-widest uppercase">
              {lang === 'en' ? 'Step by Step' : 'Paso a Paso'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-blue mt-2 mb-4">
              {lang === 'en' ? 'Your Journey to a New Smile' : 'Su Viaje Hacia Una Nueva Sonrisa'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-light p-8 rounded-xl border border-gray-100 space-y-3">
              <div className="w-12 h-12 bg-white text-primary-blue font-bold text-xl rounded-full flex items-center justify-center shadow-sm">1</div>
              <h3 className="text-xl font-heading font-bold text-primary-blue">
                {lang === 'en' ? 'Virtual Consultation' : 'Valoración Virtual'}
              </h3>
              <p className="text-gray-600 text-sm">
                {lang === 'en'
                  ? 'Send us your X-rays or photos online. Our specialists will design your customized treatment plan and cost estimate.'
                  : 'Envíenos sus radiografías o fotos en línea. Nuestros especialistas diseñarán su plan de tratamiento y cotización.'}
              </p>
            </div>

            <div className="bg-bg-light p-8 rounded-xl border border-gray-100 space-y-3">
              <div className="w-12 h-12 bg-white text-primary-blue font-bold text-xl rounded-full flex items-center justify-center shadow-sm">2</div>
              <h3 className="text-xl font-heading font-bold text-primary-blue">
                {lang === 'en' ? 'Trip Planning' : 'Planificación del Viaje'}
              </h3>
              <p className="text-gray-600 text-sm">
                {lang === 'en'
                  ? 'We coordinate your flights, boutique hotel options near Sabana Norte, and private airport transfers.'
                  : 'Coordinamos sus vuelos, opciones de hoteles boutique cerca de Sabana Norte y traslados privados desde el aeropuerto.'}
              </p>
            </div>

            <div className="bg-bg-light p-8 rounded-xl border border-gray-100 space-y-3">
              <div className="w-12 h-12 bg-white text-primary-blue font-bold text-xl rounded-full flex items-center justify-center shadow-sm">3</div>
              <h3 className="text-xl font-heading font-bold text-primary-blue">
                {lang === 'en' ? 'Treatment & Vacation' : 'Tratamiento y Vacaciones'}
              </h3>
              <p className="text-gray-600 text-sm">
                {lang === 'en'
                  ? 'Arrive in Costa Rica, receive top-tier dental care, and enjoy the beauty of the country while you heal.'
                  : 'Llegue a Costa Rica, reciba atención dental de primer nivel y disfrute de la belleza del país mientras se recupera.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="bg-primary-blue text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            {lang === 'en' ? 'Ready to Start Your Medical Trip?' : '¿Listo para Iniciar su Viaje Médico?'}
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm">
            {lang === 'en'
              ? 'Contact us today via WhatsApp or fill out our form to receive an evaluation from our dental experts.'
              : 'Contáctenos hoy vía WhatsApp o llene nuestro formulario para recibir una evaluación de nuestros expertos dentales.'}
          </p>
          <div className="pt-2">
            <Link 
              href={`/${lang}/valoracion`} 
              className="bg-secondary-green hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition shadow-lg text-lg inline-flex items-center"
            >
              {lang === 'en' ? 'Request Free Evaluation' : 'Solicitar Evaluación Gratuita'}
            </Link>
          </div>
          <p className="text-xs text-blue-200 pt-2 flex items-center justify-center">
            <MapPin size={14} className="mr-1" /> Sabana Norte, San José, Costa Rica
          </p>
        </div>
      </section>

    </div>
  );
}