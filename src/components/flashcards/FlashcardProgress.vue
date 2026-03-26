<template>
  <div class="fc-progress">
    <div class="fc-progress__bar">
      <div class="fc-progress__fill" :style="`width: ${progress}%`" />
    </div>
    <div class="fc-progress__info">
      <span class="fc-progress__count">{{ current + 1 }} / {{ total }}</span>
      <span class="fc-progress__score">
        <span class="fc-progress__correct">✓ {{ correct }}</span>
        <span class="fc-progress__incorrect">✗ {{ incorrect }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  progress: number
  current: number
  total: number
  correct: number
  incorrect: number
}>()
</script>

<style scoped lang="scss">
.fc-progress {
  margin-bottom: $space-8;

  &__bar {
    height: 8px;
    background: $color-border;
    border-radius: $radius-full;
    overflow: hidden;
    margin-bottom: $space-3;
  }

  &__fill {
    height: 100%;
    background: linear-gradient(90deg, $color-primary, $color-primary-light);
    border-radius: $radius-full;
    transition: width 0.4s ease;
  }

  &__info {
    @include flex-between;
    font-size: $font-size-sm;
    color: $color-text-muted;
  }

  &__score {
    display: flex;
    gap: $space-4;
  }

  &__correct   { color: #16A34A; font-weight: 600; }
  &__incorrect { color: #DC2626; font-weight: 600; }
}
</style>
