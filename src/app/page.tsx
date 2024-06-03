import { Metadata } from "next";
import Header from "./ui/header/header";
import Presentation from "./ui/presentation/presentation";
import Prestations from "./ui/prestations/prestations";
import Footer from "./ui/footer/footer";

export const metadata: Metadata = {
  title: "Stéphanie Heudre - Massage bien-être à domicile et au travail",
  description:
    "Découvrez les services de massage bien-être proposés par Stéphanie Heudre, spécialiste en qualité de vie au travail (CQVT). Profitez de massages relaxants et thérapeutiques directement à votre domicile ou sur votre lieu de travail, pour une détente optimale et une amélioration de votre bien-être quotidien.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <section className="w-full flex flex-col items-center justify-center p-4">
        <Presentation />
        <Prestations />
      </section>

      <Footer />
    </main>
  );
}
