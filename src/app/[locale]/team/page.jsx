"use client"

import TeamBanner from '@/components/teamBanner/TeamBanner'
import TeamsCarousel from '@/components/teamsCarousel/TeamsCarousel'
import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'use-intl'
const TeamPage = () => {
  const teamData = useTranslations('TeamPage')
  const team = teamData.raw('teamPage')
  return (
    <div className="py-[4rem] ">
      <div className="mt-2 md:mt-8 border-b-2 border-[#05AD5D] h-[4rem]  flex justify-center md:justify-normal items-center">
        <h1 className="uppercase text-center md:text-left  text-xl  md:text-3xl font-bold text-[#05AD5D] ">
         {team.title}
        </h1>

      </div>
      <div className="mt-5 flex flex-col gap-4 justify-normal ">
       
        <div className="flex flex-col justify-center items-center gap-4">
          <Image priority className="  w-[12rem] md:w-[20rem] "  src={team.image} alt="" width={400} height={400} />
        <p className="  mt-2 hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight ">
           {team.desc}
        </p>
        
           
        </div>

        
        <div className="mt-5">
    
        <div className="">
         {
          team.subDescArray.map(item =>(
            <div key={item.id} className="">
            <h1 className="mt-5 text-center md:text-left  text-xl  md:text-2xl font-bold">
               {item.title}
            </h1>
            
            <p className="  mt-2 hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight ">
               {item.desc}
            </p>
        </div>
          ))
         }

        <div className="mt-5 flex flex-col gap-4">
            <h1 className="mt-5 text-center md:text-left  text-xl  md:text-3xl font-bold">
           {team.subtitle}
            </h1>
            <p className=" mb-5   hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight ">
               {team.subDescription}
           
            </p>
            <TeamsCarousel/>
        </div>
           
        </div>
       
        </div>
        
      </div>
    </div>
  )
}

export default TeamPage