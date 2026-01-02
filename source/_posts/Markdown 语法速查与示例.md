---
title: Markdown 语法速查与示例
author: Yang
date: 2025-06-06
updated: 2025-06-06
tags:
  - Markdown
  - 教程
  - 示例
categories:
  - 教程
keywords: Markdown, 语法, 教程, Hexo
description: 一篇全面展示 Markdown 语法特性的示例文章，适合作为语法速查手册。
cover: /img/【哲风壁纸】二次元人物-动画美图.png
toc: true
toc_number: true
mathjax: true
---

欢迎来到我的博客！这是一篇 Markdown 语法速查文章，涵盖常用语法和 Hexo 扩展特性。

<!-- more -->

## 文本格式

**粗体文本** | *斜体文本* | ***粗斜体*** | ~~删除线~~ | <u>下划线</u>

上标：X^2^ | 下标：H~2~O（需主题支持）

## 列表

### 无序列表

- 第一项
  - 嵌套项 A
  - 嵌套项 B
- 第二项
- 第三项

### 有序列表

1. 步骤一
2. 步骤二
   1. 子步骤 2.1
   2. 子步骤 2.2
3. 步骤三

### 任务列表

- [x] 已完成任务
- [x] 另一个完成项
- [ ] 待办事项

## 引用

> 单层引用：代码是写给人看的，顺便能在机器上运行。

> 多层嵌套引用：
>> 第二层
>>> 第三层

## 代码

行内代码：`console.log('Hello')`

### 代码块

```javascript
// JavaScript 示例
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('World'));
```

```python
# Python 示例
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

```java
// Java 示例
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## 链接与图片

### 链接

- 普通链接：[GitHub](https://github.com)
- 带标题：[Google](https://google.com "搜索引擎")

### 图片

![示例图片](/source/img/【哲风壁纸】原神-雷电将军.png)

## 表格

| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:--------:|-------:|
| Java   | 编译型   | ⭐⭐⭐⭐⭐ |
| Python | 解释型   | ⭐⭐⭐⭐ |
| Go     | 编译型   | ⭐⭐⭐⭐ |

## 分割线

---

## 脚注

这是一个带脚注的文本[^1]。

[^1]: 这是脚注的内容。

## Hexo 标签插件

### 提示块（Note）

{% note info %}
这是一条信息提示。
{% endnote %}

{% note warning %}
这是一条警告提示。
{% endnote %}

{% note success %}
这是一条成功提示。
{% endnote %}

### 标签（Label）

这是 {% label 红色 red %} 和 {% label 绿色 green %} 标签示例。

### 按钮（Button）

{% btn https://github.com, GitHub, fas fa-link, 访问 GitHub %}

## 数学公式

> ⚠️ 需安装 [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax) 或 KaTeX 插件才能正常渲染。

行内公式：$E = mc^2$

块级公式：

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## 总结

本文涵盖了 Markdown 的核心语法：
- 文本格式与列表
- 代码块与引用
- 表格与链接
- Hexo 扩展标签

更多语法请参考 [Markdown 官方文档](https://www.markdownguide.org/)。

---

感谢阅读！🎉
