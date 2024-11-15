"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"


const VisionBanner = () => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname ;
  const navArray = useTranslations("Nav")
  const nav = navArray.raw("nav")
  const projectsData = useTranslations("Projects")
  const projects = projectsData.raw("projects")
  return (
    <div id="projects" className=" py-[6rem] md:py-[8rem]  flex-col-reverse md:flex-row flex justify-between items-center gap-4" >
        <div className="flex-1  flex flex-col gap-4">
            <h1 className="uppercase text-center md:text-left text-3xl md:text-4xl xl:text-5xl font-bold">
             {projects.title}
            </h1>
           
            <p className=" hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight  ">
            {projects.desc}
            </p>

            <div className=" flex justify-center items-center   md:block    gap-4">
            <Link rel="preload" href={'/projects'} className={`${nav[2].url === isActive ?  'bg-[#05AD5D] text-white' : ''} hover:bg-[#05AD5D]/80  hover:text-white  mx-auto  px-3 py-1 rounded-md max-w-[12rem] float-left text-[#05AD5D] border-[#05AD5D] border-2 mt-5 text-xl`}   >
            {projects.btn}
            </Link>
            
          </div> 
            
        </div>
        <div className="flex-1  flex justify-center items-center w-1/2">
            <Image priority className="w-[10rem] md:w-[20rem] "  src={projects.image} alt="" width={250} height={250} />
        </div>
    </div>
  )
}

export default VisionBanner