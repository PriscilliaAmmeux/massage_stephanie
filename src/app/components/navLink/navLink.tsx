import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

export default function NavLink({ href, title }: NavLinkProps) {
  return (
    <Link href={href} target="_self" rel="noopener noreferrer">
      <h1 className={`mb-3 text-xl font-semibold hover:text-pink-300`}>
        {title}
      </h1>
    </Link>
  );
}
