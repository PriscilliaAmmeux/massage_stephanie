import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stéphanie Heudre - Massage bien-être à domicile et au travail",
  description:
    "Découvrez les services de massage bien-être proposés par Stéphanie Heudre, spécialiste en qualité de vie au travail (CQVT). Profitez de massages relaxants et thérapeutiques directement à votre domicile ou sur votre lieu de travail, pour une détente optimale et une amélioration de votre bien-être quotidien. Stéphanie intervient en entreprise et propose des massages Chi Nei Tsang, inspirés de la médecine chinoise, pour une sérénité et un zen total. Que ce soit pour un RDV à domicile ou au SPA, votre bien-être et votre sérénité sont au cœur de ses interventions. Engagez-vous dans une démarche de RSE en améliorant la QVCT grâce à ces services de massage et de bien-être. Déplacements assurés pour des séances de détente et de bien-être.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
