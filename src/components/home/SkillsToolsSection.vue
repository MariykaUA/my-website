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
              <img :src="tool.icon" :alt="tool.name" class="st__tool-icon" />
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
import iconFigma from '@/assets/images/icons/figma.png'
import iconVSCode from '@/assets/images/icons/vscode.png'
import iconVue from '@/assets/images/icons/vue.png'
import iconReact from '@/assets/images/icons/react.png'
import iconClaude from '@/assets/images/icons/claude.png'
import iconGitHub from '@/assets/images/icons/GitHub.png'
import iconContentful from '@/assets/images/icons/contentful.png'
import iconStorybook from '@/assets/images/icons/storybook.png'
import iconMySQL from '@/assets/images/icons/mysql.png'
import iconNuxt from '@/assets/images/icons/nuxt.png'
import iconVitest from '@/assets/images/icons/vitest.png'
import iconElementor from '@/assets/images/icons/elementor.png'
import iconWordpress from '@/assets/images/icons/wordpress.png'
import iconGit from '@/assets/images/icons/git.png'
import iconFirebase from '@/assets/images/icons/firebase.png'
import iconNetlify from '@/assets/images/icons/netlify.png'
import iconLyssna from '@/assets/images/icons/lyssna.png'
import iconCanva from '@/assets/images/icons/canva.png'
import iconSketch from '@/assets/images/icons/sketch.png'
import iconAdobeIllustrator from '@/assets/images/icons/adobeIllustratorr.png'

useScrollAnimation()

const skillGroups = [
  {
    category: 'Design',
    skills: [
      { name: 'Responsive design' },
      { name: 'User flows' },
      { name: 'Prototyping' },
      { name: 'Wireframing' },
      { name: 'UX Research' },
      { name: 'User Testing' },
      { name: 'Typography' }, 
      { name: 'Accessibility' }, 
      { name: 'Color Theory' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript' },
      { name: 'HTML / SCSS / TypeScript' },
      { name: 'Component-based development' },
      { name: 'Database usage' },
      { name: 'Tailwind CSS' },
      { name: 'Testing' },
      { name: 'Accessibility improvements' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Empathy & Teamwork' },
      { name: 'Problem solving' },
      { name: 'Attention to detail' },
      { name: 'Time management' },
    ],
  },
]

const tools = [
  { icon: iconFigma, name: 'Figma', category: 'Design' },
  { icon: iconVSCode, name: 'VS Code', category: 'Dev' },
  { icon: iconVue, name: 'Vue.js', category: 'Dev' },
  { icon: iconReact, name: 'React.js', category: 'Dev' },
  { icon: iconClaude, name: 'Claude', category: 'AI' },
  { icon: iconGitHub, name: 'GitHub', category: 'Dev' },
  { icon: iconContentful, name: 'Contentful', category: 'Dev' },
  { icon: iconStorybook, name: 'Storybook', category: 'Dev' },
  { icon: iconMySQL, name: 'MySQL', category: 'Dev' },
  { icon: iconNuxt, name: 'Nuxt', category: 'Dev' },
  { icon: iconVitest, name: 'Vitest', category: 'Dev' },
  { icon: iconElementor, name: 'Elementor', category: 'Dev' },
  { icon: iconWordpress, name: 'Wordpress', category: 'Dev' },
  { icon: iconGit, name: 'Git', category: 'Dev' },
  { icon: iconFirebase, name: 'Firebase', category: 'Dev' },
  { icon: iconNetlify, name: 'Netlify', category: 'Deploy' },
  { icon: iconLyssna, name: 'Lyssna', category: 'Research' },
  { icon: iconCanva, name: 'Canva', category: 'Design' },
  { icon: iconSketch, name: 'Sketch', category: 'Design' },
  { icon: iconAdobeIllustrator, name: 'Adobe Illustrator', category: 'Design' },
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
  }

  &__tool-icon {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }
  &__tool-name  { font-size: $font-size-sm; font-weight: 600; }
  &__tool-cat   { font-size: $font-size-xs; color: $color-text-muted; }
}
</style>
