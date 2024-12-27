'use client';

import { DetailItem } from './DetailItem';

const details = [
  {
    title: "快速构建现代应用",
    description: "采用最新的技术栈和开发工具，帮助您快速搭建高性能的现代化应用。支持服务端渲染、静态生成等多种渲染模式，确保最佳的用户体验。",
    image: "/images/details/modern-app.svg",
    imageAlt: "现代应用开发界面展示"
  },
  {
    title: "灵活的数据处理",
    description: "强大的数据处理能力，支持多种数据源和存储方案。内置数据验证、转换和缓存机制，让数据处理更加简单高效。",
    image: "/images/details/data-processing.svg",
    imageAlt: "数据处理流程图",
    reversed: true
  },
  {
    title: "全方位的开发支持",
    description: "提供完整的开发工具链和调试功能，配合详尽的文档和活跃的社区支持，帮助开发者解决各种技术难题。",
    image: "/images/details/dev-support.svg",
    imageAlt: "开发支持工具展示"
  }
];

export function Details() {
  return (
    <section id="details" className="py-section-sm lg:py-section-lg bg-gradient-to-b from-background to-background/50">
      <div className="container-width container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            深入了解产品特性
          </h2>
          <p className="text-secondary text-lg">
            探索我们提供的强大功能，了解如何帮助您提升开发效率
          </p>
        </div>

        {/* Detail Items */}
        <div className="space-y-24 lg:space-y-32">
          {details.map((detail) => (
            <DetailItem
              key={detail.title}
              {...detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}