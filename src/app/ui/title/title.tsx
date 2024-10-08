import React from "react";
import { IconType } from "react-icons";

interface TitleProps {
  title: string;
  Icon?: IconType;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, Icon, className }) => (
  <div className="flex items-center mb-4">
    {Icon && <Icon className="text-xl text-pink-700 mr-2" />}
    <h2 className="text-xl text-pink-700 font-bold">{title}</h2>
  </div>
);

export default Title;
