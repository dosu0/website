import Link from 'next/link';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li>
          <Link href="/">
            home
          </Link>
        </li>
        <li>
          <Link href="/blog">
            blog
          </Link>
        </li>
        {/* TODO: add github logo instead */}
        <li className={styles.right}>
          <Link href="https://github.com/dosu0">
            github
          </Link>
        </li>
      </ul>
    </nav>
  );
}
