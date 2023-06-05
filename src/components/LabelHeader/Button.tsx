import { ButtonProps } from "../Sidebar/Button";

interface LabelButtonProps extends ButtonProps {
  selected?: boolean;
}

const LabelButton = (props: LabelButtonProps) => {
  return (
    <div
      className={` capitalize px-4 py-1.5 text-sm rounded-lg  cursor-pointer font-medium ${
        props.selected
          ? "bg-stone-100 text-black hover:bg-white"
          : "bg-stone-700 hover:bg-stone-600"
      }`}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
};

export default LabelButton;
