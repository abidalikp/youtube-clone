import { ButtonProps } from "../Sidebar/Button";

interface LabelButtonProps extends ButtonProps {
  selected?: boolean;
}

const LabelButton = (props: LabelButtonProps) => {
  return (
    <div
      className={` capitalize px-4 py-1.5 text-sm rounded-lg  cursor-pointer font-medium ${
        props.selected
          ? "bg-primary-3 text-secondary hover:bg-primary-2"
          : "bg-secondary-3 hover:bg-secondary-4"
      }`}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
};

export default LabelButton;
