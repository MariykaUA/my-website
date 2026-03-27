<template>
  <section class="intro section">
    <div class="container">
      <div class="intro__grid">
        <div class="intro__text reveal">
          <p class="intro__eyebrow">A bit about me</p>
          <h2 class="intro__title">Turning ideas into interactive experiences.</h2>
<p>With the passion for UX/UI design, I really love bringing creative ideas to life with code. Alongside my design skills, I have hands-on experience as a Software Engineer Intern at On AG, especially in Vue.js, SCSS, and Typescript. I'm continuously learning and exploring new ways to enhance user experiences through thoughtful design and development.</p>
          <p>When I'm not designing or coding, you'll find me somewhere with a map, exploring new places, running, or just enjoying the nature.</p>
          <!-- <BaseButton to="/about" variant="secondary">My full story →</BaseButton> -->
        </div>
        <div class="intro__stats reveal" style="transition-delay: 0.15s">
          <div v-for="stat in stats" :key="stat.label" class="intro__stat">
            <span class="intro__stat-value">{{ stat.value }}</span>
            <span class="intro__stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
//import BaseButton from '@/components/ui/BaseButton.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()

const stats = [
  { value: '1', label: 'Year of experience' },
  { value: '5+', label: 'Projects completed' },
  { value: '5+', label: 'Countries visited' },
  { value: '5', label: 'Languages spoken' }
]
</script>

<style scoped lang="scss">
.intro {
  background: $color-bg-alt;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-12;
    align-items: start;

    @include respond-to(lg) { grid-template-columns: 1fr 1fr; }
  }

  &__visual {
    display: flex;
    justify-content: center;

    @include respond-to(lg) {
      grid-column: 1 / -1;
    }
  }

  &__eyebrow {
    font-size: $font-size-sm;
    font-weight: 600;
    color: $color-primary;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: $space-4;
  }

  &__title {
    font-size: $font-size-3xl;
    margin-bottom: $space-6;
  }

  &__stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-6;
  }

  &__stat {
    background: $color-white;
    border-radius: $radius-xl;
    padding: $space-8;
    border: 1px solid $color-border;
    text-align: center;
  }

  &__stat-value {
    display: block;
    font-family: $font-display;
    font-size: $font-size-4xl;
    color: $color-primary;
    font-weight: 700;
    line-height: 1;
    margin-bottom: $space-2;
  }

  &__stat-label {
    font-size: $font-size-sm;
    color: $color-text-muted;
  }
}
</style>
