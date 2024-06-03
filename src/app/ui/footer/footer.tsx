import Title from "@/app/components/title/title";
import { CiMail } from "react-icons/ci";
import Form from "../form/form";
import InfoContact from "../infoContact/infoContact";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center p-4 bg-gray-200">
      <div>
        <Title title="Contactez moi" Icon={CiMail} />
        <Form />
      </div>
      <InfoContact />
    </footer>
  );
}
