import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const MissionPage = () => {
  const missionData = useTranslations('MissionPage')
  const mission = missionData.raw('missionPage')
  return (
    <div className="py-[4rem] ">
      <div className="mt-2 md:mt-8 border-b-2 border-[#05AD5D] h-[4rem]  flex justify-center md:justify-normal items-center">
        <h1 className="uppercase text-center md:text-left  text-xl  md:text-3xl font-bold text-[#05AD5D] ">
          {mission.headTitle}
        </h1>

      </div>
      <div className="mt-5 flex flex-col gap-4 justify-normal ">
        <h1 className="  text-center   text-xl  md:text-3xl font-bold ">
        {mission.title}
        </h1>
        <div className="mt-5 flex flex-col justify-center items-center gap-4">
          <Image priority className="  w-[6rem] md:w-[20rem] "  src={mission.image} alt="" width={400} height={400} />
        <p className="  mt-2 hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight ">
          {mission.desc}
        </p>
        
           
        </div>

        
        <div className="mt-5">
    
        <div className="">
        <h1 className="mt-5 text-center md:text-left  text-xl  md:text-3xl font-bold">
        {mission.subtitle}
        </h1>
          <Image priority className="float-right ml-5  w-[6rem] md:w-[20rem] "  src={"/images/carrot.png"} alt="" width={400} height={400} />
        <p className="  mt-2 hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight ">
        {mission.subDescription}
        </p>
        
           
        </div>
        <h1 className="mt-5 text-center md:text-left  text-xl  md:text-3xl font-bold">
           {mission.subMissionTitle}
        </h1>
          <ol className=" mt-8 flex flex-col gap-4">
           {
            mission.subMissionArray.map(item =>(
              <li key={item.id} className=" hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight flex flex-col gap-2">
              <h3 className="text-xl text-center md:text-left font-medium text-black ">
              {item.title}
              </h3>
               {item.desc}
            </li>  
            ))
           }         
          </ol>
        </div>
        
      </div>
    </div>
  )
}

export default MissionPage