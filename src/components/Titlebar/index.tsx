import BellIcon from "../../assets/icons/BellIcon";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import MicrophoneIcon from "../../assets/icons/MicrophoneIcon";
import VideoCreate from "../../assets/icons/VideoCreate";
import YoutubeIcon from "../../assets/icons/YoutubeIcon";
import Icon from "../Icon";
import Searchbar from "./Searchbar";

const Titlebar = () => {
  return (
    <div className="flex items-center justify-between py-2 pr-4">
      <div className="flex items-center gap-1">
        <div className="flex items-center justify-center w-[74px]">
          <Icon>
            <HamburgerIcon />
          </Icon>
        </div>
        <div className="flex gap-1 cursor-pointer">
          <YoutubeIcon />
          <div className="font-bold tracking-tighter">YouTube</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Searchbar />
        <div className="flex p-2 rounded-full cursor-pointer bg-stone-900 hover:bg-stone-800">
          <MicrophoneIcon />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Icon>
          <VideoCreate />
        </Icon>
        <Icon>
          <BellIcon />
        </Icon>
        <img
          className="w-8 h-8 mx-2 rounded-full cursor-pointer"
          src="https://source.unsplash.com/featured/1x1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Titlebar;
