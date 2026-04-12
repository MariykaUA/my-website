<template>
  <component
    :is="tag"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`, { 'btn--full': full }]"
    v-bind="attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
  href?: string
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  full: false
})

const tag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'RouterLink'
  return 'button'
})

const rawAttrs = useAttrs()
const attrs = computed(() => ({
  ...rawAttrs,
  ...(props.href ? { href: props.href } : {}),
  ...(props.to ? { to: props.to } : {})
}))
</script>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $space-2;
  font-weight: 600;
  border-radius: $radius-full;
  cursor: pointer;
  transition: background $transition-fast, color $transition-fast,
              border-color $transition-fast, box-shadow $transition-fast,
              transform $transition-fast;
  text-decoration: none;
  border: none;
  outline: none;

  &:active { transform: scale(0.97); }

  // Sizes
  &--sm  { padding: $space-2 $space-4;  font-size: $font-size-sm; }
  &--md  { padding: $space-3 $space-6;  font-size: $font-size-base; }
  &--lg  { padding: $space-4 $space-8;  font-size: $font-size-lg; }
  &--full { width: 100%; }

  // Variants
  &--primary {
    background: $color-primary;
    color: $color-white;
    box-shadow: $shadow-sm;

    &:hover {
      background: $color-primary-dark;
      box-shadow: $shadow-md;
      transform: translateY(-2px);
    }
  }

  &--secondary {
    background: $color-primary-subtle;
    color: $color-primary;
    border-color: $color-primary-subtle;

    &:hover {
      background: #3f356c;
    }
  }

  &--outline {
    background: transparent;
    color: $color-primary;
    border-color: $color-primary;

    &:hover {
      background: $color-primary-subtle;
    }
  }

  &--ghost {
    background: transparent;
    color: $color-text-muted;
    border-color: transparent;

    &:hover {
      color: $color-primary;
      background: $color-primary-subtle;
    }
  }
}
</style>
