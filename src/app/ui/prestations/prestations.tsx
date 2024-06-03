import Card from "@/app/components/card/card";
import prestations from "../../../../api/prestations.json";
import { RiServiceLine } from "react-icons/ri";
import Title from "@/app/components/title/title";
import { BsInfoSquare } from "react-icons/bs";

export default function Prestations() {
  return (
    <section className="rounded-lg">
      <Title title="Prestations" Icon={RiServiceLine} />
      <div className="grid grid-cols-3 gap-4">
        {prestations.map((prestation) => (
          <Card key={prestation.id} {...prestation} />
        ))}
      </div>

      <div className="mt-10 flex justify-center grid grid-cols-12 items-start w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="col-span-1 flex justify-center items-start">
          <BsInfoSquare size="2em" className="mr-2 text-green-700" />
        </div>
        <p className="col-span-8 mb-2 italic list-disc pl-6">
          *<span className="underline"> Zone d'intervention</span>:
          Quesnoy-sur-Deûle, Comines, Linselles, Wambrechies, Verlinghem,
          Pérenchies, Bondues, Deûlémont, Frelinghein, Wervicq-Sud, Bousbecque,
          Lambersart, Saint-André, Marquette-lez-Lille.
        </p>
        <p className="col-span-3 text-gray-700">
          * Déplacement possible en dehors de ces villes sur demande.
        </p>
      </div>
    </section>
  );
}
