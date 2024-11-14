
import Link from "next/link"
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" py-6 md:py-16">
    <div className="my-5 py-8 flex text-sm md:text-md  md:flex-row flex-col justify-between border-dotted border-t-[1px] border-[#05AD5D] items-center  ">
    <div className="flex md:justify-start justify-center items-center">
      <span className=" text-center md:text-left ">
        © 2024 Bernard Ngassa / Global Music Player 
      </span>
     </div>
 
     <div className="pt-5 flex gap-4">
               <Link target="_blank"  href="https://www.facebook.com/globalmusicplayerev/">
                   <FaFacebook className="text-[#05AD5D] text-4xl hover:text-[#05AD5D]/70" />
                </Link>
                <Link target="_blank"  href="https://www.instagram.com/globalmusicplayerverlag/">   
                   <RiInstagramFill className="text-[#05AD5D] text-4xl hover:text-[#05AD5D]/70" />
                </Link>
                <Link target="_blank"  href="https://www.youtube.com/@GlobalMusicPlayer">
                   <FaYoutube className="text-[#05AD5D] text-4xl hover:text-[#05AD5D]/70" />
                </Link>
      </div>
    </div>

    <div className="flex justify-center items-center text-[.45rem] md:text-[.85rem] gap-2 ">
      
    <a target="_blank" href=" https://www.vectorportal.com/StockVectors/"><b className="text-[#05AD5D]" >Vector Image made by </b></a>  Vectorportal.com is licensed under <a className="external text" href=" https://creativecommons.org/licenses/by/4.0/" rel="nofollow">CC BY</a>
    </div>

    </div>
  )
}

export default Footer