import Link from "next/link";
import { blogData } from "../../data/blog";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Blog Médico y Dental | Costa Rica Medical Trip",
  description: "Artículos educativos sobre implantes dentales, estética, salud bucodental y consejos para realizar turismo médico en Costa Rica.",
};

export default function BlogIndexPage() {
  return (
    <div className="bg-bg-light min-h-screen pb-20">
      {/* HEADER DEL BLOG */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Blog y Novedades</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-50">
            Información actualizada sobre tratamientos dentales y turismo médico escrita por nuestros especialistas.
          </p>
        </div>
      </section>

      {/* LISTA DE ARTÍCULOS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition group flex flex-col">
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold text-secondary-green uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <h2 className="text-2xl font-bold text-primary-blue mb-3 group-hover:text-blue-600 transition">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-text-gray mb-6 text-sm flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-primary-blue font-bold text-sm flex items-center hover:underline">
                    Leer más <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}