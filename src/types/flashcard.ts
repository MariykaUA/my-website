export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Flashcard {
  id: string
  german: string
  english: string
  exampleSentence?: string
  exampleTranslation?: string
  category: string
  difficulty: Difficulty
}

export interface FlashcardDeck {
  id: string
  name: string
  description: string
  emoji: string
  cards: Flashcard[]
}

export interface FlashcardSession {
  deckId: string
  currentIndex: number
  correctIds: string[]
  incorrectIds: string[]
  isComplete: boolean
}
