"use client"

import Image from "next/image"
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslations } from 'next-intl';

const CarouselBanner = () => {
  const carouselData = useTranslations ('Carousel')
  const carousel =carouselData.raw('carousel')


  return (
    <div   className="h-full 2xl:mb-[9rem] relative  2xl:mt-16 pt-16 2xl:py-[8rem]  flex justify-center items-center " >
       <div 
       
       
       className="flex-col md:flex-row flex justify-center md:justify-between items-center gap-4">
          <div 
            
        
          className="flex-1  flex justify-center items-center md:w-1/2">
                <Image   className="w-[20rem] md:w-[30rem] " priority  src={carousel.image} alt="" width={500} height={500} />
            </div>
            <div className="flex-1  flex flex-col gap-4">
                <h1 className="uppercase text-center md:text-left text-3xl md:text-4xl xl:text-6xl font-bold">
                {carousel.title}
                </h1>
                <h2 className="text-center md:text-left  md:text-2xl">
                {carousel.subtitle}
                </h2>
              
                <p className="hyphens-auto text-wrap   md:text-lg  text-gray-800  xl:text-[1.25rem]  text-justify font-extralight  ">
                  {carousel.desc}
                </p>

                
            </div>
       </div>
                <Link className="hidden group  text-[#05AD5D] text-6xl md:block absolute top-[100%]  " href='#about'>
                   <MdOutlineKeyboardArrowDown className=" group-hover:animate-none animate-bounce hover:text-[#05AD5D]/60"  />
                </Link>
    </div>
  )
}

export default CarouselBanner