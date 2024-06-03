import { Metadata } from "next";
import Header from "./ui/header/header";
import Presentation from "./ui/presentation/presentation";
import Prestations from "./ui/prestations/prestations";

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

      <footer className="w-full flex justify-between items-center p-4 bg-gray-200">
        <div>
          <h3>Contactez-nous</h3>
          <form>
            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre email" />
            <textarea placeholder="Votre message"></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        <div>
          <h3>Infos de contact</h3>
          <p>Adresse</p>
          <p>Téléphone</p>
          <p>Email</p>
        </div>
      </footer>
    </main>
  );
}
