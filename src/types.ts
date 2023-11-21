interface BlogPost {
  slug: string,
  title: string,
  excerpt: string,
  date: string,
  contentHtml: string
}

interface BlogCollection {
  posts: BlogPost[]
}

export type {
  BlogPost,
  BlogCollection
}