import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stéphanie Heudre - Massage bien-être à domicile et au travail",
  description:
    "Découvrez les services de massage bien-être proposés par Stéphanie Heudre, infirmière diplômée d'état et spécialiste en qualité de vie au travail. Profitez de massages relaxants et thérapeutiques à domicile ou sur votre lieu de travail. Stéphanie intervient également en entreprise pour des journées QVT, et propose des massages inspirés de la médecine chinoise, comme le Chi Nei Tsang, pour une détente optimale. Engagez-vous dans une démarche de RSE en améliorant la QVCT grâce à ces services de massage et de bien-être.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
