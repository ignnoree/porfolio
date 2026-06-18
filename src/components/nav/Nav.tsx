'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Nav.module.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.pageYOffset > 50);
      const progress =
        window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
      if (barRef.current)
        barRef.current.style.transform = `scaleX(${progress})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchor = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div ref={barRef} className="progress-bar" aria-hidden />

      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <span className={styles.logo}>MANI</span>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => { e.preventDefault(); handleAnchor(l.href); }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta} onClick={(e) => { e.preventDefault(); handleAnchor('#contact'); }}>
          Let&apos;s Talk
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <button className={styles.mobileClose} onClick={() => setMenuOpen(false)} aria-label="Close">✕</button>
        {links.map((l) => (
          <a key={l.href} href={l.href} className={styles.mobileLink} onClick={(e) => { e.preventDefault(); handleAnchor(l.href); }}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className={styles.mobileLink} onClick={(e) => { e.preventDefault(); handleAnchor('#contact'); }}>
          Contact
        </a>
      </div>
    </>
  );
}
