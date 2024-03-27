import { Plus } from "@phosphor-icons/react/dist/ssr"

export function HeroText() {
  return (
    <div className="flex flex-col w-full md:w-auto">
      <div className="flex overflow-hidden relative flex-col mt-8 w-full max-w-screen-sm">
        <div className="flex justify-start hero">
          <h1 className="relative p-2 tracking-tighter">
            <span className="overflow-visible px-1">Bookmarks</span>
            <span className="overflow-visible px-1">RSS Feeds</span>
            <span className="overflow-visible px-1">Privacy</span>
            <Plus className="absolute right-0 size-12 bottom-[2.5rem]" />
            <span className="mt-6 w-[110%] border-b-4 border-neutral-600 dark:border-neutral-500"></span>
          </h1>
        </div>
      </div>
      <div className="hero-text text-[5rem] md:text-[clamp(10rem,_15vw_+_1rem,_21rem)]">
        <h1 className="my-8 font-bold tracking-tighter font-heading">
          <div className="px-2">Briefkasten</div>
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
  )
}
