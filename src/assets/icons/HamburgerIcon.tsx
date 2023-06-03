import { SVGProps } from ".";

const HamburgerIcon = ({
  height = 24,
  width = 24,
  color = "white",
}: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      stroke={color}
      viewBox="0 0 32 32"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 8h22M5 16h22M5 24h22"
      />
    </svg>
  );
};

export default HamburgerIcon;
