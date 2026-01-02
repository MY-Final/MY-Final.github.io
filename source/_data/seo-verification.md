---
title: SEO 验证码快速配置指南
date: 2025-12-17
type: guide
description: "获取 Google 和 Baidu 验证码后的配置速查表"
---

## 🔍 获取验证码后，只需两步

从搜索引擎获取验证代码后，编辑以下两个文件：

---

### 步骤 1: 编辑 `_config.butterfly.yml`

找到 `site_verification` 部位（在文件末尾），填写验证码：

```yaml
# 网站验证（SEO - 搜索引擎提交用）
site_verification:
  - name: google-site-verification
    content: "粘贴你的Google验证码到这里"  # ← 替换这个
  - name: baidu-site-verification
    content: "粘贴你的百度验证码到这里"  # ← 替换这个
```

**示例**：
```yaml
site_verification:
  - name: google-site-verification
    content: "abc123DEF456xyz789"  # 这是示例，换成你的
  - name: baidu-site-verification
    content: "xyz789ABC123def456"  # 这是示例，换成你的
```

---

### 步骤 2: 重新部署

在博客根目录执行：
```bash
hexo clean && hexo g -d
```

部署完成后，回到搜索引擎控制台点击"验证"按钮。

---

## ✅ 验证成功后要做什么？

**立即做**：
1. 提交 sitemap：
   - Google: `sitemap.xml`
   - 百度: `baidu-sitemap.xml`

**等待 1-2 周**：
- 搜索引擎会自动爬取并收录你的网站

**期间可以**：
- 继续发布新文章
- 分享到 Twitter
- 在社区讨论时附上链接

---

## ❓ 遇到问题？

### 验证失败？
1. 检查验证码是否复制完整 (不要有多余空格)
2. 检查文件名拼写: `_config.butterfly.yml`
3. 确认已重新部署: `hexo clean && hexo g -d`
4. 等待 5-10 分钟再验证

### 不知道怎么获取验证码？
1. 打开对应搜索引擎控制台
2. 选择"HTML 标签"验证方式
3. 复制 `<meta>` 标签中的 `content` 值
4. 不要复制整个标签，只复制 content 的内容

---

## 📝 我的配置参考

这是我为你准备的配置文件位置：

**文件**: `C:\Users\34861\Desktop\blog\myblogs\_config.butterfly.yml`

**第 933-937 行**:
```yaml
site_verification:
  - name: google-site-verification
    content: "YOUR_GOOGLE_VERIFICATION_CODE"
  - name: baidu-site-verification
    content: "YOUR_BAIDU_VERIFICATION_CODE"
```

直接替换这两个引号内的内容即可。

---

**一句话总结**：拿到验证码 → 填入配置文件 → 重新部署 → 提交 sitemap → 等待收录
