---
title: 130. 被围绕的区域
date: "2020-12-04"
topic: 深度优先搜索
---
# 题目描述

给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

示例:
```
X X X X
X O O X
X X O X
X O X X
```
运行你的函数后，矩阵变为：
```
X X X X
X X X X
X X X X
X O X X
```

解释:

被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/surrounded-regions

# 解题思路

能够连通边界的 'O' 不被填充，与[417. 太平洋大西洋水流问题](/leetcode/0417.pacific-atlantic-water-flow/)相似，可以从边界 'O'开始向内遍历，将所有连通的 'O' 标记为 'A'（区分被围绕 'O' 和边界连通 'O'）

再进行一趟全遍历，纠正标识得到最终结果。
