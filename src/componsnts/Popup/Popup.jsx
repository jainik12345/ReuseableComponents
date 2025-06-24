/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const popupVariants = {
  hidden: { opacity: 0, y: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 25, duration: 0.4 },
  },
  exit: {
    opacity: 0,
    y: -32,
    scale: 0.95,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const Popup = ({
  open,
  onClose,
  message = "Action completed successfully",
  bgColor = "bg-green-600",
  duration = 3000,
  className = "",
  position = "fixed top-6 left-1/2 transform -translate-x-1/2",
  children,
}) => {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => {
      onClose && onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [open, onClose, duration]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={popupVariants}
          className={`${position} ${bgColor} text-white px-8 py-3.5 rounded-lg shadow-lg z-50 ${className}`}
          role="alert"
          aria-live="polite"
        >
          {children ? children : <p className="font-medium">{message}</p>}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
