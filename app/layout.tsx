import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: "Costa Rica Medical Trip | Implantes y Turismo Dental",
  description: "Clínica dental premium en Sabana Norte, Costa Rica. Especialistas en implantes dentales, estética y turismo dental para pacientes de USA y Canadá.",
  
  // TRUCO DE CACHÉ: El "?v=2" obliga al navegador a refrescar el ícono
  icons: {
    icon: "/images/Logo_Favicon.jpg?v=2",
    apple: "/images/Logo_Favicon.jpg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable} font-body text-text-gray bg-white antialiased flex flex-col min-h-screen relative`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}