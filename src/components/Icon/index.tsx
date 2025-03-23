export interface ButtonProps {
  children?: JSX.Element | string;
  onClick?: () => void;
}

const Icon = (props: ButtonProps) => {
  return (
    <div
      onClick={props?.onClick}
      className="p-2 rounded-full cursor-pointer hover:bg-secondary-2"
    >
      {props.children}
    </div>
  );
};

export default Icon;
