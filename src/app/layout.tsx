import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Love Match - AI 情感匹配',
  description: '使用 AI 技术，帮助你找到真爱',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
