import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';
import { FaBars, FaTimes } from 'react-icons/fa';
import CVButton from './CVButton';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', to: 'accueil' },
    { name: 'À propos', to: 'apropos' },
    { name: 'Compétences', to: 'competence' },
    { name: 'Projets', to: 'service' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: `${theme.spacing.sm} 0`,
        backgroundColor: isScrolled ? theme.colors.white : 'transparent',
        boxShadow: isScrolled ? theme.shadows.sm : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: theme.typography.heading.fontWeight.bold,
              color: theme.colors.primary
            }}
          >
            Portfolio
          </div>

          {/* Menu burger pour mobile */}
          <button
            className="d-md-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: theme.colors.primary
            }}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation desktop */}
          <div className="d-none d-md-flex align-items-center">
            <ul
              style={{
                display: 'flex',
                gap: theme.spacing.lg,
                listStyle: 'none',
                margin: 0,
                padding: 0
              }}
            >
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link"
                    style={{
                      cursor: 'pointer',
                      color: theme.colors.text,
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 500,
                      padding: `${theme.spacing.xs} 10px ${theme.spacing.xs} 10px`,
                      position: 'relative',
                      transition: 'all 0.3s ease'
                    }}
                    activeStyle={{
                      color: theme.colors.primary,
                      fontWeight: 600
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ms-4">
              <CVButton />
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: theme.colors.white,
                padding: theme.spacing.md,
                boxShadow: theme.shadows.md
              }}
              className="d-md-none"
            >
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0
                }}
              >
                {navItems.map((item) => (
                  <li 
                    key={item.to}
                    style={{
                      marginBottom: theme.spacing.sm,
                      borderBottom: `1px solid ${theme.colors.gray[200]}`
                    }}
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      style={{
                        display: 'block',
                        padding: theme.spacing.sm,
                        color: theme.colors.text,
                        textDecoration: 'none'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="mt-3">
                  <CVButton />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation; 