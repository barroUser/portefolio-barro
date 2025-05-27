import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import Section from '../components/Section';
import { FaCss3Alt, FaHtml5, FaJs, FaPhp, FaDatabase, FaReact, FaJava, FaWordpress } from 'react-icons/fa';

const Competence = () => {
  const skills = [
    { icon: <FaHtml5 size={40} />, name: 'HTML', color: '#E34F26' },
    { icon: <FaCss3Alt size={40} />, name: 'CSS', color: '#1572B6' },
    { icon: <FaJs size={40} />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaReact size={40} />, name: 'React JS', color: '#61DAFB' },
    { icon: <FaPhp size={40} />, name: 'PHP', color: '#777BB4' },
    { icon: <FaJava size={40} />, name: 'QUARKUS/JAVA', color: '#007396' },
    { icon: <FaDatabase size={40} />, name: 'MySQL', color: '#4479A1' },
    { icon: <FaWordpress size={40} />, name: 'WordPress', color: '#21759B' }
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
      title="Mes Compétences"
      subtitle="Technologies et outils que j'utilise dans mes projets"
      isDark={true}
    >
      <div className='container'>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='info mb-4'
          style={{ color: theme.colors.gray[400] }}
        >
          * Il s'agit des langages que j'ai déjà utilisés dans des projets antérieurs
        </motion.p>
        
        <motion.div 
          className='row g-4'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className='col-6 col-md-3'
              variants={itemVariants}
            >
              <motion.div
                className='card h-100'
                style={{
                  padding: theme.spacing.md,
                  backgroundColor: theme.colors.white,
                  borderRadius: theme.borderRadius.lg,
                  boxShadow: theme.shadows.md
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: theme.shadows.lg
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                  <motion.div
                    style={{ color: skill.color }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <p className='mt-3 mb-0' style={{ 
                    color: theme.colors.text,
                    fontWeight: theme.typography.heading.fontWeight.normal
                  }}>
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Competence;