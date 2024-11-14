import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const AboutsPage = () => {
  const aboutData = useTranslations('AboutUs')
  const about =aboutData.raw('aboutUs')
  return (
    <div className="py-[4rem] ">
      <div className="mt-2 md:mt-8 border-b-2 border-[#05AD5D] h-[4rem]  flex justify-center md:justify-normal items-center">
        <h1 className="uppercase text-center md:text-left  text-xl  md:text-3xl font-bold text-[#05AD5D] ">
        {about.title}
        </h1>

      </div>
      <div className="mt-5 flex flex-col gap-4 justify-normal ">
        <h1 className="  text-center md:text-left  text-xl  md:text-3xl font-bold ">
        {about.subtitle}
        </h1>
        <div className="">
         
        <p className="  mt-2 hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight ">
           {about.desc}
        </p>
        

        </div>

        
     
        <div className="mt-5">
      
        {
          about.aboutArray.map(item=>(
            <ol key={item.id} className=" mt-8 flex flex-col gap-4">
            <li className=" hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight flex flex-col gap-2">
              <h3 className="text-xl text-center md:text-left font-medium text-black ">
              {item.title}
              </h3>
             {item.desc}
            </li>      
          </ol>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default AboutsPage