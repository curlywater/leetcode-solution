---
title: 链表
topic: 链表
---

# 特性

链表的优势在于：动态性支持，容量动态，增删无需移动后续节点。

链表的限制在于：查询效率低。时间复杂度达到$O(n)$

双向链表需要更多的内存空间，但在一些操作场景中可以提高代码运行效率。

## 和数组对比

数组：访问效率高，大小固定，扩容代价

链表：内存消耗翻倍，频繁操作，内存碎片，频繁GC

## 编程技巧

1. 设置哨兵，将第一个结点和最后一个结点插入/删除的特殊情况一致化处理
2. 检查边界条件：
   - 空链表的执行情况
   - 只包含一个结点
   - 只包含两个结点
   - 处理头结点和尾结点


# 基本操作

[2. 两数相加](/leetcode/0002.add-two-numbers/)

[206. 反转链表](/leetcode/0206.reverse-linked-list)

[203. 移除链表元素](/leetcode/0203.remove-linked-list-elements/)

[328. 奇偶链表](/leetcode/0328.odd-even-linked-list/)


# 算法

## 快慢指针

[141. 环形链表](/leetcode/0141.linked-list-cycle/)

[142. 环形链表 II](/leetcode/0142.linked-list-cycle-ii/)

[160. 相交链表](/leetcode/0160.intersection-of-two-linked-lists/)

[876. 链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)

[234. 回文链表](/leetcode/0234.palindrome-linked-list/)

[19. 删除链表的倒数第N个节点](/leetcode/0019.remove-nth-node-from-end-of-list/)