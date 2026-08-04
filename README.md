# Declan 个人网站

基于 Astro 6 构建的现代化个人网站，支持 Markdown 博客、RSS、SEO 优化和 GitHub Pages 自动部署。

## 技术栈

- **框架**: Astro 6
- **内容**: Markdown（frontmatter 定义元信息）
- **样式**: SCSS
- **部署**: GitHub Actions → GitHub Pages
- **评论**: giscus / Waline（预留挂载点）

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发（实时预览，改完即刷新）
npm run dev

# 构建生产版本（产物在 dist/）
npm run build

# 预览构建结果
npm run preview
```

## 写作工作流（日常用这套）

### 1. 新建文章

```bash
npm run new:post "文章标题"          # 文件名默认取标题
npm run new:post "文章标题" my-slug  # 或指定英文文件名
```

会在 `src/content/blog/` 生成一个带 frontmatter 的 `.md` 模板，补全 `description` / `tags` / `heroImage` 后撰写正文。

### 2. 放图片

配图统一放 `public/assets/blog/<年-月>/`，文章里用 `/assets/blog/...` 绝对路径引用（详见 `public/assets/blog/README.md`）：

```markdown
---
title: "我的文章"
heroImage: "/assets/blog/2026-08/cover.jpg"
---

正文插图：![截图](/assets/blog/2026-08/example.png)
```

### 3. 发布

```bash
git add -A
git commit -m "新增文章: xxx"
git push origin main   # GitHub Actions 自动构建并部署
```

`npm run dev` 本地预览无误后即可推送，约 1 分钟后线上生效（https://declanck.github.io）。

## 目录结构

```
├── src/
│   ├── components/     # Astro 组件（Hero, About, 摄影等）
│   ├── layouts/        # 页面布局
│   ├── pages/          # 页面路由（/、/blog、/blog/[slug]、/rss.xml）
│   ├── content/        # 博客内容集合（Markdown 文章）
│   └── styles/         # 全局样式
├── public/
│   └── assets/         # 静态资源（头像/摄影/博客配图）
├── scripts/
│   └── new-post.mjs    # 新文章脚手架
└── dist/               # 构建产物（不提交）
```

## 博客元信息规范

```markdown
---
title: "文章标题"
description: "文章摘要（列表页展示）"
pubDate: 2026-08-04
tags: ["标签1", "标签2"]
heroImage: "/assets/blog/2026-08/cover.jpg"  # 可选，封面图
---
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
