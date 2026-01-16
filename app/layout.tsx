import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Casa de Fiorella | Tu descanso frente al mar",
  description:
    "Departamento c\u00f3modo y elegante para tu descanso frente al mar. Consulta disponibilidad por WhatsApp.",
  openGraph: {
    title: "La Casa de Fiorella | Tu descanso frente al mar",
    description:
      "Departamento c\u00f3modo y elegante para tu descanso frente al mar. Consulta disponibilidad por WhatsApp.",
    images: [
      {
        url: "/images/hero.jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
