import Title from "@/app/ui/title/title";
import { FaCarSide } from "react-icons/fa";

export default function Intervention() {
  return (
    <section className="mt-10 flex justify-center px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-2xl bg-gray-100 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg flex flex-col space-y-4">
        <div className="flex justify-center">
          <Title
            title="Je me déplace dans les villes suivantes :"
            Icon={FaCarSide}
          />
        </div>
        <p className="italic">
          Quesnoy-sur-Deûle, Comines, Linselles, Wambrechies, Verlinghem,
          Pérenchies, Bondues, Deûlémont, Frelinghein, Wervicq-Sud, Bousbecque,
          Lambersart, Saint-André, Marquette-lez-Lille.
        </p>
        <p className="text-gray-700">
          Déplacement possible en dehors de ces villes sur demande.
        </p>
      </div>
    </section>
  );
}
