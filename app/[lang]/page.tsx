import Link from "next/link";
import { ArrowRight, Star, Award, ShieldCheck, Plane, Clock, CheckCircle2, MapPin } from "lucide-react";

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const content = {
    es: {
      heroTitle: "Transforme su Sonrisa y Ahorre hasta un",
      heroSubtitle: "Especialistas certificados en implantes dentales, estética y rehabilitación oral integral para pacientes de Estados Unidos, Canadá y nacionales.",
      ctaButton: "Obtener Cotización",
      ratingText: "basado en pacientes internacionales satisfechos.",
      
      feat1Title: "Especialistas Certificados",
      feat1Desc: "Formación avanzada en implantología oral y estética.",
      feat2Title: "Materiales FDA y ADA",
      feat2Desc: "Usamos marcas de primer nivel mundial con garantía respaldada.",
      feat3Title: "Logística de Viaje",
      feat3Desc: "Asesoría integral en transporte y coordinación de citas.",
      feat4Title: "Tecnología de Vanguardia",
      feat4Desc: "Diagnóstico 3D y tiempos optimizados para el turista médico.",

      treatmentsBadge: "EXCELENCIA ODONTOLÓGICA",
      treatmentsTitle: "Nuestros Tratamientos Destacados",
      
      implantsTag: "Rehabilitación",
      implantsTitle: "Implantes Dentales",
      implantsDesc: "Reemplace dientes perdidos de manera permanente.",
      implantsOpt1: "Osteointegración",
      implantsOpt2: "Aspecto natural",
      knowMore: "Conocer más",

      smileTag: "Estética VIP",
      smileTitle: "Diseño de Sonrisa",
      smileDesc: "Armonice el color y la forma de sus dientes.",
      smileOpt1: "Estudio digital",
      smileOpt2: "Larga durabilidad",
      seeOptions: "Ver opciones",

      tourismTag: "Turismo Médico",
      tourismTitle: "Viaje Dental",
      tourismDesc: "Reciba atención de clase mundial en Costa Rica.",
      tourismOpt1: "Guía de hoteles",
      tourismOpt2: "Gran ahorro",
      planTrip: "Planear mi viaje",

      stepsBadge: "FÁCIL Y TRANSPARENTE",
      stepsTitle: "¿Cómo Funciona su Viaje Dental?",
      step1Title: "Valoración Virtual",
      step1Desc: "Envíenos sus fotos y reciba un presupuesto sin costo.",
      step2Title: "Coordinación",
      step2Desc: "Le asesoramos con hotel y traslados.",
      step3Title: "Tratamiento",
      step3Desc: "Atención con especialistas certificados.",
      step4Title: "Recuperación",
      step4Desc: "Disfrute y regrese con una sonrisa renovada.",

      ctaBoxTitle: "¿Listo para dar el primer paso hacia su nueva sonrisa?",
      ctaBoxBtn: "💬 Contáctanos, haz click!!!",
      locationText: "Sabana Norte, San José, Costa Rica."
    },
    en: {
      heroTitle: "Transform Your Smile and Save Up to",
      heroSubtitle: "Certified specialists in dental implants, aesthetics, and full oral rehabilitation for US, Canadian, and local patients.",
      ctaButton: "Get a Quote",
      ratingText: "based on satisfied international patients.",
      
      feat1Title: "Certified Specialists",
      feat1Desc: "Advanced training in oral implantology and aesthetics.",
      feat2Title: "FDA & ADA Materials",
      feat2Desc: "We use world-class brands with backed guarantees.",
      feat3Title: "Travel Logistics",
      feat3Desc: "Comprehensive assistance with transport and appointments.",
      feat4Title: "Cutting-Edge Technology",
      feat4Desc: "3D diagnostics and optimized times for medical tourists.",

      treatmentsBadge: "DENTAL EXCELLENCE",
      treatmentsTitle: "Our Featured Treatments",
      
      implantsTag: "Rehabilitation",
      implantsTitle: "Dental Implants",
      implantsDesc: "Replace missing teeth permanently.",
      implantsOpt1: "Osseointegration",
      implantsOpt2: "Natural appearance",
      knowMore: "Learn more",

      smileTag: "VIP Aesthetics",
      smileTitle: "Smile Design",
      smileDesc: "Harmonize the color and shape of your teeth.",
      smileOpt1: "Digital study",
      smileOpt2: "Long durability",
      seeOptions: "See options",

      tourismTag: "Medical Tourism",
      tourismTitle: "Dental Trip",
      tourismDesc: "Receive world-class care in Costa Rica.",
      tourismOpt1: "Hotel guide",
      tourismOpt2: "Great savings",
      planTrip: "Plan my trip",

      stepsBadge: "EASY AND TRANSPARENT",
      stepsTitle: "How Does Your Dental Trip Work?",
      step1Title: "Virtual Consultation",
      step1Desc: "Send us your photos and receive a free quote.",
      step2Title: "Coordination",
      step2Desc: "We assist you with hotels and transportation.",
      step3Title: "Treatment",
      step3Desc: "Care with certified specialists.",
      step4Title: "Recovery",
      step4Desc: "Enjoy and return with a renewed smile.",

      ctaBoxTitle: "Ready to take the first step towards your new smile?",
      ctaBoxBtn: "💬 Contact us, click here!!!",
      locationText: "Sabana Norte, San José, Costa Rica."
    }
  };

  const t = content[lang as keyof typeof content] || content.es;

  return (
    <div className="flex flex-col min-h-screen bg-bg-light">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-white pt-20 pb-32 lg:pt-28 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/Hero_Imagen.png" alt="Costa Rica Medical Trip" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 via-primary-blue/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight drop-shadow-md">
              {t.heroTitle} <span className="text-secondary-green drop-shadow-sm">60%</span>
            </h1>
            <p className="text-lg text-blue-50 drop-shadow-md font-medium">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href={`/${lang}/valoracion`} 
                className="bg-secondary-green hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg text-center transition shadow-lg flex items-center justify-center text-lg inline-flex w-fit"
              >
                {t.ctaButton} <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="flex items-center space-x-4 pt-4 text-sm text-blue-100 font-medium">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="drop-shadow-sm" />
                ))}
              </div>
              <p className="drop-shadow-md">
                <strong>4.9/5</strong> {t.ratingText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CARACTERÍSTICAS PRINCIPALES */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          
          <div className="p-6 rounded-xl bg-bg-light flex flex-col items-center hover:-translate-y-1 transition duration-300">
            <Award className="text-primary-blue w-12 h-12 mb-4" />
            <h4 className="font-bold text-lg text-primary-blue mb-2">{t.feat1Title}</h4>
            <p className="text-sm text-gray-600">{t.feat1Desc}</p>
          </div>

          <div className="p-6 rounded-xl bg-bg-light flex flex-col items-center hover:-translate-y-1 transition duration-300">
            <ShieldCheck className="text-secondary-green w-12 h-12 mb-4" />
            <h4 className="font-bold text-lg text-primary-blue mb-2">{t.feat2Title}</h4>
            <p className="text-sm text-gray-600">{t.feat2Desc}</p>
          </div>

          <div className="p-6 rounded-xl bg-bg-light flex flex-col items-center hover:-translate-y-1 transition duration-300">
            <Plane className="text-primary-blue w-12 h-12 mb-4" />
            <h4 className="font-bold text-lg text-primary-blue mb-2">{t.feat3Title}</h4>
            <p className="text-sm text-gray-600">{t.feat3Desc}</p>
          </div>

          <div className="p-6 rounded-xl bg-bg-light flex flex-col items-center hover:-translate-y-1 transition duration-300">
            <Clock className="text-secondary-green w-12 h-12 mb-4" />
            <h4 className="font-bold text-lg text-primary-blue mb-2">{t.feat4Title}</h4>
            <p className="text-sm text-gray-600">{t.feat4Desc}</p>
          </div>

        </div>
      </section>

      {/* 3. TRATAMIENTOS DESTACADOS */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-green font-bold text-sm tracking-widest uppercase">{t.treatmentsBadge}</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-blue mt-2 mb-4">{t.treatmentsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col p-8 justify-between group">
              <div>
                <span className="text-xs font-bold bg-blue-50 text-primary-blue px-3 py-1 rounded-full">{t.implantsTag}</span>
                <h3 className="text-2xl font-heading font-bold text-primary-blue mt-4 mb-3">{t.implantsTitle}</h3>
                <p className="text-gray-600 text-sm mb-6">{t.implantsDesc}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="text-secondary-green mr-2" size={16} /> {t.implantsOpt1}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-secondary-green mr-2" size={16} /> {t.implantsOpt2}
                  </li>
                </ul>
              </div>
              <Link className="text-primary-blue font-bold flex items-center group-hover:text-blue-800 transition" href={`/${lang}/tratamientos/implantes-dentales`}>
                {t.knowMore} <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={16} />
              </Link>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col p-8 justify-between group">
              <div>
                <span className="text-xs font-bold bg-green-50 text-secondary-green px-3 py-1 rounded-full">{t.smileTag}</span>
                <h3 className="text-2xl font-heading font-bold text-primary-blue mt-4 mb-3">{t.smileTitle}</h3>
                <p className="text-gray-600 text-sm mb-6">{t.smileDesc}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="text-secondary-green mr-2" size={16} /> {t.smileOpt1}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-secondary-green mr-2" size={16} /> {t.smileOpt2}
                  </li>
                </ul>
              </div>
              <Link className="text-primary-blue font-bold flex items-center group-hover:text-blue-800 transition" href={`/${lang}/tratamientos/estetica-dental`}>
                {t.seeOptions} <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={16} />
              </Link>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col p-8 justify-between group">
              <div>
                <span className="text-xs font-bold bg-blue-50 text-primary-blue px-3 py-1 rounded-full">{t.tourismTag}</span>
                <h3 className="text-2xl font-heading font-bold text-primary-blue mt-4 mb-3">{t.tourismTitle}</h3>
                <p className="text-gray-600 text-sm mb-6">{t.tourismDesc}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="text-secondary-green mr-2" size={16} /> {t.tourismOpt1}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-secondary-green mr-2" size={16} /> {t.tourismOpt2}
                  </li>
                </ul>
              </div>
              <Link className="text-primary-blue font-bold flex items-center group-hover:text-blue-800 transition" href={`/${lang}/turismo-dental`}>
                {t.planTrip} <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ¿CÓMO FUNCIONA? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-green font-bold text-sm tracking-widest uppercase">{t.stepsBadge}</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-blue mt-2 mb-4">{t.stepsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-primary-blue font-heading font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-blue/20">1</div>
              <h4 className="font-bold text-lg text-primary-blue mb-2">{t.step1Title}</h4>
              <p className="text-sm text-gray-600">{t.step1Desc}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-primary-blue font-heading font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-blue/20">2</div>
              <h4 className="font-bold text-lg text-primary-blue mb-2">{t.step2Title}</h4>
              <p className="text-sm text-gray-600">{t.step2Desc}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-primary-blue font-heading font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-blue/20">3</div>
              <h4 className="font-bold text-lg text-primary-blue mb-2">{t.step3Title}</h4>
              <p className="text-sm text-gray-600">{t.step3Desc}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-primary-blue font-heading font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-blue/20">4</div>
              <h4 className="font-bold text-lg text-primary-blue mb-2">{t.step4Title}</h4>
              <p className="text-sm text-gray-600">{t.step4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LLAMADO A LA ACCIÓN FINAL */}
      <section className="bg-primary-blue text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">{t.ctaBoxTitle}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a 
              href="https://wa.me/50689592510" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-secondary-green hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition shadow-lg text-lg flex items-center justify-center hover:scale-105 duration-300"
            >
              {t.ctaBoxBtn}
            </a>
          </div>
          <p className="text-xs text-blue-200 pt-4 flex items-center justify-center">
            <MapPin className="mr-1" size={14} /> {t.locationText}
          </p>
        </div>
      </section>

    </div>
  );
}