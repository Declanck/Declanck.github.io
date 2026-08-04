#!/usr/bin/env node
/**
 * 新建博客文章脚手架
 * 用法:
 *   npm run new:post "文章标题"
 *   npm run new:post "文章标题" my-slug
 * 第一个参数为文章标题（必填），第二个参数为文件名/slug（可选，默认取标题）
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const blogDir = resolve(fileURLToPath(new URL('.', import.meta.url)), '../src/content/blog');

const args = process.argv.slice(2);
const title = args[0];

if (!title) {
  console.error('用法: npm run new:post "文章标题" [文件名]');
  process.exit(1);
}

const slug = (args[1] || title).trim().replace(/\s+/g, '-');
const now = new Date();
const pubDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

const content = `---
title: "${title}"
description: ""
pubDate: ${pubDate}
tags: []
---

在这里开始写作…
`;

const filePath = join(blogDir, `${slug}.md`);
mkdirSync(blogDir, { recursive: true });
writeFileSync(filePath, content, 'utf8');
console.log(`已创建文章: ${filePath}`);
console.log('下一步: 补全 frontmatter（description/tags/heroImage）后撰写正文，npm run dev 可实时预览。');
