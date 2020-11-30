---
title: 125. 验证回文串
date: "2020-11-20"
topic: 数组
tag: 双指针
---

# 题目描述

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。


示例:

```
输入: "A man, a plan, a canal: Panama"
输出: true
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/valid-palindrome/

# 解题思路

思路一. 反转字符串后判断是否相等
思路二. 对撞指针，逐个字符判断。可以预先通过正则对字符串做非法字符处理
