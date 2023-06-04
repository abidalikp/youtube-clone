export interface ButtonProps {
  icon?: JSX.Element | string;
  label?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div
      className="flex items-center text-[10px] gap-1 cursor-pointer flex-col py-4 hover:bg-stone-900 rounded-lg"
      onClick={props.onClick}
    >
      <div>{props.icon}</div>
      <div>{props.label}</div>
    </div>
  );
};

export default Button;
