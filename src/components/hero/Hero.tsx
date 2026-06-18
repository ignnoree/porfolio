'use client';

import { useEffect, useRef } from 'react';
import Particles from './Particles';
import styles from './Hero.module.css';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260616_212935_bbf608da-62d1-4f25-9be4-c346e4d09cc8.mp4';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const videoWrap = videoWrapRef.current;
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!video || !videoWrap || !section || !content) return;

    // Attempt autoplay; browsers require muted + user gesture policy
    video.play().catch(() => {});

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const sy = window.pageYOffset;
          const wh = window.innerHeight;
          // progress 0→1 over the first viewport height of scroll
          const progress = Math.min(Math.max(sy / wh, 0), 1);

          // Content: fade up and out
          const fade = Math.max(0, 1 - progress * 2.2);
          content.style.opacity = String(fade);
          content.style.transform = `translateY(${-progress * 52}px)`;

          // Video: subtle slow-zoom + dim as user scrolls in
          const scale = 1 + progress * 0.08;
          const brightness = 1 - progress * 0.35;
          videoWrap.style.transform = `scale(${scale})`;
          videoWrap.style.filter = `brightness(${brightness})`;

          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    // Single viewport height — video plays naturally, no scrubbing
    <section className={styles.hero} ref={sectionRef} id="hero">
      <div className={styles.sticky}>
        <Particles />

        <div ref={videoWrapRef} className={styles.videoWrap}>
          <video
            ref={videoRef}
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        </div>

        <div className={styles.overlay} aria-hidden />
        <div className={styles.glow} aria-hidden />

        <div className={styles.content} ref={contentRef}>
          <p className={styles.eyebrow}>Backend Developer</p>
          <h1 className={styles.title}>
            Building scalable<br />
            systems behind<br />
            beautiful products
          </h1>
          <div className={styles.actions}>
            <a
              href="#work"
              className="btn-white"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className={styles.scrollHint} aria-hidden>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </section>
  );
}
