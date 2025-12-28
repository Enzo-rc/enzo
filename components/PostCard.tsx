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
        className="group relative h-full bg-white rounded-3xl shadow-lg hover:shadow-blue-lg transition-all duration-300 overflow-hidden border-2 border-blue-100"
        whileHover={{ y: -8, borderColor: '#3B82F6' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image de couverture avec dégradé bleu */}
        {coverImage && (
          <div className="relative aspect-video bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-blue-600/50"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.3, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-7xl filter drop-shadow-lg">📝</span>
              </motion.div>
            </div>
            
            {/* Overlay bleu au hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-blue-700/90 via-blue-600/50 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Contenu de la carte */}
        <div className="p-7">
          {/* Date avec icône bleue */}
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-4 font-medium">
            <HiClock className="text-lg" />
            <time>{formattedDate}</time>
          </div>

          {/* Titre avec effet bleu au hover */}
          <h2 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
            {title}
          </h2>

          {/* Extrait */}
          <p className="text-blue-700/70 line-clamp-3 mb-6 leading-relaxed">
            {excerpt}
          </p>

          {/* Bouton "Lire la suite" animé */}
          <motion.div
            className="flex items-center gap-2 text-blue-600 font-bold group-hover:text-blue-700 transition-colors"
            whileHover={{ x: 8 }}
          >
            <span>Lire la suite</span>
            <HiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
          </motion.div>
        </div>

        {/* Barre décorative bleue animée en bas */}
        <motion.div
          className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />

        {/* Badge coin supérieur */}
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-500/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <HiArrowRight className="text-blue-600 text-xl" />
        </motion.div>
      </motion.article>
    </Link>
  );
}
