'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

type Person = {
  name: string;
  gender?: 'male' | 'female';
  age?: string;
  answers: Record<number, string>;
};

type Question = {
  text: string;
  options: {
    id: string;
    text: string;
  }[];
};

export function GuestAssessmentPage() {
  const [step, setStep] = useState(0);
  const [person1, setPerson1] = useState<Person>({ name: '', answers: {} });
  const [person2, setPerson2] = useState<Person>({ name: '', answers: {} });

  const questions: Question[] = [
    {
      text: "你更喜欢安静的环境还是热闹的氛围？",
      options: [
        { id: 'A', text: '我更喜欢安静的环境，可以独处和思考' },
        { id: 'B', text: '我更喜欢热闹的氛围，能量满满' },
        { id: 'C', text: '视情况而定，两种环境我都能适应' }
      ]
    },
    {
      text: "遇到问题时，你更倾向于？",
      options: [
        { id: 'A', text: '独立思考，自己解决' },
        { id: 'B', text: '寻求他人建议和帮助' },
        { id: 'C', text: '先尝试自己解决，必要时寻求帮助' }
      ]
    },
    {
      text: "你认为恋爱中最重要的是什么？",
      options: [
        { id: 'A', text: '真诚和信任' },
        { id: 'B', text: '理解和包容' },
        { id: 'C', text: '共同成长' }
      ]
    },
    {
      text: "你希望另一半是什么样的性格？",
      options: [
        { id: 'A', text: '开朗活泼，富有活力' },
        { id: 'B', text: '温柔体贴，善解人意' },
        { id: 'C', text: '稳重可靠，有担当' }
      ]
    }
  ];

  const handleStartTest = () => {
    if (person1.name && person2.name) {
      setStep(1);
    }
  };

  const handleAnswer = (personNumber: 1 | 2, questionIndex: number, answerId: string) => {
    if (personNumber === 1) {
      setPerson1(prev => ({
        ...prev,
        answers: { ...prev.answers, [questionIndex]: answerId }
      }));
    } else {
      setPerson2(prev => ({
        ...prev,
        answers: { ...prev.answers, [questionIndex]: answerId }
      }));
    }

    const allAnswered = () => {
      const person1Completed = Object.keys(person1.answers).length === questions.length;
      const person2Completed = Object.keys(person2.answers).length === questions.length;
      return person1Completed && person2Completed;
    };

    if (allAnswered()) {
      setStep(2);
    }
  };

  if (step === 0) {
    return (
      <div className="min-h-screen py-20">
        <div className="container-width container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl font-bold text-center mb-12">开始你们的匹配测试</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">第一位测试者</h2>
                    <Input
                      placeholder="请输入你的名字"
                      value={person1.name}
                      onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">性别</label>
                    <div className="flex gap-4">
                      <Button
                        variant={person1.gender === 'male' ? 'default' : 'outline'}
                        onClick={() => setPerson1({ ...person1, gender: 'male' })}
                      >
                        男生
                      </Button>
                      <Button
                        variant={person1.gender === 'female' ? 'default' : 'outline'}
                        onClick={() => setPerson1({ ...person1, gender: 'female' })}
                      >
                        女生
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">年龄</label>
                    <Input
                      type="number"
                      placeholder="请输入你的年龄"
                      value={person1.age || ''}
                      onChange={(e) => setPerson1({ ...person1, age: e.target.value })}
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">第二位测试者</h2>
                    <Input
                      placeholder="请输入你的名字"
                      value={person2.name}
                      onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">性别</label>
                    <div className="flex gap-4">
                      <Button
                        variant={person2.gender === 'male' ? 'default' : 'outline'}
                        onClick={() => setPerson2({ ...person2, gender: 'male' })}
                      >
                        男生
                      </Button>
                      <Button
                        variant={person2.gender === 'female' ? 'default' : 'outline'}
                        onClick={() => setPerson2({ ...person2, gender: 'female' })}
                      >
                        女生
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">年龄</label>
                    <Input
                      type="number"
                      placeholder="请输入你的年龄"
                      value={person2.age || ''}
                      onChange={(e) => setPerson2({ ...person2, age: e.target.value })}
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                onClick={handleStartTest}
                disabled={!person1.name || !person2.name}
              >
                开始测试
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="min-h-screen py-20">
        <div className="container-width container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <h2 className="text-xl font-semibold">{person1.name} 的答案</h2>
              <h2 className="text-xl font-semibold">{person2.name} 的答案</h2>
            </div>

            <div className="space-y-12">
              {questions.map((question, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-medium mb-6">
                    {index + 1}. {question.text}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {question.options.map((option) => (
                        <Button
                          key={option.id}
                          className="w-full justify-start text-left"
                          variant={person1.answers[index] === option.id ? 'default' : 'outline'}
                          onClick={() => handleAnswer(1, index, option.id)}
                        >
                          {option.text}
                        </Button>
                      ))}
                    </div>

                    <div className="space-y-4">
                      {question.options.map((option) => (
                        <Button
                          key={option.id}
                          className="w-full justify-start text-left"
                          variant={person2.answers[index] === option.id ? 'default' : 'outline'}
                          onClick={() => handleAnswer(2, index, option.id)}
                        >
                          {option.text}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                请确保双方都完成所有问题的作答
              </p>
              <Button
                size="lg"
                onClick={() => {
                  if (Object.keys(person1.answers).length === questions.length &&
                      Object.keys(person2.answers).length === questions.length) {
                    setStep(2);
                  }
                }}
                disabled={
                  Object.keys(person1.answers).length !== questions.length ||
                  Object.keys(person2.answers).length !== questions.length
                }
              >
                查看结果
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container-width container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold mb-4">匹配结果</h2>
            <div className="text-4xl font-bold text-primary mb-4">
              85% 匹配度
            </div>
            <p className="text-lg mb-6">
              {person1.name} 和 {person2.name} 的性格特征非常互补，
              你们有很大的潜力发展一段美好的恋爱关系。
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold">为什么你们很配？</h3>
              <ul className="text-left space-y-2">
                <li>• 性格特征互补，能够相互成长</li>
                <li>• 沟通方式契合，易于理解对方</li>
                <li>• 共同的价值观和人生目标</li>
                <li>• 相似的生活习惯和兴趣爱好</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}