
import Image from "next/image"

import TeamsCarousel from "../teamsCarousel/TeamsCarousel"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"




const  TeamBanner =()=> {
  const teamData = useTranslations('Teams')
  const team =teamData.raw('teams')
  return (
    <div id="team" className=" py-[6rem] md:py-[8rem] 2xl:py-[12rem]">
      <div className=" grid  gap-20  xl:grid-cols-2">
        <div className="">
        <h1 className="uppercase text-center md:text-left text-3xl md:text-4xl xl:text-5xl font-bold">
          {team.title}

          </h1>
          <p className="mt-6 hyphens-auto text-wrap   md:text-lg text-gray-700  xl:text-[1.25rem]  text-justify font-extralight">
           {team.desc.slice(0, 99)}...
          </p>

          <div className="  flex justify-center items-center   md:block     gap-4">
            <Link rel="preload" className="hover:bg-[#05AD5D]/80  hover:text-white  mx-auto  px-3 py-1 rounded-md max-w-[12rem] float-left text-[#05AD5D] border-[#05AD5D] border-2 mt-5 text-xl"  href="/team">
            {team.btn}
            </Link>
            
          </div> 
        </div>
        <TeamsCarousel  />
      </div>
    </div>
  )
}

export default TeamBanner