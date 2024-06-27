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
        <h1 className="font-bold text-xl mb-2">{title}</h1>
        {typeof text === "string" ? (
          <p className="text-gray-700 text-base">{text}</p>
        ) : (
          text.map((item, index) => (
            <p className="text-gray-700 text-base mt-2" key={index}>
              {item.text}
            </p>
          ))
        )}
        <div className="absolute bottom-0 flex flex-col justify-center mb-4">
          <p className="text-gray-700 text-base font-bold">
            Durée : {duration}
          </p>
          <p className="text-gray-700 text-base font-bold ">Tarif: {price} €</p>
        </div>
      </div>
    </section>
  );
}
