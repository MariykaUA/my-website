<template>
  <section class="st section">
    <div class="container">
      <div class="st__layout">

        <!-- Skills column -->
        <div class="st__col reveal">
          <p class="st__eyebrow">Expertise</p>
          <h2 class="st__heading">Skills</h2>
          <div class="st__skill-groups">
            <div v-for="group in skillGroups" :key="group.category" class="st__group">
              <h3 class="st__category">{{ group.category }}</h3>
              <ul class="st__items">
                <li v-for="skill in group.skills" :key="skill.name" class="st__item">
                  <span class="st__bullet" />
                  <span class="st__skill-name">{{ skill.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Tools column -->
        <div class="st__col reveal" style="transition-delay: 0.15s">
          <p class="st__eyebrow">Toolkit</p>
          <h2 class="st__heading">Tools</h2>
          <div class="st__tools-grid">
            <div v-for="(tool, i) in tools" :key="tool.name" class="st__tool reveal" :style="`transition-delay: ${i * 0.04}s`">
              <span class="st__tool-emoji">{{ tool.emoji }}</span>
              <span class="st__tool-name">{{ tool.name }}</span>
              <span class="st__tool-cat">{{ tool.category }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()

const skillGroups = [
  {
    category: 'Design',
    skills: [
      { name: 'Prototyping' },
      { name: 'UI Design' },
      { name: 'UX Research' },
      { name: 'User Flows' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML / SCSS' },
      { name: 'Vue 3 / TypeScript' },
      { name: 'React' },
      { name: 'Vite / Webpack' },
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Content creation' },
      { name: 'Copywriting' },
      { name: 'Organisation and planning' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Communication' },
      { name: 'Problem solving' },
      { name: 'Attention to detail' },
      { name: 'Time management' },
    ],
  },
]

const tools = [
  { emoji: '🎨', name: 'Figma',       category: 'Design' },
  { emoji: '💻', name: 'VS Code',     category: 'Dev' },
  { emoji: '🟢', name: 'Vue 3',       category: 'Dev' },
  { emoji: '📘', name: 'TypeScript',  category: 'Dev' },
  { emoji: '⚡', name: 'Vite',        category: 'Dev' },
  { emoji: '🐙', name: 'GitHub',      category: 'Dev' },
  { emoji: '📋', name: 'Notion',      category: 'Productivity' },
  { emoji: '📸', name: 'Lightroom',   category: 'Photo' },
  { emoji: '☁️', name: 'Netlify',     category: 'Deploy' },
  { emoji: '🔍', name: 'Lyssna',      category: 'Research' },
]
</script>

<style scoped lang="scss">
.st {
  background: $color-bg-alt;

  &__layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-16;

    @include respond-to(lg) {
      grid-template-columns: 1fr 1fr;
      gap: $space-20;
    }
  }

  &__col {
    display: flex;
    flex-direction: column;
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
    font-size: $font-size-3xl;
    margin-bottom: $space-10;
  }

  // ── Skills ──────────────────────────────────────────
  &__skill-groups {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-5;
  }

  &__group {
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-xl;
    padding: $space-6;
  }

  &__category {
    font-size: $font-size-xs;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: $color-primary;
    margin-bottom: $space-5;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: $space-4;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: $space-3;
  }

  &__bullet {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: $color-primary;
    flex-shrink: 0;
  }

  &__skill-name { font-size: $font-size-sm; font-weight: 500; }

  // ── Tools ───────────────────────────────────────────
  &__tools-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $space-3;

    @include respond-to(sm) { grid-template-columns: repeat(4, 1fr); }
    @include respond-to(lg) { grid-template-columns: repeat(3, 1fr); }
    @include respond-to(xl) { grid-template-columns: repeat(4, 1fr); }
  }

  &__tool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-2;
    padding: $space-5 $space-3;
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

  &__tool-emoji { font-size: 1.6rem; }
  &__tool-name  { font-size: $font-size-sm; font-weight: 600; }
  &__tool-cat   { font-size: $font-size-xs; color: $color-text-muted; }
}
</style>
