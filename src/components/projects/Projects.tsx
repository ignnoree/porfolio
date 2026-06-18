'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projects } from '@/data';
import styles from './Projects.module.css';

export default function Projects() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className={styles.section} id="work" ref={sectionRef}>
      <div className="container">
        <div className={styles.head}>
          <p className="sec-label" data-reveal>03 — PROJECTS</p>
          <h2 className="sec-title" data-reveal data-delay="1">Selected Work</h2>
        </div>

        <div className={styles.list}>
          {projects.map((p) => (
            <article key={p.num} className={styles.item} data-reveal>
              <span className={styles.num}>{p.num}</span>

              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className={styles.year}>{p.year}</span>
                  <span className={styles.type}>{p.type}</span>
                </div>

                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>

                <div className={styles.highlights}>
                  <h4 className={styles.highlightsTitle}>Architecture Highlights</h4>
                  <ul>
                    {p.highlights.map((h) => (
                      <li key={h} className={styles.highlight}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.tech}>
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <span className={styles.arrow} aria-hidden>↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
