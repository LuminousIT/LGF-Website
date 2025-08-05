import { Icon } from "@iconify/react";
import { archivoBlack } from "../Fonts";
import { ReactNode } from "react";

type Props = {
  icon: string;
  iconSize?: string | number;
  title: string;
  content: string;
  action?: ReactNode;
};
export const ProjectItem = ({
  icon,
  iconSize = 14,
  title,
  content,
  action,
}: Props) => {
  return (
    <div className={`project-container `}>
      <Icon icon={`${icon || "mdi-light:home"}`} fontSize={iconSize} />
      <div>
        <h4 className={`${archivoBlack.className}`}>{title}</h4>
      </div>
      <div>{content}</div>
      <div>{action && action}</div>
    </div>
  );
};
