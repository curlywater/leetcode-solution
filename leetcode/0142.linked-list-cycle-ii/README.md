---
title: 142. 环形链表 II
date: "2020-11-28"
topic: 链表
tag: 快慢指针
---
# 题目描述

给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。


说明：不允许修改给定的链表。

进阶：你是否可以使用 O(1) 空间解决此题？

示例：
```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/linked-list-cycle-ii


# 解题思路

假设环前的节点数是A，快慢指针相遇时，慢指针在环内运行的节点数是$N$，慢指针一共运行$A + N$个节点；快指针比慢指针多走一圈，快指针运行的节点数是慢指针的两倍。那么一圈的节点数$C = A + N$。

现在需要通过A的到环入口节点。慢指针继续往前走完一圈，还需要走A个节点。因此可以安排一个指针从头节点开始跟着慢指针走，两者都走A个节点，相遇于环入口。
