import BackgroundImageRotator from "@/app/components/backgroundImageRotator/backgroundImageRotator";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const images = [
    {
      src: "/header.webp",
      alt: "Fond d'écran représentant des fleurs séchés dans un pot en verre ainsi qu'un récipient contenant de l'huile",
    },
    {
      src: "/header2.webp",
      alt: "Fond d'écran représentant des bougies, des fleurs séchés.",
    },
    {
      src: "/header3.webp",
      alt: "Fond d'écran représentant une page, avec une pile de galets superposés les un aux autres au 1er plan, plage de sable fin au second plan, la mer et un ciel bleu.",
    },
    { src: "/header4.webp", alt: "Fond d'écran représentant des fleurs roses" },
    {
      src: "/header5.webp",
      alt: "Fond d'écran représentant des fleurs blanches et orange sur un fond vert.",
    },
  ];
  const intervalTime = 10000;

  return (
    <header
      className={`w-full flex flex-col md:flex-row justify-around items-center p-4 relative ${className}`}
      style={{ width: "100%", height: "300px" }}>
      <BackgroundImageRotator
        images={images}
        intervalTime={intervalTime}
        className="opacity-50"
      />

      <div className="absolute flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold">Stéphanie HEUDRE</h1>
        <h2 className="text-3xl">Infirmière diplômée d&apos;état</h2>
        <p className="pt-10">
          J&apos;offre des services de massage professionnel à domicile ainsi
          que sur le lieu de travail dans le cadre de la qualité de vie au
          travail.
        </p>
      </div>
    </header>
  );
}
