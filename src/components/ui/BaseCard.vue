<template>
  <div class="base-card" :class="{ 'base-card--hoverable': hoverable }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ hoverable?: boolean }>()
</script>

<style scoped lang="scss">
.base-card {
  background: $color-white;
  border-radius: $radius-xl;
  border: 1px solid $color-border;
  box-shadow: $shadow-sm;
  overflow: hidden;

  &--hoverable {
    transition: box-shadow $transition-base, transform $transition-base;
    cursor: pointer;

    &:hover {
      box-shadow: $shadow-lg;
      transform: translateY(-3px);
    }
  }
}
</style>
