import { useState } from "react";
import LabelButton from "./Button";

const labels = [
  "all",
  "music",
  "trailers",
  "mixes",
  "gaming",
  "live",
  "comedy",
  "javascript",
];

const LabelHeader = () => {
  const [selected, setSelected] = useState("all");
  return (
    <div className="fixed flex w-full overflow-scroll no-scrollbar gap-2 md:gap-3 py-3 pr-8 bg-stone-950">
      {labels.map((label) => (
        <LabelButton
          key={label}
          label={label}
          selected={label === selected}
          onClick={() => setSelected(label)}
        />
      ))}
    </div>
  );
};

export default LabelHeader;
