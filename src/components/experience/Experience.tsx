'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { experience } from '@/data';
import VideoBlock from '@/components/video-block/VideoBlock';
import styles from './Experience.module.css';

const EXP_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4';

export default function Experience() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className={styles.section} id="experience" ref={sectionRef}>
      <div className="container">
        <p className="sec-label" data-reveal>04 — EXPERIENCE</p>
        <h2 className="sec-title" data-reveal data-delay="1">Timeline</h2>
      </div>

      {/* Cinematic video break between header and timeline */}
      <div className={styles.videoRow} data-reveal data-delay="2">
        <VideoBlock src={EXP_VIDEO} height="50vh" />
      </div>

      <div className="container">
        <div className={styles.timeline}>
          {experience.map((e, i) => (
            <div key={e.period} className={styles.item} data-reveal data-delay={String(i + 1)}>
              <div className={styles.dot} />
              <div className={styles.period}>{e.period}</div>
              <div className={styles.role}>{e.role}</div>
              <div className={styles.company}>{e.company}</div>
              <p className={styles.desc}>{e.desc}</p>
              <div className={styles.tags}>
                {e.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
