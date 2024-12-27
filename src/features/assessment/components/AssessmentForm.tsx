'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { QuestionCard } from './QuestionCard';
import type { Question } from '../types';

const questions: Question[] = [
  {
    id: 1,
    text: '在社交场合，你通常是：',
    options: [
      { value: 'E', text: '容易与陌生人交谈，享受社交' },
      { value: 'I', text: '倾向于与熟悉的人交谈，需要独处时间' }
    ]
  },
  {
    id: 2,
    text: '做决定时，你更倾向于：',
    options: [
      { value: 'T', text: '依据逻辑和事实分析' },
      { value: 'F', text: '考虑他人感受和价值观' }
    ]
  },
  {
    id: 3,
    text: '面对新的情况时，你通常会：',
    options: [
      { value: 'J', text: '喜欢提前计划和安排' },
      { value: 'P', text: '保持灵活，随机应变' }
    ]
  }
];

interface AssessmentFormProps {
  onComplete: () => void;
}

export function AssessmentForm({ onComplete }: AssessmentFormProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // TODO: 处理答案提交
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    onComplete();
  };

  return (
    <div className="space-y-8">
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <QuestionCard
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          selectedAnswer={answers[questions[currentQuestion].id]}
        />
      </motion.div>

      {currentQuestion === questions.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            onClick={handleSubmit}
            disabled={isSubmitting || !answers[questions[currentQuestion].id]}
          >
            {isSubmitting ? '分析中...' : '查看结果'}
          </Button>
        </motion.div>
      )}

      <div className="flex justify-center gap-2 mt-8">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentQuestion ? 'bg-primary' : 'bg-primary/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 