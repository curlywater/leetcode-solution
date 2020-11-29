---
title: 876. 链表的中间结点
date: "2020-11-29"
topic: 链表
tag: 快慢指针
---
# 题目描述
给定一个头结点为 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

示例 ：
```
输入：[1,2,3,4,5]
输出：此列表中的结点 3 (序列化形式：[3,4,5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/middle-of-the-linked-list

# 解题思路

快慢指针，快指针步长是慢指针的两倍，快指针执行到末尾恰好慢指针到中间。