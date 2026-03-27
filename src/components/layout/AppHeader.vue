<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__inner container">
      <RouterLink to="/" class="header__logo">
        <span class="header__logo-mark">M</span>
        <span class="header__logo-text">ariia</span>
      </RouterLink>

      <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="header__link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <button class="header__burger" :aria-expanded="menuOpen" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
        <span /><span /><span />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import type { NavLink } from '@/types/navigation'

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 20)
const menuOpen = ref(false)

const navLinks: NavLink[] = [
  { label: 'Home',       to: '/',           exact: true },
  //{ label: 'About',      to: '/about' },
  //{ label: 'Blog',       to: '/blog' },
  //{ label: 'Flashcards', to: '/flashcards' }
]
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: $header-height;
  background: rgba($color-bg, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color $transition-base, box-shadow $transition-base;

  &--scrolled {
    border-bottom-color: $color-border;
    box-shadow: $shadow-sm;
  }

  &__inner {
    @include flex-between;
    height: 100%;
    padding: 18px;
  }

  &__logo {
    font-family: $font-display;
    font-size: $font-size-2xl;
    font-weight: 700;
    line-height: 1;
  }

  &__logo-mark {
    color: $color-primary;
    font-size: $font-size-3xl;
  }

  &__logo-text {
    color: $color-text;
  }

  &__nav {
    display: none;
    gap: $space-8;

    @include respond-to(md) {
      display: flex;
      align-items: center;
    }
  }

  &__link {
    font-size: $font-size-sm;
    font-weight: 500;
    color: $color-text-muted;
    transition: color $transition-fast;
    position: relative;
    padding-bottom: 2px;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 100%;
      height: 2px;
      background: $color-primary;
      transition: right $transition-base;
    }

    &:hover,
    &.router-link-active {
      color: $color-primary;

      &::after { right: 0; }
    }
  }

  &__burger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: $space-2;

    @include respond-to(md) { display: none; }

    span {
      display: block;
      width: 24px;
      height: 2px;
      background: $color-text;
      border-radius: $radius-full;
      transition: transform $transition-fast, opacity $transition-fast;
    }
  }

  &__nav--open {
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: $header-height 0 0;
    background: $color-bg;
    padding: $space-8;
    gap: $space-6;
    align-items: center;
    justify-content: flex-start;
    z-index: 99;

    .header__link {
      font-size: $font-size-xl;
    }
  }
}
</style>
