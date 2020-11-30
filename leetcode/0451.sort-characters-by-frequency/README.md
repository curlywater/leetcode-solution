---
title: 451. 根据字符出现频率排序
date: "2020-11-30"
topic: 排序
tag: 桶排序
---
# 题目描述
给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

示例：
```
输入:
"tree"

输出:
"eert"

解释:
'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/sort-characters-by-frequency

# 解题思路

## 桶排序

使用空间代替时间。

先计数，使用Map存储元素对应的出现频次。记录最大频次maxCount

再来maxCount个桶，存放频次对应的所有元素值。

从右向左平铺字符。

