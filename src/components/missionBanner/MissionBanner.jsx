import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image"


const MissionBanner = () => {
  const missionData = useTranslations('Mission')
  const mission =missionData.raw('mission')
  return (
    <div id="mission" className="h-full mt-8 pt-16 md:py-[7rem] xl:py-[8rem] flex-col-reverse md:flex-row flex justify-between items-center gap-4" >
        <div className="flex-1  flex flex-col gap-4">
            <h1 className="uppercase text-center md:text-left text-3xl md:text-4xl xl:text-5xl font-bold">
            {mission.title}
            </h1>
           
            <p className="  hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight  ">
            {mission.desc}
            </p>

          <div className="  flex justify-center items-center   md:block     gap-4">
            <Link  className="hover:bg-[#05AD5D]/80  hover:text-white  mx-auto  px-3 py-1 rounded-md max-w-[12rem] float-left text-[#05AD5D] border-[#05AD5D] border-2 mt-5 text-xl"  href="/mission">
              {mission.btn}
            </Link>
            
          </div> 
            
        </div>
        <div className="flex-1  flex justify-center items-center w-1/2">
            <Image className="w-[10rem] md:w-[20rem] " priority  src={mission.image} alt="" width={250} height={250} />
        </div>
    </div>
  )
}

export default MissionBanner