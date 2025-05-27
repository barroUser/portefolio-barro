import React from 'react';
import { theme } from '../styles/theme';

const Section = ({ 
  title, 
  subtitle, 
  children, 
  isDark = false,
  className = '',
  containerStyle = {} 
}) => {
  return (
    <section
      className={className}
      style={{
        padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
        backgroundColor: isDark ? theme.colors.gray[100] : theme.colors.white,
        ...containerStyle
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {title && (
          <h2
            style={{
              fontSize: theme.typography.heading.fontSize.h2,
              fontWeight: theme.typography.heading.fontWeight.bold,
              color: theme.colors.text,
              marginBottom: theme.spacing.sm,
              textAlign: 'center'
            }}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p
            style={{
              fontSize: theme.typography.body.fontSize,
              color: theme.colors.gray[400],
              marginBottom: theme.spacing.lg,
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto',
              marginBottom: theme.spacing.xl
            }}
          >
            {subtitle}
          </p>
        )}
        <div
          style={{
            animation: 'fadeIn 0.5s ease-in-out',
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section; 