import { Layout } from "fumadocs-ui/layout"
import { layoutOptions } from "./docs/layoutOptions"
import { Hero } from "@/components/home/hero"
import { ScreenshotScroll } from "@/components/home/screenshot-scroll"
import { BentoFeatures } from "@/components/home/bento"

export default function HomePage() {
  return (
    <Layout {...layoutOptions}>
      <main
        className={`container overflow-hidden flex flex-col gap-8 justify-start items-center mt-16 text-center homepage`}
      >
        <Hero />
        <ScreenshotScroll />
        <BentoFeatures />
      </main>
    </Layout>
  )
}
