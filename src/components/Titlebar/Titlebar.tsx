import BellIcon from "../../assets/icons/BellIcon";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import MicrophoneIcon from "../../assets/icons/MicrophoneIcon";
import VideoCreate from "../../assets/icons/VideoCreate";
import YoutubeIcon from "../../assets/icons/YoutubeIcon";
import Searchbar from "./Searchbar";

const Titlebar = () => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-1">
        <div className="flex justify-center w-10 p-2 rounded-full hover:bg-stone-900">
          <HamburgerIcon />
        </div>
        <YoutubeIcon />
        <div className="font-bold tracking-tighter">YouTube</div>
      </div>
      <div className="flex items-center gap-2">
        <Searchbar />
        <div className="flex p-2 rounded-full bg-stone-900">
          <MicrophoneIcon />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="rounded-full bg-stone-900">
          <VideoCreate />
        </div>
        <div className="p-2 rounded-full hover:bg-stone-900">
          <BellIcon />
        </div>
        <img
          className="w-6 h-6 rounded-full"
          src="https://source.unsplash.com/featured/1x1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Titlebar;
