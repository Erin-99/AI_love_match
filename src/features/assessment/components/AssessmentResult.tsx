'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AssessmentResult() {
  return (
    <div className="space-y-8">
      {/* 结果卡片 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-2xl p-8 shadow-sm"
      >
        <h2 className="text-2xl font-bold mb-6">你的性格分析结果</h2>
        
        {/* 性格类型 */}
        <div className="mb-8">
          <div className="text-4xl font-bold text-primary mb-4">ENFP</div>
          <div className="text-xl font-semibold mb-2">充满激情的梦想家</div>
          <p className="text-gray-900 text-base leading-relaxed">
            热情洋溢、富有创造力，总能看到新的可能性。在社交场合活跃，善于激发他人的潜能。
          </p>
        </div>

        {/* 详细特征 */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">性格特点</h3>
            <ul className="space-y-3 text-gray-900 text-base">
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">富有同理心，善解人意</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">创意丰富，思维活跃</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">适应力强，乐于尝试新事物</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">善于沟通，能激发他人热情</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">理想伴侣类型</h3>
            <ul className="space-y-3 text-gray-900 text-base">
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">稳重可靠，能提供情感安全感</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">思维深邃，能进行深层次交流</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">包容理解，欣赏你的创造力</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">有自己的追求，能互相成长</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">建议</h3>
            <ul className="space-y-3 text-gray-900 text-base">
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">在感情中要学会适度节制热情</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">培养耐心，给予对方独立空间</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">保持真诚，但也要注意边界感</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary font-bold">•</span>
                <span className="leading-relaxed">在重要决定上多听取伴侣意见</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* 行动按钮 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <Link href="/register" className="w-full max-w-xs">
          <Button size="lg" className="w-full">
            注册获取完整报告
          </Button>
        </Link>
        <Link href="/" className="w-full max-w-xs">
          <Button variant="outline" className="w-full">
            返回首页
          </Button>
        </Link>
      </motion.div>
    </div>
  );
} 