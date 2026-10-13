import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function CasosClinicosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Textos traducidos para los casos
  const content = {
    es: {
      badge: "CASOS DE ÉXITO",
      title: "Transformaciones Reales y Sonrisas",
      subtitle: "Explore nuestros casos clínicos y descubra cómo devolvemos la función y estética a pacientes nacionales e internacionales.",
      cases: [
        {
          tag: "Implantes Dentales",
          title: "Rehabilitación Completa con Implantes",
          desc: "Paciente internacional (Canadá) presentaba pérdida severa de piezas posteriores que dificultaban la masticación. Se realizó una planificación 3D y se colocaron implantes fijos.",
          beforeText: "Antes",
          afterText: "Después",
          btn: "Ver caso clínico"
        },
        {
          tag: "Estética y Carillas",
          title: "Diseño de Sonrisa Superior",
          desc: "Paciente local buscaba mejorar el color y forma de su sonrisa. Se realizó blanqueamiento previo y se colocaron carillas estéticas en el sector anterior.",
          beforeText: "Foto Antes",
          afterText: "Foto Despues",
          btn: "Ver caso clínico"
        }
      ]
    },
    en: {
      badge: "SUCCESS STORIES",
      title: "Real Transformations & Smiles",
      subtitle: "Explore our clinical cases and see how we restore function and aesthetics for our international and local patients.",
      cases: [
        {
          tag: "Dental Implants",
          title: "Full Arch Rehabilitation with Implants",
          desc: "International patient (Canada) presented severe posterior teeth loss affecting chewing. 3D planning was performed and fixed implants were placed.",
          beforeText: "Before",
          afterText: "After",
          btn: "View clinical case"
        },
        {
          tag: "Aesthetics & Veneers",
          title: "Superior Smile Design",
          desc: "Local patient sought to improve the color and shape of their smile. Previous whitening was performed and aesthetic veneers were placed in the anterior area.",
          beforeText: "Before Photo",
          afterText: "After Photo",
          btn: "View clinical case"
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

      {/* LISTA DE CASOS */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {t.cases.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Contenedor de imágenes simuladas / antes y después */}
                <div className="grid grid-cols-2 gap-1 bg-gray-200 h-64 relative">
                  <div className="relative bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img 
                      src={index === 0 ? "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600" : "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"} 
                      alt="Antes" 
                      className="w-full h-full object-cover filter grayscale"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {item.beforeText}
                    </span>
                  </div>
                  <div className="relative bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img 
                      src={index === 0 ? "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" : "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"} 
                      alt="Después" 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-secondary-green text-white text-xs px-2 py-1 rounded font-bold">
                      {item.afterText}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="inline-block bg-blue-50 text-primary-blue text-xs font-bold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-primary-blue">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link href={`/${lang}/valoracion`} className="inline-flex items-center text-primary-blue font-bold text-sm hover:text-blue-800 transition">
                  {item.btn} <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}