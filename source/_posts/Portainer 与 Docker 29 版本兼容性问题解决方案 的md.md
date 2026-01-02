---
title: Portainer 与 Docker 29 版本兼容性问题解决方案
author: Final
date: 2026-01-02 23:10:10
tags:
  - Docker
  - Portainer
  - 运维
categories:
  - 技术
---

参考链接：
1. [解决Portainer在Docker更新后无法连接local环境 - Duckling8113 - 博客园](https://www.cnblogs.com/aheadalot/p/19226699)
2. [Docker 29 API Changes (Breaking Changes) : r/docker](https://www.reddit.com/r/docker/comments/1ounfw8/docker_29_api_changes_breaking_changes/)

## 1. Docker 升级至 29 后出现的 Local 环境不可用问题

在 Docker 升级至 **29.x** 后，Portainer 可能无法连接到本地 Docker 环境，提示：

**Environment local is unreachable**

这是由于 **Docker API 最低版本要求变化**，Portainer 无法正常访问 Docker Engine API 所致。

---

## 2. 解决方案：指定 Docker 最低 API 版本

### 步骤 1：修改 docker.service

执行命令创建或编辑 systemd drop-in 配置：

```bash
sudo systemctl edit docker.service
```

添加以下内容以声明 Docker Engine 的最低 API 版本：

```ini
[Service]
Environment=DOCKER_MIN_API_VERSION=1.24
```

（这将覆盖 Docker 的默认最小 API 版本，使 Portainer 能继续使用旧版 API 接口）

---

### 步骤 2：重启 Docker 服务

```bash
sudo systemctl restart docker
```

---

## 4. 验证结果

重启 Docker 后，Portainer 将重新建立与本地 Docker 引擎的连接。  
访问 Portainer UI，你将看到 Local 环境已恢复可用。

---

[Docker-CE 安装指南](../../docker%20安装/Docker-CE%20安装指南.md)
[Portainer 安装](Portainer%20安装.md)
