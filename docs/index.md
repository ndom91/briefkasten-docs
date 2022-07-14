---
layout: 'home'
head:
  - - link
    - href: "/favicon/favicon.ico"
      rel: "shortcut icon"
  - - script
    - src: "/p.js"
      defer: true
      data-domain: "briefkasten-docs.vercel.app"
      data-api: "/a/e"
hero:
  name: Briefkasten
  text: Clean and modern bookmarking app
  tagline: Never forget that one article you definitelyyy meant to read!
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
features:
  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: Lorem ipsum...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
---

<script setup>
import useData from './composables/useData.vue'
import Hero from './components/Hero.vue'
</script>
