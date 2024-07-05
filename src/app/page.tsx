import Presentation from "./ui/presentation/presentation";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Layout from "./ui/layout/layout";
import Functioning from "./ui/functioning/functioning";
import SocialNetwork from "./ui/socialNetwork/socialNetwork";

export const metadata: Metadata = {
  title: "Stéphanie Heudre - Massage bien-être à domicile et au travail",
  description:
    "Découvrez les services de massage bien-être proposés par Stéphanie Heudre, infirmière diplômée d'état et spécialiste en qualité de vie au travail. Profitez de massages relaxants et thérapeutiques à domicile ou sur votre lieu de travail. Stéphanie intervient également en entreprise pour des journées QVT, et propose des massages inspirés de la médecine chinoise, comme le Chi Nei Tsang, pour une détente optimale. Engagez-vous dans une démarche de RSE en améliorant la QVCT grâce à ces services de massage et de bien-être.",
};

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-between ">
        <section className="w-full  flex flex-col items-center justify-center">
          <Presentation />
          <Functioning />
          <span className="flex flex-col items-center justify-center mb-5 sm:hidden">
            <p className="pt-5 pl-10 pr-10 pb-5">
              Vous pouvez également me trouver sur Facebook et LinkedIn.
            </p>
            <SocialNetwork theme="dark" />
          </span>
        </section>
        <Analytics />
      </main>
    </Layout>
  );
}
