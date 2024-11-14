
"use client"
import { useTranslations } from 'next-intl'
import React from 'react'

const ContactPage = () => {
  const contactData = useTranslations('ContactPage')
  const contact = contactData.raw('contactPage')
  return (
    <div className="py-[4rem] ">
      <div className="mt-2 md:mt-8 border-b-2 border-[#05AD5D] h-[4rem]  flex justify-center md:justify-normal items-center">
        <h1 className="uppercase text-center md:text-left  text-xl  md:text-3xl font-bold text-[#05AD5D] ">
          {contact.title}
        </h1>

      </div>
      <div className="mt-5 flex flex-col gap-4 justify-normal ">
        <h1 className="  text-center md:text-left  text-xl  md:text-3xl font-bold ">
         {contact.subtitle}

        </h1>
        <div className="">
         
        <p className="  mt-2 hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight ">
           {contact.desc}
        </p>
        

        </div>

        
     
        <div className="">
      
          <ol className=" mt-8 flex justify-center items-center md:items-start flex-col gap-4">
            <li className=" hyphens-auto text-wrap  justify-center items-center md:items-start   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight flex flex-col gap-2">
              <h3 className="text-xl text-center md:text-left font-medium text-black ">
                {contact.emailTitle}
              </h3>
               
               {contact.emailDesc}

              <a className='text-[#05AD5D] font-bold ' href="mailto:mail@globalmusicplayer.com"> {contact.email} </a>
            </li>

            <li className="justify-center items-center md:items-start hyphens-auto text-wrap    md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight flex flex-col gap-2">
              
               
               {contact.website}

              <a className='text-[#05AD5D] font-bold ' target="!scroll-smooth" href={contact.webLink}> {contact.webLink} </a>
            </li>

            

            <li className="hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight flex flex-col gap-2">
              <h3 className="text-xl text-center md:text-left font-medium text-black ">
              {contact.social}
              </h3>
             {contact.socialDesc}
            </li>          
          </ol>
          <ul className="mt-5 flex justify-center items-center md:items-start flex-col gap-2">
          <li className="">
           
          Instagram: <a className='text-[#05AD5D] font-bold ' href="https://www.instagram.com/globalmusicplayerverlag/" target="_blank" rel="noopener noreferrer">globalmusicplayerverlag</a>
            </li>
            <li className="">
          
            Facebook: <a className='text-[#05AD5D] font-bold ' href="https://www.facebook.com/globalmusicplayerev/" target="_blank" rel="noopener noreferrer">globalmusicplayerev</a>
            </li>
            <li className="">
            Youtube: <a className='text-[#05AD5D] font-bold ' href="https://www.youtube.com/@GlobalMusicPlayer" target="_blank" rel="noopener noreferrer">@GlobalMusicPlayer</a>
            </li>
          </ul>
        </div>

        <div className="">
        <h3 className="text-xl text-center md:text-left font-medium text-black ">
          {contact.visitUs}
        </h3>
         
        <p className="  mt-2 hyphens-auto text-wrap   md:text-lg  text-gray-700  xl:text-[1.25rem]  text-justify font-extralight ">
           {contact.visitDesc}
        </p>
        
           
        </div>
      </div>
    </div>
  )
}

export default ContactPage