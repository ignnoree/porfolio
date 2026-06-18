'use client';

import { useRef, useEffect } from 'react';
import styles from './VideoBlock.module.css';

interface Props {
  src: string;
  height?: string; // e.g. '52vh'
}

export default function VideoBlock({ src, height = '52vh' }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Subtle parallax — video moves slightly slower than scroll
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onScroll = () => {
      const rect = wrap.getBoundingClientRect();
      const wh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > wh) return;

      // centre point of the element relative to the viewport
      const centre = rect.top + rect.height / 2 - wh / 2;
      const shift = centre * 0.12;
      const video = videoRef.current;
      if (video) video.style.transform = `translateY(${shift}px) scale(1.12)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={wrapRef}
      className={styles.wrap}
      style={{ '--h': height } as React.CSSProperties}
    >
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
        <source src={src} type="video/mp4" />
      </video>
      {/* gradient overlays keep text sections readable above/below */}
      <div className={styles.overlayTop} aria-hidden />
      <div className={styles.overlayBottom} aria-hidden />
    </div>
  );
}
