'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiHeart } from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Enzo-rc' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
  ];

  const footerLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
      {/* Motif de fond animé bleu */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Colonne 1 - Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <motion.h3
                className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Enzo.rc
              </motion.h3>
            </Link>
            <p className="text-blue-200 leading-relaxed">
              Créateur d&apos;expériences web modernes. Passionné par le développement et l&apos;innovation.
            </p>
          </motion.div>

          {/* Colonne 2 - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-blue-200">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.span
                      className="text-blue-300 hover:text-white transition-colors cursor-pointer inline-block"
                      whileHover={{ x: 8 }}
                    >
                      → {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-blue-200">Suivez-moi</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-blue-700/50 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 transition-colors border border-blue-500/30"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="text-lg font-bold text-blue-100">{social.name[0]}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Séparateur */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Copyright */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="flex items-center gap-2">
            © {currentYear} Enzo.rc — Créé avec
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <HiHeart className="text-red-400" />
            </motion.span>
            et Next.js
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
