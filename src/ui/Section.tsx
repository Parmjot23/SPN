import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'gradient' | 'dark' | 'light';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  titleAlign?: 'left' | 'center' | 'right';
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  background = 'default',
  spacing = 'lg',
  titleAlign = 'center'
}) => {
  const backgrounds = {
    default: 'bg-transparent',
    gradient: 'bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800',
    dark: 'bg-neutral-900 text-white',
    light: 'bg-neutral-50 dark:bg-neutral-800'
  };

  const spacings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <section className={`${backgrounds[background]} ${spacings[spacing]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div 
            className={`mb-12 ${alignments[titleAlign]}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 font-heading mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-body max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
