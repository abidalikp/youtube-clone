import Button, { ButtonProps } from "./Button";

interface SidebarProps {
  data?: ButtonProps[];
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="w-[74px]">
      {props.data?.map((d) => {
        return <Button {...d} />;
      })}
    </div>
  );
};

export default Sidebar;
