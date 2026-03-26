<template>
  <div class="blog-view">
    <div class="blog-view__header">
      <div class="container">
        <p class="blog-view__eyebrow">Travel writing</p>
        <h1 class="blog-view__title">Stories from the road</h1>
        <p class="blog-view__subtitle">Honest accounts of getting lost in {{ store.countries.length }} countries — and finding something better.</p>
      </div>
    </div>

    <div class="container section">
      <BlogFilter :countries="store.countries" :active-country="store.activeCountry" @filter="store.setCountry" />
      <BlogGrid :posts="store.filteredPosts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogFilter from '@/components/blog/BlogFilter.vue'
import BlogGrid from '@/components/blog/BlogGrid.vue'
import { useBlogStore } from '@/stores/useBlogStore'

const store = useBlogStore()
</script>

<style scoped lang="scss">
.blog-view {
  &__header {
    background: linear-gradient(135deg, $color-primary-subtle, $color-bg-alt);
    padding-block: $space-20;
    text-align: center;
  }

  &__eyebrow {
    font-size: $font-size-sm;
    font-weight: 600;
    color: $color-primary;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: $space-4;
  }

  &__title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: $space-4;
  }

  &__subtitle {
    font-size: $font-size-lg;
    color: $color-text-muted;
    max-width: 520px;
    margin-inline: auto;
  }
}
</style>
