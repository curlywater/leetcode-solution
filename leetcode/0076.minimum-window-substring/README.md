---
title: 76. 最小覆盖子串
date: "2020-11-25"
topic: 数组
tag: 滑动窗口
---
# 题目描述

给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

示例：
```
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-window-substring


# 解题思路

- Set存储所需字符以及出现次数
- 检查Set中字符对应次数是否全小于等于0
- 使用左起点（ansLeft）和 最短子串长度（ansLen）