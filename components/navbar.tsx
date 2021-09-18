import Link from 'next/link';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </li>
        {/* TODO: add github logo instead */}
        <li className={styles.right}>
          <Link href="https://github.com/plat-phoenix">
            <a>github</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
