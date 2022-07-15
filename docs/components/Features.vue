<template>
  <section class="m-4 dark:text-gray-100 md:m-8">
    <div class="container mx-auto my-6 space-y-2 p-4 text-center">
      <h2 class="text-5xl font-bold">Built to empower every user</h2>
      <p class="dark:text-gray-400">Always find what you're looking for!</p>
    </div>
    <div
      class="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div class="flex flex-col items-center p-4">
        <svg
          class="h-8 w-8 dark:text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          ></path>
        </svg>
        <h3 class="my-3 text-3xl font-semibold">Self-Hostable</h3>
        <div class="space-y-1 leading-tight">
          <p>With a platform to run a Next.js App,</p>
          <p>a Prisma compatible database,</p>
          <p>and optionally an S3-compatible</p>
          <p>blob storage you can host Briefkasten</p>
          <p>yourself!</p>
        </div>
      </div>
      <div class="flex flex-col items-center p-4">
        <svg
          class="h-8 w-8 dark:text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
          ></path>
        </svg>
        <h3 class="my-3 text-3xl font-semibold">Browser Extension</h3>
        <div class="space-y-1 leading-tight">
          <p>
            Available on the
            <a
              href="https://chrome.google.com/webstore/detail/briefkasten-bookmarks/aighkhofochfjejmhjfkgjfpkpgmjlnd"
              target="_blank"
              >Chrome Webstore</a
            >
          </p>
          <p>as well as via the source</p>
          <p>you can add and search extensions</p>
          <p>without leaving your browser!</p>
        </div>
      </div>
      <div class="flex flex-col items-center p-4">
        <svg
          class="h-8 w-8 dark:text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          ></path>
        </svg>
        <h3 class="my-3 text-3xl font-semibold">Import/Export</h3>
        <div class="space-y-1 leading-tight">
          <p>We support the standard HTML bookmarks</p>
          <p>format, so importing from your browser</p>
          <p>or another bookmarking tool</p>
          <p>should be as easy as 1 click!</p>
        </div>
      </div>
      <div class="flex flex-col items-center p-4">
        <svg
          class="h-8 w-8 dark:text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
        <h3 class="my-3 text-3xl font-semibold">Screenshot Fetching</h3>
        <div class="space-y-1 leading-tight">
          <p>A background job runs every</p>
          <p>6 hours to fetch missing screenshots</p>
          <p>for every users bookmarks.</p>
        </div>
      </div>
      <div class="flex flex-col items-center p-4">
        <svg
          class="h-8 w-8 dark:text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
          ></path>
        </svg>
        <h3 class="my-3 text-3xl font-semibold">Full-text Search</h3>
        <div class="space-y-1 leading-tight">
          <p>Search both in your browser, via</p>
          <p>the extension, as well as in the</p>
          <p>application itself is full-text</p>
          <p>so you'll always find what you're</p>
          <p>looking for.</p>
        </div>
      </div>
      <div class="flex flex-col items-center p-4">
        <svg
          class="h-8 w-8 dark:text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          ></path>
        </svg>
        <h3 class="my-3 text-3xl font-semibold">REST API</h3>
        <div class="space-y-1 leading-tight">
          <p>We offer a standard REST API</p>
          <p>with methods to interact with all</p>
          <p>of the assets in the application</p>
          <p>like Bookmarks, Tags and Categories.</p>
        </div>
      </div>
    </div>
  </section>
</template>
