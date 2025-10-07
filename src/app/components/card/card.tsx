interface CardProps {
  id: number;
  image: string;
  title: string;
  text: string | { text: string }[];
  duration: string;
  price: number;
}

export default function Card({
  id,
  image,
  title,
  text,
  duration,
  price,
}: CardProps) {
  return (
    <section
      id={`prestation-${id}`}
      className="relative bg-pink-100 rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
      <div className="flex items-center justify-center">
        <img
          className="w-60 h-60 md:w-48 md:h-48 object-cover rounded-lg mt-5"
          src={image}
          alt={`Une image représentant ${title}`}
        />
      </div>
      <div className="px-6 py-4 mb-20">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        {typeof text === "string" ? (
          <p className="text-gray-700 text-base">{text}</p>
        ) : (
          text.map((item, index) => (
            <p className="text-gray-700 text-base mt-2" key={index}>
              {item.text}
            </p>
          ))
        )}
        <div className=" flex flex-col justify-center mt-4 mb-4">
          <p className="text-gray-700 text-base font-bold">
            Durée : {duration}
          </p>
          <p className="text-gray-700 text-base font-bold ">Tarif: {price} €</p>
        </div>
        <button className="absolute bottom-0 left-0 w-full flex justify-center mb-4">
          <a
            href="tel:0676397406"
            className="bg-pink-700 text-white text-center px-4 py-2 rounded hover:bg-pink-800 transition-colors font-semibold w-11/12 max-w-xs">
            Prendre rendez-vous
          </a>
        </button>
      </div>
    </section>
  );
}
