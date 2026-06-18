'use client';

import styles from './VideoBlock.module.css';

interface Props {
  src: string;
}

export default function VideoBlock({ src }: Props) {
  return (
    <div className={styles.wrap}>
      <video
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
      <div className={styles.overlayTop} aria-hidden />
      <div className={styles.overlayBottom} aria-hidden />
    </div>
  );
}
