import Title from "@/app/components/title/title";
import { MdOutlineWork } from "react-icons/md";
import Image from "next/image";
import cqvt from "../../../../public/cqvt.jpg";

export default function Qvt() {
  return (
    <section className="mt-1 mb-10 max-w-6xl mx-auto p-4 sm:p-6 md:p-10 flex flex-col md:flex-row items-center font-sans text-gray-800">
      <Image
        src={cqvt}
        alt="photo représentant un salarié se faisant masser au travail dans le cadre de la QVT (qualité de vie au travail)"
        className="rounded-lg flex-shrink-0 mb-4 md:mb-0 md:mr-10"
        width={400}
        height={400}
      />
      <div>
        <div className="flex justify-center md:justify-start">
          <Title title="CQVT" Icon={MdOutlineWork} />
        </div>
        <p className="text-lg leading-relaxed">
          <span className="font-bold">
            CQVT signifie &quot;Conditions de Qualité de Vie au Travail&quot;.
          </span>{" "}
          C&apos;est un aspect important de votre entreprise car le bien-être de
          vos employés est essentiel pour leur productivité et leur satisfaction
          au travail.
        </p>
      </div>
    </section>
  );
}
