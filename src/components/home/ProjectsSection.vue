<template>
  <section class="projects section">
    <div class="container">
      <div class="section-header reveal">
        <p class="projects__eyebrow">work</p>
        <h2 class="section-title">My Projects <img :src="catGif" class="section-cat" alt="" />
        </h2>
      </div>

      <div class="projects__filters reveal">
        <button
          v-for="f in filters"
          :key="f"
          class="projects__filter-btn"
          :class="{ 'projects__filter-btn--active': activeFilter === f }"
          @click="activeFilter = f"
        >
          {{ f }}
        </button>
      </div>

      <div class="projects__grid">
        <article
          v-for="(project, i) in filteredProjects"
          :key="project.title"
          class="projects__card"
          :style="`animation-delay: ${i * 0.08}s`"
        >
          <div class="projects__thumbnail" :style="`background: ${project.bg}`">
            <span class="projects__emoji">{{ project.emoji }}</span>
            <div class="projects__overlay">
              <div class="projects__links">
                <a v-if="project.live" :href="project.live" target="_blank" rel="noopener" class="projects__link">
                  Live site ↗
                </a>
                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="projects__link projects__link--ghost">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <div class="projects__body">
            <div class="projects__meta">
              <span class="projects__type">{{ project.type }}</span>
              <span class="projects__year">{{ project.year }}</span>
            </div>
            <h3 class="projects__title">{{ project.title }}</h3>
            <p class="projects__desc">{{ project.description }}</p>
            <ul class="projects__tags">
              <li v-for="tag in project.tags" :key="tag">
                <BaseTag>{{ tag }}</BaseTag>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTag from '@/components/ui/BaseTag.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import catGif from '@/assets/images/Cat animation.gif'

useScrollAnimation()

const filters = ['All', 'Figma', 'Frontend', 'User Testing'] as const
type Filter = typeof filters[number]

const activeFilter = ref<Filter>('All')

const projects = [
  {
    title: 'My Portfolio Website',
    type: 'Design & Development',
    year: '2024',
    description: 'Designed and built this very site from scratch — Vue 3, TypeScript, SCSS, animated particle background, and a German flashcard game baked right in.',
    emoji: '🌐',
    bg: 'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)',
    tags: ['Vue 3', 'TypeScript', 'SCSS', 'Vite'],
    live: null,
    github: null,
    categories: ['Frontend', 'Figma'],
  },
  {
    title: 'Travel Blog',
    type: 'Design & Content',
    year: '2024',
    description: 'A personal blog covering 15+ countries — filtering by category, responsive card grid, and full-article reading experience with Markdown-style content.',
    emoji: '✈️',
    bg: 'linear-gradient(135deg, #ECFDF5 0%, #A7F3D0 100%)',
    tags: ['Vue 3', 'Vue Router', 'Pinia', 'SCSS'],
    live: '/blog',
    github: null,
    categories: ['Frontend'],
  },
  {
    title: 'UX Research Study',
    type: 'User Testing',
    year: '2024',
    description: 'End-to-end usability testing project — recruited participants, ran moderated sessions, synthesised findings into actionable design recommendations.',
    emoji: '🔬',
    bg: 'linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)',
    tags: ['Lyssna', 'Figma', 'Research'],
    live: null,
    github: null,
    categories: ['User Testing', 'Figma'],
  },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter.value))
)
</script>

<style scoped lang="scss">
.projects {
  &__eyebrow {
    font-size: $font-size-sm;
    font-weight: 600;
    color: $color-primary;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: $space-4;
  }

  &__filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $space-2;
    margin-bottom: $space-10;
  }

  &__filter-btn {
    padding: $space-2 $space-5;
    border-radius: $radius-full;
    border: 1.5px solid $color-border;
    background: $color-white;
    color: $color-text-muted;
    font-size: $font-size-sm;
    font-weight: 600;
    cursor: pointer;
    transition: border-color $transition-fast, background $transition-fast, color $transition-fast, transform $transition-fast;

    &:hover {
      border-color: $color-primary-light;
      color: $color-primary;
      transform: translateY(-1px);
    }

    &--active {
      background: $color-primary;
      border-color: $color-primary;
      color: $color-white;

      &:hover {
        transform: translateY(-1px);
        color: $color-white;
      }
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-8;

    @include respond-to(md) { grid-template-columns: repeat(2, 1fr); }
  }

  &__card {
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: $radius-xl;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    animation: cardFadeIn 0.35s ease both;
    transition: box-shadow $transition-base, transform $transition-base, border-color $transition-base;

    &:hover {
      box-shadow: $shadow-lg;
      transform: translateY(-6px);
      border-color: $color-primary-light;

      .projects__overlay {
        opacity: 1;
      }

      .projects__emoji {
        transform: scale(1.15);
      }
    }
  }

  &__thumbnail {
    position: relative;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  &__emoji {
    font-size: 3.5rem;
    transition: transform $transition-base;
    user-select: none;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: rgba(#5B21B6, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity $transition-base;
  }

  &__links {
    display: flex;
    gap: $space-3;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    padding: $space-2 $space-5;
    background: $color-white;
    color: $color-primary;
    border-radius: $radius-full;
    font-size: $font-size-sm;
    font-weight: 600;
    text-decoration: none;
    transition: background $transition-fast, color $transition-fast;

    &:hover {
      background: $color-primary-subtle;
    }

    &--ghost {
      background: transparent;
      color: $color-white;
      border: 1.5px solid rgba(255,255,255,0.6);

      &:hover {
        background: rgba(255,255,255,0.15);
        color: $color-white;
      }
    }
  }

  &__body {
    padding: $space-6;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $space-3;
  }

  &__type {
    font-size: $font-size-xs;
    font-weight: 600;
    color: $color-primary;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  &__year {
    font-size: $font-size-xs;
    color: $color-text-muted;
  }

  &__title {
    font-size: $font-size-xl;
    margin-bottom: $space-3;
    line-height: 1.3;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.65;
    flex: 1;
    margin-bottom: $space-5;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    list-style: none;
    padding: 0;
    margin: 0;
  }
}

@keyframes cardFadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
