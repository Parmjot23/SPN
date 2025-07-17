import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outline' | 'gradient';
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  onClick,
  className = '',
  icon,
  variant = 'default',
  hoverable = true,
}) => {
  const baseClass = 'p-6 rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-gradient-card dark:bg-gradient-dark-card shadow-card border border-neutral-200 dark:border-neutral-700',
    elevated: 'bg-white dark:bg-darkBg2 shadow-lg hover:shadow-xl border-0',
    outline: 'bg-transparent border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600',
    gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200 dark:border-primary-800'
  };

  const hoverEffects = hoverable ? {
    whileHover: { 
      scale: 1.02,
      y: -4,
      transition: { duration: 0.2 }
    },
    whileTap: { scale: 0.98 }
  } : {};

  return (
    <motion.div
      {...hoverEffects}
      className={`${baseClass} ${variants[variant]} ${
        onClick ? 'cursor-pointer' : ''
      } ${
        hoverable ? 'hover:shadow-card-hover' : ''
      } ${className}`}
      onClick={onClick}
    >
      {icon && (
        <motion.div 
          className="mb-6 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="p-3 rounded-xl bg-gradient-primary text-white shadow-lg">
            {icon}
          </div>
        </motion.div>
      )}
      
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-100 font-heading">
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 font-body">
            {subtitle}
          </p>
        )}
        
        {children && (
          <div className="text-neutral-700 dark:text-neutral-300 font-body">
            {children}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Card;
