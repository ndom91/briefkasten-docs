import { Layout } from "fumadocs-ui/layout"
import { layoutOptions } from "./docs/layoutOptions"
import { HeroImage } from "@/components/hero-image"
import { FeatureScroll } from "@/components/feature-scroll"
import { Plus } from "@phosphor-icons/react/dist/ssr"

export default function HomePage() {
  return (
    <Layout {...layoutOptions}>
      <main className="container flex overflow-hidden flex-col gap-8 justify-start items-center pt-16 text-center homepage hero">
        <HeroImage />
        <div className="flex overflow-hidden relative flex-col mt-8 hero">
          <h1 className="tracking-tighter">
            <span className="overflow-visible">Bookmarks</span>
            <span>RSS Feeds</span>
            <span>Notes</span>
          </h1>
          <Plus className="absolute right-0 bottom-48 size-12" />
          <h1 className="pt-6 my-8 !text-6xl tracking-tighter font-bold border-t border-neutral-300">
            Briefkasten
          </h1>
        </div>
        <div className="relative my-48 w-full h-96 homepage-scroll">
          <FeatureScroll />
        </div>
      </main>
    </Layout>
  )
}
