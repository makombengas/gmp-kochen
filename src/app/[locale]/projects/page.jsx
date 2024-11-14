"use client"
import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'use-intl'

const ProjectsPage = () => {
  const projectData = useTranslations('ProjectPage')
  const project = projectData.raw('projectPage')
  return (
    <div className="py-[4rem] ">
      <div className="mt-2 md:mt-8 border-b-2 border-[#05AD5D] h-[4rem]  flex justify-center md:justify-normal items-center">
        <h1 className="uppercase text-center md:text-left  text-xl  md:text-3xl font-bold text-[#05AD5D] ">
        {project.title}
        </h1>

      </div>
      <div className="mt-5 flex flex-col gap-4 justify-normal ">
        <h1 className="  text-center md:text-left  text-xl  md:text-3xl font-bold ">
           {project.subtitle}
        </h1>
        <div className="">
          <Image priority className=" ml-5 md:ml-0  float-right  w-[6rem] md:w-[15rem] "  src={project.image} alt="" width={400} height={400} />
        <p className="  mt-2 hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight ">
           {project.desc}
        </p>
        

        </div>

        
     
        <div className="mt-5">
        <h1 className=" text-center md:text-left  text-xl  md:text-3xl font-bold">
        {project.subDescription}
        </h1>
          <ol className=" mt-8 flex flex-col gap-4">
            {
              project.subDescArray.map(item =>(
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

export default ProjectsPage