<template>
  <section class="story section">
    <div class="container">
      <div class="story__grid">
        <div class="story__image reveal">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" alt="Working on design" />
        </div>
        <div class="story__text reveal" style="transition-delay: 0.15s">
          <p class="story__eyebrow">My story</p>
          <h1 class="story__title">Designer who codes.<br>Developer who designs.</h1>
          <p>I started out studying graphic design, but quickly found myself frustrated by the gap between a beautiful mockup and what actually ended up in the browser. So I learned to code — and I haven't looked back.</p>
          <p>Today I work across the full product design cycle: user research, wireframing, visual design, and implementation. I believe the best work happens when you understand both sides of the conversation.</p>
          <p>I'm originally from Eastern Europe, currently based in Berlin, and frequently somewhere else entirely with a carry-on bag and too many camera lenses.</p>
          <div class="story__actions">
            <BaseButton href="mailto:hello@example.com">Get in touch</BaseButton>
            <BaseButton variant="outline" href="/cv.pdf" target="_blank">Download CV</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
useScrollAnimation()
</script>

<style scoped lang="scss">
.story {
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-12;
    align-items: center;

    @include respond-to(lg) { grid-template-columns: 5fr 7fr; }
  }

  &__image {
    border-radius: $radius-xl;
    overflow: hidden;
    box-shadow: $shadow-xl;
    aspect-ratio: 4/5;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: $space-6;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-4;
    margin-top: $space-8;
  }
}
</style>
