import { SVGProps } from ".";

const SearchIcon = ({ height = 24, width = 24, color = "white" }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      stroke={color}
      width={width}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06l-5.156-5.155Zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export default SearchIcon;