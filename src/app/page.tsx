import Header from "./ui/header/header";
import Presentation from "./ui/presentation/presentation";
import Prestations from "./ui/prestations/prestations";
import Footer from "./ui/footer/footer";
import Qvt from "./ui/qvt/qvt";
import backgroundImage from "../../public/feather2.webp";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stéphanie Heudre - Massage bien-être à domicile et au travail",
  description:
    "Découvrez les services de massage bien-être proposés par Stéphanie Heudre, spécialiste en qualité de vie au travail (CQVT). Profitez de massages relaxants et thérapeutiques directement à votre domicile ou sur votre lieu de travail, pour une détente optimale et une amélioration de votre bien-être quotidien. Stéphanie intervient en entreprise et propose des massages Chi Nei Tsang, inspirés de la médecine chinoise, pour une sérénité et un zen total. Que ce soit pour un RDV à domicile ou au SPA, votre bien-être et votre sérénité sont au cœur de ses interventions. Engagez-vous dans une démarche de RSE en améliorant la QVCT grâce à ces services de massage et de bien-être. Déplacements assurés pour des séances de détente et de bien-être.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full bg-gray-100 flex items-center justify-center">
          <Presentation />
        </div>
        <div
          className="bg-cover"
          style={{ backgroundImage: `url(${backgroundImage.src})` }}>
          <Prestations />
          <Qvt />
        </div>
      </section>
      <Analytics />
      <SpeedInsights />
      <Footer />
    </main>
  );
}
