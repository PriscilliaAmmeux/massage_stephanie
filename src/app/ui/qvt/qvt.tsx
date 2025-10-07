import Title from "@/app/ui/title/title";
import { MdOutlineWork } from "react-icons/md";
import Image from "next/image";
import cqvt from "../../../../public/cqvt.webp";
import ButtonContactMe from "../buttonContactMe/buttonContactMe";
import qvt from "../../../../public/cqvt2.webp";
import qvtravail from "../../../../public/cqvt3.webp";

const qvtImages = [cqvt, qvt, qvtravail];

export default function Qvt() {
  return (
    <section className="relative mt-1 mb-10 max-w-6xl mx-auto p-4 sm:p-6 md:p-10 flex flex-col md:flex-row items-center font-sans text-gray-800 bg-pink-100 shadow-lg rounded-lg">
      {/* image visible on desktop */}
      <div className="hidden md:block md:w-1/3">
        {qvtImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`photo représentant un salarié se faisant masser au travail dans le cadre de la QVT (qualité de vie au travail) ${
              index + 1
            }`}
            className="rounded-lg flex-shrink-0 mb-4 w-full"
            width={400}
            height={400}
          />
        ))}
      </div>

      {/* Image visible on mobile */}
      <div className="md:hidden w-full mb-4">
        <Image
          src={cqvt}
          alt="photo représentant un salarié se faisant masser au travail dans le cadre de la QVT (qualité de vie au travail)"
          className="rounded-lg flex-shrink-0 w-full"
          width={400}
          height={400}
        />
      </div>

      <div className="md:w-2/3 md:pl-10">
        <div className="flex justify-center md:justify-start mb-4">
          <Title title="Qualité de Vie au Travail (QVT)" Icon={MdOutlineWork} />
        </div>
        <p className="text-lg leading-relaxed mb-4">
          <span className="font-bold">
            La &quot;Qualité de Vie au Travail&quot;
          </span>
          est un aspect important de votre entreprise car le bien-être de vos
          employés est essentiel pour leur productivité et leur satisfaction au
          travail.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Chaques entreprises peuvent bénéficier d&apos;une subvention QVT pour
          améliorer les conditions de travail et promouvoir le bien-être au sein
          de l&apos;organisation.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Le CSE (Comité Social et Économique) joue également un rôle clé dans
          la mise en œuvre et le suivi des initiatives QVT, en représentant les
          intérêts des employés et en veillant à leur bien-être au travail.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          En choisissant la prestation de QVT, vous investissez dans une culture
          d&apos;entreprise positive et dynamique. Je vous accompagne pour
          mettre en place des solutions adaptées à vos besoins spécifiques,
          permettant d&apos;augmenter la satisfaction et la productivité de vos
          équipes.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="font-bold">Pourquoi choisir ce service ?</span>
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Analyse personnalisée de vos besoins en QVT</li>
          <li>Plan d&apos;action sur mesure</li>
          <li>Accompagnement et suivi</li>
          <li>Accès à des subventions pour optimiser votre investissement</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          <span className="font-bold">Contactez-moi dès aujourd&apos;hui</span>{" "}
          pour découvrir comment je peux vous aider à transformer votre
          entreprise en un lieu de travail épanouissant et productif.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-center items-center">
          <ButtonContactMe
            type="contact"
            className="w-11/12 max-w-xs md:w-auto"
          />
          <ButtonContactMe type="call" className="w-11/12 max-w-xs md:w-auto" />
        </div>
      </div>
    </section>
  );
}
