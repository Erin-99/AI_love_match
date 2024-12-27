'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './Navigation';
import { AuthButtons } from './AuthButtons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            className="fixed top-16 left-0 right-0 bottom-0 bg-background z-50 border-t"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="container-width container-padding py-6 flex flex-col space-y-6">
              <Navigation vertical />
              <AuthButtons vertical />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 