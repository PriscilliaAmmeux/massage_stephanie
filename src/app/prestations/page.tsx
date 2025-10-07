import Prestations from "../ui/prestations/prestations";
import Qvt from "../ui/qvt/qvt";
import Layout from "../ui/layout/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stephanie Heudre Prestations Massages Bien-etre Quesnoy-sur-Deule",
  description:
    "Découvrez les prestations de Stephanie Heudre avec massages Assis Amma et Chi Nei Tsang pour votre bien-etre à Quesnoy-sur-Deule.",
  keywords: [
    "stephanie-heudre",
    "prestations-massage",
    "massages-assis-amma",
    "chi-nei-tsang",
    "massage-bien-etre-quesnoy-sur-deule",
    "praticienne-massage-nord",
    "massage-relaxation",
    "massage-therapeutique",
    "bien-etre-quesnoy-sur-deule",
    "soin-massage-individuel",
  ],
  openGraph: {
    title: "Stephanie Heudre Prestations Massages Bien-etre Quesnoy-sur-Deule",
    description:
      "Découvrez les prestations de Stephanie Heudre avec massages Assis Amma et Chi Nei Tsang pour votre bien-etre à Quesnoy-sur-Deule.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.massage-stephanie-heudre.fr/prestations",
    siteName: "Stephanie Heudre Massages Bien-etre Quesnoy-sur-Deule",
  },
};

export default function Page() {
  return (
    <Layout>
      <section className="flex min-h-screen flex-col items-center justify-between">
        <section className="w-full flex flex-col items-center justify-center">
          <div className="bg-cover">
            <Prestations />
            <section id="qvt">
              <Qvt />
            </section>
          </div>
        </section>
      </section>
    </Layout>
  );
}
