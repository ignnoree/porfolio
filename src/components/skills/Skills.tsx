'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skills } from '@/data';
import styles from './Skills.module.css';

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-3px)`;
    el.style.transition = 'none';
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
    el.style.transition = 'transform 0.6s var(--ease)';
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

export default function Skills() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className="sec-label" data-reveal>02 — EXPERTISE</p>
            <h2 className="sec-title" data-reveal data-delay="1">The Stack</h2>
          </div>
          <span className={styles.count} data-reveal>06 Disciplines</span>
        </div>

        <div className={styles.grid}>
          {skills.map((s, i) => (
            <TiltCard
              key={s.num}
              className={styles.card}
            >
              <div data-reveal data-delay={String((i % 3) + 1)}>
                <div className={styles.num}>{s.num}</div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
