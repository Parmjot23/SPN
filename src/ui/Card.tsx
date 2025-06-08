import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  onClick,
  className = '',
  icon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`bg-white dark:bg-darkBg2 p-5 rounded-md shadow-md cursor-pointer ${className}`}
      onClick={onClick}
    >
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}
      <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 dark:text-gray-300">{subtitle}</p>}
      <div className="mt-2">{children}</div>
    </motion.div>
  );
};

export default Card;
