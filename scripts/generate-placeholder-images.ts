import fs from 'fs';
import path from 'path';

// SVG 生成函数
const svgIcon = (name: string) => `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="24" rx="12" fill="#0070f3"/>
  <text x="12" y="16" text-anchor="middle" fill="white" font-size="12">${name[0]}</text>
</svg>
`;

const placeholderImage = (text: string) => `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f3f4f6"/>
  <rect x="100" y="200" width="600" height="200" fill="#e5e7eb"/>
  <text x="400" y="320" text-anchor="middle" fill="#666" font-family="sans-serif" font-size="32">${text}</text>
</svg>
`;

// 工具函数：确保目录存在
function ensureDirectoryExists(filePath: string) {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
}

// 工具函数：安全地写入文件
function safeWriteFileSync(filePath: string, content: string) {
  try {
    ensureDirectoryExists(filePath);
    fs.writeFileSync(filePath, content);
    console.log(`Created: ${filePath}`);
  } catch (error) {
    console.error(`Error creating ${filePath}:`, error);
  }
}

// 生成文件的基础路径
const BASE_PATH = process.cwd();

// 生成社交媒体图标
['github', 'twitter', 'linkedin', 'discord'].forEach(platform => {
  const filePath = path.join(BASE_PATH, 'public', 'icons', 'social', `${platform}.svg`);
  safeWriteFileSync(filePath, svgIcon(platform));
});

// 生成特性图标
['speed', 'scale', 'security', 'customize'].forEach(feature => {
  const filePath = path.join(BASE_PATH, 'public', 'icons', 'features', `${feature}.svg`);
  safeWriteFileSync(filePath, svgIcon(feature));
});

// 生成示例图片
['modern-app', 'data-processing', 'dev-support'].forEach(name => {
  const filePath = path.join(BASE_PATH, 'public', 'images', 'details', `${name}.svg`);
  safeWriteFileSync(filePath, placeholderImage(name));
});

// 生成示例头像
[1, 2, 3].forEach(i => {
  const filePath = path.join(BASE_PATH, 'public', 'avatars', `testimonial${i}.svg`);
  safeWriteFileSync(filePath, placeholderImage(`User ${i}`));
});

// 生成示例logo
[1, 2, 3, 4, 5, 6, 7, 8].forEach(i => {
  const filePath = path.join(BASE_PATH, 'public', 'logos', `logo${i}.svg`);
  safeWriteFileSync(filePath, svgIcon(`L${i}`));
});

console.log('All placeholder images generated successfully!');