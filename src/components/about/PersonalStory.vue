<template>
  <section class="story section">
    <div class="container">

      <div class="story__header reveal">
        <p class="story__eyebrow">My story</p>
        <h1 class="story__title">Designer who codes.<br>Developer who designs.</h1>
      </div>

      <div class="story__row reveal">
        <div class="story__image">
          <img src="@/assets/me/me1.JPG" alt="Mariia" />
        </div>
        <div class="story__text">
          <p class="story__para">My journey started with UX/UI design, but over time I found myself wanting to understand what happens after the design is handed over. That curiosity led me to work more closely with developers and learn the basics of front-end technologies.</p>
        </div>
      </div>

      <div class="story__row story__row--reverse reveal">
        <div class="story__image">
          <img src="@/assets/me/me2.JPG" alt="Mariia" />
        </div>
        <div class="story__text">
          <p class="story__para">What excites me most is creating digital experiences that feel intuitive, useful, and enjoyable for real people. Whether I’m conducting research, analysing competitors, building wireframes, designing interfaces in Figma, or collaborating with engineers, I enjoy being involved throughout the process and seeing ideas turn into products.</p>
        </div>
      </div>

      <div class="story__row reveal">
        <div class="story__image">
          <img src="@/assets/me/me3.JPG" alt="Mariia" />
        </div>
        <div class="story__text">
          <p class="story__para">I am also passionate about continuous learning. As AI becomes an increasingly important part of our industry, I actively explore new tools and workflows to improve productivity and discover better ways of working. I enjoy experimenting, learning, and staying curious about new technologies.</p>
          <div class="story__actions">
            <BaseButton href="https://www.linkedin.com/in/mariiahoienko1999/">Get in touch</BaseButton>
            <BaseButton variant="ghost" to="/">Go back</BaseButton>
          </div>
        </div>
      </div>

      <p class="story__quote reveal">"For me, great design is not only about solving problems — it is about understanding people, asking the right questions, and creating experiences that make a meaningful difference."</p>

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
  padding-bottom: 0;

  &__header {
    text-align: center;
    margin-bottom: $space-8;

    @include respond-to(lg) { margin-bottom: $space-12; }
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    align-items: stretch;
    margin-bottom: 0;
    border-top: 2.5px solid $color-primary;
    border-bottom: 2.5px solid $color-primary;
    border-radius: 0;
    overflow: hidden;

    & + & { border-top: none; }

    @include respond-to(lg) {
      grid-template-columns: 1fr 1fr;
    }

    > * {
      min-width: 0;
    }

    &--reverse {
      @include respond-to(lg) {
        direction: rtl;

        > * { direction: ltr; }

      }
    }
  }

  &__image {
    overflow: hidden;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: $space-6;

    @include respond-to(lg) { padding: $space-10; }

    @media (max-width: #{$bp-lg - 1px}) {
      text-align: center;
      align-items: center;
    }
  }

  &__eyebrow {
    font-size: $font-size-sm;
    font-weight: 600;
    color: $eyebrow-violet;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: $space-4;
  }

  &__title {
    font-size: 1.75rem;
    line-height: 1.2;
    margin-bottom: 0;

    @include respond-to(sm) { font-size: 2.25rem; }
    @include respond-to(lg) { font-size: clamp(2rem, 4vw, 3rem); }
  }

  &__quote {
    text-align: center;
    max-width: 760px;
    margin: $space-8 auto;
    font-size: $font-size-lg;
    font-style: italic;
    color: $color-primary;
    font-weight: 500;
    line-height: 1.6;

    @include respond-to(sm) { font-size: $font-size-xl; }
    @include respond-to(lg) { margin-block: $space-12; }
  }

  &__para {
    margin-bottom: $space-5;
    line-height: 1.7;

    @include respond-to(md) { font-size: $font-size-lg; }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-4;
    margin-top: $space-5;

    @media (max-width: #{$bp-lg - 1px}) { justify-content: center; }
  }
}
</style>
