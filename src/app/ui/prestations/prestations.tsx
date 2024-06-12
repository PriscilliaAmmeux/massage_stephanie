import Card from "@/app/components/card/card";
import prestations from "../../../../api/prestations.json";
import { RiServiceLine } from "react-icons/ri";
import Title from "@/app/ui/title/title";
import Intervention from "../intervention/intervention";

export default function Prestations() {
  return (
    <section className=" pt-10 pb-10">
      <div className="flex justify-center">
        <Title title="Prestations" Icon={RiServiceLine} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-4 pr-4">
        {prestations.map((prestation) => (
          <Card key={prestation.id} {...prestation} />
        ))}
      </div>
      <Intervention />
    </section>
  );
}
