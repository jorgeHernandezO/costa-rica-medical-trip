import Link from "next/link";
import { tourismData } from "../../data/tourism";
import { Plane, Building, Car, ChevronRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Turismo Dental en Costa Rica | Costa Rica Medical Trip",
  description: "Ahorre hasta un 60% en implantes dentales viajando a Costa Rica. Le organizamos todo su proceso: valoración, tratamiento, aeropuerto y hotel.",
};

export default function TurismoDentalPage() {
  return (
    <div className="bg-bg-light min-h-screen pb-20">
      {/* HERO DE TURISMO */}
      <section className="bg-primary-blue text-white py-20 bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-secondary-green font-bold tracking-wider uppercase text-sm mb-4 block">
            Pacientes Internacionales
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Turismo Dental de Clase Mundial
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-50 mb-8">
            Calidad estadounidense y europea a una fracción del costo. Disfrute de Costa Rica mientras transforma su sonrisa con especialistas certificados.
          </p>
          <Link href="/valoracion" className="bg-secondary-green text-white px-8 py-4 rounded-md font-bold hover:bg-green-600 transition shadow-lg inline-block">
            Iniciar Valoración Virtual Gratuita
          </Link>
        </div>
      </section>

      {/* POR QUÉ COSTA RICA Y NOSOTROS */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary-blue mb-6">¿Por qué viajar a Costa Rica para su tratamiento?</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="text-secondary-green mr-3 mt-1 shrink-0" size={24} />
                <p className="text-text-gray"><strong>Ahorro significativo:</strong> Hasta un 60% menos en procedimientos mayores (All-on-4, Implantes, Zirconia) comparado con EE. UU. y Canadá.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-secondary-green mr-3 mt-1 shrink-0" size={24} />
                <p className="text-text-gray"><strong>Especialistas Altamente Capacitados:</strong> Doctores bilingües con preparación académica internacional y uso de materiales aprobados globalmente.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-secondary-green mr-3 mt-1 shrink-0" size={24} />
                <p className="text-text-gray"><strong>Destino Turístico Seguro:</strong> Costa Rica es conocida por su paz, belleza natural y excelente sistema de salud privado.</p>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-blue">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Pacientes de Norteamérica</h3>
            <p className="text-text-gray mb-6">Hemos diseñado procesos de atención rápida específicamente para pacientes que vuelan desde Estados Unidos y Canadá, minimizando los días de estadía sin comprometer la excelencia clínica.</p>
            <div className="flex flex-col space-y-3">
              <Link href="/turismo-dental/estados-unidos" className="flex items-center justify-between bg-bg-light p-4 rounded-md text-primary-blue font-bold hover:bg-blue-50 transition border border-gray-200">
                <span>Información para pacientes de EE.UU.</span>
                <ChevronRight size={20} />
              </Link>
              <Link href="/turismo-dental/canada" className="flex items-center justify-between bg-bg-light p-4 rounded-md text-primary-blue font-bold hover:bg-blue-50 transition border border-gray-200">
                <span>Información para pacientes de Canadá</span>
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EL PROCESO (6 PASOS) */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-primary-blue mb-12">Su Viaje Hacia Una Nueva Sonrisa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourismData.process.map((step) => (
              <div key={step.step} className="relative p-6 bg-bg-light rounded-xl border border-gray-100 hover:shadow-md transition">
                <div className="text-5xl font-black text-blue-100 absolute top-4 right-4 z-0">0{step.step}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-primary-blue mb-3">{step.title}</h3>
                  <p className="text-text-gray text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGÍSTICA (AEROPUERTO / HOTEL) */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center text-primary-blue mb-4">Todo Organizado Para Su Viaje</h2>
        <p className="text-center text-text-gray mb-12 max-w-2xl mx-auto">Queremos que su única preocupación sea relajarse. Le ayudamos a coordinar la logística básica de su estadía en San José.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <Plane size={48} className="text-secondary-green mb-4" />
            <h3 className="text-xl font-bold text-primary-blue mb-2">{tourismData.logistics[0].title}</h3>
            <p className="text-text-gray text-sm">{tourismData.logistics[0].desc}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <Building size={48} className="text-secondary-green mb-4" />
            <h3 className="text-xl font-bold text-primary-blue mb-2">{tourismData.logistics[1].title}</h3>
            <p className="text-text-gray text-sm">{tourismData.logistics[1].desc}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <Car size={48} className="text-secondary-green mb-4" />
            <h3 className="text-xl font-bold text-primary-blue mb-2">{tourismData.logistics[2].title}</h3>
            <p className="text-text-gray text-sm">{tourismData.logistics[2].desc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}