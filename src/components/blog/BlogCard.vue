<template>
  <RouterLink :to="`/blog/${post.id}`" class="blog-card">
    <div class="blog-card__image">
      <img :src="post.coverImage" :alt="post.title" loading="lazy" />
      <span class="blog-card__flag">{{ countryFlag }}</span>
    </div>
    <div class="blog-card__body">
      <div class="blog-card__meta">
        <BaseTag color="gray">{{ post.country }}</BaseTag>
        <span class="blog-card__time">{{ post.readTimeMinutes }} min read</span>
      </div>
      <h3 class="blog-card__title">{{ post.title }}</h3>
      <p class="blog-card__excerpt">{{ post.excerpt }}</p>
      <div class="blog-card__tags">
        <BaseTag v-for="tag in post.tags.slice(0, 3)" :key="tag">{{ tag }}</BaseTag>
      </div>
      <time class="blog-card__date">{{ formattedDate }}</time>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseTag from '@/components/ui/BaseTag.vue'
import type { BlogPost } from '@/types/blog'

const props = defineProps<{ post: BlogPost }>()

const formattedDate = computed(() =>
  new Date(props.post.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
)

const countryFlag = computed(() => {
  const code = props.post.countryCode.toUpperCase()
  return code.split('').map((c: string) => String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 65)).join('')
})
</script>

<style scoped lang="scss">
.blog-card {
  display: flex;
  flex-direction: column;
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-xl;
  overflow: hidden;
  text-decoration: none;
  transition: box-shadow $transition-base, transform $transition-base;

  &:hover {
    box-shadow: $shadow-lg;
    transform: translateY(-4px);

    .blog-card__image img { transform: scale(1.04); }
  }

  &__image {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform $transition-slow;
    }
  }

  &__flag {
    position: absolute;
    top: $space-3;
    right: $space-3;
    font-size: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }

  &__body {
    padding: $space-6;
    display: flex;
    flex-direction: column;
    gap: $space-3;
    flex: 1;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: $space-3;
  }

  &__time {
    font-size: $font-size-xs;
    color: $color-text-muted;
  }

  &__title {
    font-size: $font-size-xl;
    font-family: $font-display;
    line-height: 1.3;
    color: $color-text;
  }

  &__excerpt {
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    margin-top: auto;
  }

  &__date {
    font-size: $font-size-xs;
    color: $color-text-muted;
  }
}
</style>
