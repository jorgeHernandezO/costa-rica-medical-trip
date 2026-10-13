import { Camera } from "lucide-react";

export const metadata = {
  title: "Consentimiento de Fotografías | Costa Rica Medical Trip",
};

export default function ConsentPage() {
  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center space-x-4 mb-8">
          <Camera size={40} className="text-primary-blue" />
          <h1 className="text-4xl font-heading font-bold text-primary-blue">Consentimiento de Uso de Fotografías Clínicas</h1>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 space-y-6 text-text-gray">
          <p>En Costa Rica Medical Trip documentamos fotográficamente los tratamientos de nuestros pacientes con propósitos de diagnóstico, planificación clínica e historial médico.</p>
          
          <h2 className="text-xl font-bold text-primary-blue mt-6">Publicación de Casos Clínicos</h2>
          <p>Las fotografías de la sección "Antes y Después" o "Casos Clínicos" de este sitio web han sido publicadas <strong>únicamente con la autorización expresa</strong> de cada paciente.</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Garantizamos la protección de la identidad del paciente, omitiendo nombres reales y recortando las imágenes para mostrar primariamente el área dental, a menos que el paciente haya consentido mostrar su rostro completo.</li>
            <li>Ningún paciente está obligado a permitir el uso promocional de sus fotografías clínicas. Su negativa no afectará en absoluto la calidad de la atención médica recibida.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}