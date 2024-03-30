export function Faq() {
  return (
    <section className="faq">
      <div className="container relative py-24 px-8 mx-auto max-w-4xl md:px-12 lg:px-32">
        <div className="absolute -left-16 -top-24 font-extrabold opacity-[0.05] font-heading text-[12rem]">
          FAQ
        </div>
        <div className="p-2 rounded-xl border w-[640px] shadow-xs backdrop-blur dark:border-neutral-800">
          <div className="flex flex-col gap-8 p-10 text-base text-left bg-gray-50 rounded-lg border md:p-20 lg:col-span-2 text-neutral-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-50">
            <details name="faq" className="">
              <summary className="text-lg font-medium text-black cursor-pointer dark:text-white">
                Can I really use this for free?
              </summary>
              <p className="pt-4 text-base font-light tracking-wide leading-7 text-neutral-500 text-balance dark:text-neutral-50">
                Yes! This is a side-project of mine that I do not intend to make
                money from. Who&apos;s going to pay for a simple bookmarking app
                like this anyway haha. That being said, if this becomes popular
                to the point where I cannot afford the hosting any longer, or
                begins to be abused with a similar outcome, then I reserve the
                right to change any of these terms.
              </p>
            </details>
            <details name="faq">
              <summary className="text-lg font-medium text-black cursor-pointer dark:text-white">
                What&apos;s going to happen to my bookmarks?
              </summary>
              <p className="pt-4 text-base font-light tracking-wide leading-7 text-neutral-500 text-balance dark:text-neutral-50">
                If you&apos;ve used Briefkasten before and have a saved set of
                bookmarks, don&apos;t worry! We plan on migrating the current
                (v1) Briefkasten database to v2, so once the official GA release
                of v2 happens, your bookmarks will make the transition as well!
              </p>
            </details>
            <details name="faq">
              <summary className="text-lg font-medium text-black cursor-pointer dark:text-white">
                How do the AI features work without an API key?
              </summary>
              <p className="pt-4 text-base font-light tracking-wide leading-7 text-neutral-500 text-balance dark:text-neutral-50">
                The AI features work by downloading and executing the models in
                your browser! This is made possible by the{" "}
                <a
                  target="_blank"
                  className="underline underline-offset-4"
                  href="https://github.com/xenova/transformers.js/"
                >
                  <code>transformers.js</code>
                </a>{" "}
                library, which is a Javascript port of HuggingFace&apos;s Python{" "}
                <code>transformers.js</code>. For more info, check out the{" "}
                <a className="underline underline-offset-4" href="/docs/ai">
                  AI docs page
                </a>
                .
              </p>
            </details>
            <details name="faq">
              <summary className="text-lg font-medium text-black cursor-pointer dark:text-white">
                I&apos;ve found a bug or want to make a feature request
              </summary>
              <p className="pt-4 text-base font-light tracking-wide leading-7 text-neutral-500 text-balance dark:text-neutral-50">
                Great! Your best bet is to create an{" "}
                <a
                  href="https://github.com/ndom91/sveltekasten/issues"
                  target="_blank"
                >
                  issue
                </a>{" "}
                in the GitHub repository. If you don&apos;t have a Github
                account, you can also email me at{" "}
                <code>
                  info &quot;at&quot; briefkastenhq &quot;dot&quot; com
                </code>
                .
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
