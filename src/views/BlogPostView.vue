<template>
  <div v-if="post" class="post-view">
    <div class="post-view__hero">
      <img :src="post.coverImage" :alt="post.title" class="post-view__cover" />
      <div class="post-view__hero-overlay">
        <div class="container">
          <RouterLink to="/blog" class="post-view__back">← Back to blog</RouterLink>
          <div class="post-view__meta">
            <BaseTag color="gray">{{ post.country }}</BaseTag>
            <span class="post-view__time">{{ post.readTimeMinutes }} min read</span>
            <time>{{ formattedDate }}</time>
          </div>
          <h1 class="post-view__title">{{ post.title }}</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="post-view__body">
        <p class="post-view__excerpt">{{ post.excerpt }}</p>
        <div class="post-view__content" v-html="renderedContent" />
        <div class="post-view__tags">
          <BaseTag v-for="tag in post.tags" :key="tag">{{ tag }}</BaseTag>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container section">
    <p>Post not found. <RouterLink to="/blog" class="text-primary">Return to blog</RouterLink></p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/useBlogStore'
import BaseTag from '@/components/ui/BaseTag.vue'

const route = useRoute()
const store = useBlogStore()

const post = computed(() => store.getPostById(route.params.id as string))

const formattedDate = computed(() =>
  post.value
    ? new Date(post.value.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''
)

// Simple markdown-like renderer for headings and paragraphs
const renderedContent = computed(() => {
  if (!post.value) return ''
  return post.value.content
    .split('\n')
    .map((line: string) => {
      if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`
      if (line.startsWith('# '))  return `<h1>${line.slice(2)}</h1>`
      if (line.startsWith('- '))  return `<li>${line.slice(2)}</li>`
      if (line.trim() === '')     return ''
      return `<p>${line}</p>`
    })
    .join('\n')
})
</script>

<style scoped lang="scss">
.post-view {
  &__hero {
    position: relative;
    height: 60vh;
    min-height: 400px;
    overflow: hidden;
  }

  &__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.75) 50%, transparent);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: $space-12;
    color: $color-white;
  }

  &__back {
    color: rgba($color-white, 0.8);
    font-size: $font-size-sm;
    display: inline-block;
    margin-bottom: $space-4;
    transition: color $transition-fast;

    &:hover { color: $color-white; }
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: $space-3;
    margin-bottom: $space-4;
    font-size: $font-size-sm;
    opacity: 0.85;
  }

  &__title {
    font-size: clamp(1.75rem, 4vw, 3rem);
    color: $color-white;
    max-width: 800px;
  }

  &__time { opacity: 0.8; }

  &__body {
    max-width: 720px;
    margin-inline: auto;
    padding-block: $space-12;
  }

  &__excerpt {
    font-size: $font-size-xl;
    color: $color-text-muted;
    font-style: italic;
    border-left: 3px solid $color-primary;
    padding-left: $space-6;
    margin-bottom: $space-10;
    line-height: 1.6;
  }

  &__content {
    :deep(h2) {
      font-family: $font-display;
      font-size: $font-size-2xl;
      margin-top: $space-10;
      margin-bottom: $space-4;
      color: $color-text;
    }

    :deep(p) {
      font-size: $font-size-lg;
      line-height: 1.8;
      color: $color-text;
      margin-bottom: $space-6;
    }

    :deep(li) {
      font-size: $font-size-base;
      line-height: 1.7;
      color: $color-text-muted;
      padding-left: $space-4;
      margin-bottom: $space-2;
      list-style: disc;
      list-style-position: inside;
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    margin-top: $space-10;
    padding-top: $space-10;
    border-top: 1px solid $color-border;
  }
}
</style>
