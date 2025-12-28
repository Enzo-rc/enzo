import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import PostCard from "@/components/PostCard";

export default function Home() {
  // Récupérer les 3 articles les plus récents
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      {/* Section héro */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bienvenue sur Enzo.rc
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Un espace de partage et de réflexion où je documente mes apprentissages, 
              mes projets et mes idées.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/blog"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Découvrir le blog
              </Link>
              <Link 
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                À propos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section articles récents */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Articles récents
          </h2>
          
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  coverImage={post.coverImage}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-12">
              Aucun article publié pour le moment. Revenez bientôt !
            </p>
          )}

          {posts.length > 0 && (
            <div className="text-center mt-12">
              <Link 
                href="/blog"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Voir tous les articles
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
