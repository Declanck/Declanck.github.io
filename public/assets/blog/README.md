# 博客图片目录

存放博客文章配图，按文章/月份建子目录，例如：

```
public/assets/blog/
├── 2026-08/
│   ├── ai-tools-cover.jpg   # 文章封面
│   └── screenshot-1.png     # 正文插图
└── README.md
```

在 Markdown 文章中使用**站点绝对路径**引用（以 `/` 开头，指向 `public/` 根）：

```markdown
---
title: "我的文章"
heroImage: "/assets/blog/2026-08/ai-tools-cover.jpg"
---

正文插图：![截图](/assets/blog/2026-08/screenshot-1.png)
```

注意：`public/` 下的文件会原样复制到站点根目录，路径与 `public/` 内一致。
