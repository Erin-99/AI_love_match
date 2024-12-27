'use client';

import { motion } from 'framer-motion';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: string;
  onAnswer: (value: string) => void;
}

export function QuestionCard({ question, selectedAnswer, onAnswer }: QuestionCardProps) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">{question.text}</h3>
      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className={`w-full p-4 rounded-xl border text-left transition-colors
              ${
                selectedAnswer === option.value
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }
            `}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
} 