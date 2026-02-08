# 个人主页 - 代码与光影

这是一个基于 GitHub Pages 的个人作品集网站，展示我的技术项目、微信公众号和摄影作品。

## 🌟 功能特点

- **响应式设计** - 完美适配桌面和移动设备
- **微信公众号展示** - 展示公众号二维码和内容分类
- **摄影作品画廊** - 支持分类筛选和灯箱浏览
- **平滑动画** - ScrollReveal 滚动动画效果
- **作品展示** - 项目介绍和技术栈标签

## 🚀 快速开始

### 1. Fork 或克隆仓库

```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

### 2. 安装依赖

```bash
npm install
```

### 3. 本地开发

```bash
npm start
```

### 4. 构建

```bash
npm run build
```

## 📝 自定义内容

### 修改个人信息

编辑 `src/index.html` 文件：

1. **Hero 区域** - 修改姓名和介绍
2. **About 区域** - 上传你的头像到 `assets/profile.jpg`
3. **公众号** - 上传公众号二维码到 `assets/wechat-qr.png`
4. **摄影作品** - 上传照片到 `assets/photography/` 目录
5. **项目** - 修改项目信息和链接

### 替换图片

| 文件路径 | 说明 |
|---------|------|
| `assets/profile.jpg` | 个人头像 |
| `assets/wechat-qr.png` | 公众号二维码 |
| `assets/photography/photo1.jpg` | 摄影作品大图 |
| `assets/photography/photo1-thumb.jpg` | 摄影作品缩略图 |
| `assets/project.jpg` | 项目截图 |

### 摄影作品命名规范

- 大图：`photo1.jpg`, `photo2.jpg`, ...
- 缩略图：`photo1-thumb.jpg`, `photo2-thumb.jpg`, ...
- 推荐尺寸：大图 1200x900，缩略图 400x300

## 🎨 自定义样式

样式文件位于 `src/sass/` 目录：

- `abstracts/_variables.scss` - 颜色变量
- `sections/` - 各部分的样式

## 📦 部署到 GitHub Pages

### 方法一：GitHub Actions 自动部署

1. 在 GitHub 仓库设置中启用 GitHub Pages
2. 选择 Source 为 "GitHub Actions"
3. 推送代码到 main 分支，自动部署

### 方法二：手动部署

1. 构建项目：`npm run build`
2. 将 `dist` 目录内容推送到 `gh-pages` 分支

## 🛠️ 技术栈

- [Parcel](https://parceljs.org/) - 构建工具
- [Bootstrap 5](https://getbootstrap.com/) - CSS 框架
- [ScrollReveal](https://scrollrevealjs.org/) - 滚动动画
- [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/) - 图片灯箱
- [Vanilla Tilt](https://micku7zu.github.io/vanilla-tilt.js/) - 3D 倾斜效果
- [Font Awesome](https://fontawesome.com/) - 图标

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 💬 联系方式

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- 微信公众号: 你的公众号名称

---

Made with ❤️ and 📷
