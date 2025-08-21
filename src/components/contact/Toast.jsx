
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const Toast = ({ id, message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Toast icons for different types
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 150); // Delay to allow exit animation
  };

  const toastVariants = {
    initial: {
      opacity: 0,
      x: 300,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      x: 300,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className={`toast toast-${type}`}
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <div className="toast-icon">
        {icons[type] || icons.info}
      </div>
      <div className="toast-message">
        {message}
      </div>
      <button 
        className="toast-close"
        onClick={handleClose}
        aria-label="Close notification"
      >
        ×
      </button>
    </motion.div>
  );
};

export default Toast;
