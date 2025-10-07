import { Metadata } from "next";
import Form from "../components/form/form";
import InfoContact from "../components/infoContact/infoContact";
import Layout from "../ui/layout/layout";

export const metadata: Metadata = {
  title: "Contact Stephanie Heudre Massages Quesnoy-sur-Deule",
  description:
    "Contactez Stephanie Heudre pour prendre rendez-vous pour des massages Assis Amma ou Chi Nei Tsang à Quesnoy-sur-Deule dans le Nord.",
  keywords: [
    "contact-stephanie-heudre",
    "rendez-vous-massage",
    "massages-assis-amma",
    "chi-nei-tsang",
    "massage-bien-etre-quesnoy-sur-deule",
    "praticienne-massage-nord",
    "massage-therapeutique",
    "massage-relaxation",
    "soin-massage-individuel",
    "bien-etre-quesnoy-sur-deule",
  ],
  openGraph: {
    title: "Contact Stephanie Heudre Massages Quesnoy-sur-Deule",
    description:
      "Contactez Stephanie Heudre pour prendre rendez-vous pour des massages Assis Amma ou Chi Nei Tsang à Quesnoy-sur-Deule dans le Nord.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.massage-stephanie-heudre.fr/contact",
    siteName: "Stephanie Heudre Massages Quesnoy-sur-Deule",
  },
};

export default function Page() {
  return (
    <Layout>
      <section className="pt-10 pb-10 pl-2 pr-2">
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-6 md:space-y-0">
          <div className="w-full md:w-2/4">
            <Form />
          </div>
          <div className="w-full md:w-1/4">
            <InfoContact />
          </div>
        </div>
      </section>
    </Layout>
  );
}
