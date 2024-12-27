# Love Match

一个基于 AI 的情侣匹配度测试网站。

## 设计特点

### 视觉设计
- 简约优雅的界面设计
- 柔和的粉色调主题
- 大型居中爱心背景装饰
- 半透明毛玻璃效果的顶部导航栏

### 颜色方案
- 背景色: `#FFF5F7` (浅粉色背景)
- 主题色: `#FFB6C6` (爱心装饰)
- 透明度: 背景装饰 40% 透明度
- 毛玻璃效果: 90% 透明度

### 布局
- 固定位置的透明导航栏
- 居中的大型爱心背景装饰
- 响应式设计，适配多种屏幕尺寸

### 交互设计
- 平滑的页面过渡效果
- 简洁的导航体验
- 清晰的视觉层次

## 技术实现

### 前端技术
- Next.js 15.1.3
- React 19
- Tailwind CSS
- Framer Motion

### 主要组件
- `Header`: 透明导航栏组件
- `BigHeart`: SVG 爱心背景装饰
- `MobileMenu`: 移动端菜单组件

### 样式实现
```css
/* 背景爱心装饰 */
body::before {
  content: '';
  @apply fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none z-50;
  background: url('/images/big-heart.svg') no-repeat center center;
  background-size: contain;
}

/* 导航栏样式 */
.header {
  @apply fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm;
}
```

## 最近更新
- 移除了 Logo 和文字标题
- 添加了大型居中爱心背景
- 优化了导航栏透明效果
- 调整了视觉层次关系

## 开发指南

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```

### 构建项目
```bash
npm run build
```

### 启动生产服务器
```bash
npm run start
```
