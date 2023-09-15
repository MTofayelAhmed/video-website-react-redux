import Pagination from "../../components/pagination/Pagination";
import Tags from "../../components/tags/Tags";

import VideoGrid from "./../../components/grid/VideoGrid";

const Home = () => {
  return (
    <div>
      <Tags></Tags>
      <VideoGrid></VideoGrid>
      <Pagination></Pagination>
    </div>
  );
};

export default Home;
