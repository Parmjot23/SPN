import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const baseClass =
    "px-6 py-2 rounded text-white focus:outline-none font-semibold shadow-md";

  const variants: { [key in typeof variant]: string } = {
    primary: `bg-accent hover:bg-accent/80`,
    secondary: `bg-gray-700 hover:bg-gray-800`,
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClass} ${variants[variant]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
