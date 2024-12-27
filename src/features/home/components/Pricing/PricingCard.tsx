'use client';

import { motion } from 'framer-motion';
import type { PricingPlan } from './types';

export function PricingCard({
  name,
  description,
  price,
  period,
  features,
  cta,
  popular
}: PricingPlan) {
  return (
    <motion.div
      className={`relative p-8 bg-card rounded-2xl border-2 h-full
        ${popular ? 'border-primary' : 'border-border'}
      `}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            最受欢迎
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-secondary">{description}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center">
          <span className="text-4xl font-bold">¥{price}</span>
          {period && (
            <span className="text-secondary ml-2">/{period}</span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-primary mr-3 flex-shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`w-full py-3 px-6 rounded-full font-medium transition-colors
          ${popular
            ? 'bg-primary text-white hover:bg-primary/90'
            : 'bg-primary/10 text-primary hover:bg-primary/20'
          }
        `}
      >
        {cta}
      </button>
    </motion.div>
  );
} 