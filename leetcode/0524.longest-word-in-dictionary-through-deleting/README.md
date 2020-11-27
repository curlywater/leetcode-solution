---
title: 524. 通过删除字母匹配到字典里最长单词
date: "2020-11-27"
topic: 数组
tag: 双指针
---
# 题目描述

给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。

示例：
```
输入:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

输出: 
"apple"
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting

# 解题思路

排序 + 双指针匹配字符串。时间复杂度 $O(nxlogn+nx)$，可在检测到匹配后停止向下寻找。

不排序 + 双指针匹配字符串。时间复杂度 $O(nx)$，需要检测所有字符串，最终确定最长的那个。