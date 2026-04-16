<template>
  <section class="hero">
    <div class="hero__inner container">
      <div class="hero__top">
        <p class="hero__eyebrow animate-fade-in-up">UX/UI Designer & Frontend Developer</p>
        <h1 class="hero__title animate-fade-in-up" style="animation-delay: 0.1s">
          Crafting digital<br>
          <span class="text-gradient">experiences</span><br>
          that matter
        </h1>
      </div>

      <div class="hero__visual animate-fade-in" style="animation-delay: 0.4s">
        <div class="hero__illustration">
          <img :src="meIllustration" alt="Maria illustration" />
        </div>
      </div>

      <div class="hero__bottom">
        <p class="hero__subtitle animate-fade-in-up" style="animation-delay: 0.2s">Dreamer, creator, and curious human passionate about building user-friendly websites.
        </p>
        <div class="hero__actions animate-fade-in-up" style="animation-delay: 0.3s">
          <BaseButton href="https://www.linkedin.com/in/mariiahoienko1999/" target="_blank" rel="noopener" class="contact__item">Contact me</BaseButton>
          <img class="hero__cat" :src="catGif" alt="" />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import meIllustration from '@/assets/images/illustrations/me.png'
import catGif from '@/assets/images/Cat animation.gif'

</script>

<style scoped lang="scss">
.hero {
  min-height: calc(100vh - $header-height);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'top'
      'visual'
      'bottom';
    gap: $space-6;
    padding-block: $space-16 $space-6;
    position: relative;
    z-index: 1;

    @include respond-to(lg) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'top    visual'
        'bottom visual';
      gap: $space-8 $space-12;
      align-items: start;
    }
  }

  &__top    { grid-area: top; }
  &__bottom {
    grid-area: bottom;

    @include respond-to(lg) {
      padding-top: $space-12;
    }
  }
  &__visual { grid-area: visual; }

  &__eyebrow {
    font-size: $font-size-sm;
    font-weight: 600;
    color: $color-primary;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: $space-4;
  }

  &__title {
    font-size: clamp(2.5rem, 6vw, 4.25rem);
    line-height: 1.1;
    margin-bottom: $space-6;
  }

  &__subtitle {
    font-size: $font-size-lg;
    color: $color-text-muted;
    max-width: 450px;
    margin-bottom: 12px;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $space-4;
    margin-top: $space-6;
  }

  &__cat {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  &__visual {
    grid-area: visual;
    position: relative;
    display: flex;
    justify-content: center;

    @include respond-to(lg) {
      justify-content: flex-end;
    }
  }

  &__illustration {
    position: relative;
    z-index: 1;
    width: 160px;
    margin-left: 0;

    @include respond-to(md) {
      width: 300px;
    }

    @include respond-to(lg) {
      width: 400px;
      margin-left: $space-16;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      filter: drop-shadow(0 20px 40px rgba($color-primary, 0.2));
      mask-image: radial-gradient(ellipse 88% 85% at 50% 42%, black 55%, transparent 100%);
      -webkit-mask-image: radial-gradient(ellipse 88% 85% at 50% 42%, black 55%, transparent 100%);
    }
  }

}
</style>
