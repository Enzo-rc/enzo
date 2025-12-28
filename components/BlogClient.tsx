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
    <div className="min-h-screen pt-24 pb-16">
      {/* En-tête de page avec effet parallax */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient animé */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
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
        <div className="absolute inset-0 bg-black/10" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn direction="down">
            <AnimatedText
              text="Blog"
              className="text-5xl md:text-6xl font-bold text-white mb-4 text-center"
            />
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
              Découvrez mes articles, tutoriels et réflexions sur le développement web
            </p>
          </FadeIn>

          {/* Barre de recherche visuelle (non fonctionnelle pour l'instant) */}
          <FadeIn delay={0.5} direction="up">
            <motion.div
              className="max-w-xl mx-auto mt-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Formes décoratives */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm"
          animate={{
            y: [0, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm"
          animate={{
            y: [0, -30, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </section>

      {/* Liste des articles */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          {posts.length > 0 ? (
            <>
              <FadeIn direction="up">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-12"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                  {posts.length} article{posts.length > 1 ? 's' : ''} publié{posts.length > 1 ? 's' : ''}
                </motion.div>
              </FadeIn>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
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
              <div className="text-center py-20 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-xl max-w-2xl mx-auto">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Aucun article pour le moment
                </h2>
                <p className="text-gray-600 text-lg">
                  Le premier article arrive bientôt ! Revenez plus tard.
                </p>
              </div>
            </ScaleIn>
          )}
        </div>
      </section>
    </div>
  );
}

