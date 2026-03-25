import { ref } from 'vue'

export function useFlipCard() {
  const isFlipped = ref(false)

  function flip() {
    isFlipped.value = !isFlipped.value
  }

  function reset() {
    isFlipped.value = false
  }

  return { isFlipped, flip, reset }
}
