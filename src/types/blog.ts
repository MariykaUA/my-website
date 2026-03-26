export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  country: string
  countryCode: string
  tags: string[]
  publishedAt: string
  readTimeMinutes: number
  featured: boolean
}
