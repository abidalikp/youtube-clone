import HomeIcon from "../assets/icons/HomeIcon";
import LibraryIcon from "../assets/icons/LibraryIcon";
import ShortsIcon from "../assets/icons/ShortsIcon";
import SubscriptionIcon from "../assets/icons/SubscriptionIcon";
import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <Titlebar />
      <div className="flex">
        <Sidebar
          data={[
            { icon: <HomeIcon />, label: "Home" },
            { icon: <ShortsIcon />, label: "Shorts" },
            { icon: <SubscriptionIcon />, label: "Subscriptions" },
            { icon: <LibraryIcon />, label: "Library" },
          ]}
        />
        <Home />
      </div>
    </div>
  );
};

export default Main;
