import Image from "next/image";
import imageProfil from "../../../../public/profil.webp";
import Title from "../title/title";

export default function Presentation() {
  return (
    <section className="max-w-6xl p-5 flex flex-col md:flex-row items-center font-sans text-gray-800 mt-10 mb-10">
      <Image
        src={imageProfil}
        alt="photo profil"
        className="rounded-full flex-shrink-0 mr-10 mb-10 md:mb-0"
        width={200}
        height={200}
      />

      <div>
        <Title title="Qui suis je ?" />
        <p className="text-lg leading-relaxed">
          <span className="font-bold">
            Infirmière de formation (diplômée d&apos;état) et attachée de
            recherche clinique
          </span>
          , j&apos;ai progressivement ajouté à la prise en soins les massages
          <span className="font-bold"> bien-être </span> persuadée de
          l&apos;importance de l&apos;impact de ces moments de détente.
        </p>
        <p className="text-lg leading-relaxed">
          Après plusieurs formations en
          <span className="font-bold"> réflexologie crânienne </span> et au
          <span className="font-bold"> Chi Nei Tsang</span>, je me suis formée
          au <span className="font-bold"> massage assis</span>.
        </p>
        <p className="text-lg leading-relaxed">
          J&apos;ai eu l&apos;opportunité de pratiquer en club vacances,
          diversifiant mon activité.
        </p>
        <p className="text-lg leading-relaxed">
          Je suis ensuite intervenue en entreprise auprès des employés dans le
          cadre des journées <span className="font-bold">QVT</span> (Qualité de
          Vie au travail) aussi bien en massage qu&apos;en atelier de
          sensibilisation et prévention.
        </p>
      </div>
    </section>
  );
}
