# 摄影作品目录

将你的摄影作品放在这里。

## 文件命名格式

- 大图: `photo1.jpg`, `photo2.jpg`, `photo3.jpg` ...
- 缩略图: `photo1-thumb.jpg`, `photo2-thumb.jpg`, `photo3-thumb.jpg` ...

## 图片规格建议

- **大图**: 1200x900 像素，用于灯箱展示
- **缩略图**: 400x300 像素，用于画廊预览

## 支持的分类

在 HTML 中设置 `data-category` 属性：

- `landscape` - 风景
- `portrait` - 人像
- `street` - 街拍
- `nature` - 自然

## 添加新照片

1. 将照片放入此目录
2. 在 `index.html` 的 `#photography` 区域添加新的 `.photo-item` 元素
3. 设置正确的 `data-category` 分类
4. 更新图片标题和描述
