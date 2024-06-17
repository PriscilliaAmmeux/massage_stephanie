import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export default function NavLink({
  href,
  title,
  className,
  children,
}: NavLinkProps) {
  return (
    <Link href={href} target="_self" rel="noopener noreferrer">
      <h1
        className={`text-xl font-semibold hover:text-pink-300 mr-6 ${className}`}>
        {title}
      </h1>
      {children}
    </Link>
  );
}
