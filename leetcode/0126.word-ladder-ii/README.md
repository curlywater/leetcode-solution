---
title: 126. 单词接龙 II
date: "2020-12-04"
topic: 广度优先搜索
---
# 题目描述
给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：

- 每次转换只能改变一个字母。
- 转换后得到的单词必须是字典中的单词。

说明:

- 如果不存在这样的转换序列，返回一个空列表。
- 所有单词具有相同的长度。
- 所有单词只由小写字母组成。
- 字典中不存在重复的单词。
- 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。

示例 1:
```
输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/word-ladder-ii

# 解题思路

构建图：方案一是比对所有单词的转换关系，但这样需要处理$N^2$次。所以需要一些连接节点，`"*it"，"h*t"`之类。

需要得到所有最短转换序列，因此进行DFS遍历。
