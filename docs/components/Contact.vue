<template>
  <section class="body-font relative text-gray-600">
    <div class="container mx-auto px-5 py-24">
      <div class="mb-12 flex w-full flex-col text-center">
        <h1
          class="title-font mb-4 text-2xl font-medium text-gray-900 dark:text-zinc-100 sm:text-3xl"
        >
          Contact Us
        </h1>
        <p
          class="mx-auto text-base leading-relaxed dark:text-zinc-400 lg:w-2/3"
        >
          Please do not hesitate to contact us with any further questions or
          comments!
        </p>
      </div>
      <div class="mx-auto md:w-2/3 lg:w-1/2">
        <div class="-m-2 flex flex-wrap">
          <div class="w-1/2 p-2">
            <div class="relative">
              <label
                for="name"
                class="text-sm leading-7 text-gray-600 dark:text-zinc-200"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                class="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200 dark:bg-zinc-100"
              />
            </div>
          </div>
          <div class="w-1/2 p-2">
            <div class="relative">
              <label
                for="email"
                class="text-sm leading-7 text-gray-600 dark:text-zinc-200"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200 dark:bg-zinc-100"
              />
            </div>
          </div>
          <div class="w-full p-2">
            <div class="relative">
              <label
                for="message"
                class="text-sm leading-7 text-gray-600 dark:text-zinc-200"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                class="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200 dark:bg-zinc-100"
              ></textarea>
            </div>
          </div>
          <div class="w-full p-2">
            <button
              disabled
              title="Disabled for now - WIP"
              class="mx-auto flex rounded border-0 bg-slate-500 py-2 px-8 text-lg text-white focus:outline-none active:hover:bg-slate-600 disabled:hover:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
