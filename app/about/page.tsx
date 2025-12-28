export default function AboutPage() {
  return (
    <div>
      {/* En-tête de page */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            À propos
          </h1>
          <p className="text-xl text-blue-100">
            Qui je suis et pourquoi ce site existe
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bonjour ! 👋
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Je m&apos;appelle Enzo et je suis passionné par le développement web, 
                la technologie et le partage de connaissances. Ce site est mon espace 
                personnel où je documente mes apprentissages, mes projets et mes réflexions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Que vous soyez développeur débutant, curieux de technologie ou simplement 
                de passage, j&apos;espère que vous trouverez ici du contenu intéressant et utile.
              </p>
            </div>

            {/* Parcours */}
            <div className="mb-12 bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Mon parcours
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mon aventure dans le monde du développement a commencé par curiosité. 
                Fasciné par la capacité de créer des solutions numériques, j&apos;ai décidé 
                d&apos;apprendre par moi-même et de partager ce chemin avec d&apos;autres.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Aujourd&apos;hui, je continue d&apos;explorer de nouvelles technologies, de relever 
                des défis et de documenter mes découvertes à travers ce blog.
              </p>
            </div>

            {/* Ce que vous trouverez ici */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ce que vous trouverez ici
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    📚 Tutoriels & Guides
                  </h3>
                  <p className="text-gray-600">
                    Des articles pratiques pour apprendre et progresser en développement web
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    💡 Réflexions
                  </h3>
                  <p className="text-gray-600">
                    Mes pensées sur la technologie, l&apos;apprentissage et l&apos;innovation
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    🚀 Projets
                  </h3>
                  <p className="text-gray-600">
                    Présentation de mes créations et expérimentations
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    🔧 Outils & Ressources
                  </h3>
                  <p className="text-gray-600">
                    Mes recommandations d&apos;outils et ressources utiles
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Restons en contact
              </h2>
              <p className="text-blue-100 mb-6">
                Vous avez une question, une suggestion ou simplement envie d&apos;échanger ? 
                N&apos;hésitez pas à me contacter !
              </p>
              <div className="flex gap-4">
                <a 
                  href="mailto:contact@example.com" 
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


