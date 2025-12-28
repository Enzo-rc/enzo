'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(239, 246, 255, 0)', 'rgba(239, 246, 255, 0.98)']
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(59,130,246,0)', '0px 4px 30px rgba(59,130,246,0.2)']
  );

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl border-b-2 border-blue-200' : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo avec animation bleue */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <motion.span
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% auto',
                }}
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                Enzo.rc
              </motion.span>
              <motion.div
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Navigation desktop */}
          <ul className="hidden md:flex space-x-2 items-center">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <motion.div
                    className="relative px-6 py-3 rounded-full font-semibold text-blue-700 hover:text-blue-900 cursor-pointer transition-colors"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-1 left-6 right-6 h-0.5 bg-blue-600 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </motion.li>
            ))}
            
            {/* Bouton CTA animé bleu */}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/blog">
                <motion.button
                  className="relative px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold overflow-hidden shadow-blue"
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Découvrir</span>
                </motion.button>
              </Link>
            </motion.li>
          </ul>

          {/* Bouton menu mobile */}
          <motion.button
            className="md:hidden text-blue-700 text-3xl p-2 rounded-lg hover:bg-blue-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>

        {/* Menu mobile */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <ul className="py-6 space-y-3">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block py-3 px-6 text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded-xl font-semibold transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
}
