import { Layout } from "fumadocs-ui/layout"
import { layoutOptions } from "./docs/layoutOptions"
import { HeroImage } from "@/components/hero-image"
import { FeatureScroll } from "@/components/feature-scroll"
import { Plus } from "@phosphor-icons/react/dist/ssr"

export default function HomePage() {
  return (
    <Layout {...layoutOptions}>
      <div className="overflow-hidden">
        <main
          className={` container flex flex-col gap-8 justify-start items-center mt-16 text-center homepage`}
        >
          <HeroImage />
          <div className="flex overflow-hidden relative flex-col mt-8 w-full border-b-4 md:max-w-full border-neutral-600 max-w-[20rem] sm:max-w-[25rem] md:w-[35rem] dark:border-neutral-500">
            <div className="flex justify-start hero">
              <h1 className="tracking-tighter">
                <span className="overflow-visible">Bookmarks</span>
                <span>RSS Feeds</span>
                <span>Notes</span>
              </h1>
            </div>
            <Plus className="absolute right-0 top-[12vw] size-12 lg:top-[9.5rem]" />
          </div>
          <div className="hero-text">
            <h1 className="my-8 font-bold tracking-tighter text-[9rem] font-heading">
              <div className="text-[20vw] md:text-[12rem]">Briefkasten</div>
              <span className="pops">
                <span className="pop"></span>
                <span className="pop"></span>
                <span className="pop"></span>
                <span className="pop"></span>
                <span className="pop"></span>
              </span>
            </h1>
          </div>
          <div className="relative my-48 w-screen h-96 homepage-scroll">
            <FeatureScroll />
          </div>
        </main>
      </div>
    </Layout>
  )
}
