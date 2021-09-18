import Layout from '@components/layout';
import { getPostIds, getPostData } from '@lib/posts';
import Head from 'next/head';
import Date from '@components/date';
import utilStyles from '@styles/util.module.scss';

interface PostProps {
  post: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
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

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = getPostIds();
  return {
    paths,
    fallback: false,
  };
}
