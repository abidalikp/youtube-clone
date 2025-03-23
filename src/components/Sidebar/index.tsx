import Button, { ButtonProps } from "./Button";

interface SidebarProps {
  data?: ButtonProps[];
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="bg-stone-950 fixed w-[74px] hidden md:block">
      {props.data?.map((d) => {
        return <Button {...d} />;
      })}
    </div>
  );
};

export default Sidebar;
