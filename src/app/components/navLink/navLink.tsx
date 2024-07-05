import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
  activeClassName?: string;
  children?: React.ReactNode;
  showArrow?: boolean;
  onClick?: (event: React.MouseEvent<HTMLHeadingElement>) => void;
  ignoreActiveStyle?: boolean;
}

export default function NavLink({
  href,
  title,
  className = "",
  activeClassName = "",
  children,
  showArrow = false,
  onClick,
  ignoreActiveStyle = false,
}: NavLinkProps) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!ignoreActiveStyle) {
      setIsActive(pathname === href);
    }
  }, [pathname, href, ignoreActiveStyle]);

  const baseClass =
    "inline-flex justify-center items-center font-semibold hover:underline md:mr-32 mr-0 whitespace-nowrap";
  const activeClass = isActive ? activeClassName || "text-pink-700" : "";

  return (
    <Link href={href} target="_self" rel="noopener noreferrer">
      <h1
        className={`${baseClass} ${activeClass} ${className}`}
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
