import Prestations from "../ui/prestations/prestations";
import Qvt from "../ui/qvt/qvt";
import backgroundImage from "../../../public/feather2.webp";
import Layout from "../ui/layout/layout";

export default function Page() {
  return (
    <Layout>
      <section className="flex min-h-screen flex-col items-center justify-between">
        <section className="w-full flex flex-col items-center justify-center">
          <div
            className="bg-cover"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}>
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
