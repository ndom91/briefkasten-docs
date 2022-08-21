<template>
  <div style="perspective: 600px" class="flex items-center justify-center">
  <div class="relative -mt-32 w-full sm:w-4/5 md:w-3/5 z-50" ref="el" :style="imageStyle" v-motion
    :initial="{ opacity: 0, scale: 0.5, y: 100 }" :enter="{
      opacity: 1, y: 0, scale: 1, transition: {
        delay: 1000, type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5,
      }
    }">
    <img src="/images/screenshot_hero.png" alt="" class="" />
  </div>
      </div>
</template>

<script>
import { ref, computed } from 'vue'
import { MotionDirective as motion } from '@vueuse/motion'
import { useWindowScroll } from '@vueuse/core'

export default {
  setup() {
    const el = ref(null)
    const { y } = useWindowScroll()

    const imageStyle = computed(() => ({
      transform: `translate3d(0, ${y.value * 0.1}px, -${y.value * 0.3}px) rotateX(${y.value * 0.07}deg)`,
    }))

    return {
      el,
      imageStyle,
    }
  },
  directives: {
    motion: motion(),
    /* scroll: vScroll */
  },
}

</script>
