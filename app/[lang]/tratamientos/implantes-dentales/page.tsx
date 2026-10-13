import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Award } from "lucide-react";

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function TratamientosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const content = {
    es: {
      badge: "EXCELENCIA ODONTOLÓGICA",
      title: "Nuestros Tratamientos Especializados",
      subtitle: "Tecnología de punta, materiales certificados por la FDA y especialistas con formación internacional para devolverle la salud y estética a su sonrisa.",
      ctaButton: "Solicitar Valoración Gratuita",
      treatments: [
        {
          category: "Rehabilitación Oral",
          title: "All-on-4 / All-on-6 (Arcada Completa)",
          desc: "La solución definitiva para reemplazar una arcada dental completa utilizando solo de 4 a 6 implantes estratégicos. Disfrute de dientes fijos, seguros y naturales en el menor tiempo posible.",
          benefit1: "Dientes fijos desde el primer momento",
          benefit2: "Ideal para pacientes con pérdida ósea moderada"
        },
        {
          category: "Implantes Dentales",
          title: "Implantes Unitarios y Múltiples",
          desc: "Reemplace piezas faltantes de raíz a corona con titanio de grado médico. Se fusionan perfectamente con su hueso maxilar brindando una durabilidad de por vida.",
          benefit1: "Aspecto y sensación 100% natural",
          benefit2: "No requiere desgastar dientes vecinos"
        },
        {
          category: "Estética VIP",
          title: "Diseño de Sonrisa y Carillas",
          desc: "Armonice el color, tamaño y forma de sus dientes con carillas de porcelana E.max o Zirconia. Planificación digital previa para resultados predecibles y deslumbrantes.",
          benefit1: "Porcelanas ultrarresistentes y estéticas",
          benefit2: "Corrección de manchas y alineación"
        },
        {
          category: "Prótesis Fijas",
          title: "Coronas y Puentes de Zirconia",
          desc: "Fabricadas en nuestro laboratorio digital interno con tecnología CAD/CAM. Ofrecen una biocompatibilidad superior y una estética translúcida inigualable.",
          benefit1: "Libres de metal (cero líneas oscuras)",
          benefit2: "Ajuste milimétrico y entrega rápida"
        },
        {
          category: "Cirugía Avanzada",
          title: "Injertos Óseos y Seno Maxilar",
          desc: "Procedimientos especializados para recuperar el volumen óseo perdido y garantizar que la base para sus implantes sea totalmente firme y segura.",
          benefit1: "Regeneración ósea guiada",
          benefit2: "Realizado por cirujanos maxilofaciales"
        },
        {
          category: "Salud Integral",
          title: "Endodoncia y Periodoncia",
          desc: "Tratamientos conservadores y bajo magnificación microscópica para salvar piezas dentales comprometidas y devolver la salud completa a sus encías.",
          benefit1: "Procedimientos indoloros y seguros",
          benefit2: "Tecnología rotatoria avanzada"
        }
      ]
    },
    en: {
      badge: "DENTAL EXCELLENCE",
      title: "Our Specialized Treatments",
      subtitle: "Cutting-edge technology, FDA-certified materials, and internationally trained specialists to restore your health and smile aesthetics.",
      ctaButton: "Request Free Evaluation",
      treatments: [
        {
          category: "Oral Rehabilitation",
          title: "All-on-4 / All-on-6 (Full Arch)",
          desc: "The ultimate solution to replace a full dental arch using only 4 to 6 strategic implants. Enjoy fixed, secure, and natural teeth in the shortest possible time.",
          benefit1: "Fixed teeth from day one",
          benefit2: "Ideal for patients with moderate bone loss"
        },
        {
          category: "Dental Implants",
          title: "Single & Multiple Implants",
          desc: "Replace missing teeth from root to crown using medical-grade titanium. They fuse seamlessly with your jawbone for lifelong durability.",
          benefit1: "100% natural look and feel",
          benefit2: "No grinding of adjacent healthy teeth"
        },
        {
          category: "VIP Aesthetics",
          title: "Smile Design & Veneers",
          desc: "Harmonize the color, size, and shape of your teeth with E.max porcelain or Zirconia veneers. Digital planning ensures predictable, stunning results.",
          benefit1: "Ultra-strong and aesthetic porcelains",
          benefit2: "Correction of stains and alignment"
        },
        {
          category: "Fixed Prosthetics",
          title: "Zirconia Crowns & Bridges",
          desc: "Crafted in our in-house digital lab using CAD/CAM technology. They offer superior biocompatibility and unmatched translucent aesthetics.",
          benefit1: "Metal-free (zero dark lines)",
          benefit2: "Millimetric fit and fast turnaround"
        },
        {
          category: "Advanced Surgery",
          title: "Bone Grafts & Sinus Lift",
          desc: "Specialized procedures to rebuild lost bone volume and ensure a solid, secure foundation for your dental implants.",
          benefit1: "Guided bone regeneration",
          benefit2: "Performed by certified maxillofacial surgeons"
        },
        {
          category: "Comprehensive Care",
          title: "Root Canal & Periodontics",
          desc: "Conservative treatments under microscopic magnification to save compromised teeth and restore complete health to your gums.",
          benefit1: "Painless and safe procedures",
          benefit2: "Advanced rotary technology"
        }
      ]
    }
  };

  const t = content[lang as keyof typeof content] || content.es;

  return (
    <div className="flex flex-col min-h-screen bg-bg-light">
      
      {/* HERO */}
      <section className="bg-primary-blue text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-secondary-green font-bold text-sm tracking-widest uppercase">
            {t.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold">
            {t.title}
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* LISTA DE TRATAMIENTOS */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {t.treatments.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="inline-block bg-blue-50 text-primary-blue text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-primary-blue">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-gray-100 text-xs text-gray-700">
                <div className="flex items-center">
                  <CheckCircle2 size={16} className="text-secondary-green mr-2 flex-shrink-0" />
                  <span>{item.benefit1}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 size={16} className="text-secondary-green mr-2 flex-shrink-0" />
                  <span>{item.benefit2}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  href={`/${lang}/valoracion`} 
                  className="inline-flex items-center text-primary-blue font-bold text-sm hover:text-blue-800 transition"
                >
                  {t.ctaButton} <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* SECCIÓN DE CONFIANZA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-blue">
            {lang === "en" ? "Guaranteed Quality & Certified Materials" : "Calidad Garantizada y Materiales Certificados"}
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            {lang === "en"
              ? "We work exclusively with globally recognized dental brands backed by written international warranties, ensuring your investment is protected for years to come."
              : "Trabajamos exclusivamente con marcas dentales reconocidas a nivel mundial respaldadas por garantías internacionales por escrito, asegurando que su inversión esté protegida a futuro."}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-6 text-sm font-bold text-primary-blue">
            <span className="flex items-center"><ShieldCheck className="text-secondary-green mr-2" size={20} /> FDA & ADA Approved</span>
            <span className="flex items-center"><Award className="text-primary-blue mr-2" size={20} /> {lang === "en" ? "Lifetime Implant Warranty" : "Garantía de por Vida en Implantes"}</span>
          </div>
        </div>
      </section>

    </div>
  );
}