import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { BiCopyright } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

export const Footer = () => {
  return (
    <motion.footer
      style={{
        backgroundColor: theme.colors.white,
        padding: `${theme.spacing.md} 0`,
        borderTop: `1px solid ${theme.colors.gray[200]}`,
        marginTop: 'auto'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='container'>
        <motion.p 
          className='text-center mb-0'
          style={{
            color: theme.colors.text,
            fontSize: theme.typography.body.fontSize
          }}
        >
          <BiCopyright className="me-1" /> 2024 par{' '}
          <motion.span
            style={{ 
              color: theme.colors.primary,
              fontWeight: theme.typography.heading.fontWeight.bold
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Aboubakar Barro
          </motion.span>
          . Créé avec{' '}
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: 'inline-block' }}
          >
            <FaHeart style={{ color: '#e11d48' }} className="mx-1" />
          </motion.span>
          {' '}et ReactJS
        </motion.p>
      </div>
    </motion.footer>
  );
};
