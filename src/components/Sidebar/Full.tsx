import { SidebarProps } from ".";
import LeftTitlebar from "../Titlebar/Left";
import Button from "./Button";

interface FullSideBarProps extends SidebarProps {
  onClose: () => void;
}

const FullSideBar = ({ data, onClose }: FullSideBarProps) => {
  return (
    <div
      className="fixed z-10 inset-0 bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div className="text-primary bg-secondary shadow-lg w-72 pt-2 h-full">
        <LeftTitlebar toggleSidebar={onClose} />
        <div
          className="flex flex-col gap-2 p-2 pt-6"
          onClick={(e) => e.stopPropagation()}
        >
          {data?.map((d) => {
            return <Button {...d} opened />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FullSideBar;
