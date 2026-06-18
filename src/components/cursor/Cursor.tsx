'use client';

import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      dot.style.cssText = `left:${e.clientX}px;top:${e.clientY}px`;
    };

    const onEnter = () => document.body.classList.add('cur-expand');
    const onLeave = () => document.body.classList.remove('cur-expand');

    let raf: number;
    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.11;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.11;
      ringEl.style.cssText = `left:${ring.current.x}px;top:${ring.current.y}px`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    document.addEventListener('mousemove', onMove);
    document
      .querySelectorAll('a, button, [data-hover]')
      .forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden />
      <div ref={ringRef} className={styles.ring} aria-hidden />
    </>
  );
}
