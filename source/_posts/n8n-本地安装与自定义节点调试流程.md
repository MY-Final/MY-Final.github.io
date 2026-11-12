---
title: 用 npm link 调试 n8n 自定义节点
date: 2026-01-02 23:15:10
updated: 2026-11-12
author: Final
tags:
  - n8n
  - Node.js
  - 开发
categories:
  - n8n
description: 在本地开发 n8n 自定义节点时，用 npm link 把构建产物链接进全局 n8n，改完代码重新 build 即可调试。
cover: /img/hero-purple.webp
---

开发 n8n 自定义节点时，如果每次改完代码都重新安装一遍，调试效率会很低。`npm link` 可以把本地项目直接链接到全局 n8n 的依赖里，省去反复打包安装的过程。

## 准备工作

- 已安装 Node.js 和 npm
- 已全局安装 n8n
- 自定义节点项目可以正常执行 `npm run build`

## 1. 全局安装 n8n

```bash
npm install n8n -g
n8n --version
```

如果全局安装时遇到权限问题，建议先配置 npm 的用户级全局目录，而不是长期使用 `sudo npm install -g`。

## 2. 构建并注册本地节点

在自定义节点项目的根目录执行：

```bash
npm run build
npm link
```

`npm link` 会在全局 `node_modules` 里创建一个指向当前项目的软链接，包名取自 `package.json` 的 `name` 字段。

## 3. 把节点链接进 n8n

先找到 n8n 的全局安装目录：

```bash
npm root -g
```

输出通常类似 `/usr/local/lib/node_modules` 或 `C:\Users\<用户名>\AppData\Roaming\npm\node_modules`。进入其中的 n8n 目录：

```bash
# Linux / macOS
cd "$(npm root -g)/n8n"
```

```powershell
# Windows PowerShell
cd "$(npm root -g)\n8n"
```

然后执行：

```bash
npm link <node-package-name>
```

`<node-package-name>` 填自定义节点 `package.json` 里的 `name`，不是项目文件夹名。执行后，n8n 的 `node_modules` 里会出现指向本地项目的链接。

## 4. 启动 n8n

```bash
n8n start
```

默认打开 `http://localhost:5678`。在节点面板里应该能看到自定义节点。

## 修改代码后

`npm link` 链接的是构建产物，不是源码。改完代码后重新执行：

```bash
npm run build
```

如果 n8n 没有自动加载新版本，重启一次 `n8n start`。

## 取消链接

调试结束后，建议清理链接，避免全局环境里残留：

```bash
# 在 n8n 安装目录
npm unlink <node-package-name>

# 在自定义节点项目目录
npm unlink -g <node-package-name>
```

## 参考资料

- [n8n 官方文档：Run your node locally](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/)
