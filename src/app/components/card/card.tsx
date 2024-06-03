interface CardProps {
  id: number;
  image: string;
  title: string;
  text: string;
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
    <div className="bg-green-100 rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img
          className="w-60 h-60 object-cover rounded-lg mt-5"
          src={image}
          alt={title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
        <p className="text-gray-700 text-base">{duration}</p>
        <p className="text-gray-700 text-base">{price} €</p>
      </div>
    </div>
  );
}
