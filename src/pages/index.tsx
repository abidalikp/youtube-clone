import { useState } from "react";
import HomeIcon from "../assets/icons/HomeIcon";
import LibraryIcon from "../assets/icons/LibraryIcon";
import ShortsIcon from "../assets/icons/ShortsIcon";
import SubscriptionIcon from "../assets/icons/SubscriptionIcon";
import SunIcon from "../assets/icons/Sun";
import LabelHeader from "../components/LabelHeader";
import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";
import Home from "./Home";
import FullSideBar from "../components/Sidebar/Full";

const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const sideBarData = [
    { icon: <HomeIcon />, label: "Home" },
    { icon: <ShortsIcon />, label: "Shorts" },
    { icon: <SubscriptionIcon />, label: "Subscriptions" },
    { icon: <LibraryIcon />, label: "Library" },
    {
      icon: <SunIcon />,
      label: "Theme",
      onClick: () => {
        document.getElementById("root")?.classList.toggle("light");
      },
    },
  ];

  return (
    <div className="flex flex-col h-full bg-secondary text-primary">
      <Titlebar
        toggleSidebar={() => {
          setShowSidebar(!showSidebar);
        }}
      />
      <div className="flex w-full mt-14">
        {showSidebar ? (
          <FullSideBar
            onClose={() => setShowSidebar(false)}
            data={sideBarData}
          />
        ) : (
          <Sidebar data={sideBarData} />
        )}
        <div className="flex flex-col md:ml-[74px] px-6 overflow-hidden w-full">
          <LabelHeader />
          <div className="pt-4 mt-14 w-full">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
