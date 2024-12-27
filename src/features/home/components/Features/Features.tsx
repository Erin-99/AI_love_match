'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import type { Feature } from './types';

const features: Feature[] = [
  {
    title: 'AI 性格分析',
    description: '通过先进的AI算法，深入分析你的性格特征和情感需求',
    icon: 'brain'
  },
  {
    title: '智能匹配',
    description: '基于多维度数据，为你推荐最合适的伴侣人选',
    icon: 'heart'
  },
  {
    title: '情感咨询',
    description: '专业的情感顾问团队，为你提供全方位的情感指导',
    icon: 'chat'
  },
  {
    title: '隐私保护',
    description: '采用银行级加密技术，确保你的个人信息安全',
    icon: 'shield'
  }
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="py-20 lg:py-32">
      <div className="container-width container-padding">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            为什么选择我们
          </h2>
          <p className="text-secondary text-lg">
            使用先进的AI技术，帮助你找到真爱
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}