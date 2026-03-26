<template>
  <div class="card-wrapper" @click="flip" @keydown.space.prevent="flip" tabindex="0" role="button" :aria-label="`Flashcard: ${card.german}. Press space to flip.`">
    <div class="card" :class="{ 'is-flipped': isFlipped }">
      <!-- Front: German -->
      <div class="card__face card__face--front">
        <div class="card__content">
          <span class="card__lang">🇩🇪 German</span>
          <p class="card__word">{{ card.german }}</p>
          <p v-if="card.exampleSentence" class="card__example">{{ card.exampleSentence }}</p>
          <BaseTag :color="difficultyColor">{{ card.difficulty }}</BaseTag>
        </div>
        <p class="card__hint">Click or press Space to reveal</p>
      </div>

      <!-- Back: English -->
      <div class="card__face card__face--back">
        <div class="card__content">
          <span class="card__lang">🇬🇧 English</span>
          <p class="card__word">{{ card.english }}</p>
          <p v-if="card.exampleTranslation" class="card__example">{{ card.exampleTranslation }}</p>
        </div>
        <div class="card__actions" @click.stop>
          <button class="card__btn card__btn--wrong" @click="emit('incorrect')">✗ Still learning</button>
          <button class="card__btn card__btn--right" @click="emit('correct')">✓ Got it!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import BaseTag from '@/components/ui/BaseTag.vue'
import { useFlipCard } from '@/composables/useFlipCard'
import type { Flashcard } from '@/types/flashcard'

const props = defineProps<{ card: Flashcard }>()
const emit = defineEmits<{
  (e: 'correct'): void
  (e: 'incorrect'): void
}>()

const { isFlipped, flip, reset } = useFlipCard()

watch(() => props.card, () => reset())

const difficultyColor = computed((): 'green' | 'primary' | 'gray' => {
  if (props.card.difficulty === 'easy')   return 'green'
  if (props.card.difficulty === 'medium') return 'primary'
  return 'gray'
})
</script>

<style scoped lang="scss">
.card-wrapper {
  perspective: 1000px;
  cursor: pointer;
  outline: none;

  @include focus-ring;
  border-radius: $radius-xl;
}

.card {
  position: relative;
  height: 340px;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;

  &.is-flipped { transform: rotateY(180deg); }
}

.card__face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: $radius-xl;
  border: 1px solid $color-border;
  box-shadow: $shadow-lg;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: $space-8;

  &--front {
    background: $color-white;
  }

  &--back {
    background: linear-gradient(135deg, $color-primary-subtle, $color-white);
    transform: rotateY(180deg);
  }
}

.card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: $space-4;
}

.card__lang {
  font-size: $font-size-sm;
  color: $color-text-muted;
  font-weight: 500;
}

.card__word {
  font-family: $font-display;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: $color-text;
  margin: 0;
  line-height: 1.2;
}

.card__example {
  font-size: $font-size-sm;
  color: $color-text-muted;
  font-style: italic;
  margin: 0;
}

.card__hint {
  text-align: center;
  font-size: $font-size-xs;
  color: $color-text-muted;
  margin: 0;
}

.card__actions {
  display: flex;
  gap: $space-4;
}

.card__btn {
  flex: 1;
  padding: $space-3 $space-4;
  border-radius: $radius-lg;
  font-size: $font-size-sm;
  font-weight: 600;
  transition: all $transition-fast;
  cursor: pointer;

  &--wrong {
    background: #FEE2E2;
    color: #DC2626;
    border: 1px solid #FECACA;

    &:hover { background: #FECACA; }
  }

  &--right {
    background: #DCFCE7;
    color: #16A34A;
    border: 1px solid #BBF7D0;

    &:hover { background: #BBF7D0; }
  }
}
</style>
