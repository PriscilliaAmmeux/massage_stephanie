import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
  showArrow?: boolean;
}

export default function NavLink({
  href,
  title,
  className,
  children,
  showArrow = false,
}: NavLinkProps) {
  return (
    <Link href={href} target="_self" rel="noopener noreferrer">
      <h1
        className={`inline-flex items-center font-semibold hover:underline mr-32 whitespace-nowrap ${
          className || ""
        }`}>
        {title}
        {showArrow && (
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </h1>
      {children}
    </Link>
  );
}
