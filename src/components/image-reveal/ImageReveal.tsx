'use client';

import { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ImageReveal.module.css';

const BASE_IMG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85';

const REVEAL_IMG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85';

export default function ImageReveal() {
  const containerRef = useScrollReveal<HTMLElement>();
  const wrapRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 50, y: 50 });
  const lerped = useRef({ x: 50, y: 50 });
  const radius = useRef({ current: 0, target: 0 });

  useEffect(() => {
    const wrap = wrapRef.current;
    const layer = layerRef.current;
    const ring = ringRef.current;
    if (!wrap || !layer || !ring) return;

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      mouse.current.x = ((e.clientX - r.left) / r.width) * 100;
      mouse.current.y = ((e.clientY - r.top) / r.height) * 100;
      ring.style.left = `${e.clientX - r.left}px`;
      ring.style.top = `${e.clientY - r.top}px`;
    };

    const onEnter = () => { radius.current.target = 185; };
    const onLeave = () => { radius.current.target = 0; };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const t = e.touches[0];
      const r = wrap.getBoundingClientRect();
      mouse.current.x = ((t.clientX - r.left) / r.width) * 100;
      mouse.current.y = ((t.clientY - r.top) / r.height) * 100;
      radius.current.target = 185;
    };
    const onTouchEnd = () => { radius.current.target = 0; };

    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseenter', onEnter);
    wrap.addEventListener('mouseleave', onLeave);
    wrap.addEventListener('touchmove', onTouchMove, { passive: false });
    wrap.addEventListener('touchend', onTouchEnd);

    let raf: number;
    const loop = () => {
      lerped.current.x += (mouse.current.x - lerped.current.x) * 0.08;
      lerped.current.y += (mouse.current.y - lerped.current.y) * 0.08;
      radius.current.current += (radius.current.target - radius.current.current) * 0.10;

      const r = radius.current.current;
      const x = lerped.current.x;
      const y = lerped.current.y;
      const mask = `radial-gradient(circle ${r}px at ${x}% ${y}%, #000 0%, #000 45%, rgba(0,0,0,0.5) 72%, transparent 100%)`;
      layer.style.webkitMaskImage = mask;
      layer.style.maskImage = mask;

      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseenter', onEnter);
      wrap.removeEventListener('mouseleave', onLeave);
      wrap.removeEventListener('touchmove', onTouchMove);
      wrap.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.inner}>
        {/* Left: interactive image */}
        <div className={styles.imgWrap} ref={wrapRef} data-hover>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.base} src={BASE_IMG} alt="System architecture base view" loading="lazy" />
          <div className={styles.layer} ref={layerRef}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={REVEAL_IMG} alt="Hidden layer" loading="lazy" />
          </div>
          <div className={styles.ring} ref={ringRef} aria-hidden />
        </div>

        {/* Right: text */}
        <div className={styles.text}>
          <p className={`sec-label ${styles.label}`} data-reveal>02 — VISION</p>
          <h2 data-reveal data-delay="1">
            Systems thinking<br />beneath the surface
          </h2>
          <p data-reveal data-delay="2">
            Every seamless user experience is powered by invisible infrastructure.
            I design the layers no one sees — resilient, performant, and precise.
          </p>
          <p data-reveal data-delay="3">
            Move your cursor across the image to explore what lies beneath.
          </p>
          <span className={styles.hint} data-reveal data-delay="4">
            Explore the layers
          </span>
        </div>
      </div>
    </section>
  );
}
