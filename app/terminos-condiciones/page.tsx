import { Scale } from "lucide-react";

export const metadata = {
  title: "Términos y Condiciones | Costa Rica Medical Trip",
};

export default function TermsPage() {
  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center space-x-4 mb-8">
          <Scale size={40} className="text-primary-blue" />
          <h1 className="text-4xl font-heading font-bold text-primary-blue">Términos y Condiciones</h1>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 space-y-8 text-text-gray">
          <section>
            <h2 className="text-2xl font-bold text-primary-blue mb-3">1. Naturaleza de la Valoración Virtual</h2>
            <p>Las cotizaciones y planes de tratamiento proporcionados a través de nuestro sitio web, WhatsApp o correo electrónico basados en fotografías y radiografías enviadas por el paciente son <strong>estimaciones preliminares</strong>. El plan de tratamiento definitivo y el costo final solo pueden ser confirmados tras una valoración clínica presencial en nuestras instalaciones en San José, Costa Rica.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-blue mb-3">2. Turismo Dental y Logística</h2>
            <p>Costa Rica Medical Trip ofrece asistencia organizativa (recomendaciones de hoteles, gestión de transporte aeropuerto-clínica). Sin embargo, la clínica no funciona como agencia de viajes y no se hace responsable por cancelaciones de vuelos, problemas migratorios o incidentes en servicios de terceros (hoteles, aerolíneas).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-blue mb-3">3. Garantías de Tratamiento</h2>
            <p>Ofrecemos garantías sobre nuestros tratamientos e implantes dentales bajo condiciones específicas que le serán entregadas por escrito. La garantía queda anulada si el paciente no sigue los cuidados post-operatorios indicados, no asiste a las citas de control, o si la restauración es alterada por otra clínica dental.</p>
          </section>
        </div>
      </div>
    </div>
  );
}