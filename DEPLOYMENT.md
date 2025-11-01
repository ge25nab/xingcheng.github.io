# 部署说明 Deployment Guide

## 问题排查 Checklist

如果自定义域名 `xingcheng-zhou.com` 上的 layout 显示错误，请检查以下内容：

### ✅ 1. 确认构建配置正确

**自定义域名构建（默认）：**
```bash
npm run build
```

构建时会显示：
```
📦 Build Configuration:
   Domain: xingcheng-zhou.com
   Base Path: (empty - for custom domain)
   Mode: Custom Domain
```

**GitHub Pages 构建：**
```bash
GITHUB_PAGES=true npm run build
```

### ✅ 2. 检查构建输出

确认 `out/index.html` 中的资源路径：
- ✅ 正确：`href="/_next/static/css/..."` （无前缀）
- ❌ 错误：`href="/xingcheng.github.io/_next/static/css/..."` （有前缀）

### ✅ 3. 部署步骤

#### 对于自定义域名 (xingcheng-zhou.com)：

1. **重新构建（使用自定义域名配置）：**
   ```bash
   npm run build
   ```

2. **检查构建输出：**
   - 确认 `out/` 目录中的文件路径正确
   - CSS 路径：`/_next/static/css/...`
   - JS 路径：`/_next/static/chunks/...`
   - 图片路径：`/assets/img/...`

3. **部署到服务器：**
   - 将 `out/` 目录的所有内容上传到您的服务器根目录
   - 确保所有文件都已正确上传

4. **清除缓存：**
   - 清除浏览器缓存（Ctrl+Shift+R 或 Cmd+Shift+R）
   - 清除 CDN 缓存（如果使用了 CDN）
   - 清除服务器缓存

5. **验证部署：**
   - 打开浏览器开发者工具（F12）
   - 检查 Network 标签，查看资源加载情况
   - 确认所有 CSS 和 JS 文件都成功加载（状态码 200）

### ✅ 4. 常见问题

#### 问题：Layout 显示错误，CSS 未加载

**原因：**
- 部署了错误的构建版本（GitHub Pages 版本）
- 服务器上的文件未更新
- 浏览器/CDN 缓存

**解决方法：**
1. 确保使用 `npm run build`（不使用 `GITHUB_PAGES=true`）
2. 重新部署 `out/` 目录的所有内容
3. 清除所有缓存

#### 问题：图片无法显示

**原因：**
- 图片路径包含 `/xingcheng.github.io` 前缀
- 图片文件未正确上传

**解决方法：**
1. 检查 `out/assets/img/` 目录是否存在
2. 确认图片路径在 HTML 中是 `/assets/img/...`（无前缀）
3. 重新上传所有资源文件

### ✅ 5. 验证清单

部署后，在浏览器中打开 `https://xingcheng-zhou.com/` 并检查：

- [ ] 页面内容正常显示
- [ ] CSS 样式正确加载（检查 Network 中 CSS 文件状态）
- [ ] JavaScript 正常工作（检查 Console 是否有错误）
- [ ] 图片正常显示
- [ ] 导航链接正常工作

### 快速修复命令

如果需要快速重新构建和部署：

```bash
# 1. 确保使用自定义域名配置构建
npm run build

# 2. 检查构建结果
ls -la out/

# 3. 将 out/ 目录内容部署到服务器
# （使用您的部署工具，如 rsync, scp, ftp 等）
```

---

**注意：**
- 自定义域名构建：`basePath = ''` （空字符串）
- GitHub Pages 构建：`basePath = '/xingcheng.github.io'`
- 默认配置已适配自定义域名 `xingcheng-zhou.com`

