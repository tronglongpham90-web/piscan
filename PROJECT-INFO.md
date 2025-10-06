# 🚀 Piscan 项目说明文档

> **最后更新**: 2025-10-06  
> **项目状态**: ✅ 已部署到 Vercel

---

## 📁 项目概述

这是一个基于 **piscan.io** 的克隆项目，用于 Pi Network 区块链浏览器。

### 🎯 项目目标
- 克隆 https://piscan.io/ 的原始功能
- 部署到 Vercel 服务器
- 使用自定义域名 piexplorer.online

---

## 📂 目录结构

```
piscan-exact-clone/
├── index.html              # 主页面（已恢复到 piscan.io 原始状态）
├── main.js                 # React 主应用 (1.2MB)
├── main.css                # 主样式文件 (324KB)
├── favicon.png             # 网站图标
├── manifest.json           # PWA 配置文件
├── static/                 # 静态资源目录
│   ├── css/               # CSS 文件
│   ├── js/                # JavaScript 文件
│   └── media/             # 媒体文件
├── .vercel/               # Vercel 配置（自动生成）
└── PROJECT-INFO.md        # 本说明文档
```

---

## 🌐 服务器信息

### Vercel 部署信息

| 项目 | 信息 |
|------|------|
| **平台** | Vercel |
| **账户邮箱** | tronglongpham90@gmail.com |
| **账户用户名** | tronglongpham90-8386 |
| **Scope** | pis-projects-7c798bb5 |
| **项目名称** | piscan |

### 部署 URL

| 类型 | URL |
|------|-----|
| **生产环境** | https://piscan-arj8pwp52-pis-projects-7c798bb5.vercel.app |
| **Vercel 默认域名 1** | https://piscan-nine.vercel.app |
| **Vercel 默认域名 2** | https://piscan-pis-projects-7c798bb5.vercel.app |
| **自定义域名** | https://piexplorer.online (配置中) |
| **项目控制台** | https://vercel.com/pis-projects-7c798bb5/piscan |
| **域名设置** | https://vercel.com/pis-projects-7c798bb5/piscan/settings/domains |

---

## 🔧 本地服务器

### 当前运行的服务

| 服务 | 端口 | URL | 状态 |
|------|------|-----|------|
| **HTTP 服务器** | 8080 | http://localhost:8080 | ✅ 运行中 (Terminal 71) |

### 启动本地服务器

```bash
cd /home/jzy/桌面/piscan/piscan-exact-clone
python3 -m http.server 8080
```

---

## 📝 重要修改记录

### 2025-10-06 修改内容

#### ✅ 已完成的修改

1. **恢复到原始状态**
   - 将 `index.html` 恢复到 piscan.io 的原始版本
   - 移除了所有自定义的 CSS 和 JS 文件
   - 标题从 "PiExplorer" 改回 "Piscan"

2. **删除的文件**（已清理）
   ```
   - custom-branding.css      # 自定义品牌样式
   - rebrand.js               # 品牌重命名脚本
   - mobile-optimized.css     # 移动端优化样式
   - mobile-enhancements.js   # 移动端增强脚本
   - fix-icons.css            # 图标修复样式
   - test-mobile.html         # 移动端测试页面
   - pi-icon.svg              # Pi 图标
   - generate-icon.html       # 图标生成器
   - start.sh                 # 启动脚本
   - 所有中文文档和说明文件
   ```

3. **保留的核心文件**
   ```
   ✅ index.html              # 主页面
   ✅ main.js                 # React 应用
   ✅ main.css                # 主样式
   ✅ favicon.png             # 图标
   ✅ manifest.json           # PWA 配置
   ✅ static/                 # 静态资源
   ```

#### 📋 index.html 关键配置

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <link rel="icon" href="/favicon.png"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta name="theme-color" content="#000000"/>
  <title>Piscan</title>
  <meta name="google-adsense-account" content="ca-pub-3256258816145387">
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16849325882"></script>
  <script defer="defer" src="/main.js"></script>
  <link href="/main.css" rel="stylesheet">
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

---

## 🚀 部署流程

### Vercel CLI 部署步骤

1. **登录 Vercel**
   ```bash
   vercel login
   # 访问 vercel.com/device 输入验证码
   ```

2. **部署到生产环境**
   ```bash
   cd /home/jzy/桌面/piscan/piscan-exact-clone
   vercel --prod
   ```

3. **添加自定义域名**
   ```bash
   vercel domains add piexplorer.online --scope pis-projects-7c798bb5
   ```

4. **检查域名状态**
   ```bash
   vercel domains ls
   ```

---

## 🌍 域名配置

### piexplorer.online DNS 设置

#### 需要在 Cloudflare 中配置：

| 类型 | 名称 | 值 | 代理状态 |
|------|------|-----|----------|
| A | @ | 76.76.21.21 | DNS only (灰色) |

#### 当前 DNS 状态
```bash
# 检查 DNS
dig piexplorer.online +short

# 应该返回: 76.76.21.21
```

#### Cloudflare Nameservers（当前）
- addyson.ns.cloudflare.com
- edward.ns.cloudflare.com

---

## 🔍 常用命令

### 检查项目状态
```bash
# 查看 Vercel 项目信息
vercel inspect piexplorer.online

# 查看域名列表
vercel domains ls

# 查看部署列表
vercel ls

# 查看项目详情
vercel project ls
```

### 本地测试
```bash
# 启动本地服务器
cd /home/jzy/桌面/piscan/piscan-exact-clone
python3 -m http.server 8080

# 测试本地访问
curl http://localhost:8080

# 在浏览器中打开
xdg-open http://localhost:8080
```

### DNS 检查
```bash
# 检查域名 DNS
dig piexplorer.online +short

# 检查域名状态
curl -I https://piexplorer.online

# 检查 Vercel 部署
curl -I https://piscan-arj8pwp52-pis-projects-7c798bb5.vercel.app
```

---

## 📊 项目统计

| 项目 | 数值 |
|------|------|
| **总文件数** | 6 个核心文件 + static 目录 |
| **main.js 大小** | 1.2 MB |
| **main.css 大小** | 324 KB |
| **总大小** | ~1.7 MB |
| **部署时间** | ~19 秒 |

---

## ⚠️ 注意事项

### 重要提醒

1. **不要修改核心文件**
   - `main.js` 和 `main.css` 是从 piscan.io 复制的
   - 修改可能导致功能异常

2. **保持与原站同步**
   - 定期检查 piscan.io 是否有更新
   - 如需更新，重新下载 main.js 和 main.css

3. **DNS 传播时间**
   - DNS 更改可能需要 5 分钟到 48 小时生效
   - 使用 `dig` 命令检查 DNS 状态

4. **Vercel 限制**
   - 免费账户有带宽和构建时间限制
   - 注意监控使用量

---

## 🔗 相关链接

### 官方资源
- **原始网站**: https://piscan.io/
- **Pi Network**: https://minepi.com/

### Vercel 资源
- **Vercel 文档**: https://vercel.com/docs
- **域名配置**: https://vercel.link/domain-configuration
- **CLI 文档**: https://vercel.com/docs/cli

### 项目管理
- **项目控制台**: https://vercel.com/pis-projects-7c798bb5/piscan
- **部署历史**: https://vercel.com/pis-projects-7c798bb5/piscan/deployments
- **域名设置**: https://vercel.com/pis-projects-7c798bb5/piscan/settings/domains

---

## 🆘 故障排除

### 常见问题

#### 1. 网站无法访问
```bash
# 检查部署状态
vercel inspect

# 检查 DNS
dig piexplorer.online +short

# 检查 Vercel 服务状态
curl -I https://piscan-arj8pwp52-pis-projects-7c798bb5.vercel.app
```

#### 2. 域名配置失败
- 确认 DNS A 记录指向 `76.76.21.21`
- 确认 Cloudflare 代理状态为 "DNS only"（灰色云朵）
- 等待 DNS 传播（最多 48 小时）

#### 3. 本地服务器无法启动
```bash
# 检查端口占用
lsof -i :8080

# 杀死占用进程
kill -9 <PID>

# 重新启动
python3 -m http.server 8080
```

---

## 📞 联系信息

- **Vercel 账户**: tronglongpham90@gmail.com
- **项目路径**: `/home/jzy/桌面/piscan/piscan-exact-clone`

---

## ✅ 快速检查清单

下次使用 Augment 时，快速检查：

- [ ] 本地服务器是否运行？ `curl http://localhost:8080`
- [ ] Vercel 部署是否正常？ `vercel ls`
- [ ] 域名 DNS 是否配置？ `dig piexplorer.online +short`
- [ ] 网站是否可访问？ `curl -I https://piexplorer.online`

---

**文档结束** 📄

