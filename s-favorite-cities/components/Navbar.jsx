// components/Navbar.jsx
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/search">Search</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/citypage">City Info</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/favorites">Favorite Cities</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
