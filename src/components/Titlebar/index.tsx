import { useState } from "react";
import BellIcon from "../../assets/icons/BellIcon";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import MicrophoneIcon from "../../assets/icons/MicrophoneIcon";
import VideoCreate from "../../assets/icons/VideoCreate";
import YoutubeIcon from "../../assets/icons/YoutubeIcon";
import Icon from "../Icon";
import Searchbar from "./Searchbar";
import SearchIcon from "../../assets/icons/SearchIcon";
import BackIcon from "../../assets/icons/Back";

const Titlebar = () => {
  const [showSearchbar, setShowSearchbar] = useState(false);

  return (
    <div className="fixed flex items-center justify-between w-full py-2 pr-2 md:pr-4 h-14 gap-2 md:gap-4 bg-stone-950">
      {!showSearchbar && (
        <div className="flex items-center gap-1">
          <div className="flex items-center justify-center w-[74px]">
            <Icon>
              <HamburgerIcon />
            </Icon>
          </div>
          <div className="hidden xs:flex gap-1 cursor-pointer">
            <YoutubeIcon />

            <div className="font-bold tracking-tighter">YouTube</div>
          </div>
        </div>
      )}
      {showSearchbar && (
        <div
          onClick={() => setShowSearchbar(false)}
          className="flex items-center ml-5 p-2 rounded-full cursor-pointer bg-stone-900 hover:bg-stone-800"
        >
          <BackIcon />
        </div>
      )}
      <div className="flex w-full items-center justify-center gap-2">
        {showSearchbar && <Searchbar />}

        {!showSearchbar && (
          <div
            onClick={() => setShowSearchbar(true)}
            className="flex p-2 rounded-full cursor-pointer bg-stone-900 hover:bg-stone-800"
          >
            <SearchIcon />
          </div>
        )}

        <div className="hidden xs:flex p-2 rounded-full cursor-pointer bg-stone-900 hover:bg-stone-800">
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
          <div className="flex items-center font-bold justify-center w-8 h-8 mx-2 rounded-full cursor-pointer border border-stone-700 bg-stone-900">
            AB
          </div>
        </div>
      )}
    </div>
  );
};

export default Titlebar;
