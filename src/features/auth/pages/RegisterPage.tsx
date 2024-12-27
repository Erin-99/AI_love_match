'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: 调用注册 API
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/assessment'); // 注册成功后跳转到测评页面
    } catch (error) {
      console.error('注册失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <main className="min-h-screen py-20 lg:py-32">
      <div className="container-width container-padding">
        <div className="max-w-md mx-auto relative">
          {/* Logo */}
          <Link href="/" className="block w-8 h-8 mx-auto mb-8">
            <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
          </Link>

          {/* 背景插图 */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
            <Image
              src="/images/auth-illustration.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-sm"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">创建账号</h1>
              <p className="text-gray-900">开始你的情感探索之旅</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">邮箱</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">用户名</label>
                <Input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="请输入用户名"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">密码</label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="请输入密码"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">确认密码</label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="请再次输入密码"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                  }
                />
                <label htmlFor="terms" className="text-sm text-gray-900">
                  我已阅读并同意
                  <Link href="/terms" className="text-primary hover:underline ml-1">
                    用户协议
                  </Link>
                  和
                  <Link href="/privacy" className="text-primary hover:underline ml-1">
                    隐私政策
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isLoading || !formData.agreeToTerms}
              >
                {isLoading ? '注册中...' : '注册'}
              </Button>

              <div className="text-center text-sm">
                已有账号？
                <Link href="/login" className="text-primary hover:underline ml-1">
                  立即登录
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}