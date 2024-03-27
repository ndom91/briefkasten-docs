import { Layout } from "fumadocs-ui/layout"
import { layoutOptions } from "./docs/layoutOptions"
import { Hero } from "@/components/home/hero"
import { ScreenshotScroll } from "@/components/home/screenshot-scroll"
import { BentoFeatures } from "@/components/home/bento"
import { JoinCTA } from "@/components/home/join-cta"

export default function HomePage() {
  return (
    <Layout {...layoutOptions}>
      <main
        className={`overflow-x-hidden mx-auto w-full max-w-[1700px] px-4 sm:px-24 md:px-[100x] lg:px-[150px] flex flex-col gap-64 justify-start items-center mt-16 text-center homepage`}
      >
        <Hero />
        <BentoFeatures />
        <JoinCTA />
        <ScreenshotScroll />
      </main>
    </Layout>
  )
}
