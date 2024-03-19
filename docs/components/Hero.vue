<template>
  <div class="flex flex-col justify-start items-center px-6 w-full">
    <div
      class="container flex relative flex-col items-center pt-12 pb-24 mx-auto mt-12 rounded-lg sm:py-24 bg-slate-800 dark:bg-zinc-600">
      <div class="hidden absolute -top-12 -right-12 w-72 h-72 lg:block" style="
          background-color: transparent;
          opacity: 1;
          background-image: radial-gradient(#737486 1.25px, transparent 0.75px);
          background-size: 15px 15px;
        " />
      <div class="hidden absolute -bottom-12 -left-12 z-0 w-72 h-72 lg:block" style="
          background-color: transparent;
          opacity: 1;
          background-image: radial-gradient(#737486 1.25px, transparent 0.75px);
          background-size: 15px 15px;
        " />
      <a href="https://docs.briefkastenhq.com/?utm_source=docs-v1&utm_medium=hero"
        class="inline-flex justify-between items-center py-1 px-1 mx-4 mb-7 text-sm text-gray-700 rounded-full transition md:mx-0 dark:text-white dark:bg-gray-800 hover:bg-gray-200 group bg-zinc-100 dark:hover:bg-gray-700"
        target="_blank" role="alert">
        <span
          class="py-1.5 px-4 mr-3 text-xs text-white bg-emerald-300 rounded-full transition group-hover:bg-emerald-400 dark:bg-emerald-300/50 dark:group-hover:bg-emerald-300/80">New</span>
        <span class="text-xs font-medium md:text-sm">Briefkasten v2 is out! </span><span
          class="hidden ml-1 text-xs font-medium sm:inline-block md:text-sm">
          Give it a shot</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </a>
      <h1
        class="mx-8 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-200 md:mx-0 md:text-5xl lg:text-6xl dark:text-white">
        Briefkasten Bookmarks
      </h1>
      <p class="mx-8 mb-8 text-lg font-normal text-gray-500 sm:px-16 md:mx-0 lg:text-xl xl:px-48 dark:text-gray-400">
        Never miss a thing. Keep all your bookmarks in one place.
      </p>
      <div class="flex gap-4 justify-center mb-12 md:mb-16">
        <a href="/docs/"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg transition focus:ring-4 bg-slate-400 dark:bg-emerald-300/30 dark:hover:bg-emerald-300/80 dark:focus:ring-slate-900 hover:bg-slate-600 focus:ring-slate-300">
          Learn more
          <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
        <a href="https://briefkastenhq.com/?utm_source=docs&utm_medium=hero" target="_blank"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-200 rounded-lg transition dark:text-white focus:ring-4 focus:ring-gray-100 bg-slate-700 dark:hover:bg-slate-800 dark:focus:ring-gray-800 hover:bg-slate-900">
          Start
          <svg class="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </a>
      </div>
    </div>
    <HeroImage />
  </div>
</template>

<script setup>
import HeroImage from './HeroImage.vue'


</script>
