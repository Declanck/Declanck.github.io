# 图片资源说明

这个目录存放网站所需的图片资源。

## 必需图片

### 1. 个人头像
- **文件名**: `profile.jpg`
- **建议尺寸**: 600x600 像素
- **格式**: JPG 或 PNG
- **用途**: 关于我页面展示

### 2. 公众号二维码
- **文件名**: `wechat-qr.png`
- **建议尺寸**: 400x400 像素
- **格式**: PNG（支持透明背景）
- **用途**: 微信公众号展示区域

### 3. 网站图标
- **文件名**: `favicon.png`
- **建议尺寸**: 32x32 或 64x64 像素
- **格式**: PNG
- **用途**: 浏览器标签页图标

### 4. 简历文件（可选）
- **文件名**: `resume.pdf`
- **格式**: PDF
- **用途**: 关于我页面的简历下载

## 摄影作品

所有摄影作品放在 `photography/` 子目录中。

### 命名规则

每张照片需要两个文件：

1. **大图**（用于灯箱展示）
   - 命名: `photo1.jpg`, `photo2.jpg`, ...
   - 建议尺寸: 1200x900 像素或更大
   - 格式: JPG

2. **缩略图**（用于画廊预览）
   - 命名: `photo1-thumb.jpg`, `photo2-thumb.jpg`, ...
   - 建议尺寸: 400x300 像素
   - 格式: JPG

### 示例文件列表

```
photography/
├── photo1.jpg          # 大图 - 山川日落
├── photo1-thumb.jpg    # 缩略图
├── photo2.jpg          # 大图 - 光影人像
├── photo2-thumb.jpg    # 缩略图
├── photo3.jpg          # 大图 - 城市街角
├── photo3-thumb.jpg    # 缩略图
├── photo4.jpg          # 大图 - 晨雾森林
├── photo4-thumb.jpg    # 缩略图
├── photo5.jpg          # 大图 - 海岸线
├── photo5-thumb.jpg    # 缩略图
├── photo6.jpg          # 大图 - 夜色霓虹
├── photo6-thumb.jpg    # 缩略图
├── photo7.jpg          # 大图 - 花间蝶
├── photo7-thumb.jpg    # 缩略图
├── photo8.jpg          # 大图 - 窗前
└── photo8-thumb.jpg    # 缩略图
```

### 图片分类

在 `index.html` 中，每张照片都有一个 `data-category` 属性：

- `landscape` - 风景
- `portrait` - 人像
- `street` - 街拍
- `nature` - 自然

你可以根据需要修改分类或添加更多照片。

## 项目截图

- **文件名**: `project.jpg`
- **建议尺寸**: 800x600 像素
- **格式**: JPG
- **用途**: 项目展示区域

## 图片优化建议

1. 使用 [TinyPNG](https://tinypng.com/) 或 [Squoosh](https://squoosh.app/) 压缩图片
2. 保持文件大小在合理范围内（建议单张不超过 500KB）
3. 使用适当的命名，方便管理
