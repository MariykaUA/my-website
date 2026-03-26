import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { blogPosts } from '@/data/blogPosts'

export const useBlogStore = defineStore('blog', () => {
  const posts = ref(blogPosts)
  const activeCountry = ref<string | null>(null)

  const countries = computed(() => {
    const unique = [...new Set(posts.value.map(p => p.country))]
    return unique.sort()
  })

  const filteredPosts = computed(() => {
    if (!activeCountry.value) return posts.value
    return posts.value.filter(p => p.country === activeCountry.value)
  })

  const featuredPosts = computed(() => posts.value.filter(p => p.featured))

  function setCountry(country: string | null) {
    activeCountry.value = country
  }

  function getPostById(id: string) {
    return posts.value.find(p => p.id === id) ?? null
  }

  return { posts, activeCountry, countries, filteredPosts, featuredPosts, setCountry, getPostById }
})
