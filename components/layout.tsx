import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.scss';
import utilStyles from '@styles/util.module.scss';
import { ReactNode } from 'react';
import Navbar from '@components/navbar';

const name = 'Samuel';
interface LayoutProps {
  children: ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Samuel's Website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/img/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>Welcome to my website!</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/img/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
              </Link>
            </>
          )}
        </header>

        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to the homepage</Link>
          </div>
        )}
      </div>
    </div>
  );
}
