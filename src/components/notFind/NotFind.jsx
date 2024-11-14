
"use client"
import "@/app/globals.css"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
const NotFind = () => {
  const notFoundData = useTranslations('NotFound')
  const notFound = notFoundData.raw('notFound')
  return (
    <div className=" p-4 h-screen bg-[#05AD5D] flex justify-center items-center flex-col ">

<Image className=" w-[8rem] md:w-[15rem] " priority  src={"/images/logo.png"} alt="" width={200} height={200} />

 <div className="flex flex-col items-center justify-center gap-4">
    <h1 className="text-red-600 text-[3rem]  md:text-[4rem] xl:text-[7rem] font-bold">
       {notFound.title}
    </h1>
    <h1 className="text-gray-100 text-[1.5rem] md:text-[3rem] font-medium">
    Seite nicht gefunden!
    </h1>
    <p className="text-gray-100 text-center font-thin  text-lg md:text-3xl ">
    Die angeforderte Internetadresse funktioniert nicht.
    </p>
    <span className="text-gray-100 text-center font-bold  text-lg md:text-3xl">
    Was jetzt?
    </span>

    <Link  className="hover:bg-[#05AD5D]/80 font-bold  hover:text-white  mx-auto  px-3 py-1 rounded-md max-w-[12rem] float-left text-[#05AD5D] bg-[#fff] border-2 mt-5 text-xl"  href="/">
              {"Zur Seite gehen"}
    </Link>
    
 </div>

    </div>
  )
}

export default NotFind