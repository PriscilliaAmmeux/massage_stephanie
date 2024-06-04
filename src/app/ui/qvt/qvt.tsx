import Title from "@/app/components/title/title";
import { MdOutlineWork } from "react-icons/md";
import Image from "next/image";
import cqvt from "../../../../public/cqvt.jpg";

export default function Qvt() {
  return (
    <section className="mt-10 max-w-6xl mx-auto p-10 flex items-center font-sans text-gray-800">
      <Image
        src={cqvt}
        alt="photo profil"
        className=" rounded-lg flex-shrink-0 mr-10"
        width={400}
        height={400}
      />
      <div>
        <Title title="CQVT" Icon={MdOutlineWork} />
        <p className="text-lg leading-relaxed">
          <span className="font-bold">
            CQVT signifie &quot;Conditions de Qualité de Vie au Travail&quot;.
          </span>{" "}
          C'est un aspect important de votre entreprise car le bien-être de vos
          employés est essentiel pour leur productivité et leur satisfaction au
          travail.
        </p>
      </div>
    </section>
  );
}
