import { useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon";

interface SearchbarProps {
  showSearchbar: boolean;
}

const Searchbar = ({ showSearchbar }: SearchbarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={`items-center w-full max-w-[600px] md:ml-4 ${
        showSearchbar ? "flex" : "hidden sm:flex "
      }`}
    >
      <div
        className={`flex items-center gap-2 w-full border ${
          isFocused ? "border-blue-400" : "border-secondary-4"
        } rounded-l-full py-2 px-4`}
      >
        {isFocused && (
          <div className="transition hidden xs:block duration-700 ease-linear">
            <SearchIcon width={20} height={20} />
          </div>
        )}
        <input
          className="flex-grow outline-none bg-inherit text-primary"
          type="text"
          placeholder="Search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <div className="px-4 py-2 border border-l-0 rounded-r-full cursor-pointer flex bg-secondary border-secondary-4">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Searchbar;
