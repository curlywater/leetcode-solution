---
title: 1122. 数组的相对排序
date: "2020-11-18"
topic: 排序
---

# 问题描述

给你两个数组，arr1 和 arr2，

- arr2 中的元素各不相同
- arr2 中的每个元素都出现在 arr1 中

对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

 

示例：
```
输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
```
 

提示：
- arr1.length, arr2.length <= 1000
- 0 <= arr1[i], arr2[i] <= 1000
- arr2 中的元素 arr2[i] 各不相同
- arr2 中的每个元素 arr2[i] 都出现在 arr1 中

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/relative-sort-array


# 解题思路

## 计数排序

建立在元素值限制的基础上。

时间复杂度：$O(m + n + max)$
空间复杂度：$O(max)$

$0 <= max <= 1000$


## 自定义排序

使用语言自带的sort API，将arr2转换为map减小查询索引的复杂度

时间复杂度：$O(nlogn + m)$
空间复杂度：$O(m)$;

