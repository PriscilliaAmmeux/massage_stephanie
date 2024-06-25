interface LogoProps {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProps) {
  return (
    <img
      src="/logo.webp"
      alt="logo SH pour Stéphanie Heudre"
      width={width}
      height={height}
    />
  );
}
