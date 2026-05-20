<template>
  <section class="beyond section" ref="sectionRef" :style="{ height: `${items.length * 100}vh` }">
    <div class="beyond__sticky">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">Beyond the screen</h2>
          <p class="section-subtitle">Being inspired outside of work</p>
        </div>

        <div class="beyond__card-wrapper" ref="wrapperRef">
          <div
            class="beyond__card-track"
            :style="{ transform: `translateX(${trackOffset}px)` }"
          >
            <div
              v-for="(item, i) in items"
              :key="i"
              class="beyond__card"
              :style="{ width: `${cardWidth}px` }"
            >
              <div class="beyond__card-content">
                <span v-if="item.emoji" class="beyond__icon">{{ item.emoji }}</span>
                <h3 class="beyond__title">{{ item.title }}</h3>
                <p class="beyond__desc">{{ item.description }}</p>
              </div>
              <div v-if="item.image" class="beyond__image">
                <img :src="item.image" :alt="item.title" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import runImg from '@/assets/images/illustrations/run.png'
import travelImg from '@/assets/images/illustrations/travel.png'
import readImg from '@/assets/images/illustrations/read.png'

useScrollAnimation()

const items = [
  {
    image: runImg,
    title: 'Orienteering & Running',
    description: 'Running is my go-to for clearing my head, and orienteering adds a fun twist with maps and checkpoints.',
  },
  {
    image: travelImg,
    title: 'Travelling',
    description: 'Exploring new countries, getting lost in new cities, and collecting passport stamps.',
  },
  {
    emoji: '🌍',
    title: 'Learning Languages',
    description: 'A way to connect with people and cultures around the world.',
  },
  {
    image: readImg,
    title: 'Reading & Painting',
    description: 'Relaxing with a good book or getting creative with some paint and canvas.',
  },
]

const GAP = 32 // 2rem in px

const sectionRef = ref(null)
const wrapperRef = ref(null)
const trackOffset = ref(0)
const cardWidth = ref(0)

function updateCardWidth() {
  if (wrapperRef.value) cardWidth.value = wrapperRef.value.offsetWidth * 0.75
}

function onScroll() {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  const scrolled = -rect.top
  const clamped = Math.max(0, Math.min((items.length - 1) * window.innerHeight, scrolled))
  trackOffset.value = -(clamped / window.innerHeight) * (cardWidth.value + GAP)
}

onMounted(() => {
  updateCardWidth()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateCardWidth)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateCardWidth)
})
</script>

<style scoped lang="scss">
.beyond {
  position: relative;

  &__sticky {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    padding: $space-16 0;
  }

  .container {
    width: 100%;
  }

  &__card-wrapper {
    overflow-x: hidden;
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }

  &__card-track {
    display: flex;
    gap: 2rem;
    padding-left: 2rem;
    will-change: transform;
  }

  &__card {
    flex-shrink: 0;
    background: $color-primary-light;
    border-radius: $radius-xl;
    padding: 0;
    min-height: 40vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: $space-8;
  }

  &__card-content {
    flex: 1;
    text-align: center;
    padding: $space-16;
  }

  &__image {
    flex-shrink: 0;
    width: 45%;
    height: 320px;
    border-radius: $radius-lg;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__icon {
    display: block;
    font-size: 2.5rem;
    margin-bottom: $space-4;
  }

  &__title {
    font-size: $font-size-4xl;
    margin-bottom: $space-5;
  }

  &__desc {
    font-size: $font-size-base;
    color: $color-bg-alt;
    line-height: 1.6;
    width: 100%;
  }
}
</style>
