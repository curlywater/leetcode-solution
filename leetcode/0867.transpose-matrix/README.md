---
title: 867. 转置矩阵
date: "2020-11-22"
topic: 数组
---

# 题目描述

给定一个矩阵 A， 返回 A 的转置矩阵。

矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

示例:

```
输入：[[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]
```

说明：
- 1 <= A.length <= 1000
- 1 <= A[0].length <= 1000




来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/transpose-matrix/

# 解题思路

我们认为矩阵 A 有 R 行 C 列。那么，转置矩阵有 C 行，第 i 行的元素由 A 矩阵每行第 i 列的元素组成。

Tips：JavaScript语言，可尝试使用`Array.from(arrayLike, (v, k) => {})` API