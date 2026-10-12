import Link from "next/link";
import { treatmentsData } from "../../../data/treatments";
import { CheckCircle2, ChevronRight, Phone } from "lucide-react";

export const metadata = {
  title: "Implantes Dentales en Costa Rica | Costa Rica Medical Trip",
  description: "Especialistas en implantes dentales en San José, Costa Rica. Recupere su sonrisa con tecnología 3D y materiales biocompatibles de primera calidad.",
};

export default function ImplantesPage() {
  const data = treatmentsData.implantes;

  return (
    <div className="bg-bg-light min-h-screen">
      {/* HEADER DEL TRATAMIENTO */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center text-sm mb-4 text-blue-200">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <ChevronRight size={16} className="mx-2" />
            <span>Tratamientos</span>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-white font-semibold">{data.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{data.title}</h1>
          <p className="text-xl max-w-2xl text-blue-50">{data.description}</p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Columna Izquierda: Explicación y Proceso */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-heading font-bold text-primary-blue mb-6">¿Por qué elegir implantes dentales?</h2>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-10">
            <ul className="space-y-4">
              {data.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="text-secondary-green mr-3 mt-1 shrink-0" size={20} />
                  <span className="text-text-gray">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary-blue mb-6">El Proceso Paso a Paso</h2>
          <div className="space-y-6 mb-10">
            {data.process.map((step) => (
              <div key={step.step} className="flex bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-secondary-green text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 mr-6">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-blue mb-2">{step.name}</h3>
                  <p className="text-text-gray">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Preguntas Frecuentes */}
          <h2 className="text-3xl font-heading font-bold text-primary-blue mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-primary-blue mb-2">{faq.q}</h4>
                <p className="text-text-gray text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">* El tratamiento adecuado depende de una valoración clínica. Cada paciente requiere un diagnóstico individual.</p>
        </div>

        {/* Columna Derecha: Sticky CTA (Llamado a la acción) */}
        <div className="md:col-span-1">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary-green sticky top-24">
            <h3 className="text-2xl font-heading font-bold text-primary-blue mb-4">¿Le faltan piezas dentales?</h3>
            <p className="text-text-gray mb-6 text-sm">
              Envíenos una radiografía panorámica para una valoración preliminar gratuita con nuestros especialistas.
            </p>
            <Link href="/valoracion" className="block w-full bg-primary-blue text-white text-center py-3 rounded-md font-bold hover:bg-blue-700 transition mb-4">
              Solicitar Valoración
            </Link>
            <a href="https://wa.me/50689592510" target="_blank" rel="noreferrer" className="block w-full bg-white border-2 border-secondary-green text-secondary-green text-center py-3 rounded-md font-bold hover:bg-green-50 transition mb-6">
              Contactar por WhatsApp
            </a>
            <div className="flex items-center justify-center text-text-gray text-sm">
              <Phone size={16} className="mr-2" /> Llámenos: 4070-2510
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}