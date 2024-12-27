'use client';

import Image from 'next/image';
import { Rating } from './Rating';
import type { TestimonialItem } from './types';

export function TestimonialCard({
  content,
  author,
  avatar,
  role,
  rating
}: TestimonialItem) {
  return (
    <div className="h-full px-6 py-12">
      <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-border">
        {/* Content */}
        <p className="text-lg md:text-xl text-center mb-8">
          "{content}"
        </p>

        {/* Author */}
        <div className="flex flex-col items-center">
          <Image
            src={avatar}
            alt={author}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full mb-4"
          />
          <div className="text-center">
            <div className="font-semibold mb-1">{author}</div>
            <div className="text-secondary text-sm mb-3">{role}</div>
            <Rating value={rating} />
          </div>
        </div>
      </div>
    </div>
  );
} 