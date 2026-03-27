<template>
  <section class="contact section">
    <div class="container">
      <div class="contact__inner reveal">
        <p class="contact__eyebrow">Get in touch</p>
        <h2 class="contact__heading">Stay in touch</h2>
        <p class="contact__sub">Whether you have a project in mind, a question, or just want to say hi — I'd love to hear from you.</p>

        <div class="contact__links">
          <a href="mailto:mariiahoienko1999@gmail.com" class="contact__item">
            <span class="contact__icon">✉️</span>
            <span class="contact__label">Email ↗</span>
          </a>

          <a href="https://github.com/MariykaUA" target="_blank" rel="noopener" class="contact__item">
            <span class="contact__icon">🐙</span>
            <span class="contact__label">GitHub ↗</span>
          </a>

          <a href="https://www.linkedin.com/in/mariiahoienko1999/" target="_blank" rel="noopener" class="contact__item">
            <span class="contact__icon">💼</span>
            <span class="contact__label">LinkedIn ↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()
</script>

<style scoped lang="scss">
.contact {
  background: $color-bg-alt;

  &__inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  &__eyebrow {
    font-size: $font-size-sm;
    font-weight: 600;
    color: $color-primary;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: $space-2;
  }

  &__heading {
    font-size: $font-size-4xl;
    margin-bottom: $space-4;
  }

  &__sub {
    font-size: $font-size-lg;
    color: $color-text-muted;
    margin-bottom: $space-12;
    line-height: 1.6;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: $space-4;
    text-align: left;

    @include respond-to(md) {
      flex-direction: row;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $space-3;
    flex: 1;
    padding: $space-5 $space-6;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-xl;
    text-decoration: none;
    transition: border-color $transition-fast, box-shadow $transition-fast, transform $transition-fast;

    &:hover {
      border-color: $color-primary-light;
      box-shadow: $shadow-md;
      transform: translateY(-2px);
    }
  }

  &__icon { font-size: 1.5rem; }

  &__label {
    font-size: $font-size-base;
    font-weight: 600;
    color: $color-primary;
  }
}
</style>
