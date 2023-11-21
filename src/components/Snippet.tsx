import Link from 'next/link';
import { BlogPost } from '~/types';

export default function Snippet(post: BlogPost) {
  return(
    <>
      <Link key={post.slug} href={post.slug}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.excerpt}</p>
    </>
  )
}