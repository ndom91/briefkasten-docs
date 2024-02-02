import { Layout } from "fumadocs-ui/layout"
import { layoutOptions } from "./docs/layoutOptions"
import { HeroImage } from "@/components/hero-image"
import { FeatureScroll } from "@/components/feature-scroll"
import { Plus } from "@phosphor-icons/react/dist/ssr"

export default function HomePage() {
  return (
    <Layout {...layoutOptions}>
      <main
        className={` container flex overflow-hidden flex-col gap-8 justify-start items-center mt-16 text-center homepage`}
      >
        <HeroImage />
        <div className="flex overflow-hidden relative flex-col mt-8 border-b-4 w-[35rem] border-neutral-600 dark:border-neutral-500">
          <div className="flex justify-start hero">
            <h1 className="tracking-tighter">
              <span className="overflow-visible">Bookmarks</span>
              <span>RSS Feeds</span>
              <span>Notes</span>
            </h1>
          </div>
          <Plus className="absolute right-0 top-[9.5rem] size-12" />
        </div>
        <div className="hero-text">
          <h1 className="my-8 font-bold tracking-tighter text-[9rem] font-display">
            <div className="text-[12rem]">Briefkasten</div>
            <span className="pops">
              <span className="pop"></span>
              <span className="pop"></span>
              <span className="pop"></span>
              <span className="pop"></span>
              <span className="pop"></span>
            </span>
          </h1>
        </div>
        <div className="relative my-48 w-full h-96 homepage-scroll">
          <FeatureScroll />
        </div>
      </main>
    </Layout>
  )
}
