export default function Button({
  type,
  text,
  disabled,
}: {
  type: "submit" | "button" | "reset";
  text: string;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      className="p-2 w-50 bg-pink-500 text-white rounded hover:text-pink-500 hover:bg-white mx-auto hover:border-pink-500 border-2 transition-colors duration-300 ease-in-out"
      aria-label={text}
      disabled={disabled}>
      {text}
    </button>
  );
}
