"use client"

import Image from "next/image"
import Screenshot from "../../public/images/screenshot_hero_sveltekasten.png"

export const HeroImage = () => {
  return (
    <div className="hidden overflow-hidden absolute right-24 top-32 p-px max-w-screen-sm rounded-md shadow-xl md:block w-[50vw] rotate-[9deg] gradient-23">
      <div className="absolute inset-0 rotate-45 glow w-[100px] h-[100px]"></div>
      <Image
        className="inline-block relative p-1 bg-black bg-cover rounded-md gradient-border object-fit"
        src={Screenshot}
        alt="Screenshot of SvelteKasten"
      />
    </div>
  )
}
