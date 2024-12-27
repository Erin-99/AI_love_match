'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('请输入邮箱地址');
      return;
    }
    
    try {
      setStatus('loading');
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('提交失败，请稍后重试');
    }
  };

  return (
    <section className="relative py-section-sm lg:py-section-lg overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

      <div className="container-width container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Content */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            准备好开始了吗？
          </h2>
          <p className="text-secondary text-lg mb-12">
            立即加入我们，开启您的下一个精彩项目
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="输入您的邮箱地址"
                  className="w-full h-14 px-6 rounded-full bg-background 
                    border-2 border-foreground/10 focus:border-primary
                    outline-none transition-colors"
                  disabled={status === 'loading'}
                />
                {errorMessage && (
                  <p className="text-red-500 text-sm mt-2 ml-4">
                    {errorMessage}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                loading={status === 'loading'}
                disabled={status === 'success'}
              >
                {status === 'success' ? '提交成功！' : '立即开始'}
              </Button>
            </div>
          </form>

          {/* Success message */}
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 mt-4"
            >
              感谢您的订阅！我们会尽快与您联系。
            </motion.p>
          )}

          {/* Additional info */}
          <p className="text-sm text-secondary mt-8">
            通过提交此表单，即表示您同意我们的
            <a href="/terms" className="text-primary hover:underline">服务条款</a>
            和
            <a href="/privacy" className="text-primary hover:underline">隐私政策</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}