'use client';

import Link from "next/link";
import PostCard from "@/components/PostCard";
import FadeIn from "@/components/animations/FadeIn";
import AnimatedText from "@/components/animations/AnimatedText";
import ScaleIn from "@/components/animations/ScaleIn";
import FloatingElement from "@/components/animations/FloatingElement";
import AnimatedBackground from "@/components/animations/AnimatedBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowRight, HiCode, HiLightningBolt, HiSparkles } from "react-icons/hi";

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
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Arrière-plan animé avec particules */}
      <AnimatedBackground />
      
      {/* Section Hero ultra-moderne */}
      <motion.section 
        style={{ scale, opacity }}
        className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden"
      >
        {/* Gradient animé en arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge animé */}
            <FadeIn delay={0.2}>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 shadow-lg mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <HiSparkles className="text-blue-600 animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Bienvenue sur mon portfolio
                </span>
              </motion.div>
            </FadeIn>

            {/* Titre principal avec animation de texte */}
            <AnimatedText
              text="Créateur d'expériences web modernes"
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent leading-tight"
              delay={0.3}
            />

            {/* Sous-titre */}
            <FadeIn delay={0.5} direction="up">
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Développeur passionné par les{' '}
                <span className="font-semibold text-blue-600">technologies modernes</span>,
                le <span className="font-semibold text-purple-600">design innovant</span> et
                la <span className="font-semibold text-pink-600">création de valeur</span>
              </p>
            </FadeIn>

            {/* Boutons CTA */}
            <FadeIn delay={0.7} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/blog">
                  <motion.button
                    className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      Explorer le blog
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                <Link href="/about">
                  <motion.button
                    className="px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 font-semibold text-lg hover:border-blue-400 transition-all shadow-lg"
                    whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                  </motion.button>
                </Link>
              </div>
            </FadeIn>

            {/* Icônes flottantes décoratives */}
            <div className="mt-20 flex justify-center gap-8">
              <FloatingElement delay={0} duration={3} yOffset={15}>
                <ScaleIn delay={0.9}>
                  <motion.div
                    className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <HiCode className="text-4xl text-blue-600" />
                  </motion.div>
                </ScaleIn>
              </FloatingElement>

              <FloatingElement delay={0.5} duration={4} yOffset={20}>
                <ScaleIn delay={1.1}>
                  <motion.div
                    className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-purple-100"
                    whileHover={{ rotate: -5, scale: 1.1 }}
                  >
                    <HiLightningBolt className="text-4xl text-purple-600" />
                  </motion.div>
                </ScaleIn>
              </FloatingElement>

              <FloatingElement delay={1} duration={3.5} yOffset={18}>
                <ScaleIn delay={1.3}>
                  <motion.div
                    className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-pink-100"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <HiSparkles className="text-4xl text-pink-600" />
                  </motion.div>
                </ScaleIn>
              </FloatingElement>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <FadeIn delay={1.5}>
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-gray-600 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </FadeIn>
      </motion.section>

      {/* Section Articles récents avec glassmorphism */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-white/50 to-white">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Articles récents
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Découvrez mes dernières réflexions et tutoriels sur le développement web
              </p>
            </div>
          </FadeIn>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post, index) => (
                <ScaleIn key={post.slug} delay={index * 0.2}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
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
              <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-xl">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Aucun article pour le moment
                </h3>
                <p className="text-gray-600">
                  Le premier article arrive bientôt ! Revenez plus tard.
                </p>
              </div>
            </FadeIn>
          )}

          {posts.length > 0 && (
            <FadeIn delay={0.8} direction="up">
              <div className="text-center mt-12">
                <Link href="/blog">
                  <motion.button
                    className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-xl"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      Voir tous les articles
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
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

