import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  icon: string;
  iconSize?: string;
};
export const Socials = ({ icon, iconSize }: Props) => {
  return (
    <div>
      <Icon icon={icon} fontSize={iconSize} />
    </div>
  );
};
