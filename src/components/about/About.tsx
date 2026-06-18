'use client';

import { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { stats } from '@/data';
import styles from './About.module.css';

function animateCounter(el: HTMLElement, target: number, suffix: string) {
  const duration = 1400;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = `${Math.round(target * eased)}${suffix}`;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const statsRef = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const grid = statsRef.current;
    if (!grid) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          grid.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
            animateCounter(el, Number(el.dataset.count), el.dataset.suffix ?? '');
          });
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    obs.observe(grid);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} id="about" ref={sectionRef}>
      <div className="container">
        <p className="sec-label" data-reveal>01 — ABOUT</p>

        <div className={styles.grid}>
          {/* Left: narrative */}
          <div className={styles.left}>
            <h2 data-reveal data-delay="1">
              Architecting systems<br />
              that scale without<br />
              limits
            </h2>
            <p data-reveal data-delay="2">
              I&apos;m Mani, a backend developer with a deep passion for distributed
              systems, high-performance APIs, and the infrastructure that powers
              products used by millions.
            </p>
            <p data-reveal data-delay="3">
              My approach combines engineering precision with architectural
              thinking — building systems that are not just functional, but
              resilient, observable, and ready to scale on demand.
            </p>
            <p data-reveal data-delay="4">
              From designing event-driven microservices to optimising database
              query plans, I operate at the intersection of performance and
              reliability.
            </p>

            {/* Stats */}
            <div className={styles.statsGrid} ref={statsRef} data-reveal data-delay="5">
              {stats.map((s) => (
                <div key={s.label} className={styles.statCell}>
                  <span
                    className={styles.statNum}
                    data-count={s.value}
                    data-suffix={s.suffix}
                  >
                    0{s.suffix}
                  </span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: lists */}
          <div className={styles.right}>
            <h3 className={styles.listTitle} data-reveal>Core Focus</h3>
            <ul className={styles.dotList}>
              {[
                'RESTful & GraphQL API Design',
                'Distributed Systems Architecture',
                'Database Modelling & Optimisation',
                'Microservices & Event-Driven Design',
                'Cloud Infrastructure (AWS / GCP)',
              ].map((item, i) => (
                <li key={item} data-reveal data-delay={String(i + 1)}>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className={styles.listTitle} style={{ marginTop: '56px' }} data-reveal>
              Engineering Philosophy
            </h3>
            <ul className={styles.dotList}>
              {[
                'Build for failure, design for recovery',
                'Measure twice, deploy once',
                'Observability is not optional',
                'Simple systems outlast clever ones',
              ].map((item, i) => (
                <li key={item} data-reveal data-delay={String(i + 1)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
