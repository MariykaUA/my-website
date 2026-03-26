<template>
  <div class="deck-select">
    <div class="section-header">
      <h2 class="section-title">Choose a deck</h2>
      <p class="section-subtitle">Select a category to start practising</p>
    </div>
    <div class="deck-select__grid">
      <button
        v-for="deck in decks"
        :key="deck.id"
        class="deck-select__card"
        @click="emit('select', deck.id)"
      >
        <span class="deck-select__emoji">{{ deck.emoji }}</span>
        <h3 class="deck-select__name">{{ deck.name }}</h3>
        <p class="deck-select__desc">{{ deck.description }}</p>
        <span class="deck-select__count">{{ deck.cards.length }} cards</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FlashcardDeck } from '@/types/flashcard'

defineProps<{ decks: FlashcardDeck[] }>()
const emit = defineEmits<{ (e: 'select', deckId: string): void }>()
</script>

<style scoped lang="scss">
.deck-select {
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $space-6;

    @include respond-to(md) { grid-template-columns: repeat(4, 1fr); }
  }

  &__card {
    background: $color-white;
    border: 2px solid $color-border;
    border-radius: $radius-xl;
    padding: $space-8 $space-6;
    text-align: center;
    cursor: pointer;
    transition: all $transition-fast;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-3;

    @include focus-ring;

    &:hover {
      border-color: $color-primary;
      background: $color-primary-subtle;
      transform: translateY(-3px);
      box-shadow: $shadow-md;
    }
  }

  &__emoji { font-size: 2.5rem; }
  &__name  { font-size: $font-size-lg; font-weight: 700; }
  &__desc  { font-size: $font-size-sm; color: $color-text-muted; line-height: 1.5; }
  &__count {
    font-size: $font-size-xs;
    font-weight: 600;
    color: $color-primary;
    background: $color-primary-subtle;
    padding: $space-1 $space-3;
    border-radius: $radius-full;
  }
}
</style>
