---
name: "deli-product-manager"
description: "Manages Suzhou Deli WeChat product gallery. Invoke when adding/editing products, updating specs, or modifying product display page."
---

# 苏州德力产品管理 Skill

## 概述

此 Skill 用于管理苏州德力微信公众号产品展示页面的产品信息，包括添加新产品、修改产品规格、更新产品介绍等。

## 何时使用

- 用户需要添加新产品到展示页面
- 用户需要修改产品规格参数
- 用户需要更新产品介绍文案
- 用户需要更换产品图片
- 用户需要批量处理产品数据
- 用户询问如何维护产品展示页面

## 文件位置

| 文件 | 用途 |
|------|------|
| `products.json` | 产品数据主文件 |
| `main.js` | 交互逻辑（含拼音映射） |
| `style.css` | 页面样式 |
| `index.html` | 页面结构 |
| `image/` | 产品图片目录 |

## 操作指南

### 添加新产品

1. **准备图片**: 将产品效果图放入 `image/` 目录，命名为 `产品名.jpg`（去掉空格）
2. **编辑 products.json**: 在数组末尾添加新产品数据
3. **添加拼音映射**: 在 `main.js` 的 `convertToPinyin()` 中添加拼音
4. **验证**: 刷新页面检查效果

### 修改产品规格

直接编辑 `products.json` 中对应产品的 `规格` 字段，格式为：
```
艺术照/110x60cm-1 组合照/35x50cm-2 摆台/15x20cm-2 相册名/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)
```

### 修改产品介绍

直接编辑 `products.json` 中对应产品的 `产品介绍` 字段，无介绍则填 `null`。

### 规格参数格式规范

- 类别名称：艺术照、组合照、摆台、相册名
- 类别与内容用 `/` 分隔
- 同一类别多个尺寸用 `/` 分隔
- 不同类别之间用空格分隔

### 拼音映射添加

在 `main.js` 的 `convertToPinyin()` 函数中添加：
```javascript
'产品名': 'pinyinyin',
```

## 样式规范摘要

- 主背景: `#F5F5F7`
- 卡片: 白色，16px 圆角，1px `#E8E8ED` 边框
- 主文字: `#1D1D1F`
- 标签文字: `#8E8E93`
- 规格/介绍背景: `#FAFAFA`
- 品牌标题: 32px Bold，字间距 12px
- 产品名: 20px Medium，字间距 4px

## 测试流程

1. 启动本地服务器: `python -m http.server 8080`
2. 访问: `http://localhost:8080/index.html`
3. 检查新产品是否正确显示
4. 测试搜索功能（输入首字母）
5. 检查移动端显示效果

## 注意事项

- 所有文件使用 UTF-8 编码
- 图片文件名与产品名称一致（去掉空格）
- `products.json` 格式必须为有效 JSON
- 拼音映射要覆盖所有产品名称
- 图片建议大小 < 500KB
