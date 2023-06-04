import { useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon";

const Searchbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex items-center">
      <div
        className={`flex items-center gap-2 border ${
          isFocused ? "border-blue-400" : "border-stone-700"
        } rounded-l-full py-2 px-4`}
      >
        {isFocused && (
          <div className="transition duration-700 ease-linear">
            <SearchIcon width={20} height={20} />
          </div>
        )}
        <input
          className="outline-none bg-inherit "
          type="text"
          placeholder="Search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <div className="flex px-4 py-2 border border-l-0 rounded-r-full cursor-pointer bg-stone-800 border-stone-700">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Searchbar;
