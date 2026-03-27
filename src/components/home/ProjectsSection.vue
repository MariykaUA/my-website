<template>
  <section class="projects section">
    <div class="container">
      <div class="section-header reveal">
        <p class="projects__eyebrow">work</p>
        <h2 class="section-title">My Projects</h2>
      </div>

      <div class="projects__filters reveal">
        <button
          v-for="f in filters"
          :key="f"
          class="projects__filter-btn"
          :class="{ 'projects__filter-btn--active': activeFilter === f }"
          @click="activeFilter = f"
        >{{ f }}</button>
      </div>

      <div class="projects__grid">
        <article
          v-for="(project, i) in filteredProjects"
          :key="project.title"
          class="projects__card"
          :style="`animation-delay: ${i * 0.08}s`"
          @click="openModal(project)"
        >
          <div class="projects__thumbnail">
            <img class="projects__img" :src="project.img" :alt="project.title" />
            <div class="projects__overlay">
              <span class="projects__view-label">View project</span>
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
              <li v-for="tag in project.tags" :key="tag"><BaseTag>{{ tag }}</BaseTag></li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="selected" class="modal-backdrop" @click.self="closeModal">
        <div class="modal">
          <button class="modal__close" aria-label="Close" @click="closeModal">✕</button>

          <!-- Header -->
          <div class="modal__header">
            <div class="modal__header-meta">
              <span class="projects__type">{{ selected.type }}</span>
              <span class="projects__year">{{ selected.year }}</span>
            </div>
            <h2 class="modal__title">{{ selected.title }}</h2>
            <div class="modal__header-bottom">
              <ul class="projects__tags">
                <li v-for="tag in selected.tags" :key="tag"><BaseTag>{{ tag }}</BaseTag></li>
              </ul>
              <div class="modal__header-links" v-if="selected.live || selected.github">
                <a v-if="selected.live" :href="selected.live" target="_blank" rel="noopener" class="modal__extra-link">
                  Live ↗
                </a>
                <a v-if="selected.github" :href="selected.github" target="_blank" rel="noopener" class="modal__extra-link modal__extra-link--ghost">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <!-- Visuals -->
          <div class="modal__gallery">
            <img
              v-for="(src, i) in selected.gallery"
              :key="i"
              :src="src"
              :alt="`${selected.title} screenshot ${i + 1}`"
              class="modal__gallery-img"
            />
          </div>

          <!-- Detail sections -->
          <div class="modal__sections">

            <div class="modal__row">
              <div class="modal__section">
                <h3 class="modal__section-title">Problem / Goal</h3>
                <p class="modal__section-text">{{ selected.problem }}</p>
              </div>

              <div class="modal__section">
                <h3 class="modal__section-title">Result</h3>
                <p class="modal__section-text">{{ selected.built }}</p>
              </div>
            </div>

            <div class="modal__section">
              <h3 class="modal__section-title">Design process / Technical aspects</h3>
              <p class="modal__section-text">{{ selected.process }}</p>
            </div>

            <div v-if="selected.visuals.length" class="modal__section">
              <h3 class="modal__section-title">Visuals</h3>
              <div class="modal__visuals">
                <template v-for="(item, i) in selected.visuals" :key="i">
                  <div v-if="Array.isArray(item)" class="modal__visual-row">
                    <img
                      v-for="(src, j) in item"
                      :key="j"
                      :src="src"
                      :alt="`${selected.title} visual ${i}-${j}`"
                      class="modal__visual-img"
                    />
                  </div>
                  <img
                    v-else
                    :src="item"
                    :alt="`${selected.title} visual ${i}`"
                    class="modal__visual-img"
                  />
                </template>
              </div>
            </div>

            <div class="modal__section">
              <h3 class="modal__section-title">Challenges</h3>
              <p class="modal__section-text">{{ selected.challenges}}</p>
            </div>

            <div class="modal__section">
              <h3 class="modal__section-title">Takeaways</h3>
              <ul class="modal__list">
                <li v-for="l in selected.learnings" :key="l">{{ l }}</li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTag from '@/components/ui/BaseTag.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import imgSayslife from '@/assets/images/projects/sayslife.png'
import imgOniShop from '@/assets/images/projects/oni-shop.png'
import imgOniShopGallery from '@/assets/images/projects/oni-shop-gallery.png'
import imgOniShopMobile1 from '@/assets/images/projects/oni-shop-mobile1.png'
import imgOniShopMobile2 from '@/assets/images/projects/oni-shop-mobile2.png'
import imgEcap from '@/assets/images/projects/ecap.png'
import imgPrintShop from '@/assets/images/projects/print-shop.png'
import imgLyssna from '@/assets/images/projects/lyssna-test.png'
import img8secTest from '@/assets/images/projects/8sec-test.png'
import img8secTestTable from '@/assets/images/projects/8sec-test-table.png'

useScrollAnimation()

const filters = ['All', 'Figma', 'Frontend', 'User Testing'] as const
type Filter = typeof filters[number]
const activeFilter = ref<Filter>('All')

const projects = [
  {
    title: 'Redesign "Sayslife" website',
    type: 'Web design',
    year: '2026',
    description: 'Focus on usability, visual clarity, and overall user experience.',
    img: imgSayslife,
    gallery: [imgSayslife],
    visuals: [],
    tags: ['Figma', 'Elementor', 'Wordpress', 'SCSS'],
    live: null,
    github: null,
    categories: ['Figma'],
    problem: 'The existing site lacked visual hierarchy and made it hard for users to find key information quickly.',
    built: 'A fully redesigned website with a new layout, refreshed color system, and improved content structure.',
    process: 'Conducted UX research to identify pain points, then rebuilt the design from wireframes to high-fidelity in Figma. Implemented using Elementor and WordPress with custom SCSS for consistent styling across all breakpoints.',
    challenges: 'Balancing the client\'s existing brand with a modernised visual direction — solved by presenting mood boards and a structured design system early in the process.',
    learnings: [
      'UX research findings directly shaped which layout changes had the most impact',
      'Starting with a component library avoids visual inconsistency later',
      'Working within CMS constraints pushes creative problem-solving',
    ],
  },
  {
    title: 'Oni-shop e-commerce app',
    type: 'Development',
    year: '2025',
    description: 'The Oni-shop project is a e-commerce web application built with Vue.js and Nuxt3 for the frontend and Firebase for the backend, designed to learn the front-end development tools and features of the On company.',
    img: imgOniShop,
    gallery: [imgOniShop],
    visuals: [imgOniShopGallery, [imgOniShopMobile1, imgOniShopMobile2]],
    tags: ['Vue.js', 'Nuxt3', 'GitHub', 'TypeScript', 'Jira', 'SCSS'],
    live: null,
    github: 'https://github.com/MariykaUA/oni-shop',
    categories: ['Frontend'],
    problem: 'Gaining a hands-on experience in Vue.js, Nuxt3, and Firebase in a realistic e-commerce context.',
    built: 'A website built to offer considering user experience and UI. Users can navigate between product categories(PLP) and open a product page(PDP).',
    process: 'The project includes a mobile version that ensures optimal viewing and interaction across various devices and screen sizes.This was achieved using SCSS along with media queries, breakpoints, and variables for a robust and maintainable responsive implementation.Implemented reusable components and composables to promote code modularity, maintainability, and scalability across the application. Adheres to strict code quality standards through TypeScript for strong typing, and ESLint, Prettier for consistent code formatting and error prevention.',
    challenges:'Effectively utilising composables to manage application logic and state, then correctly connecting all reusable components and routing to build a cohesive and functional e-commerce flow.',
    learnings: [
      'Full-Stack Development: Gaining practical experience in connecting a modern frontend framework',
      'Deepening understanding and application of industry-standard tools like TypeScript, ESLint, and Nuxt 3 for building robust and maintainable web applications.',
      'Reinforcing the importance of reusable components and composables for efficient and scalable development.'
    ],
  },
  {
    title: 'Redesign "ECAP" website',
    type: 'Web design',
    year: '2024',
    description: 'A UX/UI redesign for ECAP school.',
    img: imgEcap,
    gallery: [imgEcap],
    visuals: [],
    tags: ['Figma'],
    live: null,
    github: null,
    categories: ['Figma'],
    problem: 'The ECAP school site felt outdated and made it difficult for students and parents to find important information quickly.',
    built: 'A modern redesign with clear navigation, improved content hierarchy, and an interactive Figma prototype showcasing mobile and desktop views.',
    process: 'Started with a content audit and user flow mapping, then created wireframes before moving to high-fidelity in Figma. Built a reusable component set and an interactive prototype for stakeholder review.',
    challenges: 'Too much content competing for attention on key pages — solved by reorganising sections into clearly prioritised cards and introducing progressive disclosure for secondary content.',
    learnings: [
      'Education sites need clear information architecture above all else',
      'Presenting design rationale, not just visuals, leads to much better feedback',
      'Wireframes first saves significant rework time at the high-fidelity stage',
    ],
  },
  {
    title: 'Print Shop',
    type: 'Development',
    year: '2024',
    description: 'A web app for browsing and purchasing prints.',
    img: imgPrintShop,
    gallery: [imgPrintShop],
    visuals: [],
    tags: ['React.js', 'GitHub', 'MySQL', 'Git'],
    live: null,
    github: null,
    categories: ['Frontend'],
    problem: 'Needed a hands-on full-stack project to practise React.js with a real relational database and REST API.',
    built: 'A print shop web app with product listing, detail pages, a purchasing flow, and a user feedback system backed by MySQL.',
    process: 'Designed the relational schema first (products, orders, reviews), then built the REST API and connected it to a React.js frontend using hooks for state and data fetching. Styled with custom CSS and deployed via GitHub.',
    challenges: 'Async data fetching caused UI flicker on slower connections — solved by adding loading skeletons and error states to every data-dependent component.',
    learnings: [
      'Designing the DB schema first prevents painful migrations later',
      'React hooks make async state management clean once patterns are clear',
      'Loading and error states are not optional — they are part of the UX',
    ],
  },
  {
    title: 'First Click Test & 8-Second Test',
    type: 'User Testing',
    year: '2024',
    description: 'Two user tests via Lyssna to evaluate User Experience.',
    img: imgLyssna,
    gallery: [imgLyssna],
    visuals: [img8secTest, img8secTestTable],
    tags: ['Lyssna'],
    live: null,
    github: null,
    categories: ['User Testing'],
    problem: '1. To identify where users click first when given specific tasks on the website. 2. To assess how quickly users can grasp the main message and navigate the site within an 8-second timeframe.',
    built: 'I used a heat map to visualise user clicks, which helped determine the most engaging elements. In the second test I collected cloud results to analyse participants feedback and reactions during the test.',
    process: 'The same group of 10 users participated in both tests, providing valuable insights into their interactions with the site. Tasks: For the First Click Test, users were given specific tasks to complete on the website, and their clicks were tracked to see where they clicked first. For the 8-Second Test, users were asked to spend 8 seconds on the site and then provide feedback on their experience.',
    challenges: 'The number of users was limited and the testing was conducted on a demo version of the site, which may have affected the naturalness of user interactions and the generalisability of the results.',
    learnings: [
      'These user testing projects provided valuable insights into user behavior, helping to identify areas for improvement and enhance the overall experience.',      
      'Small copy changes can have a bigger impact than layout changes.',
    ],
  },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter.value))
)

type Project = typeof projects[number]
const selected = ref<Project | null>(null)

function openModal(project: Project) {
  selected.value = project
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  selected.value = null
  document.body.style.overflow = ''
}
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

      &:hover { transform: translateY(-1px); color: $color-white; }
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
    cursor: pointer;
    transition: box-shadow $transition-base, transform $transition-base, border-color $transition-base;

    &:hover {
      box-shadow: $shadow-lg;
      transform: translateY(-6px);
      border-color: $color-primary-light;

      .projects__overlay { opacity: 1; }
      .projects__img { transform: scale(1.05); }
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

  &__view-label {
    color: $color-white;
    font-size: $font-size-sm;
    font-weight: 600;
    letter-spacing: 0.04em;
    border: 1.5px solid rgba(255,255,255,0.7);
    padding: $space-2 $space-5;
    border-radius: $radius-full;
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

// ── Modal ────────────────────────────────────────────────
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: $space-6 $space-4;
  overflow-y: auto;
}

.modal {
  background: $color-white;
  border-radius: $radius-xl;
  width: 100%;
  max-width: 800px;
  margin: auto;
  position: relative;

  &__close {
    position: absolute;
    top: $space-4;
    right: $space-4;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1.5px solid $color-border;
    background: $color-white;
    color: $color-text-muted;
    font-size: $font-size-sm;
    cursor: pointer;
    z-index: 1;
    transition: border-color $transition-fast, color $transition-fast;

    &:hover { border-color: $color-primary; color: $color-primary; }
  }

  &__header {
    padding: $space-8 $space-8 $space-6;
    border-bottom: 1px solid $color-border;
    display: flex;
    flex-direction: column;
    gap: $space-3;
  }

  &__header-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: $space-3;
  }

  &__header-links {
    display: flex;
    gap: $space-2;
    flex-shrink: 0;
  }

  &__header-meta {
    display: flex;
    gap: $space-4;
    align-items: center;
  }

  &__title {
    font-size: $font-size-2xl;
    line-height: 1.2;
    padding-right: $space-10;
  }

  &__gallery {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-3;
    padding: $space-6 $space-8;
    background: $color-bg-alt;

    @supports selector(:has(*)) {
      &:has(img:nth-child(2)) { grid-template-columns: repeat(2, 1fr); }
    }
  }

  &__gallery-img {
    width: 100%;
    border-radius: $radius-lg;
    object-fit: cover;
    object-position: top;
    border: 1px solid $color-border;
  }

  &__sections {
    padding: $space-6 $space-8 $space-8;
    display: flex;
    flex-direction: column;
    gap: $space-6;
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-6;

    @media (max-width: 560px) { grid-template-columns: 1fr; }
  }

  &__section-title {
    font-size: $font-size-xs;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: $color-primary;
    margin-bottom: $space-3;
  }

  &__section-text {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.7;
  }

  &__chips {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__chip {
    font-size: $font-size-xs;
    font-weight: 600;
    color: $color-primary;
    background: $color-primary-subtle;
    border-radius: $radius-full;
    padding: 4px 12px;
  }

  &__challenges {
    display: flex;
    flex-direction: column;
    gap: $space-3;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__challenge {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: $space-3;
    align-items: start;
    font-size: $font-size-sm;
    line-height: 1.5;

    @media (max-width: 560px) {
      grid-template-columns: 1fr;

      .modal__challenge-arrow { display: none; }
    }
  }

  &__challenge-problem {
    color: $color-text;
    font-weight: 500;
  }

  &__visuals {
    display: flex;
    flex-direction: column;
    gap: $space-3;
  }

  &__visual-row {
    display: flex;
    gap: $space-3;
    align-items: flex-start;

    .modal__visual-img {
      flex: 1;
      width: 0;
    }
  }

  &__visual-img {
    width: 100%;
    display: block;
    border-radius: $radius-lg;
    border: 1px solid $color-border;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: $space-2;
    margin: 0;

    li {
      font-size: $font-size-sm;
      color: $color-text-muted;
      line-height: 1.6;
    }
  }

  &__extras {
    display: flex;
    gap: $space-3;
    flex-wrap: wrap;
    padding-top: $space-2;
    border-top: 1px solid $color-border;
  }

  &__extra-link {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    padding: $space-2 $space-5;
    background: $color-primary;
    color: $color-white;
    border-radius: $radius-full;
    font-size: $font-size-sm;
    font-weight: 600;
    text-decoration: none;
    transition: background $transition-fast;

    &:hover { background: $color-primary-light; }

    &--ghost {
      background: transparent;
      color: $color-primary;
      border: 1.5px solid $color-primary;

      &:hover { background: $color-primary-subtle; }
    }
  }

  &__extra-icon { font-size: 1rem; }
}

// ── Transitions ──────────────────────────────────────────
.modal-enter-active,
.modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }

.modal-enter-active .modal,
.modal-leave-active .modal { transition: transform 0.2s ease; }
.modal-enter-from .modal,
.modal-leave-to .modal { transform: translateY(20px); }

@keyframes cardFadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
