'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projects } from '@/data';
import VideoBlock from '@/components/video-block/VideoBlock';
import styles from './Projects.module.css';

const PROJECTS_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4';

export default function Projects() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className={styles.section} id="work" ref={sectionRef}>
      <div className="container">
        <div className={styles.head}>
          <p className="sec-label" data-reveal>03 — PROJECTS</p>
          <h2 className="sec-title" data-reveal data-delay="1">Selected Work</h2>
        </div>
      </div>

      {/* Cinematic video break — full width before the project list */}
      <div className={styles.videoRow} data-reveal data-delay="2">
        <VideoBlock src={PROJECTS_VIDEO} height="50vh" />
      </div>

      <div className="container">
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
