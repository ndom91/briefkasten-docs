<template>
  <div class="flex w-full flex-col items-center justify-start px-6">
    <div
      class="container relative mx-auto mt-12 flex flex-col items-center rounded-lg bg-slate-800 pt-12 pb-24 dark:bg-zinc-600 sm:py-24"
    >
      <div
        class="absolute -right-12 -top-12 hidden h-72 w-72 lg:block"
        style="
          background-color: transparent;
          opacity: 1;
          background-image: radial-gradient(#737486 1.25px, transparent 0.75px);
          background-size: 15px 15px;
        "
      />
      <div
        class="absolute -bottom-12 -left-12 hidden h-72 w-72 lg:block"
        style="
          background-color: transparent;
          opacity: 1;
          background-image: radial-gradient(#737486 1.25px, transparent 0.75px);
          background-size: 15px 15px;
        "
      />
      <a
        href="https://briefkasten.vercel.app/?utm_source=docs&utm_medium=hero"
        class="group mx-4 mb-7 inline-flex items-center justify-between rounded-full bg-zinc-100 py-1 px-1 text-sm text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 md:mx-0"
        target="_blank"
        role="alert"
      >
        <span
          class="mr-3 rounded-full bg-emerald-300 px-4 py-1.5 text-xs text-white transition group-hover:bg-emerald-400 dark:bg-emerald-300/50 dark:group-hover:bg-emerald-300/80"
          >New</span
        >
        <span class="text-xs font-medium md:text-sm"
          >Briefkasten Beta is out! </span
        ><span
          class="ml-1 hidden text-xs font-medium sm:inline-block md:text-sm"
        >
          Give it a shot</span
        >
        <svg
          class="ml-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <h1
        class="mx-8 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-200 dark:text-white md:mx-0 md:text-5xl lg:text-6xl"
      >
        Briefkasten Bookmarks
      </h1>
      <p
        class="mx-8 mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 md:mx-0 lg:text-xl xl:px-48"
      >
        Never miss a thing. Keep all your bookmarks in one place.
      </p>
      <div class="mb-12 flex justify-center gap-4 md:mb-16">
        <a
          href="/docs/"
          class="inline-flex items-center justify-center rounded-lg bg-slate-400 py-3 px-5 text-center text-base font-medium text-white transition hover:bg-slate-600 focus:ring-4 focus:ring-slate-300 dark:bg-emerald-300/30 dark:hover:bg-emerald-300/80 dark:focus:ring-slate-900"
        >
          Learn more
          <svg
            class="ml-2 -mr-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="https://briefkasten.vercel.app/?utm_source=docs&utm_medium=hero"
          target="_blank"
          class="inline-flex items-center justify-center rounded-lg bg-slate-700 py-3 px-5 text-center text-base font-medium text-gray-200 transition hover:bg-slate-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-emerald-300/60 dark:focus:ring-gray-800"
        >
          <svg
            class="mr-2 -ml-1 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            ></path>
          </svg>
          Start
        </a>
      </div>
    </div>
    <div class="relative -mt-32 w-full sm:w-4/5 md:w-3/5">
      <img src="/images/screenshot_hero.png" alt="" class="" />
    </div>
  </div>
</template>
