import { Shield } from "lucide-react";

export const metadata = {
  title: "Política de Privacidad | Costa Rica Medical Trip",
  description: "Conozca cómo protegemos y manejamos sus datos médicos y personales en Costa Rica Medical Trip.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center space-x-4 mb-8">
          <Shield size={40} className="text-primary-blue" />
          <h1 className="text-4xl font-heading font-bold text-primary-blue">Política de Privacidad</h1>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 space-y-8 text-text-gray">
          <p><strong>Última actualización:</strong> [EDITAR: Fecha actual]</p>
          
          <section>
            <h2 className="text-2xl font-bold text-primary-blue mb-3">1. Información que recopilamos</h2>
            <p>En Costa Rica Medical Trip recopilamos información personal necesaria para brindarle un servicio médico odontológico de calidad. Esto incluye, pero no se limita a: nombre completo, información de contacto (email, teléfono), historial médico dental, radiografías panorámicas o tomografías 3D y fotografías clínicas.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-blue mb-3">2. Uso de la información</h2>
            <p>La información recopilada se utiliza exclusivamente con los siguientes fines:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Realizar valoraciones clínicas y elaborar planes de tratamiento.</li>
              <li>Coordinar logística de turismo dental (citas, asistencia de transporte y hotel).</li>
              <li>Comunicación directa vía WhatsApp, correo electrónico o teléfono.</li>
              <li>Cumplimiento de regulaciones de salud en Costa Rica.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-blue mb-3">3. Protección de Datos (Pacientes Internacionales)</h2>
            <p>Entendemos la importancia de la privacidad médica para nuestros pacientes de Estados Unidos y Canadá. Aplicamos estándares rigurosos de confidencialidad clínica. Su información médica nunca será vendida, alquilada o compartida con terceros no involucrados en su tratamiento sin su consentimiento explícito.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-blue mb-3">4. Cookies y Análisis de Navegación</h2>
            <p>Nuestro sitio web utiliza cookies técnicas y analíticas (como Google Analytics y el Píxel de Meta) para mejorar la experiencia del usuario y medir la efectividad de nuestras campañas publicitarias. Al utilizar nuestro sitio, usted acepta el uso de estas tecnologías de rastreo anónimas.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-blue mb-3">5. Contacto Legal</h2>
            <p>Si tiene preguntas sobre esta política o desea ejercer su derecho de acceso, rectificación o eliminación de sus datos, contáctenos en: <strong>[EDITAR: correo legal o gerencia]</strong>.</p>
            <p className="text-sm mt-4 italic">* Esta política está sujeta a revisión bajo la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley N° 8968) de Costa Rica.</p>
          </section>
        </div>
      </div>
    </div>
  );
}