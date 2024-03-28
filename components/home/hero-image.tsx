"use client"

import Image from "next/image"
import Screenshot from "../../public/images/screenshot_hero_sveltekasten.png"

export const HeroImage = () => {
  return (
    <div className="hidden overflow-hidden absolute right-0 top-12 p-px max-w-screen-sm rounded-md shadow-md transition duration-300 ease-in-out lg:block hover:shadow-xl w-[30vw] rotate-[9deg] gradient-23 group hover:translate-y-[2vw] hover:rotate-[3deg] hover:scale-[1.3]">
      <div className="absolute inset-0 rotate-45 glow w-[100px] h-[100px]"></div>
      <Image
        className="inline-block relative p-1 bg-black bg-cover rounded-md gradient-border object-fit"
        src={Screenshot}
        alt="Screenshot of SvelteKasten"
      />
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div className="relative w-8 h-full bg-white/20"></div>
      </div>
    </div>
  )
}
