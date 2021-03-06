---
title: 1030. 距离顺序排列矩阵单元格
date: "2020-11-17"
topic: 数组
---

# 题目描述

给出 R 行 C 列的矩阵，其中的单元格的整数坐标为 (r, c)，满足 0 <= r < R 且 0 <= c < C。

另外，我们在该矩阵中给出了一个坐标为 (r0, c0) 的单元格。

返回矩阵中的所有单元格的坐标，并按到 (r0, c0) 的距离从最小到最大的顺序排，其中，两单元格(r1, c1) 和 (r2, c2) 之间的距离是曼哈顿距离，|r1 - r2| + |c1 - c2|。（你可以按任何满足此条件的顺序返回答案。）



示例:

```
输入：R = 1, C = 2, r0 = 0, c0 = 0
输出：[[0,0],[0,1]]
解释：从 (r0, c0) 到其他单元格的距离为：[0,1]
```

```
输入：R = 2, C = 2, r0 = 0, c0 = 1
输出：[[0,1],[0,0],[1,1],[1,0]]
解释：从 (r0, c0) 到其他单元格的距离为：[0,1,1,2]
[[0,1],[1,1],[0,0],[1,0]] 也会被视作正确答案。
```

提示：

1. 1 <= R <= 100
2. 1 <= C <= 100
3. 0 <= r0 < R
4. 0 <= c0 < C

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/matrix-cells-in-distance-order

# 解题思路

## 桶排序

直接排序需要$O(RClogRC)$的复杂度，使用桶排序降低复杂度到$O(RC)$，空间复杂度需要$O(RC)$


## 几何法

固定距离组成以(r0, c0)为中心的斜正方形，按层级遍历

