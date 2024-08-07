export function JoinCTA() {
  return (
    <section className="relative rounded-sm w-[100vw]">
      <div className="relative items-center py-12 px-12 mx-auto w-full bg-white border md:px-12 lg:py-24 lg:px-24 max-w-[1400px] border-neutral-100/20 dark:bg-neutral-900 dark:border-neutral-600/30">
        <div className="grid relative grid-cols-2 grid-flow-row md:grid-cols-3">
          <div className="flex col-span-2 justify-center items-center md:col-span-1">
            <div className="p-8 w-1/3 rounded-full bg-neutral-950 md:w-fit">
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
                className="flex justify-center items-center py-4 px-10 w-full text-2xl text-center text-white rounded-md transition duration-500 ease-in-out transform focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none bg-neutral-600 font-display group dark:focus:ring-offset-neutral-900 dark:focus:ring-neutral-700 hover:bg-neutral-700 focus:ring-neutral-100"
              >
                Cloud
                <div className="hidden lg:block w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 lg:group-hover:w-5 lg:group-hover:translate-x-0 lg:group-hover:pl-4 lg:group-hover:opacity-100">
                  <svg
                    className="size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none" />
                    <path
                      d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://docs.briefkastenhq.com/docs/self-hosting/?utm_source=docs&utm_medium=cta&utm_campaign=beta"
                target="_blank"
                className="flex justify-center items-center py-4 px-10 w-full text-2xl text-center bg-transparent rounded-md border-2 transition duration-500 ease-in-out transform outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none group text-neutral-800 border-neutral-500 font-display dark:focus:ring-offset-neutral-900 dark:focus:ring-neutral-700 focus:ring-neutral-100"
              >
                Selfhost
                <div className="hidden lg:block w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 lg:group-hover:w-5 lg:group-hover:translate-x-0 lg:group-hover:pl-4 lg:group-hover:opacity-100">
                  <svg
                    className="size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none" />
                    <ellipse
                      cx="128"
                      cy="80"
                      rx="88"
                      ry="48"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                </div>
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
