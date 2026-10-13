"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { use } from "react";

export default function ValoracionPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = use(params);
  const lang = resolvedParams?.lang || "es";

  // Textos bilingües para la página de valoración
  const t = {
    es: {
      badge: "VALORACIÓN MÉDICA",
      title: "Valoración Clínica Preliminar",
      subtitle: "Complete el formulario para que nuestros especialistas evalúen su caso. Recibirá un plan de tratamiento estimado y opciones de logística si viaja desde el extranjero.",
      feature1Title: "Respuesta Rápida",
      feature1Desc: "Nuestro equipo médico analiza las solicitudes y responde en un plazo de 24 a 48 horas hábiles.",
      feature2Title: "Privacidad Médica",
      feature2Desc: "Toda la información, fotografías y radiografías enviadas son estrictamente confidenciales y de uso exclusivo médico.",
      feature3Title: "Valoración sin Costo",
      feature3Desc: "Este análisis preliminar virtual es completamente gratuito y no representa un compromiso de compra.",
      form: {
        name: "Nombre",
        namePlaceholder: "Su nombre",
        lastname: "Apellido",
        lastnamePlaceholder: "Su apellido",
        email: "Correo electrónico",
        emailPlaceholder: "correo@ejemplo.com",
        whatsapp: "WhatsApp",
        whatsappPlaceholder: "+1 (555) 000-0000",
        patientType: "Tipo de Paciente",
        patientOption1: "Paciente Internacional (Viaja a Costa Rica)",
        patientOption2: "Paciente Local (Costa Rica)",
        treatment: "Tratamiento de Interés Principal",
        treatmentOption1: "Implantes Dentales / All-on-4",
        treatmentOption2: "Diseño de Sonrisa y Carillas",
        treatmentOption3: "Turismo Dental (Rehabilitación Completa)",
        treatmentOption4: "Otro Tratamiento General",
        message: "Describa su caso (Opcional)",
        messagePlaceholder: "Cuéntenos qué desea mejorar de susorisa o si tiene algún diagnóstico previo...",
        checkbox: "Cuento con radiografías recientes (Panorámica o 3D) y deseo enviarlas posteriormente por correo o WhatsApp.",
        submit: "Enviar Solicitud de Valoración",
        disclaimer: "Al enviar este formulario, usted acepta nuestra política de privacidad."
      }
    },
    en: {
      badge: "MEDICAL EVALUATION",
      title: "Preliminary Clinical Evaluation",
      subtitle: "Complete the form so our specialists can evaluate your case. You will receive an estimated treatment plan and logistics options if traveling from abroad.",
      feature1Title: "Fast Response",
      feature1Desc: "Our medical team reviews requests and replies within 24 to 48 business hours.",
      feature2Title: "Medical Privacy",
      feature2Desc: "All information, photographs, and X-rays submitted are strictly confidential for medical use only.",
      feature3Title: "Free Evaluation",
      feature3Desc: "This virtual preliminary analysis is completely free and carries no purchase obligation.",
      form: {
        name: "First Name",
        namePlaceholder: "Your name",
        lastname: "Last Name",
        lastnamePlaceholder: "Your last name",
        email: "Email Address",
        emailPlaceholder: "email@example.com",
        whatsapp: "WhatsApp",
        whatsappPlaceholder: "+1 (555) 000-0000",
        patientType: "Patient Type",
        patientOption1: "International Patient (Traveling to Costa Rica)",
        patientOption2: "Local Patient (Costa Rica)",
        treatment: "Main Treatment of Interest",
        treatmentOption1: "Dental Implants / All-on-4",
        treatmentOption2: "Smile Design & Veneers",
        treatmentOption3: "Dental Tourism (Full Rehabilitation)",
        treatmentOption4: "Other General Treatment",
        message: "Describe your case (Optional)",
        messagePlaceholder: "Tell us what you would like to improve about your smile or any previous diagnosis...",
        checkbox: "I have recent X-rays (Panoramic or 3D) and wish to send them later via email or WhatsApp.",
        submit: "Submit Evaluation Request",
        disclaimer: "By submitting this form, you agree to our privacy policy."
      }
    }
  };

  const content = t[lang as keyof typeof t] || t.es;

  return (
    <div className="flex flex-col min-h-screen bg-bg-light">
      
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Columna Izquierda: Información de Confianza */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-secondary-green font-bold text-sm tracking-widest uppercase">
              {content.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-primary-blue leading-tight">
              {content.title}
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-blue-50 p-3 rounded-lg text-primary-blue">
                <Clock size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-primary-blue text-base">{content.feature1Title}</h3>
                <p className="text-sm text-gray-600">{content.feature1Desc}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-blue-50 p-3 rounded-lg text-primary-blue">
                <ShieldCheck size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-primary-blue text-base">{content.feature2Title}</h3>
                <p className="text-sm text-gray-600">{content.feature2Desc}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-blue-50 p-3 rounded-lg text-primary-blue">
                <CheckCircle2 size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-primary-blue text-base">{content.feature3Title}</h3>
                <p className="text-sm text-gray-600">{content.feature3Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario de Valoración */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary-blue uppercase tracking-wider">{content.form.name}</label>
                <input 
                  type="text" 
                  placeholder={content.form.namePlaceholder} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary-blue" 
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary-blue uppercase tracking-wider">{content.form.lastname}</label>
                <input 
                  type="text" 
                  placeholder={content.form.lastnamePlaceholder} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary-blue" 
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary-blue uppercase tracking-wider">{content.form.email}</label>
                <input 
                  type="email" 
                  placeholder={content.form.emailPlaceholder} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary-blue" 
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary-blue uppercase tracking-wider">{content.form.whatsapp}</label>
                <input 
                  type="tel" 
                  placeholder={content.form.whatsappPlaceholder} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary-blue" 
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-primary-blue uppercase tracking-wider">{content.form.patientType}</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary-blue bg-white">
                <option>{content.form.patientOption1}</option>
                <option>{content.form.patientOption2}</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-primary-blue uppercase tracking-wider">{content.form.treatment}</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary-blue bg-white">
                <option>{content.form.treatmentOption1}</option>
                <option>{content.form.treatmentOption2}</option>
                <option>{content.form.treatmentOption3}</option>
                <option>{content.form.treatmentOption4}</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-primary-blue uppercase tracking-wider">{content.form.message}</label>
              <textarea 
                rows={4} 
                placeholder={content.form.messagePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary-blue resize-none"
              ></textarea>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <input type="checkbox" id="xrays" className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-blue focus:ring-primary-blue" />
              <label htmlFor="xrays" className="text-xs text-gray-600 leading-relaxed">
                {content.form.checkbox}
              </label>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-[#0444c4] hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition shadow-md text-base"
              >
                {content.form.submit}
              </button>
            </div>

            <p className="text-center text-[11px] text-gray-400">
              {content.form.disclaimer}
            </p>

          </form>
        </div>

      </div>

    </div>
  );
}