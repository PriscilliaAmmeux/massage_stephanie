import Card from "@/app/components/card/card";
import prestations from "../../../../api/prestations.json";

export default function Prestations() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {prestations.map((prestation) => (
        <Card key={prestation.id} {...prestation} />
      ))}
    </div>
  );
}
