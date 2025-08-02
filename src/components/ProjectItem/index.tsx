import { Icon } from "@iconify/react";
import { archivoBlack } from "../Fonts";

type Props = {
  icon: string;
  iconSize?: string | number;
  title: string;
  content: string;
};
export const ProjectItem = ({ icon, iconSize = 14, title, content }: Props) => {
  return (
    <div className={`project-container `}>
      <Icon icon={`${icon || "mdi-light:home"}`} fontSize={iconSize} />
      <div>
        <h4 className={`${archivoBlack.className}`}>{title}</h4>
      </div>
      <div>{content}</div>
    </div>
  );
};
