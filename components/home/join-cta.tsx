export function JoinCTA() {
  return (
    <section className="relative bg-white rounded-sm w-[100vw] dark:bg-neutral-900">
      <div className="relative items-center py-12 px-12 mx-auto w-full md:px-12 lg:py-24 lg:px-24 shadow-xs max-w-[1400px]">
        <div className="grid relative grid-cols-2 grid-flow-row md:grid-cols-3">
          <div className="flex col-span-1 justify-center items-center">
            <div className="p-8 w-2/3 rounded-full bg-neutral-950 md:w-fit">
              <svg
                width="196"
                fill="none"
                aria-hidden="true"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-full"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col col-span-2 gap-4 justify-center items-stretch w-full">
            <h4 className="mt-8 text-4xl font-semibold leading-none text-left lg:text-5xl dark:text-white text-neutral-600 font-display">
              Briefkasten v2 Beta is here!
            </h4>
            <p className="mt-3 text-base leading-relaxed text-left text-gray-500 dark:text-neutral-100">
              You can try out the new Briefkasten rewrite both in the cloud, as
              well as self-hosted, this time with a much simpler docker setup.
              There&apos;s new features like RSS feed integration, LLM-based
              text-to-speech and summarization, and much more!
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://dev.briefkastenhq.com/?utm_source=docs&utm_medium=cta&utm_campaign=beta"
                target="_blank"
                className="flex justify-center items-center py-4 px-10 w-full text-2xl text-center text-white rounded-md transition duration-500 ease-in-out transform focus:ring-2 focus:ring-offset-2 focus:outline-none bg-neutral-600 font-display hover:bg-neutral-700 focus:ring-neutral-500"
              >
                Cloud
              </a>
              <a
                href="https://docs.briefkastenhq.com/docs/self-hosting/?utm_source=docs&utm_medium=cta&utm_campaign=beta"
                target="_blank"
                className="flex justify-center items-center py-4 px-10 w-full text-2xl text-center bg-transparent rounded-md border-2 transition duration-500 ease-in-out transform outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:outline-none text-neutral-800 border-neutral-500 font-display focus:ring-neutral-500"
              >
                Self-host
              </a>
            </div>
          </div>
        </div>
        <svg
          className="overflow-visible absolute bottom-0 left-0 text-black transform dark:text-white min-w-[1400px] translate-y-[calc(22rem_+_6vw)] md:translate-y-[calc(20rem_+_20vw)] lg:translate-y-[460px] -z-[1]"
          viewBox="0 0 800 800"
        >
          <g transform="matrix(1,0,0,1,0,0)">
            <circle
              r="160"
              cx="160"
              cy="400"
              strokeWidth="6"
              stroke="currentColor"
              fill="none"
              opacity="0.1"
            ></circle>
            <circle
              r="190"
              cx="160"
              cy="400"
              strokeWidth="6"
              stroke="currentColor"
              fill="none"
              opacity="0.075"
            ></circle>
            <circle
              r="220"
              cx="160"
              cy="400"
              strokeWidth="6"
              stroke="currentColor"
              fill="none"
              opacity="0.05"
            ></circle>
            <circle
              r="250"
              cx="160"
              cy="400"
              strokeWidth="6"
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
