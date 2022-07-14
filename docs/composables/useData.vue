<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<template>
  <pre>{{ page }}</pre>
</template>
