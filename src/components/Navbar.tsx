// src/components/Navbar.tsx

"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
  href: string;
  label: string;
}

// ==================================================================
// FIX: THE NAVIGATION LINKS ARE NOW COMPLETE AND CORRECT
// ==================================================================
const navLinks: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/playroom', label: 'Playroom' },
  { href: '/about', label: 'About Us' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoTextRef = useRef<HTMLSpanElement>(null);
  const logoDotRef = useRef<HTMLSpanElement>(null);

  // The animations are perfect, no changes needed here.
  useEffect(() => {
    if (logoTextRef.current) {
      gsap.fromTo(
        logoTextRef.current.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: 'power3.out' }
      );
    }
    gsap.to(logoDotRef.current, {
      opacity: 0, repeat: -1, yoyo: true, duration: 0.8, ease: 'power1.inOut'
    });
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="c-navbar">
      <div className="c-navbar__container">
        <Link href="/" className="c-navbar__logo" onClick={closeMenu}>
          <Image src="/logo-coderon.png" alt="Coderon Logo" width={32} height={32} priority />
          <span ref={logoTextRef} className="c-navbar__logo-text">
            {'Coderon'.split('').map((char, index) => (
              <span key={index} style={{ display: 'inline-block' }}>{char}</span>
            ))}
          </span>
          <span ref={logoDotRef}>.</span>
        </Link>

        {/* Both desktop and mobile menus are built from the corrected navLinks array above */}
        <div className="c-navbar__desktop-items">
          <nav>
            <ul className="c-navbar__nav-links">
              {navLinks.map((link) => (
                <li key={link.href} className="c-navbar__link">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/contact" className="c-navbar__cta">
            Free Consultation
          </Link>
        </div>

        <button className="c-navbar__mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav className={`c-navbar__mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href} className="c-navbar__link">
              <Link href={link.href} onClick={closeMenu}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="c-navbar__cta" onClick={closeMenu}>
          Free Consultation
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
