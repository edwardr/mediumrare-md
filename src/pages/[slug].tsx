import { getAllPostSlugs, getPostData } from '~/lib/utility';
import { BlogPost } from '~/types';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
//import { GetStaticProps, GetStaticPaths } from 'next';
import { Domine } from 'next/font/google'

const font = Domine({
  weight: ['400', '600'],
  subsets: ['latin']
})

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ ...ctx }) {
  const postData = await getPostData(ctx.params.slug);
  return {
    props: postData,
    revalidate: 600,
  };
};

export default function Post(postData: BlogPost) {
  return (
    <>
      <Header />
        <main className={`container ${font.className}`}>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </main>
      <Footer />
    </>
  )
}