import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import Section from '../components/Section';
import { FaCode, FaPaintBrush } from 'react-icons/fa';

const Apropos = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Section
      title="À propos de moi"
      subtitle="Découvrez mon parcours et mes compétences"
      isDark={true}
    >
      <div className='container'>
        <div className='row g-4'>
          <motion.div 
            className='col-lg-6'
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className='card h-100' style={{
              padding: theme.spacing.lg,
              backgroundColor: theme.colors.white,
              borderRadius: theme.borderRadius.lg,
              boxShadow: theme.shadows.md
            }}>
              <div className="card-body">
                <motion.div 
                  className='card-text'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p style={{ marginBottom: theme.spacing.md }}>
                    Titulaire d'une licence en science du langage, j'ai décidé de me consacrer dans le développement web et mobile avec l'école inclusive Simplon. Ce qui m'a permis d'être certifié développeur fullstack web.
                  </p>
                  <p style={{ marginBottom: theme.spacing.md }}>
                    En tant que jeune passionné, motivé par les nouvelles technologies, je suis toujours à la recherche de nouvelle opportunité pour m'exprimer dans mon domaine de prédilection.
                  </p>
                  <p style={{ marginBottom: theme.spacing.md }}>
                    Au cours des mes récentes expériences en entreprise, j'ai acquis des bases solides pour mener à bien des projets. Toutefois, je suis en constante évolution.
                  </p>
                  <p>
                    Je serais très heureux de travailler avec vous sur des nouveaux projets innovants.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className='col-lg-6'
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className='card h-100' style={{
              padding: theme.spacing.lg,
              backgroundColor: theme.colors.white,
              borderRadius: theme.borderRadius.lg,
              boxShadow: theme.shadows.md
            }}>
              <div className="accordion" id="skillsAccordion">
                <motion.div 
                  className="accordion-item border-0 mb-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#developpementWeb"
                      style={{
                        backgroundColor: theme.colors.primary,
                        color: theme.colors.white,
                        borderRadius: theme.borderRadius.md,
                      }}
                    >
                      <FaCode className="me-2" /> DÉVELOPPEUR WEB
                    </button>
                  </h2>
                  <div id="developpementWeb" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <p>En tant que <strong>développeur fullstack</strong>, je suis capable de :</p>
                      <ul style={{ paddingLeft: theme.spacing.lg, textAlign: 'left' }}>
                        <li>Maîtriser les langages de programmation côté client et côté serveur</li>
                        <li>Développement d’API REST</li>
                        <li>Concevoir et mettre en œuvre des bases de données</li>
                        <li>Déployer et maintenir des applications web</li>
                        <li>Créer des interfaces utilisateur intuitives et esthétiques</li>
                        <li>Optimiser les performances et la sécurité des applications</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="accordion-item border-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#uiuxDesign"
                      style={{
                        backgroundColor: theme.colors.secondary,
                        color: theme.colors.white,
                        borderRadius: theme.borderRadius.md
                      }}
                    >
                      <FaPaintBrush className="me-2" /> UI/UX DESIGNER
                    </button>
                  </h2>
                  <div id="uiuxDesign" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <p>En tant que <strong>UI/UX designer</strong>, je suis capable de :</p>
                        <ul style={{ paddingLeft: theme.spacing.lg, textAlign: 'left' }}>
                          <li>Comprendre les besoins des utilisateurs</li>
                          <li>Maîtriser les principes de conception UI et UX</li>
                          <li>Collaborer efficacement avec des équipes pluridisciplinaires</li>
                          {/* <li>Créer des interfaces utilisateur intuitives et esthétiques</li> */}
                        </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Apropos;