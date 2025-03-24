import { useState } from "react";
import BellIcon from "../../assets/icons/BellIcon";
import MicrophoneIcon from "../../assets/icons/MicrophoneIcon";
import VideoCreate from "../../assets/icons/VideoCreate";
import Icon from "../Icon";
import Searchbar from "./Searchbar";
import SearchIcon from "../../assets/icons/SearchIcon";
import BackIcon from "../../assets/icons/Back";
import LeftTitlebar from "./Left";

interface TitlebarProps {
  toggleSidebar: () => void;
}

const Titlebar = ({ toggleSidebar }: TitlebarProps) => {
  const [showSearchbar, setShowSearchbar] = useState(false);

  return (
    <div className="fixed flex items-center justify-between w-full py-2 pr-2 md:pr-4 h-14 gap-4 md:gap-4 bg-secondary">
      {!showSearchbar && <LeftTitlebar toggleSidebar={toggleSidebar} />}
      {showSearchbar && (
        <div
          onClick={() => setShowSearchbar(false)}
          className="flex items-center ml-5 p-2 rounded-full cursor-pointer bg-secondary hover:bg-secondary-2"
        >
          <BackIcon color="" />
        </div>
      )}
      <div className="flex w-full items-center justify-center gap-2">
        <Searchbar showSearchbar={showSearchbar} />
        {!showSearchbar && (
          <div
            onClick={() => setShowSearchbar(true)}
            className="flex p-2 sm:hidden rounded-full cursor-pointer bg-secondary hover:bg-secondary-2"
          >
            <SearchIcon />
          </div>
        )}
        <div className="hidden xs:flex p-2 rounded-full cursor-pointer bg-secondary hover:bg-secondary-2">
          <MicrophoneIcon />
        </div>
      </div>
      {!showSearchbar && (
        <div className="flex items-center gap-1">
          <Icon>
            <VideoCreate />
          </Icon>
          <Icon>
            <BellIcon />
          </Icon>
          <div className="flex items-center font-bold justify-center w-8 h-8 mx-2 rounded-full cursor-pointer border border-secondary-3 bg-secondary">
            AB
          </div>
        </div>
      )}
    </div>
  );
};

export default Titlebar;
