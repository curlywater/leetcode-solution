---
title: 1640. 能否连接形成数组
date: "2020-12-10"
topic: 排序
---
# 题目描述

给你一个整数数组 arr ，数组中的每个整数 互不相同 。另有一个由整数数组构成的数组 pieces，其中的整数也 互不相同 。请你以 任意顺序 连接 pieces 中的数组以形成 arr 。但是，不允许 对每个数组 pieces[i] 中的整数重新排序。

如果可以连接 pieces 中的数组形成 arr ，返回 true ；否则，返回 false 。

 

示例 1：
```
输入：arr = [85], pieces = [[85]]
输出：true
```

示例 2：
```
输入：arr = [15,88], pieces = [[88],[15]]
输出：true
解释：依次连接 [15] 和 [88]
```

# 解题思路

使用Map记录每个piece首元素和在pieces中索引的对应关系。

一个 point 指针指向当前所在的 piece，一个index记录当前piece中处理到的索引。

遍历arr，index为0时，通过元素寻找piece，处理完piece，将index重置为0。