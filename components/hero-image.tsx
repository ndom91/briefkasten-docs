"use client"

import Image from "next/image"
import Screenshot from "../public/images/screenshot_hero_sveltekasten.png"
import { useWindowScroll } from "react-use"
import { useEffect, useState } from "react"

export const HeroImage = () => {
  const [imageStyle, setImageStyle] = useState({})
  const { y } = useWindowScroll()

  useEffect(() => {
    setImageStyle({
      transform: `perspective(500px) translate3d(0, -${y * 0.4}px, ${y * 0.4}px) rotateX(${y * 0.15}deg) scale(${1 + y * 0.0004})`,
    })
  }, [y])

  return (
    <div
      className="overflow-hidden relative z-20 p-px w-full max-w-screen-md rounded-md shadow-xl gradient-23"
      style={{
        ...imageStyle,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 rotate-45 glow w-[100px] h-[100px]"></div>
      <Image
        className="inline-block relative z-10 p-1 bg-black bg-cover rounded-md gradient-border object-fit"
        src={Screenshot}
        alt="Screenshot of SvelteKasten"
      />
    </div>
  )
}
