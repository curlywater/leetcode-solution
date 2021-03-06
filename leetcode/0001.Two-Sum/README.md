---
title: 1. 两数之和
date: "2020-11-16"
topic: 数组
tag: [哈希表]
---

# 题目描述

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1] 
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/two-sum

# 解题思路

准备一个map用于存放值和索引对应关系。遍历nums数组，遍历到一个整数时，确认map中是否存在拼凑目标值的另一个整数。存在则返回两个整数的索引，不存在则把当前整数和索引存入map。时间复杂度$O(n)$