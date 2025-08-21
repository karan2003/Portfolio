// ToastContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Toast from './Toast';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    console.error('❌ useToast must be used within a ToastProvider');
    throw new Error('useToast must be used within a ToastProvider');
  }
  console.log('✅ Toast context found:', context);
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info', duration = 4000) => {
    console.log('🔔 Adding toast:', { message, type, duration });
    const id = Date.now() + Math.random();
    const newToast = {
      id,
      message,
      type,
      duration
    };

    setToasts(prev => {
      const updated = [...prev, newToast];
      console.log('📋 Current toasts:', updated);
      return updated;
    });

    // Auto-remove toast after duration
    setTimeout(() => {
      console.log('⏰ Auto-removing toast:', id);
      removeToast(id);
    }, duration);

    return id;
  };

  const removeToast = (id) => {
    console.log('🗑️ Removing toast:', id);
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const showSuccess = (message, duration) => {
    console.log('✅ Showing success toast');
    return addToast(message, 'success', duration);
  };
  
  const showError = (message, duration) => {
    console.log('❌ Showing error toast');
    return addToast(message, 'error', duration);
  };
  
  const showWarning = (message, duration) => addToast(message, 'warning', duration);
  const showInfo = (message, duration) => addToast(message, 'info', duration);

  const contextValue = {
    addToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };

  console.log('🏗️ ToastProvider rendering with toasts:', toasts);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="toast-container">
        <AnimatePresence mode="popLayout">
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              id={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
