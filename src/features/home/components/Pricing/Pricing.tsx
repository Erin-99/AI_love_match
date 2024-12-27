'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PricingCard } from './PricingCard';
import type { PricingPlan } from './types';

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: '免费版',
    description: '体验核心功能',
    price: 0,
    features: [
      '基础性格测评',
      '简单匹配推荐',
      '基础分析报告',
      '社区基础功能',
      '每周1次AI咨询'
    ],
    cta: '立即开始',
    popular: false
  },
  {
    id: 'pro',
    name: 'Pro版',
    description: '解锁全部功能',
    price: 29.9,
    period: '月',
    features: [
      '高级性格测评',
      '精准匹配推荐',
      '深度分析报告',
      '无限AI咨询',
      'VIP社区特权',
      '专属客服支持'
    ],
    cta: '升级Pro',
    popular: true
  },
  {
    id: 'team',
    name: '情侣版',
    description: '二人世界',
    price: 39.9,
    period: '月',
    features: [
      'Pro版全部功能',
      '情侣互动空间',
      '关系健康分析',
      '定制成长计划',
      '专家一对一咨询',
      '线下活动优先'
    ],
    cta: '立即升级',
    popular: false
  }
];

export function Pricing() {
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
            选择适合你的方案
          </h2>
          <p className="text-secondary text-lg">
            提供灵活的价格方案，满足不同阶段的需求
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 