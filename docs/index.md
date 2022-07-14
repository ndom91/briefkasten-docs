---
layout: 'home'
footer: false
head:
  - - link
    - href: "/favicon/favicon.ico"
      rel: "shortcut icon"
  - - script
    - src: "/p.js"
      defer: true
      data-domain: "briefkasten-docs.vercel.app"
      data-api: "/a/e"
---

<script setup>
import useData from './composables/useData.vue'
import Hero from './components/Hero.vue'
</script>

<Hero />
