import AboutUsComponents from "@/components/aboutUsComponents/AboutUsComponents";
import CarouselBanner from "@/components/carouselBanner/CarouselBanner";
import GetInTouch from "@/components/getInTouchComponents/GetInTouch";
import MissionBanner from "@/components/missionBanner/MissionBanner";
import TeamBanner from "@/components/teamBanner/TeamBanner";
import VisionBanner from "@/components/visonBanner/VisionBanner";


export default function Home() {
  return (
   <div className="">
    <CarouselBanner />
    <MissionBanner />
    <AboutUsComponents />
    <VisionBanner />
    <TeamBanner/>
    <GetInTouch />
   </div>
  );
}
