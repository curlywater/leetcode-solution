---
title: 934. 最短的桥
date: "2020-12-03"
topic: 广度优先搜索
---
# 题目描述
在给定的二维二进制数组 A 中，存在两座岛。（岛是由四面相连的 1 形成的一个最大组。）

现在，我们可以将 0 变为 1，以使两座岛连接起来，变成一座岛。

返回必须翻转的 0 的最小数目。（可以保证答案至少是 1。）

 

示例 1：
```
输入：[[0,1],[1,0]]
输出：1
```

示例 2：
```
输入：[[0,1,0],[0,0,0],[0,0,1]]
输出：2
```

示例 3：
```
输入：[[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
输出：1
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/shortest-bridge

# 解题思路

求最短的桥，即求两座岛之间的最短路径。