// src/components/Footer.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-ZA', { timeZone: 'Africa/Johannesburg', hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="c-footer">
      <div className="c-footer__container">
        {/* === COLUMN 1: LEGAL, COPYRIGHT & CLOCK === */}
        <div className="c-footer__legal">
          <p className="c-footer__copyright">&copy; {currentYear} Coderon (Pty) Ltd.</p>
          <div className="c-footer__links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
          {/* FIX: Clock moved here to the left, it will not be blocked */}
          <div className="c-footer__clock" aria-label="Current time in Johannesburg">
            {currentTime && `${currentTime} SAST`}
          </div>
        </div>

        {/* === COLUMN 2: TRUST BADGE & REGISTRATION NUMBER === */}
        <div className="c-footer__trust-badge">
          <p className="c-footer__trust-text">Verified & Registered Business</p>
          <a 
            href="https://www.companypartners.co.za" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Verified by Company Partners"
            className="c-footer__badge-link"
          >
            <Image 
              src="/badges/company-partners-badge.png"
              alt="Official Company Partners Registration Badge"
              width={160}
              height={53}
              quality={90}
            />
          </a>
          {/* FIX: Registration number added directly under the badge */}
          <p className="c-footer__reg-number">Reg: 2025 / 482790 / 07</p>
        </div>

        {/* === COLUMN 3: SOCIAL LINKS === */}
        <div className="c-footer__connect">
          <div className="c-footer__social">
            <a href="https://github.com/Ronnie-coder" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/coderon-coderon-8b302b360" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://x.com/Coderon28" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
