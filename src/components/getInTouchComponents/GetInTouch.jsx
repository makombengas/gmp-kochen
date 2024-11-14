import Link from "next/link"
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { useTranslations } from "next-intl";
const GetInTouch = () => {
    const contactData = useTranslations('Contact')
    const contact = contactData.raw('contact')

  return (
    <div id="contact" className="py-16 md:py-[8rem]   grid place-content-center place-items-center grid-cols-1">
        <div className="flex-1  flex flex-col gap-4">
                <h1 className="uppercase text-center md:text-left text-3xl md:text-4xl xl:text-5xl font-bold">
                   {contact.title} 
                </h1>
                
              
                <p className="hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight  ">
                {contact.desc}
                </p>

          
                
            </div>
        <div className="flex justify-between items-center md:flex-row flex-col  gap-16  mt-[2rem]">
            <div className=" w-full flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl md:text-left text-center font-bold"> {contact.subtitle} </h3>
                    <p className="hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight  ">
                    {contact.subDesc}  
                    {" "}
                    <b>
                        {contact.address}
                    </b> 
                    </p>
                </div>
               
            </div>
            <div className="flex justify-center items-center md:items-end flex-col gap-2 w-full ">
           
                
                <a className="bg-[#05AD5D] border-2 border-[#05AD5D] hover:bg-transparent transition-all ease-in duration-500  text-xl text-white p-3 font-bold rounded-md w-[15rem] text-center   hover:text-[#05AD5D]/70 " href={contact.email} >{contact.btn} </a>
               
            </div>
        </div>

    </div>
  )
}

export default GetInTouch