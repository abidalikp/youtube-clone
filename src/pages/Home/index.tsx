import Thumbnail from "../../components/Thumbnail";
import { homeData } from "../../data";

const Home = () => {
  return (
    <div className="grid grid-flow-row grid-cols-4 gap-4">
      {homeData.map((thumb) => (
        <Thumbnail key={thumb.title} {...thumb} />
      ))}
    </div>
  );
};

export default Home;
