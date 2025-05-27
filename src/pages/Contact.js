import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import Section from '../components/Section';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaEnvelope size={30} />,
      label: 'Email',
      href: 'mailto:aboubakarbarro23@gmail.com',
      color: '#EA4335'
    },
    {
      icon: <FaLinkedin size={30} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aboubakar-barro-91b8ab202',
      color: '#0A66C2'
    },
    {
      icon: <FaGithub size={30} />,
      label: 'Github',
      href: 'https://github.com/Aboubakabarro09',
      color: '#333'
    },
    {
      icon: <FaWhatsapp size={30} />,
      label: 'WhatsApp',
      href: 'https://wa.me/qr/2T7R4CEYXBEOH1',
      color: '#25D366'
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      label: 'Téléphone',
      values: ['+225 0768328264', '+225 0506790055']
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Adresse',
      values: ['Abidjan, Adjamé']
    }
  ];

  return (
    <Section
      title="Contactez-moi"
      subtitle="N'hésitez pas à me contacter pour discuter de vos projets"
    >
      <div className='container'>
        <div className='row g-4'>
          <motion.div 
            className='col-md-6'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='card h-100' style={{
              padding: theme.spacing.lg,
              backgroundColor: theme.colors.white,
              borderRadius: theme.borderRadius.lg,
              boxShadow: theme.shadows.md
            }}>
              <div className='text-start'>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{ color: theme.colors.primary }}
                >
                  Barro Aboubakar
                </motion.h3>
                <motion.h6
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4"
                >
                  Développeur fullstack web
                </motion.h6>

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="mb-4"
                  >
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-2" style={{ color: theme.colors.primary }}>
                        {info.icon}
                      </span>
                      <strong>{info.label}:</strong>
                    </div>
                    {info.values.map((value, i) => (
                      <div key={i} className="ms-4">{value}</div>
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className='col-md-6'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='card h-100' style={{
              padding: theme.spacing.lg,
              backgroundColor: theme.colors.white,
              borderRadius: theme.borderRadius.lg,
              boxShadow: theme.shadows.md
            }}>
              <h4 className='text-center mb-4'>Réseaux sociaux</h4>
              <div className='row g-4'>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    className='col-6'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit'
                      }}
                    >
                      <motion.div
                        className='d-flex flex-column align-items-center'
                        whileHover={{ y: -5 }}
                      >
                        <div style={{ color: social.color }}>
                          {social.icon}
                        </div>
                        <span className='mt-2'>{social.label}</span>
                      </motion.div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className='mt-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <small className='info' style={{ color: theme.colors.gray[400] }}>
            *N'hésitez pas à me contacter pour discuter de vos besoins en matière de développement web.
          </small>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;