export function JoinCTA() {
  return (
    <section className="relative w-[100vw]">
      <div className="relative items-center py-12 px-5 mx-auto w-full bg-white md:px-12 lg:py-24 lg:px-24 shadow-xs dark:bg-neutral-900">
        <div className="grid grid-cols-3">
          <div className="flex col-span-1 items-center">
            <div className="p-8 rounded-full bg-neutral-950">
              <svg
                height="196"
                fill="none"
                aria-hidden="true"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className=""
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col col-span-2 gap-4 justify-center items-stretch w-full">
            <h4 className="mt-8 text-4xl font-semibold tracking-tighter leading-none text-left lg:text-5xl dark:text-white text-neutral-600">
              Briefkasten v2 Beta is here!
            </h4>
            <p className="mt-3 text-base leading-relaxed text-left text-gray-500 dark:text-neutral-100">
              You can try out the new Briefkasten rewrite both in the cloud, as
              well as self-hosted, this time with a much simpler docker setup.
              There's new features like RSS feed integration, LLM-based
              text-to-speech and summarization, and much more!
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://dev.briefkastenhq.com"
                target="_blank"
                className="flex justify-center items-center py-4 px-10 w-full text-base font-medium text-center text-white rounded-xl transition duration-500 ease-in-out transform focus:ring-2 focus:ring-offset-2 focus:outline-none bg-neutral-600 hover:bg-neutral-700 focus:ring-neutral-500"
              >
                Cloud
              </a>
              <a
                href="https://docs.briefkastenhq.com/docs/self-hosting"
                target="_blank"
                className="flex justify-center items-center py-4 px-10 w-full text-base font-medium text-center bg-transparent rounded-xl border-2 transition duration-500 ease-in-out transform outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:outline-none text-neutral-800 border-neutral-500 focus:ring-neutral-500"
              >
                Self-host
              </a>
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 text-black transform translate-y-1/3 dark:text-white -z-[1]"
          viewBox="0 0 800 800"
        >
          <g transform="matrix(1,0,0,1,0,0)">
            <circle
              r="160"
              cx="127"
              cy="400"
              stroke-width="6"
              stroke="currentColor"
              fill="none"
              opacity="0.1"
            ></circle>
            <circle
              r="190"
              cx="127"
              cy="400"
              stroke-width="6"
              stroke="currentColor"
              fill="none"
              opacity="0.075"
            ></circle>
            <circle
              r="220"
              cx="127"
              cy="400"
              stroke-width="6"
              stroke="currentColor"
              fill="none"
              opacity="0.05"
            ></circle>
            <circle
              r="250"
              cx="127"
              cy="400"
              stroke-width="6"
              stroke="currentColor"
              fill="none"
              opacity="0.025"
            ></circle>
          </g>
        </svg>
      </div>
    </section>
  )
}
