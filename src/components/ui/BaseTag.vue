<template>
  <span class="tag" :class="`tag--${color}`">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ color?: 'primary' | 'gray' | 'green' | 'blue' }>(), { color: 'primary' })
</script>

<style scoped lang="scss">
.tag {
  display: inline-flex;
  align-items: center;
  padding: $space-1 $space-3;
  border-radius: $radius-full;
  font-size: $font-size-xs;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &--primary { background: $color-primary-subtle; color: $color-primary-dark; }
  &--gray    { background: #F3F4F6; color: #6B7280; }
  &--green   { background: #DCFCE7; color: #166534; }
  &--blue    { background: #DBEAFE; color: #1E40AF; }
}
</style>
