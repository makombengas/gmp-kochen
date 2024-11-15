
"use client"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"

import {  useSelectedLayoutSegment } from "next/navigation"
import { useState } from "react"
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher"
import BackToTop from "../backToTop/BackToTop"




const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  const [indexNavbar, setIndexNavbar] = useState(null)

 const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname ;
  const navArray = useTranslations("Nav")
  const nav = navArray.raw("nav")



  return (
    
           
      <div className="fixed px-[1rem] top-0 left-0 w-full bg-white z-40">

          <div className={`  flex justify-between  mx-auto max-w-[75rem] py-2 items-center`} >
                      <Link rel="preload" href={nav[0].url} className="z-50 " onClick={()=>{setOpenNavbar(false)}} >
                          <Image style={{width:"3rem", height:"auto"}} priority className=" w-[2rem] md:w-[2.5rem] rounded-md" src={"/images/logo.png"} alt="" width={70} height={70} />
                      </Link>
                    <div className=" relative">
                        <div className={`${openNavbar ? "bg-white  w-screen md:w-auto md:h-auto md:static md:translate-x-0 h-screen absolute top-[50%] left-[50%] translate-x-[-52.5%]   flex-col md:flex-row flex justify-center items-center gap-4   " : "hidden md:flex items-center justify-end  gap-4"} md:mr-4  flex justify-end  items-center gap-4`} >

                            {
                                nav.map((item, index) => (
                                  

                                  <div key={item.id} className="font-medium text-xl">
                                    <Link rel="preload" href={item.url} className={` ${item.url === isActive ? "text-[#05AD5D]" : ""}  md:text-[.85rem]   lg:text-[.85rem]  xl:text-[1.1rem] uppercase hover:text-[#05AD5D]`} onClick={()=>setOpenNavbar(false)}>{item.title}</Link>
                                  </div>

                                ))
                            }

                    <div className="">
                      <LanguageSwitcher/>
                    </div>
                        </div>
                    </div>


                      <div className="z-50 flex flex-col gap-[.35rem] relative  w-[1.85rem] md:hidden" onClick={()=>setOpenNavbar(!openNavbar)} >
                        <hr className={`${openNavbar ? "border-none transition-rotate ease-linear duration-300  bg-black rotate-45 h-[2px] w-full " : "border-none transition-rotate ease-linear duration-300 bg-black h-[2px] w-full "}`} />
                        <hr className={`${openNavbar ? "border-none transition-opacity ease-linear duration-300 bg-black opacity-0 h-[2px] w-full " : "border-none transition-opacity ease-linear duration-300 bg-black h-[2px] w-full "}`} />
                        <hr className={`${openNavbar ? "border-none transition-rotate ease-linear duration-300  absolute bg-black -rotate-45 h-[2px] w-full " : "border-none transition-rotate ease-linear duration-300 bg-black h-[2px] w-full "}`} />
                      </div>
        </div>
       <BackToTop/>
      </div>  
  
  )
}

export default Navbar