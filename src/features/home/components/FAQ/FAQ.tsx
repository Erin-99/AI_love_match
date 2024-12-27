'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Accordion } from './Accordion';
import type { FAQItem } from './types';

const faqs: FAQItem[] = [
  {
    question: '如何开始使用这个平台？',
    answer: '注册账号后，你可以直接开始免费的基础性格测评。完成测评后，我们的AI系统会为你生成初步的分析报告，并提供匹配建议。'
  },
  {
    question: '测评结果的准确性如何？',
    answer: '我们的测评系统基于成熟的心理学理论和大数据分析，准确率在95%以上。同时，我们会定期更新算法模型，确保结果的科学性和准确性。'
  },
  {
    question: '个人信息安全如何保障？',
    answer: '我们采用银行级别的加密技术保护用户数据，严格遵守隐私保护法规。所有个人信息都经过匿名化处理，不会泄露给第三方。'
  },
  {
    question: '升级会员有什么好处？',
    answer: '会员可以享受更深度的性格分析、无限次AI咨询、优先匹配推荐等特权。Pro版还包含专业的情感指导和一对一咨询服务。'
  },
  {
    question: '如何提高匹配成功率？',
    answer: '完整填写个人信息，认真完成所有测评问题，这样可以帮助系统更准确地了解你的需求。同时，保持个人资料的真实性也很重要。'
  },
  {
    question: '可以退款吗？',
    answer: '我们提供7天无理由退款保证。如果你对服务不满意，可以联系客服申请退款。但已使用的服务费用将会被扣除。'
  }
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="py-20 lg:py-32 bg-card">
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
            常见问题
          </h2>
          <p className="text-secondary text-lg">
            了解更多关于我们的服务和使用方式
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
} 