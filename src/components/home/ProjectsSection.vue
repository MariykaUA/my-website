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
          <div class="projects__thumbnail">
            <img class="projects__img" :src="project.img" :alt="project.title" />
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
import imgSayslife from '@/assets/images/projects/sayslife.png'
import imgOniShop from '@/assets/images/projects/oni-shop.png'
import imgEcap from '@/assets/images/projects/ecap.png'
import imgPrintShop from '@/assets/images/projects/print-shop.png'
import imgLyssna from '@/assets/images/projects/lyssna-test.png'

useScrollAnimation()

const filters = ['All', 'Figma', 'Frontend', 'User Testing'] as const
type Filter = typeof filters[number]

const activeFilter = ref<Filter>('All')

const projects = [
  {
    title: 'Redesign “Sayslife” website',
    type: 'Web design',
    year: '2026',
    description: 'Focus on usability, visual clarity, and overall user experience. Based on UX research I refined layouts, typography, and color system to create a clearer and more engaging user interactions.',
    img: imgSayslife,
    tags: ['Figma', 'Elementor', 'Wordpress', 'SCSS'],
    live: null,
    github: null,
    categories: ['Figma'],
  },
  {
    title: 'Oni-shop e-commerce app',
    type: 'Development',
    year: '2025',
    description: 'The Oni-shop project is a e-commerce web application built with Vue.js and Nuxt3 for the frontend and Firebase for the backend, designed to learn the front-end development tools and features of the On company.',
    img: imgOniShop,
    tags: ['Vue.js', 'GitHub', 'TypeScript', 'Jira', 'SCSS'],
    live: null,
    github: null,
    categories: ['Frontend'],
  },
  {
    title: 'Redesign “ECAP” website',
    type: 'Web design',
    year: '2024',
    description: 'The redesign project for ECAP school was an opportunity for me to demonstrate and refine my UX/UI design skills.',
    img: imgEcap,
    tags: ['Figma'],
    live: null,
    github: null,
    categories: ['Figma'],
  },
  {
    title: 'Print Shop',
    type: 'Development',
    year: '2024',
    description: 'The Print Shop project is a web application built with React.js for the frontend and MySQL for the backend, designed to offer users a seamless experience in browsing, purchasing prints, and leaving feedback.',
    img: imgPrintShop,
    tags: ['React.js', 'GitHub', 'MySQL', 'Git'],
    live: null,
    github: null,
    categories: ['Frontend'],
  },
  {
    title: 'First Click Test & 8-Second Test',
    type: 'User Testing',
    year: '2024',
    description: 'I executed two user testing projects for the site Lyssna to evaluate the user experience.',
    img: imgLyssna,
    tags: ['Lyssna'],
    live: null,
    github: null,
    categories: ['User Testing'],
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

      .projects__img {
        transform: scale(1.05);
      }
    }
  }

  &__thumbnail {
    position: relative;
    height: 300px;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform $transition-base;
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
