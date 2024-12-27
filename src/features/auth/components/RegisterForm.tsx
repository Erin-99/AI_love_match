'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PasswordStrength } from './PasswordStrength';
import { AgreementModal } from './AgreementModal';

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [showAgreement, setShowAgreement] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: 实现注册逻辑
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              邮箱
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-2">
              用户名
            </label>
            <Input
              id="username"
              type="text"
              placeholder="你的昵称"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              密码
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <PasswordStrength password={password} />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
              确认密码
            </label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="agreement"
            type="checkbox"
            required
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="agreement" className="ml-2 text-sm text-secondary">
            我已阅读并同意
            <button
              type="button"
              onClick={() => setShowAgreement(true)}
              className="text-primary hover:text-primary/80 ml-1"
            >
              用户协议和隐私政策
            </button>
          </label>
        </div>

        <div className="space-y-4">
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? '注册中...' : '注册'}
          </Button>

          <div className="text-center text-sm text-secondary">
            已有账号？{' '}
            <Link
              href="/login"
              className="text-primary hover:text-primary/80"
            >
              立即登录
            </Link>
          </div>
        </div>
      </form>

      <AgreementModal
        isOpen={showAgreement}
        onClose={() => setShowAgreement(false)}
      />
    </>
  );
}