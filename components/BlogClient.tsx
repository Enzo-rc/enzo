'use client';

import PostCard from "@/components/PostCard";
import FadeIn from "@/components/animations/FadeIn";
import AnimatedText from "@/components/animations/AnimatedText";
import ScaleIn from "@/components/animations/ScaleIn";
import { motion } from "framer-motion";
import { HiSearch } from "react-icons/hi";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
}

interface BlogClientProps {
  posts: Post[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      {/* En-tête de page bleu */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient animé bleu */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn direction="down">
            <AnimatedText
              text="Blog"
              className="text-6xl md:text-7xl font-bold text-white mb-6 text-center"
            />
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <p className="text-2xl text-blue-100 text-center max-w-3xl mx-auto leading-relaxed">
              Découvrez mes articles, tutoriels et réflexions sur le développement web
            </p>
          </FadeIn>

          {/* Barre de recherche visuelle */}
          <FadeIn delay={0.5} direction="up">
            <motion.div
              className="max-w-2xl mx-auto mt-10"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <HiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-400 text-2xl" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  className="w-full pl-16 pr-6 py-5 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-blue-300/50 shadow-blue-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all text-blue-900 placeholder-blue-400 text-lg font-medium"
                />
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Formes décoratives bleues */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-400/20 backdrop-blur-sm"
          animate={{
            y: [0, 40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-300/20 backdrop-blur-sm"
          animate={{
            y: [0, -40, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </section>

      {/* Liste des articles */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {posts.length > 0 ? (
            <>
              <FadeIn direction="up">
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-100 text-blue-700 font-bold mb-16 shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
                >
                  <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                  {posts.length} article{posts.length > 1 ? 's' : ''} publié{posts.length > 1 ? 's' : ''}
                </motion.div>
              </FadeIn>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <PostCard
                      slug={post.slug}
                      title={post.title}
                      date={post.date}
                      excerpt={post.excerpt}
                      coverImage={post.coverImage}
                    />
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <ScaleIn>
              <div className="text-center py-24 bg-white rounded-3xl border-2 border-blue-200 shadow-blue max-w-2xl mx-auto">
                <motion.div
                  className="text-8xl mb-8"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  📝
                </motion.div>
                <h2 className="text-4xl font-bold text-blue-900 mb-4">
                  Aucun article pour le moment
                </h2>
                <p className="text-blue-600 text-xl">
                  Le premier article arrive bientôt !
                </p>
              </div>
            </ScaleIn>
          )}
        </div>
      </section>
    </div>
  );
}
