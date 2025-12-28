import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Enzo.rc — Site personnel",
  description: "Site personnel et blog d'Enzo — Articles et réflexions sur le développement web",
  keywords: ["développement web", "Next.js", "React", "blog", "tutoriels"],
  authors: [{ name: "Enzo" }],
  openGraph: {
    title: "Enzo.rc — Site personnel",
    description: "Articles et réflexions sur le développement web",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen bg-white`}
      >
        <ScrollProgress />
        <Header />
        <main className="flex-grow relative">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
