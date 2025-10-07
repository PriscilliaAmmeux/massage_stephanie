import Presentation from "./ui/presentation/presentation";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Layout from "./ui/layout/layout";
import Functioning from "./ui/functioning/functioning";
import SocialNetwork from "./ui/socialNetwork/socialNetwork";

export const metadata: Metadata = {
  title:
    "Stéphanie Heudre Praticienne Massages Assis Amma Chi Nei Tsang Quesnoy-sur-Deule",
  description:
    "Stéphanie Heudre propose des massages Assis Amma et Chi Nei Tsang à Quesnoy-sur-Deule pour le bien-être et la relaxation.",
  keywords: [
    "stephanie-heudre",
    "massages-assis-amma",
    "chi-nei-tsang",
    "massage-bien-etre-quesnoy-sur-deule",
    "praticienne-massage-nord",
    "massage-relaxation",
    "massage-therapeutique",
    "bien-etre-quesnoy-sur-deule",
    "massage-en-entreprise",
    "qvt",
  ],
  openGraph: {
    title:
      "Stéphanie Heudre Praticienne Massages Assis Amma Chi Nei Tsang Quesnoy-sur-Deule",
    description:
      "Découvrez Stéphanie Heudre et ses massages Assis Amma et Chi Nei Tsang à Quesnoy-sur-Deule pour votre bien-être.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.massage-stephanie-heudre.fr",
    siteName: "Stéphanie Heudre Massages Bien-être Quesnoy-sur-Deule",
  },
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
