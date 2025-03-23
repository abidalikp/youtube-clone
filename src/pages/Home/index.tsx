import Thumbnail from "../../components/Thumbnail";
import { homeData } from "../../data";

const Home = () => {
  return (
    <div className="grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(320px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 md:p-0 p-0 sm:p-4">
      {homeData.map((thumb) => (
        <Thumbnail key={thumb.title} {...thumb} />
      ))}
    </div>
  );
};

export default Home;
