"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

const TeamsCarousel = () => {
  const teamData = useTranslations('Teams')
  const team =teamData.raw('teams')
    
  return (
    <div className="w-full">
          <ul role="list" className="grid gap-x-2 gap-y-12 md:gap-y-[3rem] xl:gap-y-12 sm:grid-cols-2 sm:gap-y-1 xl:col-span-2">
          {team.teamCarousel.map((person) => (
            <li key={person.name}>
              <div className="flex md:justify-start justify-center md:flex-row flex-col items-center gap-x-6">
                <Image width={100} height={100} alt="" src={person.imageUrl} className="size-16 object-cover rounded-full" />
                <div>
                  <h3 className="text-base/7 text-center md:text-left  font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 text-center md:text-left font-semibold text-[#05AD5D]">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TeamsCarousel