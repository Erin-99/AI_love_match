'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../common/Button';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: string;
  icon: string;
  href: string;
}

const footerSections: FooterSection[] = [
  {
    title: "产品",
    links: [
      { label: "功能特性", href: "/features" },
      { label: "定价方案", href: "/pricing" },
      { label: "更新日志", href: "/changelog" },
      { label: "路线图", href: "/roadmap" }
    ]
  },
  {
    title: "资源",
    links: [
      { label: "开发文档", href: "/docs" },
      { label: "教程", href: "/tutorials" },
      { label: "示例", href: "/examples" },
      { label: "API 参考", href: "/api" }
    ]
  },
  {
    title: "公司",
    links: [
      { label: "关于我们", href: "/about" },
      { label: "博客", href: "/blog" },
      { label: "工作机会", href: "/careers" },
      { label: "联系我们", href: "/contact" }
    ]
  },
  {
    title: "法律",
    links: [
      { label: "服务条款", href: "/terms" },
      { label: "隐私政策", href: "/privacy" },
      { label: "Cookie 政策", href: "/cookies" },
      { label: "安全说明", href: "/security" }
    ]
  }
];

const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    icon: "/icons/social/github.svg",
    href: "https://github.com"
  },
  {
    platform: "Twitter",
    icon: "/icons/social/twitter.svg",
    href: "https://twitter.com"
  },
  {
    platform: "LinkedIn",
    icon: "/icons/social/linkedin.svg",
    href: "https://linkedin.com"
  },
  {
    platform: "Discord",
    icon: "/icons/social/discord.svg",
    href: "https://discord.com"
  }
];

export function Footer() {
  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-foreground/10">
      <div className="container-width container-padding">
        <div className="py-12 lg:py-16">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-12 lg:mt-16 pt-8 border-t border-foreground/10">
            <div className="max-w-md">
              <h3 className="font-semibold mb-4">
                订阅我们的新闻通讯
              </h3>
              <p className="text-secondary mb-4">
                获取最新的产品更新和技术资讯
              </p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="输入您的邮箱地址"
                  className="flex-1 h-12 px-4 rounded-lg bg-background 
                    border border-foreground/10 focus:border-primary
                    outline-none transition-colors"
                />
                <Button type="submit" variant="primary">
                  订阅
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 lg:mt-16 pt-8 border-t border-foreground/10
            flex flex-col md:flex-row justify-between items-center gap-4"
          >
            {/* Copyright */}
            <p className="text-sm text-secondary order-2 md:order-1">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 order-1 md:order-2">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-primary transition-colors"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  <Image
                    src={social.icon}
                    alt={social.platform}
                    width={24}
                    height={24}
                    className="opacity-75 hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}