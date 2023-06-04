export interface ButtonProps {
  children?: JSX.Element | string;
  onClick?: () => void;
}

const Icon = (props: ButtonProps) => {
  return (
    <div className="p-2 rounded-full cursor-pointer hover:bg-stone-900">
      {props.children}
    </div>
  );
};

export default Icon;
