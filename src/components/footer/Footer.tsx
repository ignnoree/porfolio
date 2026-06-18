import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.logo}>MANI</span>
          <span className={styles.copy}>© 2026 Mani. All rights reserved.</span>
          <nav className={styles.links} aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
