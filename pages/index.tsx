import Head from 'next/head';
import Layout from '@components/layout';
import utilStyles from '@styles/util.module.scss';
import Typewriter from '@components/typewriter';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm{' '}
          <Typewriter
            sentences={['a programmer', 'a speedcuber', 'a vim fanatic']}
          />
        </p>
        <p>Programming languages that I'm exploring:</p>
        <ul>
          <li>C</li>
          <li>JavaScript &amp; TypeScript</li>
          <li>Rust</li>
        </ul>

        <p>
          Most of my projects are open-source and you can find them on{' '}
          <a href="https://github.com/dosu0">GitHub</a>.
        </p>
      </section>
    </Layout>
  );
}
