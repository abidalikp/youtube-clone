export interface ButtonProps {
  icon?: JSX.Element | string;
  label?: string;
  onClick?: () => void;
  opened?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <div
      className={`flex items-center  cursor-pointer py-4 hover:bg-secondary-2 rounded-lg ${
        props?.opened
          ? "flex-row gap-3 font-semibold !px-4 !py-2 text-[14px]"
          : "flex-col gap-1 text-[10px]"
      }`}
      onClick={props.onClick}
    >
      <div>{props.icon}</div>
      <div>{props.label}</div>
    </div>
  );
};

export default Button;
