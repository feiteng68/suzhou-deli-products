# 苏州德力产品展示 - GitHub Pages 部署指南

## 🚀 部署步骤

### 步骤 1：创建 GitHub 仓库

1. 打开 [GitHub](https://github.com) 登录您的账号
2. 点击右上角 **New** 创建新仓库
3. **Repository name**: `deliproducts` 或其他名称
4. **Description**: 苏州德力产品展示页面
5. **Public** - 选择公开仓库（免费）
6. 点击 **Create repository**

### 步骤 2：上传项目文件

**方法 A：使用 Git 命令（推荐）**

打开命令提示符或终端，执行以下命令：

```bash
cd "d:\feiteng sfot\微信公众号"
git init
git add .
git commit -m "Initial commit - 苏州德力产品展示"
git branch -M main
git remote add origin https://github.com/您的用户名/仓库名.git
git push -u origin main
```

**方法 B：使用 GitHub Desktop**

1. 下载安装 [GitHub Desktop](https://desktop.github.com/)
2. 点击 **Add > Add existing repository**
3. 选择 `d:\feiteng sfot\微信公众号` 目录
4. 点击 **Publish repository**

### 步骤 3：启用 GitHub Pages

1. 进入仓库页面，点击 **Settings**
2. 左侧菜单点击 **Pages**
3. **Source** 选择：
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. 点击 **Save**

等待几分钟后，页面会显示访问地址：
```
Your site is live at https://您的用户名.github.io/仓库名/
```

### 步骤 4：配置自定义域名（可选）

如果您有自己的域名，可以配置：

1. 在 **GitHub Pages** 设置中，输入您的域名：
   ```
   deliproducts.com
   ```
2. 在域名管理后台添加 DNS 记录：
   ```
   类型: CNAME
   主机记录: www
   记录值: 您的用户名.github.io
   ```

### 步骤 5：微信公众号配置

#### 方法 A：使用公众号菜单链接

1. 登录 [微信公众平台](https://mp.weixin.qq.com/)
2. 进入 **自定义菜单**
3. 添加菜单，设置链接为您的 GitHub Pages 地址：
   ```
   https://您的用户名.github.io/仓库名/index.html
   ```

#### 方法 B：使用公众号文章内嵌链接

1. 在公众号文章中插入链接：
   ```
   <a href="https://您的用户名.github.io/仓库名/index.html">查看产品展示</a>
   ```

#### 方法 C：使用小程序（需要认证）

如需更完美的体验，可以开发微信小程序，使用 `web-view` 组件嵌入网页。

---

## 📋 部署检查清单

- [ ] 创建 GitHub 仓库
- [ ] 上传所有项目文件
- [ ] 启用 GitHub Pages
- [ ] 测试访问地址可正常打开
- [ ] 配置微信公众号菜单或文章链接
- [ ] 验证在微信内可正常搜索和浏览

---

## 🛠 自动化部署

项目已配置 GitHub Actions 自动部署：

- 每次向 `main` 分支推送代码，会自动部署到 GitHub Pages
- 配置文件位置：`.github/workflows/deploy.yml`

### 触发部署

```bash
# 修改代码后推送
git add .
git commit -m "更新产品数据"
git push origin main
```

---

## 🔗 访问地址格式

| 类型 | 地址示例 |
|------|----------|
| GitHub Pages | `https://用户名.github.io/仓库名/` |
| 自定义域名 | `https://deliproducts.com/` |
| 直接访问 | `https://用户名.github.io/仓库名/index.html` |

---

## ⚠️ 注意事项

1. **图片路径**：确保 `products.json` 中的产品名称与 `image/` 目录中的图片文件名一致
2. **微信限制**：微信内访问外部链接需要用户确认跳转，建议使用公众号菜单或文章链接
3. **HTTPS**：GitHub Pages 默认使用 HTTPS，确保链接以 `https://` 开头
4. **缓存问题**：更新后可能需要清除浏览器缓存才能看到最新内容

---

## 📞 技术支持

如果部署过程中遇到问题，请检查：

1. 仓库是否为公开（Public）
2. GitHub Pages 设置是否正确选择了 `main` 分支
3. 所有文件是否已正确上传
4. 图片路径是否正确

---

**部署完成后，您的客户就可以通过微信公众号搜索和浏览产品展示页面了！**
