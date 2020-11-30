---
title: 34. 在排序数组中查找元素的第一个和最后一个位置
date: "2020-11-30"
topic: 二分查找
---
# 题目描述
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

示例：
```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```
来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array

# 解题思路

求开始位置和结束位置，即求第一个等于给定值的元素 和 最后一个等于给定值的元素。

控制时间复杂度在$O(logN)$，可以使用两次二分查找。