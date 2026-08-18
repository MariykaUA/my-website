<template>
  <section class="beyond section" ref="sectionRef" :style="{ height: `${items.length * 100}vh` }">
    <div class="beyond__sticky">
      <div class="container">
        <div class="section-header reveal">
          <p class="beyond__eyebrow">Beyond the screen</p>
          <h2 class="section-title">Being inspired outside of work</h2>
        </div>

        <!-- Desktop: scroll-jacked horizontal card track -->
        <div v-if="isDesktop" class="beyond__card-wrapper" ref="wrapperRef">
          <div
            ref="trackRef"
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

        <!-- Mobile / tablet: everything stacked, plain scroll -->
        <div v-else class="beyond__mobile-list">
          <div v-for="(item, i) in items" :key="i" class="beyond__card">
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
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import runImg from '@/assets/images/illustrations/run.png'
import travelImg from '@/assets/images/illustrations/travel.png'
import readImg from '@/assets/images/illustrations/read.png'
import learnImg from '@/assets/images/illustrations/learn.png'

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
    image: learnImg,
    title: 'Learning Languages',
    description: 'A way to connect with people and cultures around the world.',
  },
  {
    image: readImg,
    title: 'Reading & Painting',
    description: 'Relaxing with a good book or getting creative with some paint and canvas.',
  },
]

const sectionRef = ref(null)
const wrapperRef = ref(null)
const trackRef = ref(null)
const trackOffset = ref(0)
const cardWidth = ref(0)
const gap = ref(32) // fallback, synced with CSS gap in updateCardWidth

// Below lg, the scroll-jacking horizontal track is replaced by a plain stacked list
const isDesktop = ref(window.matchMedia('(min-width: 1024px)').matches)

function checkViewport() {
  isDesktop.value = window.matchMedia('(min-width: 1024px)').matches
}

function updateCardWidth() {
  if (!isDesktop.value || !wrapperRef.value) return

  const width = wrapperRef.value.offsetWidth
  const ratio = width < 640 ? 0.85 : width < 1024 ? 0.8 : 0.75
  cardWidth.value = width * ratio

  if (trackRef.value) {
    gap.value = parseFloat(getComputedStyle(trackRef.value).columnGap) || gap.value
  }
}

function onScroll() {
  if (!isDesktop.value || !sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  const scrolled = -rect.top
  const clamped = Math.max(0, Math.min((items.length - 1) * window.innerHeight, scrolled))
  trackOffset.value = -(clamped / window.innerHeight) * (cardWidth.value + gap.value)
}

function handleResize() {
  checkViewport()
  updateCardWidth()
}

onMounted(() => {
  updateCardWidth()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', handleResize)
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
    padding: $space-8 0 $space-16;
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
    gap: $space-4;
    padding-left: $space-4;
    will-change: transform;

    @include respond-to(sm) { gap: $space-6; padding-left: $space-6; }
    @include respond-to(md) { gap: $space-8; padding-left: $space-8; }
    @include respond-to(lg) { padding-left: 12rem; }
  }

  &__card {
    flex-shrink: 0;
    background: #C7AFFD;
    border-radius: $radius-xl;
    padding: 0;
    min-height: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    @include respond-to(lg) {
      flex-direction: row;
      align-items: stretch;
      gap: $space-8;
      min-height: 40vh;
    }
  }

  &__card-content {
    flex: 1;
    text-align: center;
    padding: $space-6 $space-5;

    @include respond-to(sm) { padding: $space-8; }

    @include respond-to(lg) {
      padding: $space-16;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__image {
    order: -1;
    flex-shrink: 0;
    width: 100%;
    height: 200px;
    border-radius: $radius-lg;
    overflow: hidden;

    @include respond-to(sm) { height: 260px; }
    @include respond-to(lg) { order: 0; width: 45%; height: auto; }

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
    font-size: $font-size-2xl;
    margin-bottom: $space-3;

    @include respond-to(sm) { font-size: $font-size-3xl; margin-bottom: $space-4; }
    @include respond-to(lg) { font-size: $font-size-4xl; margin-bottom: $space-5; }
  }

  &__eyebrow {
    font-size: $font-size-sm;
    font-weight: 600;
    color: $eyebrow-violet;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: $space-4;
  }

  &__desc {
    font-size: $font-size-base;
    color: #111827;
    line-height: 1.6;
    width: 100%;
  }

  // ── Mobile / tablet: everything stacked, no scroll-jacking ──
  @media (max-width: #{$bp-lg - 1px}) {
    height: auto !important;

    &__sticky {
      position: static;
      height: auto;
      padding: 0;
    }

    &__mobile-list {
      display: flex;
      flex-direction: column;
      gap: $space-6;
    }
  }
}
</style>
