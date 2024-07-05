import styles from "../../styles/button.module.css";

export default function Button({
  type,
  text,
  disabled,
  onClick,
  className,
}: {
  type: "submit" | "button";
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      aria-label={text}
      disabled={disabled}>
      {text}
    </button>
  );
}
