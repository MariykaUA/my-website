<template>
  <section class="skills-grid section" style="background: var(--bg-alt, #F9FAFB)">
    <div class="container">
      <div class="section-header reveal">
        <h2 class="section-title">Skills & expertise</h2>
        <p class="section-subtitle">Disciplines I've developed over 5+ years of practice</p>
      </div>
      <div class="skills-grid__list">
        <div v-for="(group, i) in skillGroups" :key="group.category" class="skills-grid__group reveal" :style="`transition-delay: ${i * 0.1}s`">
          <h3 class="skills-grid__category">{{ group.category }}</h3>
          <ul class="skills-grid__items">
            <li v-for="skill in group.skills" :key="skill.name" class="skills-grid__item">
              <span class="skills-grid__name">{{ skill.name }}</span>
              <div class="skills-grid__bar">
                <div class="skills-grid__bar-fill" :style="`width: ${skill.level}%`" />
              </div>
            </li>
          </ul>
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
      { name: 'Figma', level: 95 },
      { name: 'UX Research', level: 85 },
      { name: 'UI Design', level: 90 },
      { name: 'Design Systems', level: 80 }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'Vue 3 / TypeScript', level: 90 },
      { name: 'HTML / SCSS', level: 95 },
      { name: 'React', level: 70 },
      { name: 'Vite / Webpack', level: 75 }
    ]
  },
  {
    category: 'Other',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'German (B1)', level: 55 },
      { name: 'Photography', level: 75 },
      { name: 'Copywriting', level: 70 }
    ]
  }
]
</script>

<style scoped lang="scss">
.skills-grid {
  background: $color-bg-alt;

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-8;

    @include respond-to(md) { grid-template-columns: repeat(3, 1fr); }
  }

  &__group {
    background: $color-white;
    border-radius: $radius-xl;
    border: 1px solid $color-border;
    padding: $space-8;
  }

  &__category {
    font-size: $font-size-sm;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: $color-primary;
    margin-bottom: $space-6;
  }

  &__items { display: flex; flex-direction: column; gap: $space-4; }

  &__item {
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }

  &__name {
    font-size: $font-size-sm;
    font-weight: 500;
  }

  &__bar {
    height: 6px;
    background: $color-border;
    border-radius: $radius-full;
    overflow: hidden;
  }

  &__bar-fill {
    height: 100%;
    background: linear-gradient(90deg, $color-primary, $color-primary-light);
    border-radius: $radius-full;
    transition: width 1s ease;
  }
}
</style>
