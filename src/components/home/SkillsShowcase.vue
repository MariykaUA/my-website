<template>
  <section class="beyond section">
    <div class="container">
      <div class="section-header reveal">
        <h2 class="section-title">Beyond the screen <img :src="catGif" class="section-cat" alt="" /></h2>
        <p class="section-subtitle">Being inspired outside of work</p>
      </div>

      <div class="beyond__grid">
        <div v-for="(item, i) in items" :key="item.title" class="beyond__card reveal" :style="`transition-delay: ${i * 0.1}s`">
          <span class="beyond__icon">{{ item.emoji }}</span>
          <h3 class="beyond__title">{{ item.title }}</h3>
          <p class="beyond__desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import catGif from '@/assets/images/Cat animation.gif'

useScrollAnimation()

const items = [
  
{
    emoji: '📸',
    title: 'Orieneering & Running',
    description: 'Running is my go-to for clearing my head, and orienteering adds a fun twist with maps and checkpoints.',
  },{
    emoji: '✈️',
    title: 'Travelling',
    description: 'Exploring new countries, getting lost in new cities, and collecting passport stamps.',
  },
  {
    emoji: '🇩🇪',
    title: 'Learning Languages',
    description: 'A way to connect with people and cultures around the world.',
  },
  {
    emoji: '📚',
    title: 'Reading & Painting',
    description: 'Relaxing with a good book or getting creative with some paint and canvas.',
  },
]
</script>

<style scoped lang="scss">
.beyond {
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-6;

    @include respond-to(sm) { grid-template-columns: repeat(2, 1fr); }
    @include respond-to(lg) { grid-template-columns: repeat(4, 1fr); }
  }

  &__card {
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-xl;
    padding: $space-8;
    transition: box-shadow $transition-base, transform $transition-base, border-color $transition-base;

    &:hover {
      box-shadow: $shadow-lg;
      transform: translateY(-4px);
      border-color: $color-primary-light;
    }
  }

  &__icon {
    display: block;
    font-size: 2.5rem;
    margin-bottom: $space-4;
  }

  &__title {
    font-size: $font-size-xl;
    margin-bottom: $space-3;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.6;
  }
}
</style>
