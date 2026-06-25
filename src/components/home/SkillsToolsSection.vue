<template>
  <!-- One extra screen lets Soft Skills fully dwell before the section unsticks -->
  <section class="st" ref="sectionRef" :style="{ height: `${(steps.length + 1) * 100}vh` }">

    <div class="st__inner">

      <!-- ── LEFT: big category title ── -->
      <div class="st__left">
        <Transition name="title" mode="out-in">
          <div :key="activeIndex" class="st__label">
            <span class="st__num">{{ String(activeIndex + 1).padStart(2, '0') }}</span>
            <h2 class="st__title" :style="{ color: steps[activeIndex].color }">
              {{ steps[activeIndex].label }}
            </h2>
            <p class="st__subtitle">{{ steps[activeIndex].sub }}</p>
          </div>
        </Transition>
      </div>

      <!-- ── RIGHT: content + progress bar ── -->
      <div class="st__right">

        <!-- Content panel -->
        <Transition name="panel" mode="out-in">
          <div :key="activeIndex" class="st__panel">

            <!-- Tools grid -->
            <div v-if="activeIndex === 0" class="st__tools">
              <div v-for="tool in tools" :key="tool.name" class="st__tool">
                <img :src="tool.icon" :alt="tool.name" class="st__tool-icon" />
                <span class="st__tool-name">{{ tool.name }}</span>
              </div>
            </div>

            <!-- Skill tags -->
            <div v-else class="st__tags">
              <span
                v-for="skill in steps[activeIndex].skills"
                :key="skill"
                class="st__tag"
                :style="{
                  background: steps[activeIndex].tagBg,
                  borderColor: steps[activeIndex].tagBorder,
                  color: steps[activeIndex].tagText,
                }"
              >{{ skill }}</span>
            </div>

          </div>
        </Transition>

        <!-- Progress bar (right edge — acts like a scroll indicator) -->
        <div class="st__bar">
          <div
            class="st__bar-fill"
            :style="{
              height: `${barFill * 100}%`,
              background: steps[activeIndex].color,
            }"
          />
          <!-- Step dots -->
          <div class="st__bar-dots">
            <span
              v-for="(step, i) in steps"
              :key="i"
              class="st__bar-dot"
              :class="{ 'st__bar-dot--active': i === activeIndex }"
              :style="i <= activeIndex ? { background: steps[activeIndex].color } : {}"
            />
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import iconFigma            from '@/assets/images/icons/figma.svg'
import iconVSCode           from '@/assets/images/icons/Visual_Studio_Code.svg'
import iconVue              from '@/assets/images/icons/Vue.svg'
import iconReact            from '@/assets/images/icons/React.svg'
import iconClaude           from '@/assets/images/icons/Claude.svg'
import iconGitHub           from '@/assets/images/icons/github.svg'
import iconContentful       from '@/assets/images/icons/Contentful.svg'
import iconStorybook        from '@/assets/images/icons/storybook.svg'
import iconMySQL            from '@/assets/images/icons/MySQL.svg'
import iconNuxt             from '@/assets/images/icons/Nuxt.svg'
import iconVitest           from '@/assets/images/icons/vitest.svg'
import iconElementor        from '@/assets/images/icons/elementor.svg'
import iconWordpress        from '@/assets/images/icons/WordPress.svg'
import iconGit              from '@/assets/images/icons/Git.svg'
import iconFirebase         from '@/assets/images/icons/Firebase.svg'
import iconNetlify          from '@/assets/images/icons/Netlify.svg'
import iconLyssna           from '@/assets/images/icons/lyssna.png'
import iconCanva            from '@/assets/images/icons/Canva.svg'
import iconSketch           from '@/assets/images/icons/Sketch.svg'
import iconAdobeIllustrator from '@/assets/images/icons/Adobe_Illustrator.svg'

// ── Steps (scroll sections) ──────────────────────────────
const steps = [
  {
    label: 'Tools',
    sub: 'What I build with',
    color: '#7C3AED',
    tagBg: '#EDE9FE', tagBorder: '#C4B5FD', tagText: '#5B21B6',
    skills: [],
  },
  {
    label: 'Design',
    sub: 'How I think visually',
    color: '#7C3AED',
    tagBg: '#EDE9FE', tagBorder: '#C4B5FD', tagText: '#5B21B6',
    skills: [
      'Responsive design', 'User flows', 'Prototyping',
      'Wireframing', 'UX Research', 'User Testing',
      'Typography', 'Accessibility', 'Color Theory',
    ],
  },
  {
    label: 'Frontend',
    sub: 'How I build it',
    color: '#7C3AED',
    tagBg: '#EDE9FE', tagBorder: '#C4B5FD', tagText: '#5B21B6',
    skills: [
      'JavaScript', 'HTML / SCSS / TypeScript',
      'Component-based development', 'Database usage',
      'Tailwind CSS', 'Testing', 'Accessibility improvements',
    ],
  },
  {
    label: 'Soft Skills',
    sub: 'How I work with people',
    color: '#7C3AED',
    tagBg: '#EDE9FE', tagBorder: '#C4B5FD', tagText: '#5B21B6',
    skills: [
      'Empathy & Teamwork', 'Problem solving',
      'Attention to detail', 'Time management',
    ],
  },
]

const tools = [
  { name: 'Figma',             icon: iconFigma            },
  { name: 'VS Code',           icon: iconVSCode           },
  { name: 'Vue.js',            icon: iconVue              },
  { name: 'React.js',          icon: iconReact            },
  { name: 'Claude',            icon: iconClaude           },
  { name: 'GitHub',            icon: iconGitHub           },
  { name: 'Contentful',        icon: iconContentful       },
  { name: 'Storybook',         icon: iconStorybook        },
  { name: 'MySQL',             icon: iconMySQL            },
  { name: 'Nuxt',              icon: iconNuxt             },
  { name: 'Vitest',            icon: iconVitest           },
  { name: 'Elementor',         icon: iconElementor        },
  { name: 'WordPress',         icon: iconWordpress        },
  { name: 'Git',               icon: iconGit              },
  { name: 'Firebase',          icon: iconFirebase         },
  { name: 'Netlify',           icon: iconNetlify          },
  { name: 'Lyssna',            icon: iconLyssna           },
  { name: 'Canva',             icon: iconCanva            },
  { name: 'Sketch',            icon: iconSketch           },
  { name: 'Illustrator', icon: iconAdobeIllustrator },
]

// ── Scroll tracking ──────────────────────────────────────
const sectionRef = ref(null)
const activeIndex = ref(0)
const progress = ref(0) // 0–1 within the current step

// barFill = overall progress from 0 to 1 across all steps
const barFill = computed(() => {
  return (activeIndex.value + progress.value) / steps.length
})

function onScroll() {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  const scrolled = -rect.top                                       // px scrolled into the section
  const total    = steps.length * window.innerHeight               // +1 screen so last step dwells
  const clamped  = Math.max(0, Math.min(total, scrolled))

  activeIndex.value = Math.min(
    steps.length - 1,
    Math.floor(clamped / window.innerHeight),
  )
  progress.value = (clamped % window.innerHeight) / window.innerHeight
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped lang="scss">
// ── Transitions ──────────────────────────────────────────
.title-enter-active,
.title-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.title-enter-from { opacity: 0; transform: translateY(24px); }
.title-leave-to   { opacity: 0; transform: translateY(-24px); }

.panel-enter-active,
.panel-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.panel-enter-from { opacity: 0; transform: translateX(20px); }
.panel-leave-to   { opacity: 0; transform: translateX(-20px); }

// ── Layout ───────────────────────────────────────────────
.st {
  position: relative;

  // The sticky container fills exactly one screen
  &__inner {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    overflow: hidden;
    background: #C7AFFD;
  }

  // ── Left panel ───────────────────────────────────────
  &__left {
    width: 38%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $space-16 $space-8 $space-16 $space-12;
    background: $color-bg;
    border-right: 1px solid $color-border;
    position: relative;

    @include respond-to(lg) {
      padding: $space-16 $space-12 $space-16 $space-16;
    }
  }

  &__label {
    width: 100%;
  }

  &__num {
    display: block;
    font-size: $font-size-sm;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: $color-text-black;
    margin-bottom: $space-4;
  }

  &__title {
    font-family: $font-display;
    font-size: clamp(2.8rem, 5vw, 4.5rem);
    font-weight: 700;
    line-height: 1.05;
    margin: 0 0 $space-4 0;
    transition: color 0.4s ease;
  }

  &__subtitle {
    font-size: $font-size-base;
    color: $color-text-black;
    margin: 0;
    line-height: 1.5;
  }

  // ── Right panel ──────────────────────────────────────
  &__right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: $space-12 $space-16 $space-12 $space-12;
    background: #C7AFFD;

    @include respond-to(lg) {
      padding: $space-16 $space-20 $space-16 $space-16;
    }
  }

  &__panel {
    width: 100%;
    overflow: visible;
  }

  // ── Tools grid ───────────────────────────────────────
  &__tools {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $space-3;

    @include respond-to(md) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &__tool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-3;
    padding: $space-4 $space-3;
    background: $color-white;
    border-radius: $radius-lg;
    transition: transform $transition-base, box-shadow $transition-base;

    &:hover {
      transform: translateY(-4px);
      box-shadow: $shadow-md;
    }
  }

  &__tool-icon {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
  }

  &__tool-name {
    font-size: $font-size-base;
    font-weight: 500;
    color: $color-text-black;
    text-align: center;
    line-height: 1.2;
    word-break: break-word;
  }

  // ── Skill tags ───────────────────────────────────────
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: $space-3;
    align-content: center;
  }

  &__tag {
    display: inline-block;
    padding: $space-2 $space-5;
    border-radius: $radius-full;
    border: 1px solid transparent;
    font-size: $font-size-base;
    font-weight: 500;
    line-height: 1.6;
    transition: transform $transition-fast, box-shadow $transition-fast;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-sm;
    }
  }

  // ── Progress bar (right edge) ────────────────────────
  &__bar {
    position: absolute;
    right: $space-6;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 180px;
    background: $color-border;
    border-radius: $radius-full;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__bar-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: $radius-full;
    transition: height 0.1s linear, background 0.4s ease;
  }

  &__bar-dots {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }

  &__bar-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $color-border;
    border: 2px solid $color-bg;
    transition: background 0.3s ease, transform 0.3s ease;
    flex-shrink: 0;

    &--active {
      transform: scale(1.4);
    }
  }

  // ── Mobile: stacked layout (no sticky) ──────────────
  @media (max-width: #{$bp-md - 1px}) {
    height: auto !important;

    &__inner {
      position: static;
      height: auto;
      flex-direction: column;
    }

    &__left {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid $color-border;
      padding: $space-10 $space-6;
      justify-content: flex-start;
    }

    &__right {
      padding: $space-8 $space-6 $space-12;
      align-items: flex-start;
    }

    &__bar { display: none; }

    // On mobile show all sections stacked
    &__panel { display: block; }
  }
}
</style>
