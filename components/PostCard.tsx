'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { HiArrowRight, HiClock } from 'react-icons/hi';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
}

export default function PostCard({ slug, title, date, excerpt, coverImage }: PostCardProps) {
  const formattedDate = format(new Date(date), 'd MMMM yyyy', { locale: fr });

  return (
    <Link href={`/blog/${slug}`}>
      <motion.article
        className="group relative h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image de couverture avec overlay gradient animé */}
        {coverImage && (
          <div className="relative aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-purple-400/40 to-pink-400/40"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-6xl">📝</span>
              </motion.div>
            </div>
            
            {/* Overlay gradient au hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Contenu de la carte */}
        <div className="p-6">
          {/* Date avec icône */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <HiClock className="text-blue-500" />
            <time>{formattedDate}</time>
          </div>

          {/* Titre avec effet gradient au hover */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 line-clamp-2">
            {title}
          </h2>

          {/* Extrait */}
          <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
            {excerpt}
          </p>

          {/* Bouton "Lire la suite" animé */}
          <motion.div
            className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-purple-600 transition-colors"
            whileHover={{ x: 5 }}
          >
            <span>Lire la suite</span>
            <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.div>
        </div>

        {/* Barre décorative animée en bas */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.4 }}
        />
      </motion.article>
    </Link>
  );
}
