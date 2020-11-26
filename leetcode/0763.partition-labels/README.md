---
title: 763. 划分字母区间
date: "2020-11-26"
topic: 贪心算法
---
# 题目描述
字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

示例：
```
输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
```

提示：
- S的长度在[1, 500]之间。
- S只包含小写字母 'a' 到 'z' 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/partition-labels

# 解题思路

贪心策略：尽可能把同一字母塞在一个片段中。

> 在处理数组前，统计一遍信息可以使难度大幅降低

记录字母最后一次出现的位置，遍历字符串，根据位置确定字母只出现在片段中。
