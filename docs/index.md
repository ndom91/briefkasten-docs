---
layout: 'home'
footer: false
head:
  - - link
    - href: '/favicon/favicon.ico'
      rel: 'shortcut icon'
  - - script
    - src: '/p.js'
      defer: true
      data-domain: 'docs.briefkastenhq.com'
      data-api: '/a/e'
---

<script setup>
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Pricing from './components/Pricing.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<div class="flex flex-col items-center justify-start h-screen gap-8">
  <Hero />
  <Features />
  <Gallery />
  <Pricing />
  <Contact />
  <Footer />
</div>
