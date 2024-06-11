export default function Button({
  type,
  text,
  disabled,
  onClick,
}: {
  type: "submit" | "button";
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="p-2 w-50 bg-pink-700 text-white rounded hover:text-pink-700 hover:bg-white mx-auto hover:border-pink-700 border-2 transition-colors duration-300 ease-in-out cursor-pointer"
      aria-label={text}
      disabled={disabled}>
      {text}
    </button>
  );
}
