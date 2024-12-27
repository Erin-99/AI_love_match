'use client';

import { motion } from 'framer-motion';
import { FeatureIcon } from './FeatureIcon';
import type { Feature } from './types';

export function FeatureCard({ title, description, icon }: Feature) {
  return (
    <motion.div
      className="p-6 bg-card rounded-2xl border border-border h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
        <FeatureIcon name={icon} className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-secondary">{description}</p>
    </motion.div>
  );
}