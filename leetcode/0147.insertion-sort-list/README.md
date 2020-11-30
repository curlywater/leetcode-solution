---
title: 147. 对链表进行插入排序
date: "2020-11-20"
topic: 链表
---

# 问题描述 

对链表进行插入排序。

示例 1:

```
输入: 4->2->1->3
输出: 1->2->3->4
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/insertion-sort-list/


# 解题思路

- 增加哨兵（dummyHead）简化插入情况
- 记录已排序的最后一个节点lastSorted，处理lastSorted后的节点
  - 值大于等于lastSorted的值，保持不动，lastSorted后移
  - 值小于lastSorted，从头查找插入位置



