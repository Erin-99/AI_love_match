'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface DetailItemProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
}

export function DetailItem({
  title,
  description,
  image,
  imageAlt,
  reversed = false
}: DetailItemProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-8 lg:gap-12 ${
        reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-center`}
    >
      {/* Text content */}
      <motion.div
        className="flex-1 max-w-xl"
        initial={{ opacity: 0, x: reversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          {title}
        </h3>
        <p className="text-secondary text-lg leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Image with parallax */}
      <motion.div
        style={{ y }}
        className="flex-1 relative w-full aspect-video max-w-2xl"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover rounded-2xl shadow-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
} 