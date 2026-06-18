'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className={styles.section} id="contact" ref={sectionRef}>
      <div className={styles.glow} aria-hidden />
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.label} data-reveal>05 — CONTACT</p>

          <h2 className={styles.title} data-reveal data-delay="1">
            Let&apos;s build<br />
            <em>something great.</em>
          </h2>

          <div className={styles.actions} data-reveal data-delay="2">
            <a
              href="https://t.me/heartp5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              Send a Message
            </a>
          </div>

          <div className={styles.socials} data-reveal data-delay="3">
            <a
              href="https://github.com/ignnoree"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
