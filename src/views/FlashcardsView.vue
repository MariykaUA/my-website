<template>
  <div class="fc-view">
    <div class="fc-view__header">
      <div class="container">
        <p class="fc-view__eyebrow">Language learning</p>
        <h1 class="fc-view__title">German Flashcards 🇩🇪</h1>
        <p class="fc-view__subtitle">Build your vocabulary with interactive flashcards — 4 decks, 40 cards total.</p>
      </div>
    </div>

    <div class="container fc-view__body">
      <!-- Deck selection -->
      <template v-if="!store.activeDeckId">
        <FlashcardDeckComponent :decks="store.decks" @select="store.startDeck" />
        <div v-if="store.session && !store.session.isComplete" class="fc-view__resume">
          <p>You have an unfinished session for <strong>{{ resumeDeckName }}</strong>.</p>
          <BaseButton variant="secondary" @click="store.resumeSession">Resume</BaseButton>
        </div>
      </template>

      <!-- Game in progress -->
      <template v-else-if="store.session && !store.session.isComplete">
        <div class="fc-view__game">
          <div class="fc-view__game-header">
            <button class="fc-view__back" @click="store.resetSession">← Decks</button>
            <h2 class="fc-view__deck-name">{{ store.activeDeck?.emoji }} {{ store.activeDeck?.name }}</h2>
          </div>

          <FlashcardProgress
            :progress="store.progress"
            :current="store.session.currentIndex"
            :total="store.activeDeck?.cards.length ?? 0"
            :correct="store.score.correct"
            :incorrect="store.score.incorrect"
          />

          <FlashcardCard
            v-if="store.currentCard"
            :card="store.currentCard"
            @correct="store.markCorrect"
            @incorrect="store.markIncorrect"
          />

          <div class="fc-view__kbd">
            <kbd>Space</kbd> flip &nbsp;
            <kbd>→</kbd> skip &nbsp;
            <kbd>←</kbd> back
          </div>
        </div>
      </template>

      <!-- Results -->
      <template v-else-if="store.session?.isComplete">
        <FlashcardResult
          :correct="store.score.correct"
          :incorrect="store.score.incorrect"
          :total="store.score.total"
          :deck-name="store.activeDeck?.name ?? ''"
          @restart="restart"
          @choose-deck="store.resetSession"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useFlashcardStore } from '@/stores/useFlashcardStore'
import FlashcardDeckComponent from '@/components/flashcards/FlashcardDeck.vue'
import FlashcardCard from '@/components/flashcards/FlashcardCard.vue'
import FlashcardProgress from '@/components/flashcards/FlashcardProgress.vue'
import FlashcardResult from '@/components/flashcards/FlashcardResult.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const store = useFlashcardStore()

const resumeDeckName = computed(() =>
  store.session ? store.decks.find((d: { id: string }) => d.id === store.session?.deckId)?.name ?? '' : ''
)

function restart() {
  if (store.activeDeckId) store.startDeck(store.activeDeckId)
}

function handleKeydown(e: KeyboardEvent) {
  if (!store.activeDeckId || store.session?.isComplete) return
  if (e.key === 'ArrowRight') store.markIncorrect()
  if (e.key === 'ArrowLeft')  store.goBack()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style scoped lang="scss">
.fc-view {
  &__header {
    background: linear-gradient(135deg, $color-primary, $color-primary-dark);
    padding-block: $space-20;
    text-align: center;
    color: $color-white;
  }

  &__eyebrow {
    font-size: $font-size-sm;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.8;
    margin-bottom: $space-4;
  }

  &__title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: $color-white;
    margin-bottom: $space-4;
  }

  &__subtitle {
    font-size: $font-size-lg;
    opacity: 0.85;
    max-width: 520px;
    margin-inline: auto;
    margin-bottom: 0;
  }

  &__body {
    padding-block: $space-12;
  }

  &__resume {
    margin-top: $space-8;
    padding: $space-6;
    background: $color-primary-subtle;
    border-radius: $radius-xl;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: $space-4;

    p { margin: 0; }
  }

  &__game {
    max-width: 600px;
    margin-inline: auto;
  }

  &__game-header {
    @include flex-between;
    margin-bottom: $space-6;
  }

  &__back {
    font-size: $font-size-sm;
    color: $color-text-muted;
    transition: color $transition-fast;

    &:hover { color: $color-primary; }

    @include focus-ring;
  }

  &__deck-name {
    font-size: $font-size-xl;
  }

  &__kbd {
    text-align: center;
    margin-top: $space-6;
    font-size: $font-size-sm;
    color: $color-text-muted;

    kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: $color-bg-alt;
      border: 1px solid $color-border;
      border-radius: $radius-sm;
      padding: 1px $space-2;
      font-size: $font-size-xs;
      font-family: monospace;
    }
  }
}
</style>
