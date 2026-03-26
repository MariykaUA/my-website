<template>
  <div class="blog-grid">
    <TransitionGroup name="blog-grid" tag="div" class="blog-grid__list">
      <BlogCard v-for="post in posts" :key="post.id" :post="post" class="blog-grid__item" />
    </TransitionGroup>
    <p v-if="posts.length === 0" class="blog-grid__empty">
      No posts found for this filter.
    </p>
  </div>
</template>

<script setup lang="ts">
import BlogCard from './BlogCard.vue'
import type { BlogPost } from '@/types/blog'

defineProps<{ posts: BlogPost[] }>()
</script>

<style scoped lang="scss">
.blog-grid {
  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-8;

    @include respond-to(md) { grid-template-columns: repeat(2, 1fr); }
    @include respond-to(xl) { grid-template-columns: repeat(3, 1fr); }
  }

  &__empty {
    text-align: center;
    color: $color-text-muted;
    padding: $space-20 0;
  }
}

.blog-grid-enter-active,
.blog-grid-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.blog-grid-enter-from,
.blog-grid-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>
