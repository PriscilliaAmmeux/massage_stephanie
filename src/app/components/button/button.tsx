export default function Button({
  type,
  text,
  href,
  onClick,
}: {
  type: "submit" | "button" | "reset";
  text: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      className="p-2 bg-pink-500 text-white rounded hover:text-pink-500 hover:bg-white">
      {text}
    </button>
  );
}