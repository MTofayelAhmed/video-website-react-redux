import RelatedVideoLIst from "../../components/VideoList/RelatedVideoLIst";
import Player from "../../components/description/Player";
import VideoDescription from "../../components/description/VideoDescription";


const Video = () => {
  return (
   
     
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
              <Player></Player>

              <VideoDescription></VideoDescription>
            </div>

            <RelatedVideoLIst></RelatedVideoLIst>
          </div>
        </div>
      </section>
     
   
  );
};

export default Video;
