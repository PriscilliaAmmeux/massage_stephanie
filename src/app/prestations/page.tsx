import Header from "../ui/header/header";
import Prestations from "../ui/prestations/prestations";
import Qvt from "../ui/qvt/qvt";

import backgroundImage from "../../public/feather2.webp";
import Footer from "../ui/footer/footer";

export default function Page() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <section className="w-full flex flex-col items-center justify-center">
        <div
          className="bg-cover"
          style={{ backgroundImage: `url(${backgroundImage.src})` }}>
          <Prestations />
          <Qvt />
        </div>
      </section>
      <Footer />
    </section>
  );
}
