'use client';

import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiClock, HiEye } from 'react-icons/hi';

interface PostClientProps {
  post: {
    title: string;
    date: string;
    content: string;
  };
  formattedDate: string;
}

export default function PostClient({ post, formattedDate }: PostClientProps) {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      {/* En-tête de l'article bleu */}
      <section className="relative py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <FadeIn direction="left">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-3 text-blue-100 hover:text-white mb-10 transition-colors group font-semibold text-lg"
            >
              <motion.div
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors"
                whileHover={{ x: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <HiArrowLeft className="text-2xl" />
              </motion.div>
              <span>Retour au blog</span>
            </Link>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="up">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
              whileHover={{ scale: 1.01 }}
            >
              {post.title}
            </motion.h1>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-wrap items-center gap-8 text-blue-100 text-lg">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
                <HiClock className="text-2xl" />
                <time className="font-medium">{formattedDate}</time>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
                <HiEye className="text-2xl" />
                <span className="font-medium">5 min de lecture</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Vague SVG bleue animée */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="white"
              animate={{
                d: [
                  "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                  "M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,69.3C672,64,768,64,864,69.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                  "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </svg>
        </div>
      </section>

      {/* Contenu de l'article */}
      <article className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScaleIn>
            <motion.div
              className="prose prose-xl max-w-none 
                prose-headings:text-blue-900 prose-headings:font-bold
                prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl
                prose-p:text-blue-800 prose-p:leading-relaxed
                prose-a:text-blue-600 prose-a:no-underline prose-a:font-semibold hover:prose-a:underline
                prose-strong:text-blue-900 prose-strong:font-bold
                prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-3 prose-code:py-1 prose-code:rounded-lg
                prose-pre:bg-blue-950 prose-pre:text-blue-50 prose-pre:shadow-blue
                prose-ul:text-blue-800 prose-ol:text-blue-800
                prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-blue-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </ScaleIn>
        </div>
      </article>

      {/* Navigation et CTA */}
      <section className="border-t-2 border-blue-200 py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn direction="up">
            <div className="flex flex-col sm:flex-row gap-6 justify-between items-center">
              <Link href="/blog">
                <motion.button
                  className="group px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg shadow-blue-lg hover:shadow-blue transition-shadow"
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    <HiArrowLeft className="text-xl group-hover:-translate-x-2 transition-transform" />
                    Tous les articles
                  </span>
                </motion.button>
              </Link>

              <motion.button
                className="px-10 py-5 rounded-full bg-white border-2 border-blue-300 text-blue-700 font-bold text-lg hover:bg-blue-50 hover:border-blue-500 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partager l&apos;article
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
