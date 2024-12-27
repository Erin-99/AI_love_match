'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Image Side */}
      <motion.div
        className="hidden lg:flex flex-1 relative bg-gradient-to-r from-primary/10 to-primary/5"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <Image
            src="/images/auth-illustration.svg"
            alt="Authentication illustration"
            width={600}
            height={600}
            className="w-full h-auto max-w-2xl"
          />
        </div>
      </motion.div>
    </div>
  );
} 