import { Layout } from "fumadocs-ui/layout"
import { layoutOptions } from "./docs/layoutOptions"
import { HeroImage } from "@/components/hero-image"
import { FeatureScroll } from "@/components/feature-scroll"
import { Plus } from "@phosphor-icons/react/dist/ssr"

export default function HomePage() {
  return (
    <Layout {...layoutOptions}>
      <main className="container flex overflow-hidden flex-col gap-8 justify-start items-center mt-16 text-center homepage">
        <HeroImage />
        <div className="flex overflow-hidden relative flex-col mt-8">
          <div className="flex justify-start hero">
            <h1 className="tracking-tighter">
              <span className="overflow-visible">Bookmarks</span>
              <span>RSS Feeds</span>
              <span>Notes</span>
            </h1>
          </div>
          <Plus className="absolute right-0 top-[9.5rem] size-12" />
          <div className="hero-text">
            <h1 className="my-8 !text-6xl tracking-tighter font-bold border-t-4 border-neutral-600 dark:border-neutral-500">
              Briefkasten
              <span className="pops">
                <span className="pop"></span>
                <span className="pop"></span>
                <span className="pop"></span>
                <span className="pop"></span>
                <span className="pop"></span>
              </span>
            </h1>
          </div>
        </div>
        <div className="relative my-48 w-full h-96 homepage-scroll">
          <FeatureScroll />
        </div>
      </main>
    </Layout>
  )
}
