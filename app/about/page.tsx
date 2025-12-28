'use client';

import FadeIn from "@/components/animations/FadeIn";
import AnimatedText from "@/components/animations/AnimatedText";
import ScaleIn from "@/components/animations/ScaleIn";
import FloatingElement from "@/components/animations/FloatingElement";
import { motion } from "framer-motion";
import { HiMail, HiCode, HiLightningBolt, HiSparkles, HiHeart } from "react-icons/hi";

export default function AboutPage() {
  const skills = [
    { icon: HiCode, name: "Tutoriels & Guides", desc: "Des articles pratiques pour apprendre et progresser" },
    { icon: HiLightningBolt, name: "Réflexions", desc: "Mes pensées sur la technologie et l'innovation" },
    { icon: HiSparkles, name: "Projets", desc: "Présentation de mes créations et expérimentations" },
    { icon: HiHeart, name: "Outils & Ressources", desc: "Mes recommandations d'outils utiles" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Section Hero bleue */}
      <section className="relative py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/20 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn direction="down">
            <AnimatedText
              text="À propos"
              className="text-6xl md:text-7xl font-bold text-white mb-6 text-center"
            />
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <p className="text-2xl text-blue-100 text-center max-w-3xl mx-auto leading-relaxed">
              Qui je suis et pourquoi ce site existe
            </p>
          </FadeIn>
        </div>

        {/* Éléments décoratifs flottants */}
        <FloatingElement delay={0} duration={5} yOffset={25}>
          <div className="absolute top-20 left-10 w-28 h-28 rounded-full bg-blue-400/20 backdrop-blur-sm" />
        </FloatingElement>
        <FloatingElement delay={1} duration={6} yOffset={30}>
          <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full bg-blue-300/20 backdrop-blur-sm" />
        </FloatingElement>
      </section>

      {/* Contenu principal */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Introduction */}
          <ScaleIn>
            <motion.div
              className="bg-white rounded-3xl p-10 md:p-14 shadow-blue-lg border-2 border-blue-100 mb-16"
              whileHover={{ scale: 1.01 }}
            >
              <FadeIn direction="right">
                <h2 className="text-5xl font-bold text-blue-900 mb-6">
                  Bonjour ! 👋
                </h2>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <p className="text-blue-800 text-xl leading-relaxed mb-6">
                  Je m&apos;appelle <span className="font-bold text-blue-600">Enzo</span> et je suis passionné par le développement web, 
                  la technologie et le partage de connaissances. Ce site est mon espace 
                  personnel où je documente mes apprentissages, mes projets et mes réflexions.
                </p>
              </FadeIn>
              <FadeIn delay={0.4} direction="up">
                <p className="text-blue-700 text-xl leading-relaxed">
                  Que vous soyez développeur débutant, curieux de technologie ou simplement 
                  de passage, j&apos;espère que vous trouverez ici du contenu intéressant et utile.
                </p>
              </FadeIn>
            </motion.div>
          </ScaleIn>

          {/* Parcours */}
          <ScaleIn delay={0.3}>
            <motion.div
              className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-3xl p-10 md:p-14 shadow-blue border-2 border-blue-200 mb-16 overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              {/* Cercle décoratif */}
              <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="relative z-10">
                <FadeIn direction="right">
                  <h2 className="text-4xl font-bold text-blue-900 mb-6">
                    Mon parcours
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2} direction="up">
                  <p className="text-blue-800 text-lg leading-relaxed mb-5">
                    Mon aventure dans le monde du développement a commencé par curiosité. 
                    Fasciné par la capacité de créer des solutions numériques, j&apos;ai décidé 
                    d&apos;apprendre par moi-même et de partager ce chemin avec d&apos;autres.
                  </p>
                </FadeIn>
                <FadeIn delay={0.4} direction="up">
                  <p className="text-blue-700 text-lg leading-relaxed">
                    Aujourd&apos;hui, je continue d&apos;explorer de nouvelles technologies, de relever 
                    des défis et de documenter mes découvertes à travers ce blog.
                  </p>
                </FadeIn>
              </div>
            </motion.div>
          </ScaleIn>

          {/* Ce que vous trouverez ici */}
          <FadeIn direction="up">
            <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
              Ce que vous trouverez ici
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <ScaleIn key={skill.name} delay={index * 0.15}>
                  <motion.div
                    className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-blue-100 overflow-hidden"
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      borderColor: '#3B82F6',
                      boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)'
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Effet de fond au hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <div className="relative z-10 flex items-start gap-5">
                      <motion.div
                        className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue"
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="text-4xl text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-blue-700 leading-relaxed">
                          {skill.desc}
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
              className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-3xl p-10 md:p-16 shadow-blue-lg overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              {/* Éléments décoratifs animés */}
              <motion.div
                className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="relative z-10">
                <FadeIn direction="up">
                  <h2 className="text-5xl font-bold mb-6">
                    Restons en contact
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2} direction="up">
                  <p className="text-blue-100 text-xl mb-10 leading-relaxed">
                    Vous avez une question, une suggestion ou simplement envie d&apos;échanger ? 
                    N&apos;hésitez pas à me contacter !
                  </p>
                </FadeIn>
                <FadeIn delay={0.4} direction="up">
                  <motion.a
                    href="mailto:contact@example.com"
                    className="inline-flex items-center gap-4 px-10 py-5 bg-white text-blue-700 rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-lg transition-shadow"
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiMail className="text-3xl" />
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
