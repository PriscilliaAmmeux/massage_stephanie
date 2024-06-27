import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
  showArrow?: boolean;
  onClick?: () => void;
}

export default function NavLink({
  href,
  title,
  className,
  children,
  showArrow = false,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname, href]);

  return (
    <Link href={href} target="_self" rel="noopener noreferrer">
      <h1
        className={`inline-flex items-center font-semibold hover:underline mr-32 whitespace-nowrap ${
          isActive ? "text-pink-700" : "text-black"
        } ${className || ""}`}
        onClick={onClick}>
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
