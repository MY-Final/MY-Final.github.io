---
title: Debian 系统安装完整指南
date: 2026-01-21 10:00:00
tags: [Linux, Debian, 系统安装]
categories: [Linux]
description: 本文详细记录了 Debian 13 (Bookworm) 系统的完整安装过程，包含从准备工作到安装完成的每一步操作。适用于桌面用户和服务器部署场景。
cover: /img/debian-install/选择安装模式.png
---

**简介**：本文详细记录了 Debian 13 (Bookworm) 系统的完整安装过程，包含从准备工作到安装完成的每一步操作。适用于桌面用户和服务器部署场景。

**适用版本**：Debian 13 (Bookworm)  
**安装方式**：U盘启动安装  
**预计时间**：30-60 分钟  
**难度等级**：初级

---

## 一、安装前准备

### 1.1 硬件要求
- **CPU**：64位处理器（x86_64架构）
- **内存**：至少 2GB（推荐 4GB 以上）
- **存储**：至少 20GB 可用空间（推荐 50GB 以上）
- **网络**：稳定的网络连接（用于下载更新和软件包）

### 1.2 软件准备
- **系统镜像**：从 [Debian 官网](https://www.debian.org/distrib/) 下载最新的 ISO 镜像文件
- **U盘**：容量至少 8GB（建议 16GB 以上）
- **制作工具**：
  - Windows：推荐使用 [Rufus](https://rufus.ie/) 或 [Ventoy](https://www.ventoy.net/)
  - Linux/macOS：使用 `dd` 命令或 Etcher 工具

### 1.3 数据备份
**⚠️ 重要提醒**：安装过程会格式化目标磁盘，请务必提前备份重要数据！

- 备份个人文件、文档、照片等
- 记录重要的软件许可证和激活码
- 如果是双系统安装，确保 Windows 系统已备份

### 1.4 BIOS/UEFI 设置
- 确保电脑支持从 U 盘启动
- 进入 BIOS/UEFI 设置（通常按 F2、F13、Del 或 Esc 键）
- 禁用 Secure Boot（安全启动）选项
- 设置 U 盘为第一启动项

---

## 二、安装步骤详解

### 2.1 启动安装程序

#### 步骤 1：选择安装模式
选择 **"Graphical install"**（图形化安装）或 **"Install"**（文本安装），推荐使用图形化安装界面。

![选择安装模式](/img/debian-install/选择安装模式.png)

### 2.2 基础配置

#### 步骤 2：选择语言
选择系统使用的语言，建议选择 **"中文(简体)"**。

![选择语言](/img/debian-install/选择语言.png)

#### 步骤 3：选择时区
选择所在的时区，中国大陆地区选择 **"亚洲/上海"**。

![选择时区](/img/debian-install/选择时区.png)

#### 步骤 4：配置键盘
选择键盘布局，通常选择 **"汉语"** 或 **"美国英语"**。

![配置键盘](/img/debian-install/配置键盘.png)

### 2.3 系统识别

#### 步骤 5：识别安装介质
系统正在识别安装介质和硬件设备，**请耐心等待进度条完成**。

![识别介质](/img/debian-install/识别介质.png)

### 2.4 网络与主机名配置

#### 步骤 6：设置主机名
输入计算机的名称（主机名），建议使用有意义的名称，如 `debian-desktop` 或 `my-server`。

![设置主机名](/img/debian-install/设置主机名.png)

#### 步骤 7：设置域名（可选）
此步骤为可选配置。如果不需要设置域名，可以直接点击 **"继续"** 跳过。

![设置域名](/img/debian-install/设置域名.png)

### 2.5 用户账户配置

#### 步骤 8：设置 root 密码
设置系统管理员（root）密码。**请务必记住此密码**，后续系统管理会用到。

![设置root密码](/img/debian-install/设置root密码.png)

#### 步骤 9：创建普通用户
创建一个日常使用的普通用户账户：
- 输入全名
- 设置用户名（建议使用英文小写字母）
- 设置用户密码

![创建用户1](/img/debian-install/创建用户1.png)

![创建用户2](/img/debian-install/创建用户2.png)

### 2.6 磁盘分区

#### 步骤 10：时间设置与磁盘分析
系统正在设置时间并分析磁盘分区情况。

![磁盘分析](/img/debian-install/磁盘分析.png)

#### 步骤 11：选择分区方式
选择 **"使用整个磁盘"**，这将清除磁盘上的所有数据并重新分区。

![使用整个磁盘](/img/debian-install/使用整个磁盘.png)

选择要安装的磁盘（如果有多个磁盘）：

![选择磁盘](/img/debian-install/选择磁盘.png)

#### 步骤 13：分区方案
推荐选择 **"将所有文件放在同一个分区中"**（推荐新手使用），这样系统会自动创建合理的分区结构。

![分区方案](/img/debian-install/分区方案.png)

点击 **"下一步"** 继续。

![确认分区](/img/debian-install/确认分区.png)

系统会提示将修改磁盘分区表，选择 **"是"** 确认继续。

![确认修改](/img/debian-install/确认修改.png)

### 2.7 软件包配置

#### 步骤 13：安装基本系统
系统开始安装基本系统文件，此过程需要一些时间。

![安装基本系统](/img/debian-install/安装基本系统.png)

#### 步骤 14：配置软件包管理器
选择是否使用网络镜像源。**建议选择"是"**，这样可以获取最新的软件包。

![使用网络镜像](/img/debian-install/使用网络镜像.png)

#### 步骤 15：选择镜像站点
选择软件源镜像站点。**推荐选择南大镜像**（mirrors.nju.edu.cn）或清华镜像，下载速度较快。

![镜像站点](/img/debian-install/镜像站点.png)

选择南大镜像：

![南大镜像](/img/debian-install/南大镜像.png)

#### 步骤 16：HTTP 代理配置
如果有代理服务器，在此处填写代理地址；否则直接点击 **"继续"** 跳过。

![代理配置](/img/debian-install/代理配置.png)

#### 步骤 17：参与流行度调查
**建议选择"否"**，不参与软件包使用情况调查。

![流行度调查](/img/debian-install/流行度调查.png)

### 2.8 软件选择

#### 步骤 18：选择软件包
根据需求选择要安装的软件包：

**桌面用户**：勾选以下选项
- **桌面环境**：GNOME（推荐）、KDE、XFCE 等
- **标准系统工具**：已默认勾选
- **SSH 服务器**：建议勾选，便于远程管理

**服务器用户**：可以不勾选桌面环境，只保留标准系统工具。

![软件选择](/img/debian-install/软件选择.png)

### 2.9 引导程序安装

#### 步骤 19：安装 GRUB 引导器
选择安装 GRUB 引导器的位置。**建议选择主磁盘**（通常是 `/dev/sda` 或 `/dev/nvme0n1`）。

![安装GRUB](/img/debian-install/安装GRUB.png)

选择要安装 GRUB 的磁盘，比如 `/dev/sda`，然后点击 **"继续"**。

![选择GRUB磁盘](/img/debian-install/选择GRUB磁盘.png)

### 2.10 完成安装

#### 步骤 20：安装完成
系统提示安装完成，**请拔出 U 盘**，然后点击 **"继续"** 重启系统。

![安装完成](/img/debian-install/安装完成.png)

#### 步骤 21：首次启动
重启后进入 GRUB 引导菜单，选择第一个选项 **"Debian GNU/Linux"** 启动系统。

![GRUB菜单](/img/debian-install/GRUB菜单.png)

#### 步骤 22：登录系统
输入之前创建的用户名和密码登录系统。

![登录界面](/img/debian-install/登录界面.png)

#### 步骤 23：进入桌面
成功进入 Debian 桌面环境，安装完成！

![桌面环境](/img/debian-install/桌面环境.png)

---

## 三、安装后基础配置

### 3.1 系统更新
安装完成后，建议立即更新系统：

```bash
# 更新软件包列表
sudo apt update

# 升级已安装的软件包
sudo apt upgrade -y

# 发行版升级（可选）
sudo apt dist-upgrade -y
```

### 3.2 安装常用软件

#### 中文输入法
```bash
# 安装 Fcitx5 输入法框架
sudo apt install fcitx5 fcitx5-chinese-addons fcitx5-frontend-gtk3 fcitx5-frontend-gtk2

# 安装中文字体
sudo apt install fonts-wqy-microhei fonts-wqy-zenhei
```

#### 浏览器
```bash
# Firefox（通常已预装）
sudo apt install firefox

# 或者安装 Chromium
sudo apt install chromium
```

#### 办公软件
```bash
# LibreOffice 办公套件
sudo apt install libreoffice libreoffice-zh-cn

# PDF 阅读器
sudo apt install evince
```

#### 终端工具
```bash
# 安装常用工具
sudo apt install git curl wget vim htop tree

# 配置 Git（替换为你的信息）
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

### 3.3 配置软件源

#### 更换为国内镜像源（如果安装时未选择）
```bash
# 备份原有源
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak

# 编辑源列表
sudo nano /etc/apt/sources.list
```

将内容替换为（以清华镜像为例）：
```
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware
```

更新软件包列表：
```bash
sudo apt update
```

### 3.4 启用 sudo 权限（如果需要）
如果创建用户时未自动加入 sudo 组：

```bash
# 将用户添加到 sudo 组
sudo usermod -aG sudo 用户名

# 验证 sudo 权限
sudo ls -la /root
```

### 3.5 配置防火墙
```bash
# 安装 UFW 防火墙
sudo apt install ufw

# 启用 SSH（如果需要远程访问）
sudo ufw allow ssh

# 启用 HTTP/HTTPS（如果运行 Web 服务）
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# 启用防火墙
sudo ufw enable

# 查看状态
sudo ufw status
```

### 3.6 配置自动更新
```bash
# 安装自动更新工具
sudo apt install unattended-upgrades

# 启用自动更新
sudo dpkg-reconfigure unattended-upgrades
```

### 3.7 安装桌面环境扩展（可选）
如果使用 GNOME 桌面：

```bash
# 安装 GNOME 扩展
sudo apt install gnome-tweaks gnome-shell-extensions

# 安装常用扩展
sudo apt install chrome-gnome-shell
```

### 3.8 配置系统监控
```bash
# 安装系统监控工具
sudo apt install htop iotop nethogs

# 安装磁盘使用分析工具
sudo apt install ncdu
```

---

## 四、常见问题解答

### Q1: 安装过程中卡住怎么办？
**A**: 
- 检查安装介质是否损坏，重新制作 U 盘
- 确保硬件兼容性，尝试使用不同的安装模式
- 如果在软件包下载阶段卡住，检查网络连接或更换镜像源

### Q2: 如何解决中文显示乱码问题？
**A**: 
```bash
# 安装中文字体
sudo apt install fonts-wqy-microhei fonts-wqy-zenhei

# 配置 locale
sudo dpkg-reconfigure locales
# 选择 zh_CN.UTF-8
```

### Q3: 如何配置双系统启动？
**A**: 
- 安装前确保 Windows 系统已存在
- 在分区步骤选择"手动分区"，不要覆盖 Windows 分区
- GRUB 会自动检测并添加 Windows 启动项

### Q4: 安装后无法连接网络怎么办？
**A**: 
```bash
# 检查网络接口
ip a

# 重启网络服务
sudo systemctl restart NetworkManager

# 如果使用有线网络
sudo dhclient eth0  # 替换为你的网卡名称
```

### Q5: 如何安装 NVIDIA 显卡驱动？
**A**: 
```bash
# 添加 non-free 源
sudo nano /etc/apt/sources.list
# 添加 non-free 和 non-free-firmware

# 更新并安装驱动
sudo apt update
sudo apt install nvidia-driver firmware-misc-nonfree

# 重启系统
sudo reboot
```

### Q6: 如何配置 SSH 远程登录？
**A**: 
```bash
# 安装 SSH 服务器
sudo apt install openssh-server

# 启用服务
sudo systemctl enable ssh
sudo systemctl start ssh

# 查看状态
sudo systemctl status ssh

# 配置防火墙（如果启用）
sudo ufw allow ssh
```

### Q7: 如何查看系统日志？
**A**: 
```bash
# 查看系统日志
journalctl -xe

# 查看特定服务日志
journalctl -u 服务名

# 查看启动日志
journalctl -b
```

### Q8: 如何卸载不需要的软件包？
**A**: 
```bash
# 查看已安装的软件包
apt list --installed

# 卸载软件包（保留配置文件）
sudo apt remove 软件包名

# 完全卸载（删除配置文件）
sudo apt purge 软件包名

# 清理无用的依赖包
sudo apt autoremove
```

---

## 五、注意事项

### 安全建议
1. **定期更新系统**：`sudo apt update && sudo apt upgrade`
2. **不要以 root 身份日常使用**
3. **启用防火墙**：配置 UFW 或 iptables
4. **备份重要数据**：定期备份配置文件和用户数据

### 性能优化
1. **SSD 优化**：启用 TRIM 支持
   ```bash
   sudo systemctl enable fstrim.timer
   ```
2. **内存管理**：安装 zram 压缩内存
   ```bash
   sudo apt install zram-tools
   ```

### 系统维护
1. **定期清理**：`sudo apt autoremove` 和 `sudo apt clean`
2. **日志轮转**：检查 `/var/log` 目录大小
3. **磁盘空间**：使用 `df -h` 监控磁盘使用情况

---

## 六、参考资料

- [Debian 官方文档](https://www.debian.org/doc/)
- [Debian 安装指南](https://www.debian.org/releases/stable/amd64/)
- [Debian Wiki](https://wiki.debian.org/)
- [Debian 社区支持](https://www.debian.org/support)

---

**最后更新**：2026年1月  
**文档版本**：1.0  
**作者**：基于用户提供的原始文档整理

*祝你使用 Debian 系统愉快！如有问题，欢迎查阅官方文档或社区支持。*