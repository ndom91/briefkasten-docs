import { HeroText } from "@/components/home/hero-text"
import { HeroImage } from "@/components/home/hero-image"

export function Hero() {
  return (
    <div className="flex relative flex-col gap-4 items-center px-8 w-full md:flex-row">
      <HeroText />
      <HeroImage />
    </div>
  )
}
