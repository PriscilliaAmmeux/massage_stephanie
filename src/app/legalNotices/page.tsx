import { Metadata } from "next";
import Title from "../ui/title/title";
import { GiInjustice } from "react-icons/gi";
import Layout from "../ui/layout/layout";
import legalNotices from "../../../api/legalNotices.json";

export const metadata: Metadata = {
  title: "Mentions légales - Stéphanie HEUDRE",
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
