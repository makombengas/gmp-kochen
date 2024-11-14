import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci"


const AboutUsComponents = () => {
  const aboutData = useTranslations('About')
  const about =aboutData.raw('about')
  return (
    <div id="about" className="py-[6rem] md:py-[8rem]  flex-col md:flex-row flex justify-between items-center gap-4" >
        <div className="flex-1">
            <Image style={{width:"20rem", height:"auto"}}  priority className="w-[10rem] md:w-[25rem] "  src={about.image} alt="" width={400} height={400} />
        </div>
        <div className="flex-1 mt-5 md:mt-0  flex flex-col gap-4">
            <h1 className="uppercase text-center md:text-left text-3xl md:text-4xl xl:text-5xl font-bold">
           {about.title}
            </h1>
            <h2 className=" text-center md:text-left md:text-2xl">
           {about.subtitle}
            </h2>
            <p className=" hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight ">
            {about.desc}
            </p>
           <div className="mt-5 flex justify-between items-center ">
                <div className="  flex justify-center items-center      gap-4">
                  <Link  className="hover:bg-[#05AD5D]/80  hover:text-white  mx-auto  px-3 py-1 rounded-md max-w-[12rem] float-left text-[#05AD5D] border-[#05AD5D] border-2  text-xl"  href="/about">
                  {about.btn}
                  </Link>
                  
                </div> 
                <div className="flex text-[#05AD5D] text-7xl  gap-4">
                
                  <Link target="_blank"  href="https://www.youtube.com/@GlobalMusicPlayer">
                      <CiYoutube />
                  </Link>
                
                  </div>
           </div>
        </div>
    </div>
  )
}

export default AboutUsComponents