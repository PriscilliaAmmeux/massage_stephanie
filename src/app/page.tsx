import Presentation from "./ui/presentation/presentation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Layout from "./ui/layout/layout";
import Functioning from "./ui/functioning/functioning";
import SocialNetwork from "./ui/socialNetwork/socialNetwork";

export const metadata: Metadata = {
  title: "Stéphanie Heudre - Massage bien-être à domicile et au travail",
  description:
    "Découvrez les services de massage bien-être proposés par Stéphanie Heudre, spécialiste en qualité de vie au travail (CQVT). Profitez de massages relaxants et thérapeutiques directement à votre domicile ou sur votre lieu de travail, pour une détente optimale et une amélioration de votre bien-être quotidien. Stéphanie intervient en entreprise et propose des massages Chi Nei Tsang, inspirés de la médecine chinoise, pour une sérénité et un zen total. Que ce soit pour un RDV à domicile ou au SPA, votre bien-être et votre sérénité sont au cœur de ses interventions. Engagez-vous dans une démarche de RSE en améliorant la QVCT grâce à ces services de massage et de bien-être. Déplacements assurés pour des séances de détente et de bien-être.",
};

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-between">
        <section className="w-full bg-gray-100 flex flex-col items-center justify-center">
          <Presentation />
          <Functioning />
          <span className="flex flex-col items-center justify-center mb-5 sm:hidden">
            <p className="pt-5 pl-10 pr-10 pb-5">
              Vous pouvez également me trouver sur Facebook et LinkedIn.
            </p>
            <SocialNetwork />
          </span>
        </section>
        <Analytics />
        <SpeedInsights />
      </main>
    </Layout>
  );
}
