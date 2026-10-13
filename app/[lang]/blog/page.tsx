import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Textos y artículos del blog
  const content = {
    es: {
      badge: "BLOG MÉDICO",
      title: "Artículos y Novedades",
      subtitle: "Información actualizada sobre tratamientos dentales, tecnología 3D y turismo médico escrita por nuestros especialistas.",
      posts: [
        {
          tag: "Turismo Dental",
          title: "¿Cuánto cuestan los implantes dentales en Costa Rica vs. Estados Unidos?",
          desc: "Descubra por qué miles de pacientes viajan a Costa Rica cada año para realizarse tratamientos de implantes dentales ahorrando hasta un 60%.",
          date: "2026-10-07",
          readMore: "Leer más"
        },
        {
          tag: "Implantes Dentales",
          title: "Todo lo que necesita saber sobre la técnica All-on-4",
          desc: "Conozca cómo la técnica All-on-4 puede devolverle la sonrisa completa en un tiempo récord utilizando solo 4 implantes estratégicos.",
          date: "2026-10-05",
          readMore: "Leer más"
        }
      ]
    },
    en: {
      badge: "MEDICAL BLOG",
      title: "Articles & News",
      subtitle: "Up-to-date information on dental treatments, 3D technology, and medical tourism written by our specialists.",
      posts: [
        {
          tag: "Dental Tourism",
          title: "How much do dental implants cost in Costa Rica vs. United States?",
          desc: "Discover why thousands of patients travel to Costa Rica every year for dental implants while saving up to 60%.",
          date: "2026-10-07",
          readMore: "Read more"
        },
        {
          tag: "Dental Implants",
          title: "Everything you need to know about the All-on-4 technique",
          desc: "Learn how the All-on-4 technique can restore your full smile in record time using only 4 strategic implants.",
          date: "2026-10-05",
          readMore: "Read more"
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

      {/* LISTA DE ARTÍCULOS */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {t.posts.map((post, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="inline-block bg-blue-50 text-primary-blue text-xs font-bold px-3 py-1 rounded-full">
                  {post.tag}
                </span>
                <h3 className="text-2xl font-heading font-bold text-primary-blue hover:text-blue-800 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" /> {post.date}
                </span>
                <Link href={`/${lang}/valoracion`} className="inline-flex items-center text-primary-blue font-bold hover:text-blue-800 transition">
                  {post.readMore} <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}