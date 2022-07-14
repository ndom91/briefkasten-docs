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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-8 w-8 dark:text-slate-400"
        >
          <path
            fill-rule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clip-rule="evenodd"
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-8 w-8 dark:text-slate-400"
        >
          <path
            fill-rule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clip-rule="evenodd"
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-8 w-8 dark:text-slate-400"
        >
          <path
            fill-rule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clip-rule="evenodd"
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-8 w-8 dark:text-slate-400"
        >
          <path
            fill-rule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clip-rule="evenodd"
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-8 w-8 dark:text-slate-400"
        >
          <path
            fill-rule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clip-rule="evenodd"
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-8 w-8 dark:text-slate-400"
        >
          <path
            fill-rule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clip-rule="evenodd"
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
