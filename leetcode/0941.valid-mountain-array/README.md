---
title: 941. 有效的山脉数组
date: "2020-11-18"
topic: 数组
---

# 题目描述

给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

- A.length >= 3
- 在 0 < i < A.length - 1 条件下，存在 i 使得：
    - A[0] < A[1] < ... A[i-1] < A[i]
    - A[i] > A[i+1] > ... > A[A.length - 1]



示例:

```
输入：[2,1]
输出：false
```

```
输入：[3,5,5]
输出：false
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-mountain-array

# 解题思路

- 思路一：从左向右找到平地和山谷
- 思路二：从左向右，先确定上坡，排除在头和尾的情况，继续走到底，应该是一直在下坡

