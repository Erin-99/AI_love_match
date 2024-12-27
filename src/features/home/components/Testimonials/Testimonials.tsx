'use client';

import { LogoWall } from './LogoWall';
import { TestimonialCarousel } from './TestimonialCarousel';
import type { TestimonialCardProps } from './TestimonialCard';

const testimonials: TestimonialCardProps[] = [
  {
    content: "这个平台帮助我们显著提升了开发效率，团队成员都对其赞不绝口。特别是其强大的组件库和完善的文档支持，让我们的开发过程变得更加顺畅。",
    author: {
      name: "张明",
      title: "技术总监 @ 科技公司",
      avatar: "/avatars/testimonial1.jpg"
    },
    rating: 5
  },
  {
    content: "作为一个创业公司，我们需要快速验证想法并迭代产品。这个平台提供的工具和服务完美满足了我们的需求，让我们能够专注于业务创新。",
    author: {
      name: "李华",
      title: "创始人 @ 创新工作室",
      avatar: "/avatars/testimonial2.jpg"
    },
    rating: 5
  },
  {
    content: "平台的性能和可靠性给我留下了深刻印象。我们的应用在经历了大规模用户增长后依然保持着出色的表现，这让我们非常放心。",
    author: {
      name: "王芳",
      title: "高级工程师 @ 互联网公司",
      avatar: "/avatars/testimonial3.jpg"
    },
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-section-sm lg:py-section-lg bg-gradient-to-b from-background to-background/50">
      <div className="container-width container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            值得信赖的选择
          </h2>
          <p className="text-secondary text-lg">
            看看其他开发者如何评价我们的产品
          </p>
        </div>

        {/* Logo Wall */}
        <div className="mb-16 lg:mb-24">
          <LogoWall />
        </div>

        {/* Testimonials Carousel */}
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
