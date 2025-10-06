# 🚀 快速参考卡片

> 给 Augment AI 的快速提示

---

## 📍 项目位置
```
/home/jzy/桌面/piscan/piscan-exact-clone
```

---

## 🌐 网站 URL

### 生产环境
```
https://piscan-arj8pwp52-pis-projects-7c798bb5.vercel.app
https://piexplorer.online
```

### 本地开发
```
http://localhost:8080
```

### Vercel 控制台
```
https://vercel.com/pis-projects-7c798bb5/piscan
```

---

## 🔑 账户信息

```
邮箱: tronglongpham90@gmail.com
用户名: tronglongpham90-8386
Scope: pis-projects-7c798bb5
项目名: piscan
```

---

## 📂 核心文件（不要删除）

```
✅ index.html       - 主页面
✅ main.js          - React 应用 (1.2MB)
✅ main.css         - 主样式 (324KB)
✅ favicon.png      - 图标
✅ manifest.json    - PWA 配置
✅ static/          - 静态资源目录
```

---

## ⚡ 常用命令

### 本地服务器
```bash
cd /home/jzy/桌面/piscan/piscan-exact-clone
python3 -m http.server 8080
```

### Vercel 部署
```bash
vercel --prod
```

### 检查状态
```bash
vercel ls                              # 查看部署
vercel domains ls                      # 查看域名
dig piexplorer.online +short          # 检查 DNS
curl http://localhost:8080            # 测试本地
```

---

## 🌍 DNS 配置

### Cloudflare 设置
```
Type: A
Name: @
Value: 76.76.21.21
Proxy: DNS only (灰色云朵)
```

---

## 🔄 最近修改

**日期**: 2025-10-06

**修改内容**:
- ✅ 恢复到 piscan.io 原始状态
- ✅ 删除所有自定义文件
- ✅ 部署到 Vercel
- ✅ 配置域名 piexplorer.online

---

## 📊 项目状态

```
状态: ✅ 已部署
服务器: Vercel
域名: piexplorer.online (配置中)
本地端口: 8080 (运行中)
```

---

## 🆘 快速故障排除

### 网站无法访问
```bash
vercel inspect
curl -I https://piscan-arj8pwp52-pis-projects-7c798bb5.vercel.app
```

### DNS 问题
```bash
dig piexplorer.online +short
# 应该返回: 76.76.21.21
```

### 本地服务器问题
```bash
lsof -i :8080          # 检查端口
kill -9 <PID>          # 杀死进程
```

---

## 📖 完整文档

查看 **PROJECT-INFO.md** 获取详细信息

---

**快速参考结束** ⚡

