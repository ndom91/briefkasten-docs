import { Layout } from "fumadocs-ui/layout"
import { layoutOptions } from "./docs/layoutOptions"
import Image from "next/image"
import HeroImage from "../public/images/screenshot_hero_sveltekasten.png"

export default function HomePage() {
  return (
    <Layout {...layoutOptions}>
      <main className="container flex flex-col justify-start items-center pt-16 text-center homepage hero h-dvh">
        <div className="overflow-hidden relative p-px w-full max-w-screen-lg rounded-md">
          <div className="absolute inset-0 rotate-45 glow w-[100px] h-[100px]"></div>
          <Image
            className="inline-block relative z-10 p-1 bg-black rounded-md object-fit"
            src={HeroImage}
            alt="Screenshot of SvelteKasten"
          />
        </div>
        <div className="flex overflow-hidden relative flex-col mt-8 hero">
          <h1 className="">
            <span>Bookmarks</span>
            <span>RSS Feeds</span>
            <span>Notes</span>
          </h1>
          <svg
            className="absolute right-0 bottom-32 size-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <line
              x1="40"
              y1="128"
              x2="216"
              y2="128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="128"
              y1="40"
              x2="128"
              y2="216"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          <h1 className="pt-6 my-8 text-2xl font-bold border-t border-neutral-300 boujee-text">
            Briefkasten
          </h1>
        </div>
      </main>
    </Layout>
  )
}
