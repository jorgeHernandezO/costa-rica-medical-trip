import { getDictionary } from "../../dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "../globals.css";

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className="min-h-screen flex flex-col bg-bg-light relative antialiased">
        <Header lang={lang} />
        <main className="flex-grow">{children}</main>
        <Footer lang={lang} />
        <WhatsAppButton />
      </body>
    </html>
  );
}