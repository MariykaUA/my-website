<template>
  <div class="fc-result">
    <div class="fc-result__emoji">{{ resultEmoji }}</div>
    <h2 class="fc-result__title">{{ resultTitle }}</h2>
    <p class="fc-result__subtitle">You completed the <strong>{{ deckName }}</strong> deck!</p>

    <div class="fc-result__stats">
      <div class="fc-result__stat fc-result__stat--correct">
        <span class="fc-result__stat-value">{{ correct }}</span>
        <span class="fc-result__stat-label">Correct</span>
      </div>
      <div class="fc-result__stat fc-result__stat--total">
        <span class="fc-result__stat-value">{{ total }}</span>
        <span class="fc-result__stat-label">Total</span>
      </div>
      <div class="fc-result__stat fc-result__stat--pct">
        <span class="fc-result__stat-value">{{ pct }}%</span>
        <span class="fc-result__stat-label">Score</span>
      </div>
    </div>

    <div class="fc-result__actions">
      <BaseButton @click="emit('restart')">Try again</BaseButton>
      <BaseButton variant="outline" @click="emit('chooseDeck')">Choose another deck</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const props = defineProps<{
  correct: number
  incorrect: number
  total: number
  deckName: string
}>()

const emit = defineEmits<{
  (e: 'restart'): void
  (e: 'chooseDeck'): void
}>()

const pct = computed(() => Math.round((props.correct / props.total) * 100))

const resultEmoji = computed(() => {
  if (pct.value >= 80) return '🎉'
  if (pct.value >= 60) return '👍'
  return '📚'
})

const resultTitle = computed(() => {
  if (pct.value >= 80) return 'Ausgezeichnet! Excellent!'
  if (pct.value >= 60) return 'Gut gemacht! Well done!'
  return 'Keep practising!'
})
</script>

<style scoped lang="scss">
.fc-result {
  text-align: center;
  padding: $space-12 0;

  &__emoji {
    font-size: 4rem;
    margin-bottom: $space-4;
  }

  &__title {
    font-size: $font-size-3xl;
    margin-bottom: $space-2;
  }

  &__subtitle {
    color: $color-text-muted;
    margin-bottom: $space-10;
  }

  &__stats {
    display: flex;
    justify-content: center;
    gap: $space-6;
    margin-bottom: $space-10;
  }

  &__stat {
    background: $color-bg-alt;
    border: 1px solid $color-border;
    border-radius: $radius-xl;
    padding: $space-6 $space-8;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-2;
  }

  &__stat-value {
    font-family: $font-display;
    font-size: $font-size-3xl;
    font-weight: 700;
  }

  &__stat--correct .fc-result__stat-value { color: #16A34A; }
  &__stat--pct     .fc-result__stat-value { color: $color-primary; }

  &__stat-label { font-size: $font-size-sm; color: $color-text-muted; }

  &__actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: $space-4;
  }
}
</style>
