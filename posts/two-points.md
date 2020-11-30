---
title: 双指针
date: "2020-11-30"
topic: 双指针
---
双指针是一种作用于基本数据结构的编程技巧。在一些场景下，巧妙地降低时间复杂度。

# 数组应用

## 原地筛选

简单描述：一次遍历，前置符合条件的元素，直接截去残余部分

两个指针，一个用于遍历，一个用于已符合添加的元素。

[283. 移动零](/leetcode/0283.move-zeroes/)

[27. 移除元素](/leetcode/0027.remove-element/)

[26. 删除排序数组中的重复项](/leetcode/0026.remove-duplicates-from-sorted-array)

[80. 删除排序数组中的重复项 II](/leetcode/0080.remove-duplicates-from-sorted-array-ii)


## 对撞指针

双指针从两端向中间进发

[167. 两数之和 II - 输入有序数组](/leetcode/0167.two-sum-ii-input-array-is-sorted)

[633. 平方数之和](/leetcode/0633.sum-of-square-numbers/)

[125. 验证回文串](/leetcode/0125.valid-palindrome/)

[680. 验证回文字符串 Ⅱ](/leetcode/0680.valid-palindrome-ii/)

[345. 反转字符串中的元音字母](/leetcode/0345.reverse-vowels-of-a-string/solution/)

[11. 盛最多水的容器](/leetcode/0011.container-with-most-water/)

[977. 有序数组的平方](/leetcode/0977.squares-of-a-sorted-array/)

[344. 反转字符串](/leetcode/0344.reverse-string/)

## 滑动窗口

寻找满足条件的子串。

滑动窗口的思路：左右指针设定当前窗口范围。右指针负责向后扩展直到满足条件的范围，满足条件后，左指针复杂缩小范围。

[209. 长度最小的子数组](/leetcode/0209.minimum-size-subarray-sum)

[3. 无重复字符的最长子串](/leetcode/0003.longest-substring-without-repeating-characters)

[76. 最小覆盖子串](/leetcode/0076.minimum-window-substring)

[567. 字符串的排列](/leetcode/0567.permutation-in-string)

[340.最长最多K个无重复字符的字符串长度](/leetcode/0340.longest-substring-with-at-most-k-distinct-characters/)



# 链表应用

## 快慢指针

[141. 环形链表](/leetcode/0141.linked-list-cycle/)

[142. 环形链表 II](/leetcode/0142.linked-list-cycle-ii/)

[160. 相交链表](/leetcode/0160.intersection-of-two-linked-lists/)

[876. 链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)

[234. 回文链表](/leetcode/0234.palindrome-linked-list/)

[19. 删除链表的倒数第N个节点](/leetcode/0019.remove-nth-node-from-end-of-list/)
