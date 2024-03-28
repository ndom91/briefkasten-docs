export function Pricing() {
  return (
    <section>
      <div className="container relative items-center mx-auto mb-24 w-full md:px-12 lg:px-16">
        <div className="absolute -left-16 -top-40 font-extrabold opacity-[0.03] font-heading text-[12rem]">
          Pricing
        </div>
        <div>
          <div className="overflow-hidden relative p-10 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0">
            <div className="flex relative flex-col p-8 bg-gray-200 rounded-lg">
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-neutral-600 font-display">
                  Cumulus Cruiser
                </h3>
                <p className="flex flex-col items-center my-8 xl:flex-row xl:justify-center xl:items-baseline text-neutral-600">
                  <span className="flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight">
                      $
                    </span>
                    <span className="text-6xl font-extrabold tracking-tight md:text-8xl lg:text-7xl xl:text-8xl">
                      0.00
                    </span>
                  </span>
                  <span className="ml-1 font-semibold lg:text-lg xl:text-xl text-md">
                    / month
                  </span>
                </p>
                <ul role="list" className="pt-6 mt-6 space-y-6">
                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 rounded-full bg-neutral-600 min-w-6">
                      <svg
                        className="flex-shrink-0 mx-auto w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-600">
                      Unlimited Bookmarks
                    </span>
                  </li>
                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 rounded-full bg-neutral-600 min-w-6">
                      <svg
                        className="flex-shrink-0 mx-auto w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-600">
                      Unlimited RSS Feeds
                    </span>
                  </li>
                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 rounded-full bg-neutral-600 min-w-6">
                      <svg
                        className="flex-shrink-0 mx-auto w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-left text-neutral-600">
                      Unlimited Text-to-Speech and Summarizations
                    </span>
                  </li>
                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 rounded-full bg-neutral-600 min-w-6">
                      <svg
                        className="flex-shrink-0 mx-auto w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-600">
                      Community Support
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href="https://dev.briefkastenhq.com/?utm_source=docs&utm_medium=cta&utm_campaign=pricing"
                  target="_blank"
                  type="highlight"
                  className="block items-center py-3.5 px-10 w-full text-xl font-bold text-center text-white rounded-md border-2 transition duration-500 ease-in-out transform focus:ring-2 focus:ring-offset-2 focus:outline-none border-neutral-700 bg-neutral-700 shadow-xs font-display focus:ring-neutral-500"
                >
                  Cloud
                </a>
              </div>
            </div>
            <div className="flex relative flex-col p-8 rounded-lg bg-neutral-600">
              <div className="relative flex-1">
                <h3 className="text-3xl font-semibold text-white font-display">
                  Silicon Sailor
                </h3>
                <p className="flex flex-col items-center my-8 text-white xl:flex-row xl:justify-center xl:items-baseline">
                  <span className="flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight">
                      $
                    </span>
                    <span className="text-6xl font-extrabold tracking-tight md:text-8xl lg:text-7xl xl:text-8xl">
                      0.00
                    </span>
                  </span>
                  <span className="ml-1 font-semibold lg:text-lg xl:text-xl text-md">
                    / month
                  </span>
                </p>
                <ul role="list" className="pt-6 mt-6 space-y-6">
                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-full">
                      <svg
                        className="flex-shrink-0 mx-auto w-4 h-4 text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Unlimited Bookmarks</span>
                  </li>
                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-full min-w-6">
                      <svg
                        className="flex-shrink-0 mx-auto w-4 h-4 text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Unlimited RSS Feeds</span>
                  </li>
                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-full min-w-6">
                      <svg
                        className="flex-shrink-0 mx-auto w-4 h-4 text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-left text-white">
                      Unlimited Text-to-Speech and Summarizations
                    </span>
                  </li>
                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-full min-w-6">
                      <svg
                        className="flex-shrink-0 mx-auto w-4 h-4 text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Community Support</span>
                  </li>
                </ul>
              </div>
              <div className="z-50 mt-6">
                <a
                  href="/docs/self-hosting"
                  type="highlight"
                  className="block items-center py-3.5 px-10 w-full text-xl font-bold text-center bg-white rounded-md border-2 border-white transition duration-500 ease-in-out transform focus:ring-2 focus:ring-offset-2 focus:outline-none shadow-xs font-display text-neutral-600 focus:ring-neutral-500"
                >
                  Self-host
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
