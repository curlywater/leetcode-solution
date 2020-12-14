---
title: 1528. 重新排列字符串
date: "2020-12-10"
topic: 排序
---
# 题目描述
给你一个字符串 s 和一个 长度相同 的整数数组 indices 。

请你重新排列字符串 s ，其中第 i 个字符需要移动到 indices[i] 指示的位置。

返回重新排列后的字符串。

示例：
```
输入：s = "codeleet", indices = [4,5,6,7,0,2,1,3]
输出："leetcode"
解释：如图所示，"codeleet" 重新排列后变为 "leetcode" 。
```

示例：
```
输入：s = "abc", indices = [0,1,2]
输出："abc"
解释：重新排列后，每个字符都还留在原来的位置上。
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/shuffle-string

# 解题思路

最直观的解题方法是创建一个空的字符数组ans，遍历indices，在ans对应的位置放上字符即可。