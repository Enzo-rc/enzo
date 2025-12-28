import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/markdown';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Générer les routes statiques
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = format(new Date(post.date), 'd MMMM yyyy', { locale: fr });

  return (
    <div>
      {/* En-tête de l'article */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            ← Retour au blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <p className="text-blue-100 text-lg">
            {formattedDate}
          </p>
        </div>
      </section>

      {/* Contenu de l'article */}
      <article className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-blue-600 prose-pre:bg-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Navigation */}
      <section className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            ← Voir tous les articles
          </Link>
        </div>
      </section>
    </div>
  );
}


