import HomeIcon from "../assets/icons/HomeIcon";
import LibraryIcon from "../assets/icons/LibraryIcon";
import ShortsIcon from "../assets/icons/ShortsIcon";
import SubscriptionIcon from "../assets/icons/SubscriptionIcon";
import LabelHeader from "../components/LabelHeader";
import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";
import Home from "./Home";

const Main = () => {
  return (
    <div className="flex flex-col h-full">
      <Titlebar />
      <div className="flex w-full mt-14">
        <Sidebar
          data={[
            { icon: <HomeIcon />, label: "Home" },
            { icon: <ShortsIcon />, label: "Shorts" },
            { icon: <SubscriptionIcon />, label: "Subscriptions" },
            { icon: <LibraryIcon />, label: "Library" },
          ]}
        />
        <div className="flex flex-col ml-[74px] px-6 overflow-hidden">
          <LabelHeader />
          <div className="pt-4 mt-14">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
