import Cursor from '@/components/cursor/Cursor';
import Nav from '@/components/nav/Nav';
import Hero from '@/components/hero/Hero';
import ImageReveal from '@/components/image-reveal/ImageReveal';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Experience from '@/components/experience/Experience';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <>
      {/* Noise film grain overlay */}
      <div className="noise-layer" aria-hidden />

      {/* Custom cursor — client only */}
      <Cursor />

      {/* Navigation */}
      <Nav />

      <main>
        {/* 1. Hero — scroll-scrubbed video + particles */}
        <Hero />

        {/* 2. Interactive image reveal */}
        <ImageReveal />

        {/* 3. About + stats */}
        <About />

        <div className="divider" />

        {/* 4. Skills grid */}
        <Skills />

        {/* 5. Projects */}
        <Projects />

        <div className="divider" />

        {/* 6. Timeline */}
        <Experience />

        {/* 7. Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
