interface LogoProps {
  width: number;
  height: number;
  theme: "light" | "dark";
}

export default function Logo({ width, height, theme }: LogoProps) {
  const logoSrc = theme === "light" ? "/logo-light.webp" : "/logo-dark.jpg";

  return (
    <img
      src={logoSrc}
      alt={`logo SH pour Stéphanie Heudre - Thème ${theme}`}
      width={width}
      height={height}
    />
  );
}
