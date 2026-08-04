# Declan 个人网站

基于 Astro 构建的现代化个人网站，支持 Markdown 博客、SEO 优化和自动部署。

## 技术栈

- **框架**: Astro 6
- **内容**: Markdown + MDX
- **样式**: SCSS
- **部署**: GitHub Pages
- **评论**: giscus / Waline（可配置）

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 目录结构

```
astro-src/
├── src/
│   ├── components/     # Astro 组件（Hero, About, 摄影等）
│   ├── layouts/        # 页面布局
│   ├── pages/          # 页面路由
│   │   └── blog/       # 博客文章
│   ├── styles/         # 全局样式
│   └── content/        # 内容集合（Markdown 文件）
├── public/             # 静态资源
└── dist/              # 构建产物
```

## 添加博客文章

在 `src/content/blog/` 目录下添加 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
pubDate: 2026-05-06
tags: ["标签1", "标签2"]
heroImage: "/assets/cover.jpg"
---

正文内容...
```

## 评论系统配置

### giscus（推荐，基于 GitHub Discussions）

1. 在 GitHub 仓库启用 Discussions
2. 访问 https://giscus.app 获取配置脚本
3. 在博客文章页面添加 giscus embed 代码

### Waline

1. 注册 [Vercel](https://vercel.com) 并部署 Waline 服务端
2. 获取 App ID 和 App Key
3. 在 `src/layouts/BaseLayout.astro` 中添加 Waline 脚本

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

确保仓库 Settings → Pages → Source 设置为 "GitHub Actions"。

## 自定义

- 修改 `src/components/` 中的组件来更新各板块内容
- 修改 `src/styles/global.scss` 调整全局样式
- 修改 `astro.config.mjs` 中的 `site` 字段为你的网站 URL
