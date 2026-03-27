<template>
  <section class="hero">
    <div class="hero__inner container">
      <div class="hero__content">
        <p class="hero__eyebrow animate-fade-in-up">UX/UI Designer & Frontend Developer</p>
        <h1 class="hero__title animate-fade-in-up" style="animation-delay: 0.1s">
          Crafting digital<br>
          <span class="text-gradient">experiences</span><br>
          that matter
        </h1>
        <p class="hero__subtitle animate-fade-in-up" style="animation-delay: 0.2s">Dreamer, creator, and curious human passionate about building user-friendly websites.
        </p>
        <div class="hero__actions animate-fade-in-up" style="animation-delay: 0.3s">
          <BaseButton href="https://www.linkedin.com/in/mariiahoienko1999/" target="_blank" rel="noopener" class="contact__item">Contact me</BaseButton>
          <img class="hero__cat" :src="catGif" alt="" />
        </div>
      </div>

      <div class="hero__visual animate-fade-in" style="animation-delay: 0.4s">
        <div class="hero__blob" />
        <div class="hero__avatar">
          <img :src="myPhoto" alt="Maria — photo" />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import myPhoto from '@/assets/images/my-photo.jpg'
import catGif from '@/assets/images/Cat animation.gif'

</script>

<style scoped lang="scss">
.hero {
  min-height: calc(100vh - $header-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-12;
    padding-block: $space-20;
    align-items: center;
    position: relative;
    z-index: 1;

    @include respond-to(lg) {
      grid-template-columns: 1fr 1fr;
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
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 1.1;
    margin-bottom: $space-6;
  }

  &__subtitle {
    font-size: $font-size-lg;
    color: $color-text-muted;
    width: 450px;
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
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__blob {
    position: absolute;
    width: 420px;
    height: 420px;
    background: linear-gradient(135deg, $color-primary-subtle, #DDD6FE);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    animation: pulse 8s ease-in-out infinite;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  &__avatar {
    position: relative;
    z-index: 1;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid $color-white;
    box-shadow: $shadow-xl;

    @include respond-to(md) {
      width: 340px;
      height: 400px;
    }

    img {
      width: 100%;
      height: 100%;
      scale: 1;
      object-fit: cover;
    }
  }

}
</style>
