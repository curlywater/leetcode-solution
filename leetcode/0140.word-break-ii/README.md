---
title: 140. 单词拆分 II
date: "2020-11-18"
topic: 回溯算法
---

# 题目描述

给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

说明：

分隔时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。


示例:

```
输入:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
输出:
[
  "cats and dog",
  "cat sand dog"
]
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/word-break-ii

# 解题思路

回溯加上备忘录。

检查单词是否在 wordDict 中的两种方法：
1. 遍历wordDict，检查字符串是否是由word开头
2. wordDict存入Set中，用一个指针从左向右检查字符，确定前缀字符是否在wordSet中