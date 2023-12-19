import { getSortedPostsData } from '~/lib/utility';
import { BlogPost, BlogCollection } from '~/types';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Snippet from '~/components/Snippet';
import { Domine } from 'next/font/google'

const font = Domine({
  weight: ['400', '600'],
  subsets: ['latin']
})

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default function Blog({ posts }: BlogCollection) {
  return (
    <>
      <Header />
        <main className={`container ${font.className}`}>
          {posts.map((post: BlogPost) => {
            return(
              <Snippet key={post.slug} {...post} />
            )
          })}
        </main>
      <Footer />
    </>
  )
}
