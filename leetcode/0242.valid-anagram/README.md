---
title: 242. 有效的字母异位词
date: "2020-11-22"
topic: 哈希表
---

# 问题描述 

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

```
输入: s = "anagram", t = "nagaram"
输出: true
```

说明:
- 你可以假设字符串只包含小写字母。
- 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/valid-anagram/


# 解题思路

使用HashMap保存 s 字符串中出现字符以及频率，处理 t 字符串时，查询HashMap中是否有对应字符。

在只出现英文小写字母的前提下，范围限定在 a-z 区间内，可以选择使用长度26的数组存放。

在出现unicode字符时，范围过大，选择使用map存放。

另，在使用JS/TS处理时，需要考虑语言对字符处理的情况，使用length相关属性访问时，会将字符截断。可以选择`for...of...`处理。

[数组类算法](/posts/array)

