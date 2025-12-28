import { getAllPosts } from "@/lib/markdown";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      {/* En-tête de page */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-xl text-blue-100">
            Découvrez mes articles, tutoriels et réflexions
          </p>
        </div>
      </section>

      {/* Liste des articles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {posts.length > 0 ? (
            <>
              <p className="text-gray-600 mb-8">
                {posts.length} article{posts.length > 1 ? 's' : ''} publié{posts.length > 1 ? 's' : ''}
              </p>
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
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Aucun article pour le moment
              </h2>
              <p className="text-gray-600">
                Le premier article arrive bientôt ! Revenez plus tard.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


