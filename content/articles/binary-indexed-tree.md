---
title: 树状数组笔记
tags:
- OI
- 算法
- 数据结构
- 树状数组
categories: 学习笔记
date: 2022-08-15
katex: true
draft: true
---

早就学习过线段树了，但惭愧的是更简单的树状数组却一直没有深入理解过，仅仅停留在背代码的层级。今天认真学习一下树状数组。

## 引入

树状数组（Binary Index Tree, BIT / Fenwick Tree）支持**单点修改**和**区间查询**两种简单操作，时间复杂度均为 $O(\log n)$。它的实现比线段树简单，速度更快，但功能稍逊一筹。

## 原理

我们用 $C_i$ 来表示 $A$ 数组的一段区间，定义 $x$ 的二进制表示中，最低位的 $1$ 的位置为 $\operatorname{lowbit}(x)$，那么用 $C_i$ 代表 $A$ 数组的下标区间 $[i-\operatorname{lowbit}(i)+1, i]$。举个例子，$4_{(10)} = 100_{(2)}$，$100_{(2)}-\operatorname{lowbit}(100_{(2)})+1_{(2)}=1_{(2)}=1_{(10)}$，那么 $C_4$ 代表的区间就是 $[1, 4]$。通过这样的设计，树状数组将结点数压缩到与数组长度相同，不像线段树一样需要 $2n$ 个结点。