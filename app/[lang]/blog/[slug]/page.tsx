import { blogData } from "../../../../data/blog";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// Esto inyecta el SEO (Meta Title y Description) específico de cada artículo
export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogData.find((p) => p.slug === params.slug);
  if (!post) return { title: "Artículo no encontrado | Costa Rica Medical Trip" };
  
  return {
    title: `${post.title} | Costa Rica Medical Trip`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogData.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-primary-blue">Artículo no encontrado.</h1>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Costa Rica Medical Trip"
    }
  };

  return (
    <div className="bg-bg-light min-h-screen pb-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      {/* HEADER DEL ARTÍCULO */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-secondary-green font-bold text-sm mb-8 hover:underline">
            <ChevronLeft size={16} className="mr-1" /> Volver al Blog
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-blue-100 text-primary-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-blue leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* CONTENIDO DEL ARTÍCULO */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 text-lg text-text-gray leading-relaxed space-y-6">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* CALL TO ACTION (Llamado a la acción) FINAL */}
        <div className="mt-12 bg-primary-blue p-8 rounded-xl text-center text-white shadow-lg">
          <h3 className="text-2xl font-heading font-bold mb-4">¿Tiene dudas sobre este tratamiento?</h3>
          <p className="mb-6 text-blue-100">Nuestros especialistas están listos para analizar su caso específico sin ningún compromiso.</p>
          <Link href="/valoracion" className="inline-block bg-secondary-green text-white font-bold py-3 px-8 rounded-md hover:bg-green-600 transition shadow-md">
            Solicitar Valoración Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}