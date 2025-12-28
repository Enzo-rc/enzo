'use client';

import Link from "next/link";
import PostCard from "@/components/PostCard";
import FadeIn from "@/components/animations/FadeIn";
import AnimatedText from "@/components/animations/AnimatedText";
import ScaleIn from "@/components/animations/ScaleIn";
import FloatingElement from "@/components/animations/FloatingElement";
import AnimatedBackground from "@/components/animations/AnimatedBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowRight, HiCode, HiLightningBolt, HiSparkles, HiStar } from "react-icons/hi";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
}

interface HomeClientProps {
  posts: Post[];
}

export default function HomeClient({ posts }: HomeClientProps) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Arrière-plan animé avec particules bleues */}
      <AnimatedBackground />
      
      {/* Section Hero - Design bleu élégant */}
      <motion.section 
        style={{ scale, opacity }}
        className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden"
      >
        {/* Gradient d'arrière-plan bleu animé */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white opacity-70"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Cercles décoratifs bleus */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge animé bleu */}
            <FadeIn delay={0.2}>
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-300/50 shadow-lg mb-8"
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.8)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <HiStar className="text-blue-600" />
                </motion.div>
                <span className="text-sm font-semibold text-blue-700">
                  Développeur Web Full Stack
                </span>
              </motion.div>
            </FadeIn>

            {/* Titre principal avec effet shimmer bleu */}
            <FadeIn delay={0.3}>
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent leading-tight"
                style={{
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                Créateur d'expériences
                <br />
                <span className="text-blue-800">web exceptionnelles</span>
              </motion.h1>
            </FadeIn>

            {/* Sous-titre élégant */}
            <FadeIn delay={0.5} direction="up">
              <p className="text-xl md:text-2xl text-blue-900/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                Passionné par les <span className="text-blue-600 font-bold">technologies modernes</span> et
                la création de <span className="text-blue-700 font-bold">solutions innovantes</span>
              </p>
            </FadeIn>

            {/* Boutons CTA bleus */}
            <FadeIn delay={0.7} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/blog">
                  <motion.button
                    className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg shadow-blue-lg overflow-hidden"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.5)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      <span>Explorer le blog</span>
                      <HiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                <Link href="/about">
                  <motion.button
                    className="px-10 py-5 rounded-full bg-white border-2 border-blue-300 text-blue-700 font-bold text-lg shadow-lg hover:shadow-blue transition-all"
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: '#2563EB',
                      backgroundColor: '#EFF6FF'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                  </motion.button>
                </Link>
              </div>
            </FadeIn>

            {/* Icônes flottantes bleues */}
            <div className="mt-24 flex justify-center gap-12">
              <FloatingElement delay={0} duration={3} yOffset={15}>
                <ScaleIn delay={0.9}>
                  <motion.div
                    className="p-5 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-lg"
                    whileHover={{ rotate: 10, scale: 1.15 }}
                  >
                    <HiCode className="text-5xl text-white" />
                  </motion.div>
                </ScaleIn>
              </FloatingElement>

              <FloatingElement delay={0.5} duration={4} yOffset={20}>
                <ScaleIn delay={1.1}>
                  <motion.div
                    className="p-5 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 shadow-blue-lg"
                    whileHover={{ rotate: -10, scale: 1.15 }}
                  >
                    <HiLightningBolt className="text-5xl text-white" />
                  </motion.div>
                </ScaleIn>
              </FloatingElement>

              <FloatingElement delay={1} duration={3.5} yOffset={18}>
                <ScaleIn delay={1.3}>
                  <motion.div
                    className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-blue-lg"
                    whileHover={{ rotate: 10, scale: 1.15 }}
                  >
                    <HiSparkles className="text-5xl text-white" />
                  </motion.div>
                </ScaleIn>
              </FloatingElement>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll bleu */}
        <FadeIn delay={1.5}>
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-7 h-12 rounded-full border-2 border-blue-400 flex justify-center p-2">
              <motion.div
                className="w-2 h-2 bg-blue-600 rounded-full"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </FadeIn>
      </motion.section>

      {/* Section Articles récents - Design bleu */}
      <section className="relative py-32 bg-gradient-to-b from-white via-blue-50/50 to-blue-100/30">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <motion.div
                className="inline-block mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                  Blog
                </span>
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 text-blue-900"
                whileHover={{ scale: 1.02 }}
              >
                Articles <span className="text-blue-600">récents</span>
              </motion.h2>
              <p className="text-xl text-blue-700/70 max-w-2xl mx-auto">
                Découvrez mes dernières réflexions sur le développement web
              </p>
            </div>
          </FadeIn>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post, index) => (
                <ScaleIn key={post.slug} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ y: -12 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <PostCard
                      slug={post.slug}
                      title={post.title}
                      date={post.date}
                      excerpt={post.excerpt}
                      coverImage={post.coverImage}
                    />
                  </motion.div>
                </ScaleIn>
              ))}
            </div>
          ) : (
            <FadeIn direction="up">
              <motion.div 
                className="text-center py-20 bg-white rounded-3xl border-2 border-blue-200 shadow-blue max-w-2xl mx-auto"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="text-7xl mb-6"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  📝
                </motion.div>
                <h3 className="text-3xl font-bold text-blue-900 mb-3">
                  Aucun article pour le moment
                </h3>
                <p className="text-blue-600 text-lg">
                  Le premier article arrive bientôt !
                </p>
              </motion.div>
            </FadeIn>
          )}

          {posts.length > 0 && (
            <FadeIn delay={0.8} direction="up">
              <div className="text-center mt-16">
                <Link href="/blog">
                  <motion.button
                    className="group px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg shadow-blue-lg"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-3">
                      <span>Voir tous les articles</span>
                      <HiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
}
