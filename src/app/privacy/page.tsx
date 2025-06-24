import Layout from "../ui/layout/layout";
import privacyPolicy from "../../../api/privacyPolicy.json";
import Title from "../ui/title/title";
import { GiPadlock } from "react-icons/gi";

export default function Privacy() {
  return (
    <Layout>
      <div className="flex justify-center mt-10">
        <Title Icon={GiPadlock} title="Politique de confidentialité" />
      </div>

      <section className="p-4">
        <div className="space-y-8">
          {privacyPolicy.map((notice) => (
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
