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
  title: "Criação de Anúncios para Jogos Digitais",
  description: "Material de apoio para curso da XX Semana de Tecnologia na Fatec Ourinhos",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      title="Criação de Anúncios para Jogos Digitais"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
