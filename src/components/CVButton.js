import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { theme } from '../styles/theme';
import CV from '../assets/barro_cv.pdf';

const CVButton = () => {
  return (
    <motion.a
      href={CV}
      download="Barro_CV"
      className="button"
      style={{
        backgroundColor: theme.colors.accent,
        color: theme.colors.white,
        display: 'inline-flex',
        alignItems: 'center',
        gap: theme.spacing.xs,
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        borderRadius: theme.borderRadius.md,
        textDecoration: 'none',
        fontWeight: theme.typography.heading.fontWeight.normal,
        boxShadow: theme.shadows.md,
        border: 'none'
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: theme.shadows.lg
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <FaDownload />
      <span>Télécharger mon CV</span>
    </motion.a>
  );
};

export default CVButton; 