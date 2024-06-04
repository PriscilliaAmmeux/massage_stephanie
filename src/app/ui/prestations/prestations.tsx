import Card from "@/app/components/card/card";
import prestations from "../../../../api/prestations.json";
import { RiServiceLine } from "react-icons/ri";
import Title from "@/app/components/title/title";
import { BsInfoSquare } from "react-icons/bs";

export default function Prestations() {
  return (
    <section className=" pt-10 ">
      <div className="flex justify-center">
        <Title title="Prestations" Icon={RiServiceLine} />
      </div>

      <div className="grid grid-cols-3 gap-4 pl-4 pr-4">
        {prestations.map((prestation) => (
          <Card key={prestation.id} {...prestation} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-4xl bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col space-y-4">
          <div className="flex justify-center">
            <Title title="Zone d'intervention : " Icon={BsInfoSquare} />
          </div>
          <p className="italic">
            Quesnoy-sur-Deûle, Comines, Linselles, Wambrechies, Verlinghem,
            Pérenchies, Bondues, Deûlémont, Frelinghein, Wervicq-Sud,
            Bousbecque, Lambersart, Saint-André, Marquette-lez-Lille.
          </p>
          <p className="text-gray-700">
            Déplacement possible en dehors de ces villes sur demande.
          </p>
        </div>
      </div>
    </section>
  );
}
