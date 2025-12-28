import Link from 'next/link';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
}

export default function PostCard({ slug, title, date, excerpt, coverImage }: PostCardProps) {
  // Formater la date en français
  const formattedDate = format(new Date(date), 'd MMMM yyyy', { locale: fr });

  return (
    <Link href={`/blog/${slug}`}>
      <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
        {/* Image de couverture (si disponible) */}
        {coverImage && (
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-blue-400 text-6xl">
              📝
            </div>
          </div>
        )}

        {/* Contenu de la carte */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {title}
          </h2>
          
          <p className="text-sm text-gray-500 mb-3">
            {formattedDate}
          </p>

          <p className="text-gray-600 line-clamp-3">
            {excerpt}
          </p>

          <div className="mt-4">
            <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Lire la suite →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}


