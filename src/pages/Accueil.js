import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import Section from '../components/Section';
import BarroPhoto from './../assets/barro2.JPG';

const Accueil = () => {
    return (
        <Section
            containerStyle={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: theme.spacing.xl
            }}
        >
            <div className='container'>
                <div className='row align-items-center'>
                    <motion.div 
                        className='col-sm-12 col-md-6'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='text-start'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className='mb-2'
                                style={{ color: theme.colors.gray[400] }}
                            >
                                Bonjour, je suis
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    fontWeight: theme.typography.heading.fontWeight.bold,
                                    color: theme.colors.primary,
                                    marginBottom: theme.spacing.md
                                }}
                            >
                                Aboubakar Barro
                            </motion.h1>
                            <motion.h4
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                style={{
                                    color: theme.colors.text,
                                    marginBottom: theme.spacing.lg
                                }}
                            >
                                Développeur fullstack web
                            </motion.h4>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                            >
                                <Link 
                                    to='contact' 
                                    className="button button-primary"
                                    smooth={true}
                                    duration={500}
                                    style={{
                                        display: 'inline-block',
                                        marginTop: theme.spacing.md,
                                        textDecoration: 'none'
                                    }}
                                >
                                    Contactez-moi
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className='col-sm-12 col-md-6'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div 
                            style={{ 
                                position: 'relative',
                                borderRadius: theme.borderRadius.lg,
                                overflow: 'hidden'
                            }}
                        >
                            <motion.img
                                src={BarroPhoto}
                                alt="Photo de profil"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '500px',
                                    borderRadius: theme.borderRadius.lg,
                                    boxShadow: theme.shadows.lg
                                }}
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default Accueil;