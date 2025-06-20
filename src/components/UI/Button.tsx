import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon: Icon,
  onClick,
  type = 'button',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-teal-500 hover:bg-teal-400 text-white focus:ring-teal-500 shadow-lg hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-0.5',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white focus:ring-gray-500 border border-gray-600 hover:border-gray-500 hover:-translate-y-0.5',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-700/50 focus:ring-gray-500 backdrop-blur-sm',
    danger: 'bg-red-600 hover:bg-red-500 text-white focus:ring-red-500 shadow-lg hover:shadow-xl hover:shadow-red-500/25 hover:-translate-y-0.5',
    gradient: 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white focus:ring-teal-500 shadow-lg hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-0.5',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {/* Shimmer effect for gradient buttons */}
      {variant === 'gradient' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />
      )}
      
      {loading ? (
        <motion.div
          className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      ) : Icon ? (
        <Icon className="h-4 w-4 mr-2" />
      ) : null}
      {children}
    </motion.button>
  );
};

export default Button;