import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import Section from '../components/Section';
import { FaEye, FaGithub, FaInfo } from 'react-icons/fa';
import univers from '../assets/image.png';
import pressmessager from '../assets/pressmess.png';
import compteparent from '../assets/parent.png';
import fournisseur from '../assets/daymond.png';

const Service = () => {
  const projects = [
    {
      title: 'Univers vie-ecoles',
      description: "Une plateforme sociale et éducative pour les écoles et acteurs de la vie scolaire. Elle englobe plusieurs fonctionnalités telles que la gestion scolaire, l'inscription en ligne, la demande d'intégration en ligne, la recherche d'établissement scolaire d'excellence, achat de matériel scolaire (fournitures, kits...), mise en relation avec les fournisseurs et prestateurs, etc.",
      image: univers,
      demoLink: 'https://univers.vie-ecoles.com/',
      // githubLink: '#'
    },
    {
      title: 'PressMessager',
      description: 'Une sous-application de la plateforme Univers vie-ecoles destinée aux personnels éducatifs (enseignants, surveillants, administration...).',
      image: pressmessager,
      demoLink: 'https://presmessager.vie-ecoles.com',
      // githubLink: '#'
    },
    {
      title: 'Le compte parent vie-ecoles',
      description: 'Une sous-application de la plateforme Univers vie-ecoles destinée aux parents pour consulter les informations de leur enfant. Dans le but d\'être informé sur sa vie scolaire.',
      image: compteparent,
      demoLink: 'https://parent.vie-ecoles.com/#/',
      // githubLink: '#'
    },
    {
      title: 'Fournisseur Daymond',
      description: 'Une application web qui permet aux fournisseurs de Daymond de gérer leurs commandes, les livraisons, les paiements et les factures.',
      image: fournisseur,
      // demoLink: 'https://fournisseur.daymond.ci',
      // githubLink: '#'
    },
    {
      title: 'Monde du dev',
      description: 'Le Monde du dev est un site de type blog qui parle des informations sur le développement.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      // demoLink: '#',
      githubLink: 'https://github.com/barroUser/monde_du_dev.git'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Section
      title="Mes projets réalisés"
      subtitle="Découvrez quelques-uns de mes projets les plus récents et les plus remarquables"
    >
      <div className='container'>
        <motion.div 
          className='row g-4'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className='col-md-4 col-sm-6'
              variants={itemVariants}
            >
              <motion.div
                className='card h-100'
                style={{
                  borderRadius: theme.borderRadius.lg,
                  overflow: 'hidden',
                  boxShadow: theme.shadows.md
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: theme.shadows.lg
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div 
                  style={{
                    height: '200px',
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div className="card-body" style={{ padding: theme.spacing.md }}>
                  <h5 className="card-title" style={{ 
                    color: theme.colors.primary,
                    marginBottom: theme.spacing.sm
                  }}>
                    {project.title}
                  </h5>
                  <p className="card-text" style={{ 
                    color: theme.colors.text,
                    marginBottom: theme.spacing.md
                  }}>
                    {project.description}
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    {project.demoLink && (
                      <motion.a
                        href={project.demoLink}
                        className="button button-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ textDecoration: 'none' }}
                      >
                        <FaEye className="me-1" /> Visiter
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        className="button button-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ textDecoration: 'none' }}
                      >
                        <FaInfo className="me-1" /> Voir +
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Service;