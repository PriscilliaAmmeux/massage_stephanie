import { Metadata } from "next";
import Title from "../ui/title/title";
import { GiInjustice } from "react-icons/gi";
import Layout from "../ui/layout/layout";
import legalNotices from "../../../api/legalNotices.json";

export const metadata: Metadata = {
  title: "Mentions legales Stephanie Heudre Massages Quesnoy-sur-Deule",
  description:
    "Consultez les mentions legales du site de Stephanie Heudre, praticienne de massages Assis Amma et Chi Nei Tsang à Quesnoy-sur-Deule dans le Nord.",
  keywords: [
    "mentions-legales-stephanie-heudre",
    "praticienne-massage-quesnoy-sur-deule",
    "massages-assis-amma",
    "chi-nei-tsang",
    "massage-bien-etre-nord",
    "site-web-massage",
    "informations-legales",
    "protection-donnees",
    "rgpd-massage",
    "legal-notices",
  ],
  openGraph: {
    title: "Mentions legales Stephanie Heudre Massages Quesnoy-sur-Deule",
    description:
      "Consultez les mentions legales du site de Stephanie Heudre, praticienne de massages Assis Amma et Chi Nei Tsang à Quesnoy-sur-Deule dans le Nord.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.massage-stephanie-heudre.fr/mentions-legales",
    siteName: "Stephanie Heudre Massages Quesnoy-sur-Deule",
  },
};

export default function LegalNotices() {
  return (
    <Layout>
      <div className="flex justify-center mt-10">
        <Title Icon={GiInjustice} title="Mentions légales" />
      </div>

      <section className="p-4">
        <div className="space-y-8">
          {legalNotices.map((notice) => (
            <div key={notice.id} className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">{notice.title}</h3>
              {Array.isArray(notice.content) ? (
                notice.content.map((item, index) => (
                  <p key={index} className="mb-2">
                    {item.text}
                  </p>
                ))
              ) : (
                <p className="mb-2">{notice.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
