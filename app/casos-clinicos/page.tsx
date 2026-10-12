import Link from "next/link";
import { casesData } from "../../data/cases";
import { Info } from "lucide-react";

export const metadata = {
  title: "Casos de Éxito y Antes/Después | Costa Rica Medical Trip",
  description: "Galería de casos clínicos reales. Resultados de implantes dentales, carillas y rehabilitación oral en Costa Rica Medical Trip.",
};

export default function CasosClinicosPage() {
  return (
    <div className="bg-bg-light min-h-screen pb-20">
      {/* HEADER DE LA PÁGINA */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Casos Clínicos de Éxito</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-50">
            Resultados reales de pacientes que confiaron su sonrisa a nuestros especialistas en Costa Rica.
          </p>
        </div>
      </section>

      {/* AVISO LEGAL MÉDICO */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border-l-4 border-primary-blue p-4 rounded-r-md flex items-start">
          <Info className="text-primary-blue mr-3 mt-1 shrink-0" size={20} />
          <p className="text-sm text-text-gray">
            <strong>Aviso importante:</strong> Las imágenes muestran resultados de pacientes reales de nuestra clínica. Los resultados pueden variar según las condiciones anatómicas, de salud y los cuidados individuales de cada paciente. Las fotografías se publican con el consentimiento expreso de los pacientes.
          </p>
        </div>
      </section>

      {/* GALERÍA DE CASOS */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-16">
          {casesData.map((caso) => (
            <div key={caso.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              
              {/* Encabezado del caso */}
              <div className="border-b border-gray-100 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between bg-gray-50">
                <div>
                  <span className="bg-primary-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {caso.category}
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-primary-blue mt-3">{caso.title}</h2>
                  <p className="text-text-gray mt-2 max-w-3xl">{caso.description}</p>
                </div>
                <div className="mt-4 md:mt-0 text-sm text-gray-400 font-mono bg-gray-200 px-3 py-1 rounded">
                  Ref: {caso.id}
                </div>
              </div>

              {/* Comparador Antes y Después */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-gray-200 p-1">
                {/* Foto Antes */}
                <div className="relative bg-white group">
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 text-sm font-bold rounded z-10">
                    ANTES
                  </div>
                  {/* Usamos img estándar para evitar errores de compilación con dominios externos en este momento */}
                  <img 
                    src={caso.beforeImg} 
                    alt={`Antes - ${caso.title}`}
                    className="w-full h-auto object-cover md:h-[400px]"
                  />
                </div>

                {/* Foto Después */}
                <div className="relative bg-white group">
                  <div className="absolute top-4 right-4 bg-secondary-green text-white px-3 py-1 text-sm font-bold rounded z-10 shadow-md">
                    DESPUÉS
                  </div>
                  <img 
                    src={caso.afterImg} 
                    alt={`Después - ${caso.title}`}
                    className="w-full h-auto object-cover md:h-[400px]"
                  />
                </div>
              </div>
              
              {/* Pie de tarjeta con CTA */}
              <div className="p-4 bg-white flex justify-end">
                <Link href="/valoracion" className="text-primary-blue font-bold text-sm hover:underline flex items-center">
                  Deseo una valoración para un tratamiento similar →
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}