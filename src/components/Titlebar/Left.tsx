import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import YoutubeIcon from "../../assets/icons/YoutubeIcon";
import Icon from "../Icon";

interface LeftTitlebarProps {
  toggleSidebar: () => void;
}

const LeftTitlebar = ({ toggleSidebar }: LeftTitlebarProps) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center justify-center w-[74px]">
        <Icon onClick={toggleSidebar}>
          <HamburgerIcon />
        </Icon>
      </div>
      <div className="hidden xs:flex gap-1 cursor-pointer">
        <YoutubeIcon />
        <div className="hidden md:flex md:pr-2 font-bold tracking-tighter text-primary">
          YouTube
        </div>
      </div>
    </div>
  );
};

export default LeftTitlebar;
