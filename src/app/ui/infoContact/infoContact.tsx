import Title from "@/app/components/title/title";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaCity } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

export default function InfoContact() {
  return (
    <section>
      <Title title="Informations de contact" Icon={RiContactsBook3Line} />
      <p className="flex items-center gap-1">
        <FaCity /> Quesnoy-Sur-Deûle
      </p>
      <p className="flex items-center gap-1">
        <FiPhone />+ 33 6 76 39 74 06
      </p>
      <p className="flex items-center gap-1 hover:text-pink-500">
        <AiOutlineMail />
        <a href="mailto:heudre.stephanie@gmail.com">
          heudre.stephanie@gmail.com
        </a>
      </p>
    </section>
  );
}
