---
title: n8n 本地安装与自定义节点调试流程
date: 2026-01-02 23:15:10
tags:
---
## 1：Install n8n using npm
```bash
npm install n8n -g
```
---
## 2：When you are ready to test your node, publish it locally
```bash
npm run build
npm link
```
---
## 3：Install the node into your local n8n instance
```bash
# In the nodes directory within your n8n installation
# node-package-name is the name from the package.json
npm link <node-package-name>
```
---
## Start n8n
```bash
n8n start
```
---

[n8n 官方文档页面](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/)
