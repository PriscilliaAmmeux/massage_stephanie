import React from "react";
import { IconType } from "react-icons";

interface InfoItemContactProps {
  Icon: IconType;
  children: React.ReactNode;
  className?: string;
}

export default function InfoItemContact({
  Icon,
  children,
}: InfoItemContactProps) {
  return (
    <p className="flex items-center gap-1">
      <Icon />
      {children}
    </p>
  );
}
