---
title: 350. 两个数组的交集 II
date: "2020-11-23"
topic: 数组
---
# 题目描述
给定两个数组，编写一个函数来计算它们的交集。

示例：

```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/

# 解题思路

思路1：哈希表处理。时间复杂度 $O(m + n)$， 空间复杂度 $O(min(n, m))$

思路2：排序，使用双指针。时间复杂度 $O(mlogm + nlogn)$，空间复杂度 $O(1)$