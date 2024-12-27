'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LoginForm } from '../components/LoginForm';
import { AuthLayout } from '../components/AuthLayout';

export function LoginPage() {
  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">欢迎回来</h1>
          <p className="text-secondary">
            登录你的账号，继续你的情感之旅
          </p>
        </div>

        <LoginForm />
      </motion.div>
    </AuthLayout>
  );
} 