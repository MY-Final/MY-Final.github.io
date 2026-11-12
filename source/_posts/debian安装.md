---
title: Debian 13 安装指南：从 U 盘启动到桌面可用
date: 2026-01-21 10:00:00
updated: 2026-11-12
author: Final
tags: [Linux, Debian, 系统安装]
categories: [Linux]
description: 以 Debian 13（Trixie）为例，记录安装前准备、BIOS 设置、分区、软件选择、GRUB 安装和安装后配置的完整流程。
cover: /img/debian-install/29-desktop.webp
---

这篇笔记记录我在物理机上用 U 盘安装 Debian 13（Trixie）的完整过程。截图来自 BIOS 模式下的图形化安装；UEFI 模式的步骤基本一致，只是 GRUB 的安装位置会有所不同。

| 项目 | 说明 |
| --- | --- |
| 适用版本 | Debian 13（Trixie） |
| 安装方式 | U 盘启动，Graphical install |
| 预计耗时 | 30–60 分钟 |
| 难度 | 初级 |

## 一、安装前准备

### 1.1 硬件要求

- **CPU**：64 位 x86_64 处理器
- **内存**：至少 2GB，安装桌面环境建议 4GB 以上
- **存储**：至少 20GB 可用空间，建议 50GB 以上
- **网络**：安装过程中需要下载软件包，建议使用有线网络或稳定的 Wi-Fi

### 1.2 软件准备

- **系统镜像**：从 [Debian 官网](https://www.debian.org/distrib/) 下载 Debian 13 的 netinst 或 DVD 镜像
- **U 盘**：容量至少 8GB，建议 16GB 以上
- **写盘工具**：
  - Windows：推荐 [Rufus](https://rufus.ie/) 或 [Ventoy](https://www.ventoy.net/)
  - Linux / macOS：使用 `dd` 命令或 [BalenaEtcher](https://etcher.balena.io/)

### 1.3 数据备份

{% note warning %}
安装过程会重新分区并格式化目标磁盘。开始前请备份个人文件、浏览器书签、软件许可证和激活码；如果是双系统，先确认 Windows 可以正常启动。
{% endnote %}

- 备份个人文件、文档和照片
- 记录重要的软件许可证和激活码
- 双系统安装时，确保 Windows 系统已经备份

### 1.4 BIOS / UEFI 设置

- 确认电脑支持从 U 盘启动
- 开机时按 `F2`、`F12`、`Del` 或 `Esc` 进入 BIOS / UEFI 设置
- 如果使用 UEFI 模式，先关闭 Secure Boot；BIOS 模式一般不需要处理
- 把 U 盘设为第一启动项

---

## 二、安装步骤

### 2.1 启动安装程序

#### 步骤 1：选择安装模式

插入 U 盘并从它启动，进入 Debian 安装菜单。选择 **Graphical install**（图形化安装）；如果图形界面无法启动，再选 **Install**（文本安装）。

![选择安装模式](/img/debian-install/01-select-install-mode.webp)

### 2.2 基础配置

#### 步骤 2：选择语言

建议选择 **中文（简体）**。如果希望安装器保持英文，也可以选 English，装好系统后再配置中文环境。

![选择语言](/img/debian-install/02-select-language.webp)

#### 步骤 3：选择时区

选择所在的时区，中国大陆地区选择 **亚洲/上海**。

![选择时区](/img/debian-install/03-select-timezone.webp)

#### 步骤 4：配置键盘

键盘布局通常选 **汉语**；如果你习惯美式键盘，也可以选 **美国英语**。

![配置键盘](/img/debian-install/04-configure-keyboard.webp)

### 2.3 系统识别

#### 步骤 5：识别安装介质

安装器会自动识别 U 盘、硬盘和网卡，等待进度条结束即可。

![识别介质](/img/debian-install/05-detect-media.webp)

### 2.4 网络与主机名配置

#### 步骤 6：设置主机名

主机名用于在局域网中标识这台机器，建议使用 `debian-desktop`、`home-server` 这类有意义的英文名。

![设置主机名](/img/debian-install/06-hostname.webp)

#### 步骤 7：设置域名（可选）

没有域名需求就直接留空并继续，家庭网络一般不需要填写。

![设置域名](/img/debian-install/07-domain.webp)

### 2.5 用户账户配置

#### 步骤 8：设置 root 密码

设置 root 密码。日常使用建议创建普通用户并通过 `sudo` 提权，root 密码只在救援或单用户模式下使用。

![设置root密码](/img/debian-install/08-root-password.webp)

#### 步骤 9：创建普通用户

创建一个日常使用的普通用户：

- 全名可以写中文
- 用户名建议使用英文小写
- 设置并记住用户密码

![创建用户1](/img/debian-install/09-create-user-1.webp)

![创建用户2](/img/debian-install/10-create-user-2.webp)

### 2.6 磁盘分区

#### 步骤 10：时间设置与磁盘分析

安装器会先同步时间并扫描磁盘，等待完成即可。

![磁盘分析](/img/debian-install/11-disk-analysis.webp)

#### 步骤 11：选择分区方式

选择 **使用整个磁盘**。注意：这会清空目标磁盘上的所有分区。

![使用整个磁盘](/img/debian-install/12-use-entire-disk.webp)

如果机器有多块磁盘，确认选中的是系统盘，不要误选数据盘。

![选择磁盘](/img/debian-install/13-select-disk.webp)

#### 步骤 12：分区方案

分区方案选择 **将所有文件放在同一个分区中**，对新手最省事；需要独立 `/home`、LVM 或自定义分区的话，可以在这里选手动分区。

![分区方案](/img/debian-install/14-partition-scheme.webp)

确认分区方案后，安装器会再次提示将修改分区表，选择 **是** 继续。

![确认分区](/img/debian-install/15-confirm-partition.webp)

![确认修改](/img/debian-install/16-confirm-write.webp)

### 2.7 软件包配置

#### 步骤 13：安装基本系统

系统开始安装基本系统文件，耗时取决于磁盘和 CPU。

![安装基本系统](/img/debian-install/17-install-base-system.webp)

#### 步骤 14：配置软件包管理器

选择是否使用网络镜像源。建议选 **是**，这样可以直接获取最新的软件包。

![使用网络镜像](/img/debian-install/18-network-mirror.webp)

#### 步骤 15：选择镜像站点

镜像站点选择离你较近的源。国内常用南大（mirrors.nju.edu.cn）或清华（mirrors.tuna.tsinghua.edu.cn）。

![镜像站点](/img/debian-install/19-mirror-site.webp)

选择南大镜像：

![南大镜像](/img/debian-install/20-nju-mirror.webp)

#### 步骤 16：HTTP 代理配置

有代理服务器就填写代理地址；没有就直接留空并继续。

![代理配置](/img/debian-install/21-proxy.webp)

#### 步骤 17：参与流行度调查

是否参与软件包流行度调查可以按个人偏好选择，选 **否** 不影响使用。

![流行度调查](/img/debian-install/22-popularity-contest.webp)

### 2.8 软件选择

#### 步骤 18：选择软件包

桌面用户勾选 GNOME、KDE 或 XFCE 等桌面环境，并建议勾选 **SSH 服务器**，方便以后远程管理；服务器用户可以不装桌面，只保留标准系统工具。

![软件选择](/img/debian-install/23-software-selection.webp)

### 2.9 引导程序安装

#### 步骤 19：安装 GRUB 引导器

GRUB 安装位置选择主磁盘。BIOS 模式下通常是 `/dev/sda` 或 `/dev/nvme0n1`；UEFI 模式下选择 EFI 分区所在的磁盘。

![安装GRUB](/img/debian-install/24-install-grub.webp)

如果机器有多块磁盘，确认选择的是启动盘。

![选择GRUB磁盘](/img/debian-install/25-select-grub-disk.webp)

### 2.10 完成安装

#### 步骤 20：安装完成

看到安装完成提示后，先拔出 U 盘，再点击 **继续** 重启。

![安装完成](/img/debian-install/26-install-complete.webp)

#### 步骤 21：首次启动

重启后进入 GRUB 菜单，选择 **Debian GNU/Linux**。

![GRUB菜单](/img/debian-install/27-grub-menu.webp)

#### 步骤 22：登录系统

用刚才创建的普通用户登录。

![登录界面](/img/debian-install/28-login.webp)

#### 步骤 23：进入桌面

进入桌面，安装完成。

![桌面环境](/img/debian-install/29-desktop.webp)

---

## 三、安装后基础配置

### 3.1 更新系统

刚装好的系统建议先更新一次：

```bash
sudo apt update
sudo apt full-upgrade -y
```

`full-upgrade` 会在需要时安装或移除依赖，适合大版本升级后的第一次更新；日常小更新用 `apt upgrade` 即可。

### 3.2 安装常用软件

#### 中文输入法

```bash
sudo apt install fcitx5 fcitx5-chinese-addons fcitx5-frontend-gtk3 fcitx5-frontend-gtk2
sudo apt install fonts-wqy-microhei fonts-wqy-zenhei
```

装好后在系统设置或 `im-config` 中将 Fcitx5 设为默认输入法，再注销重新登录。

#### 浏览器

```bash
# Debian 稳定版默认提供 Firefox ESR
sudo apt install firefox-esr

# 或者安装 Chromium
sudo apt install chromium
```

#### 办公软件

```bash
sudo apt install libreoffice libreoffice-l10n-zh-cn
sudo apt install evince
```

#### 终端工具

```bash
sudo apt install git curl wget vim htop tree

git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

### 3.3 配置软件源

先确认系统使用的是哪种源格式：Debian 13 可能使用 `/etc/apt/sources.list.d/debian.sources`（deb822 格式），也可能保留传统的 `/etc/apt/sources.list`。

传统格式可以这样替换为清华镜像：

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
sudo nano /etc/apt/sources.list
```

```text
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ trixie main contrib non-free non-free-firmware
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ trixie-updates main contrib non-free non-free-firmware
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ trixie-backports main contrib non-free non-free-firmware
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security trixie-security main contrib non-free non-free-firmware
```

如果使用的是 `/etc/apt/sources.list.d/debian.sources`，把文件里的 `URIs` 改成上面的镜像地址即可，不要同时保留两份源。

更新软件包列表：

```bash
sudo apt update
```

### 3.4 配置 sudo

如果创建用户时没有自动加入 sudo 组：

```bash
sudo usermod -aG sudo 用户名
```

重新登录后验证：

```bash
sudo ls /root
```

### 3.5 启用防火墙

```bash
sudo apt install ufw
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status
```

如果通过 SSH 远程连接，务必先放行 SSH 再启用 UFW，避免把自己关在门外。

### 3.6 自动更新

```bash
sudo apt install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
```

### 3.7 GNOME 扩展（可选）

```bash
sudo apt install gnome-tweaks gnome-shell-extensions gnome-browser-connector
```

然后在浏览器中安装 GNOME Shell integration 扩展，才能从网页安装 GNOME 扩展。

### 3.8 系统监控

```bash
sudo apt install htop iotop nethogs ncdu
```

---

## 四、常见问题

### Q1：安装过程中卡住怎么办？

先检查 U 盘和 ISO 是否完整，换一个 USB 口或重新制作启动盘；如果在下载软件包时卡住，优先检查网络和镜像源。

### Q2：中文显示乱码怎么办？

```bash
sudo apt install fonts-wqy-microhei fonts-wqy-zenhei
sudo dpkg-reconfigure locales
```

在列表里选中 `zh_CN.UTF-8`，把它设为默认 locale，然后注销重新登录。

### Q3：如何配置双系统？

安装前先确认 Windows 能正常启动。分区时选择「手动分区」，不要覆盖 Windows 所在分区；GRUB 通常会自动识别并添加 Windows 启动项。

### Q4：安装后无法联网怎么办？

```bash
ip a
sudo systemctl restart NetworkManager
```

桌面版通常由 NetworkManager 管理网络；服务器版可能使用 `systemd-networkd` 或 `/etc/network/interfaces`，需要按实际配置排查。

### Q5：如何安装 NVIDIA 驱动？

```bash
sudo apt update
sudo apt install linux-headers-$(uname -r) nvidia-driver firmware-misc-nonfree
sudo reboot
```

Debian 13 的默认源通常已经包含 `non-free-firmware`；如果你改过源，确认这部分没有被删掉。

### Q6：如何配置 SSH 远程登录？

```bash
sudo apt install openssh-server
sudo systemctl enable --now ssh
sudo systemctl status ssh
sudo ufw allow ssh
```

### Q7：如何查看系统日志？

```bash
journalctl -xe          # 最近的错误和解释
journalctl -u ssh       # 指定服务
journalctl -b           # 本次启动
```

### Q8：如何卸载软件包？

```bash
apt list --installed
sudo apt remove 软件包名
sudo apt purge 软件包名
sudo apt autoremove
```

---

## 五、日常维护建议

### 安全

- 定期执行 `sudo apt update && sudo apt full-upgrade`
- 日常使用普通用户，不要长期以 root 登录
- 开启 UFW，只放行需要的端口
- 重要数据定期备份，最好保留一份离线副本

### 性能

- SSD 启用 TRIM：`sudo systemctl enable fstrim.timer`
- 内存较小的机器可以安装 zram：`sudo apt install zram-tools`

### 磁盘与日志

- 定期清理无用依赖：`sudo apt autoremove && sudo apt clean`
- 查看磁盘占用：`df -h`、`du -sh *`
- 日志占用过多时，可以用 `journalctl --vacuum-time=30d` 只保留最近 30 天

---

## 六、参考资料

- [Debian 13 发布说明](https://www.debian.org/releases/trixie/)
- [Debian 安装指南](https://www.debian.org/releases/trixie/amd64/)
- [Debian 软件源配置](https://wiki.debian.org/SourcesList)
- [Debian Wiki](https://wiki.debian.org/)

如果安装过程中遇到本指南没有覆盖的问题，优先查阅 Debian 官方安装手册和 Wiki。
