import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { flashcardDecks } from '@/data/flashcards'
import type { FlashcardDeck, FlashcardSession } from '@/types/flashcard'

export const useFlashcardStore = defineStore('flashcard', () => {
  const decks = ref(flashcardDecks)
  const activeDeckId = ref<string | null>(null)

  const session = useLocalStorage<FlashcardSession | null>('flashcard-session', null)

  const activeDeck = computed(() =>
    decks.value.find((d: FlashcardDeck) => d.id === activeDeckId.value) ?? null
  )

  const currentCard = computed(() => {
    if (!session.value || !activeDeck.value) return null
    return activeDeck.value.cards[session.value.currentIndex] ?? null
  })

  const progress = computed(() => {
    if (!session.value || !activeDeck.value) return 0
    return Math.round((session.value.currentIndex / activeDeck.value.cards.length) * 100)
  })

  const score = computed(() => {
    if (!session.value) return { correct: 0, incorrect: 0, total: 0 }
    return {
      correct: session.value.correctIds.length,
      incorrect: session.value.incorrectIds.length,
      total: activeDeck.value?.cards.length ?? 0
    }
  })

  function startDeck(deckId: string) {
    activeDeckId.value = deckId
    session.value = {
      deckId,
      currentIndex: 0,
      correctIds: [],
      incorrectIds: [],
      isComplete: false
    }
  }

  function markCorrect() {
    if (!session.value || !currentCard.value) return
    if (!session.value.correctIds.includes(currentCard.value.id)) {
      session.value.correctIds.push(currentCard.value.id)
    }
    advance()
  }

  function markIncorrect() {
    if (!session.value || !currentCard.value) return
    if (!session.value.incorrectIds.includes(currentCard.value.id)) {
      session.value.incorrectIds.push(currentCard.value.id)
    }
    advance()
  }

  function advance() {
    if (!session.value || !activeDeck.value) return
    const nextIndex = session.value.currentIndex + 1
    if (nextIndex >= activeDeck.value.cards.length) {
      session.value.isComplete = true
    } else {
      session.value.currentIndex = nextIndex
    }
  }

  function goBack() {
    if (!session.value || session.value.currentIndex <= 0) return
    session.value.currentIndex--
    session.value.isComplete = false
  }

  function resetSession() {
    session.value = null
    activeDeckId.value = null
  }

  function resumeSession() {
    if (session.value) {
      activeDeckId.value = session.value.deckId
    }
  }

  return {
    decks,
    activeDeck,
    activeDeckId,
    session,
    currentCard,
    progress,
    score,
    startDeck,
    markCorrect,
    markIncorrect,
    goBack,
    resetSession,
    resumeSession
  }
})
