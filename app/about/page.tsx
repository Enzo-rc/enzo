'use client';

import FadeIn from "@/components/animations/FadeIn";
import AnimatedText from "@/components/animations/AnimatedText";
import ScaleIn from "@/components/animations/ScaleIn";
import FloatingElement from "@/components/animations/FloatingElement";
import { motion } from "framer-motion";
import { HiMail, HiCode, HiLightningBolt, HiSparkles, HiHeart } from "react-icons/hi";

export default function AboutPage() {
  const skills = [
    { icon: HiCode, name: "Tutoriels & Guides", color: "blue" },
    { icon: HiLightningBolt, name: "Réflexions", color: "purple" },
    { icon: HiSparkles, name: "Projets", color: "pink" },
    { icon: HiHeart, name: "Outils & Ressources", color: "red" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Section Hero */}
      <section className="relative py-20 overflow-hidden">
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
        
        <div className="absolute inset-0 bg-black/10" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn direction="down">
            <AnimatedText
              text="À propos"
              className="text-5xl md:text-6xl font-bold text-white mb-4 text-center"
            />
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
              Qui je suis et pourquoi ce site existe
            </p>
          </FadeIn>
        </div>

        {/* Éléments décoratifs flottants */}
        <FloatingElement delay={0} duration={4} yOffset={20}>
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm" />
        </FloatingElement>
        <FloatingElement delay={1} duration={5} yOffset={25}>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm" />
        </FloatingElement>
      </section>

      {/* Contenu principal */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Introduction */}
          <ScaleIn>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
              <FadeIn direction="right">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  Bonjour ! 👋
                </h2>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Je m&apos;appelle <span className="font-bold text-blue-600">Enzo</span> et je suis passionné par le développement web, 
                  la technologie et le partage de connaissances. Ce site est mon espace 
                  personnel où je documente mes apprentissages, mes projets et mes réflexions.
                </p>
              </FadeIn>
              <FadeIn delay={0.4} direction="up">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Que vous soyez développeur débutant, curieux de technologie ou simplement 
                  de passage, j&apos;espère que vous trouverez ici du contenu intéressant et utile.
                </p>
              </FadeIn>
            </div>
          </ScaleIn>

          {/* Parcours */}
          <ScaleIn delay={0.3}>
            <motion.div
              className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 mb-12 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Motif de fond animé */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  backgroundImage: [
                    'radial-gradient(circle at 20% 50%, blue 1px, transparent 1px)',
                    'radial-gradient(circle at 80% 50%, purple 1px, transparent 1px)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
              />

              <div className="relative z-10">
                <FadeIn direction="right">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Mon parcours
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2} direction="up">
                  <p className="text-gray-800 text-lg leading-relaxed mb-4">
                    Mon aventure dans le monde du développement a commencé par curiosité. 
                    Fasciné par la capacité de créer des solutions numériques, j&apos;ai décidé 
                    d&apos;apprendre par moi-même et de partager ce chemin avec d&apos;autres.
                  </p>
                </FadeIn>
                <FadeIn delay={0.4} direction="up">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Aujourd&apos;hui, je continue d&apos;explorer de nouvelles technologies, de relever 
                    des défis et de documenter mes découvertes à travers ce blog.
                  </p>
                </FadeIn>
              </div>
            </motion.div>
          </ScaleIn>

          {/* Ce que vous trouverez ici */}
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
              Ce que vous trouverez ici
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const colors = {
                blue: 'from-blue-500 to-blue-600',
                purple: 'from-purple-500 to-purple-600',
                pink: 'from-pink-500 to-pink-600',
                red: 'from-red-500 to-red-600',
              };

              return (
                <ScaleIn key={skill.name} delay={index * 0.1}>
                  <motion.div
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Gradient animé au hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${colors[skill.color as keyof typeof colors]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${colors[skill.color as keyof typeof colors]} shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="text-3xl text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                          {skill.name}
                        </h3>
                        <p className="text-gray-600">
                          {skill.name === "Tutoriels & Guides" && "Des articles pratiques pour apprendre et progresser"}
                          {skill.name === "Réflexions" && "Mes pensées sur la technologie et l'innovation"}
                          {skill.name === "Projets" && "Présentation de mes créations et expérimentations"}
                          {skill.name === "Outils & Ressources" && "Mes recommandations d'outils utiles"}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ScaleIn>
              );
            })}
          </div>

          {/* Section Contact */}
          <ScaleIn delay={0.6}>
            <motion.div
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Éléments décoratifs animés */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                <FadeIn direction="up">
                  <h2 className="text-4xl font-bold mb-4">
                    Restons en contact
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2} direction="up">
                  <p className="text-white/90 text-lg mb-8">
                    Vous avez une question, une suggestion ou simplement envie d&apos;échanger ? 
                    N&apos;hésitez pas à me contacter !
                  </p>
                </FadeIn>
                <FadeIn delay={0.4} direction="up">
                  <motion.a
                    href="mailto:contact@example.com"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiMail className="text-2xl" />
                    Me contacter
                  </motion.a>
                </FadeIn>
              </div>
            </motion.div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
