import Link from 'next/link';
import Head from 'next/head';
import Layout from '@components/layout';
import styles from '@styles/util.module.scss';
import Date from '@components/date';
import { getSortedPostsInfo } from '@lib/posts';

interface BlogProps {
  posts: {
    id: string;
    title: string;
    date: string;
  }[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta name="og:title" content="Samuel's Blog" />
      </Head>
      {/* blog posts */}
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h1 className={styles.headingXl}>Blog Posts</h1>
        <ul className={styles.bareList}>
          {posts.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsInfo();
  return {
    props: {
      posts,
    },
  };
}
