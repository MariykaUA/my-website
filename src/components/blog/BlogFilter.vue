<template>
  <div class="blog-filter">
    <button
      class="blog-filter__btn"
      :class="{ 'blog-filter__btn--active': activeCountry === null }"
      @click="emit('filter', null)"
    >All countries</button>
    <button
      v-for="country in countries"
      :key="country"
      class="blog-filter__btn"
      :class="{ 'blog-filter__btn--active': activeCountry === country }"
      @click="emit('filter', country)"
    >{{ country }}</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ countries: string[]; activeCountry: string | null }>()
const emit = defineEmits<{ (e: 'filter', country: string | null): void }>()
</script>

<style scoped lang="scss">
.blog-filter {
  display: flex;
  flex-wrap: wrap;
  gap: $space-2;
  margin-bottom: $space-10;

  &__btn {
    padding: $space-2 $space-4;
    border-radius: $radius-full;
    font-size: $font-size-sm;
    font-weight: 500;
    color: $color-text-muted;
    background: $color-bg-alt;
    border: 1px solid $color-border;
    transition: all $transition-fast;
    cursor: pointer;

    @include focus-ring;

    &:hover {
      color: $color-primary;
      border-color: $color-primary-light;
      background: $color-primary-subtle;
    }

    &--active {
      color: $color-white;
      background: $color-primary;
      border-color: $color-primary;

      &:hover {
        background: $color-primary-dark;
        border-color: $color-primary-dark;
        color: $color-white;
      }
    }
  }
}
</style>
