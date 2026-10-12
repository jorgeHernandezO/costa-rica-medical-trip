import { ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Solicitar Valoración | Costa Rica Medical Trip",
  description: "Envíe su información y radiografías para recibir una valoración gratuita y un plan de tratamiento estimado por nuestros especialistas.",
};

export default function ValoracionPage() {
  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Columna Izquierda: Información y Confianza */}
        <div>
          <h1 className="text-4xl font-heading font-bold text-primary-blue mb-4">
            Valoración Clínica Preliminar
          </h1>
          <p className="text-text-gray text-lg mb-8">
            Complete el formulario para que nuestros especialistas evalúen su caso. Recibirá un plan de tratamiento estimado y opciones de logística si viaja desde el extranjero.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4 text-primary-blue shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-primary-blue">Respuesta Rápida</h3>
                <p className="text-sm text-text-gray">Nuestro equipo médico analiza las solicitudes y responde en un plazo de 24 a 48 horas hábiles.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4 text-primary-blue shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-primary-blue">Privacidad Médica</h3>
                <p className="text-sm text-text-gray">Toda la información, fotografías y radiografías enviadas son estrictamente confidenciales y de uso exclusivo médico.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4 text-primary-blue shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-primary-blue">Valoración sin Costo</h3>
                <p className="text-sm text-text-gray">Este análisis preliminar virtual es completamente gratuito y no representa un compromiso de compra.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: El Formulario */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary-green">
          {/* Inicialmente usaremos un action temporal. En la fase de deploy lo conectaremos para que te lleguen los correos gratis */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-primary-blue mb-1">Nombre</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-blue" placeholder="Su nombre" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary-blue mb-1">Apellido</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-blue" placeholder="Su apellido" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-primary-blue mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-blue" placeholder="correo@ejemplo.com" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary-blue mb-1">WhatsApp</label>
                <input type="tel" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-blue" placeholder="+1 (555) 000-0000" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-primary-blue mb-1">Tipo de Paciente</label>
              <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-blue">
                <option value="internacional">Paciente Internacional (Viaja a Costa Rica)</option>
                <option value="nacional">Paciente Nacional (Reside en Costa Rica)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-primary-blue mb-1">Tratamiento de Interés Principal</label>
              <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-blue">
                <option value="implantes">Implantes Dentales / All-on-4</option>
                <option value="estetica">Estética y Carillas (Diseño de Sonrisa)</option>
                <option value="coronas">Coronas de Zirconia / Puentes</option>
                <option value="rehabilitacion">Rehabilitación Oral Completa</option>
                <option value="otro">Otro / No estoy seguro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-primary-blue mb-1">Describa su caso (Opcional)</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-blue" placeholder="Cuéntenos qué desea mejorar de su sonrisa o si tiene algún diagnóstico previo..."></textarea>
            </div>

            <div className="flex items-start mt-2">
              <input type="checkbox" className="mt-1 mr-2" id="radiografias" />
              <label htmlFor="radiografias" className="text-sm text-text-gray">
                Cuento con radiografías recientes (Panorámica o 3D) y deseo enviarlas posteriormente por correo o WhatsApp.
              </label>
            </div>

            <button type="button" className="w-full bg-primary-blue text-white font-bold py-4 rounded-md hover:bg-blue-700 transition mt-6 shadow-md">
              Enviar Solicitud de Valoración
            </button>
            <p className="text-xs text-center text-gray-400 mt-2">
              Al enviar este formulario, usted acepta nuestra política de privacidad.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}