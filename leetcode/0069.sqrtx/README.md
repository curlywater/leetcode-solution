---
title: 69. x 的平方根
date: "2020-11-30"
topic: 二分查找
---
# 题目描述

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例:
```
输入: 4
输出: 2
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/sqrtx

# 解题思路

求解 x 的平方根，即在[0, x]的区间内寻找满足 $a * a = x$ 的值。

无法取整数平方根时，左右指针交汇，返回右指针值(left * left > target, right * right < target)

