---
title: 217. 存在重复元素
date: "2020-11-23"
topic: 数组
---
# 题目描述
给定一个整数数组，判断是否存在重复元素。

如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

示例：
```
输入: [1,2,3,1]
输出: true
```

# 解题思路

思路1：排序，比较前后元素。时间复杂度 $O(NlogN)$

思路2：哈希表。时间复杂度 $O(N)$，空间复杂度 $O(N)$

思路3：Set去重。时间复杂度 $O(N)$，空间复杂度 $O(N)$