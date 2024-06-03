import Layout from '@components/layout';
import { getPostIds, getPostData, PostData } from '@lib/posts';
import Head from 'next/head';
import Date from '@components/date';
import utilStyles from '@styles/util.module.scss';
import { GetStaticProps } from 'next';


interface PostProps {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{post.title} | Blog</title>
        <meta name="og:title" content={post.title} />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <small>
          <Date dateString={post.date} />
        </small>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticProps = (async (ctx) => {
  const post = await getPostData(ctx.params!.id as string);

  return {
    props: {
      post,
    },
  };
}) satisfies GetStaticProps<PostProps>;

export async function getStaticPaths() {
  const paths = getPostIds();
  return {
    paths,
    fallback: false,
  };
}
