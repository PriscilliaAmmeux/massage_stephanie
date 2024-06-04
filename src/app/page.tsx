import Header from "./ui/header/header";
import Presentation from "./ui/presentation/presentation";
import Prestations from "./ui/prestations/prestations";
import Footer from "./ui/footer/footer";
import Qvt from "./ui/qvt/qvt";
import backgroundImage from "../../public/feather2.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full bg-gray-100 flex items-center justify-center">
          <Presentation />
        </div>
        <div
          className="bg-cover"
          style={{ backgroundImage: `url(${backgroundImage.src})` }}>
          <Prestations />
          <Qvt />
        </div>
      </section>

      <Footer />
    </main>
  );
}
