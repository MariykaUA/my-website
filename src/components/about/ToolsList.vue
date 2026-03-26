<template>
  <section class="tools section">
    <div class="container">
      <div class="section-header reveal">
        <h2 class="section-title">Tools I use</h2>
        <p class="section-subtitle">My everyday toolkit for design and development</p>
      </div>
      <div class="tools__grid">
        <div v-for="(tool, i) in tools" :key="tool.name" class="tools__item reveal" :style="`transition-delay: ${i * 0.05}s`">
          <span class="tools__emoji">{{ tool.emoji }}</span>
          <span class="tools__name">{{ tool.name }}</span>
          <span class="tools__category">{{ tool.category }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
useScrollAnimation()

const tools = [
  { emoji: '🎨', name: 'Figma', category: 'Design' },
  { emoji: '💻', name: 'VS Code', category: 'Dev' },
  { emoji: '🟢', name: 'Vue 3', category: 'Dev' },
  { emoji: '📘', name: 'TypeScript', category: 'Dev' },
  { emoji: '⚡', name: 'Vite', category: 'Dev' },
  { emoji: '🐙', name: 'GitHub', category: 'Dev' },
  { emoji: '🎭', name: 'Framer', category: 'Design' },
  { emoji: '📋', name: 'Notion', category: 'Productivity' },
  { emoji: '📸', name: 'Lightroom', category: 'Photo' },
  { emoji: '🌍', name: 'Google Maps', category: 'Travel' },
  { emoji: '☁️', name: 'Netlify', category: 'Deploy' },
  { emoji: '🔍', name: 'Hotjar', category: 'Research' }
]
</script>

<style scoped lang="scss">
.tools {
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $space-4;

    @include respond-to(sm)  { grid-template-columns: repeat(4, 1fr); }
    @include respond-to(md)  { grid-template-columns: repeat(6, 1fr); }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-2;
    padding: $space-6;
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-xl;
    text-align: center;
    transition: border-color $transition-fast, box-shadow $transition-fast, transform $transition-fast;

    &:hover {
      border-color: $color-primary-light;
      box-shadow: $shadow-md;
      transform: translateY(-3px);
    }
  }

  &__emoji { font-size: 1.75rem; }
  &__name  { font-size: $font-size-sm; font-weight: 600; }
  &__category { font-size: $font-size-xs; color: $color-text-muted; }
}
</style>
