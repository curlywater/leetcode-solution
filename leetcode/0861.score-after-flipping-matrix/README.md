---
title: 861. 翻转矩阵后的得分
date: "2020-12-09"
topic: 贪心算法
---
# 题目描述
有一个二维矩阵 A 其中每个元素的值为 0 或 1 。

移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。

在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。

返回尽可能高的分数。

示例：
```
输入：[[0,0,1,1],[1,0,1,0],[1,1,0,0]]
输出：39
解释：
转换为 [[1,1,1,1],[1,0,0,1],[1,1,1,1]]
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
```

提示：
- 1 <= A.length <= 20
- 1 <= A[0].length <= 20
- A[i][j] 是 0 或 1


来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/score-after-flipping-matrix

# 解题思路

每一行的数字尽可能大，也就是高位尽可能是1。

先按行处理，保证每1行的最高位是1。

再处理每一列，使当前列1的个数最多