---
title: 77. 组合
date: "2020-12-03"
topic: 回溯算法
---
# 题目描述
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:
```
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/combinations

# 解题思路

可选数在 [1, n]，枚举组合。

对于长度为 k 数组的每一位，在可选数中进行选择。和顺序无关，即[1,2]与[2,1]相同。那么按顺序选择即可。

**剪枝优化**

> 事实上，如果 n = 7, k = 4，从 5 开始搜索就已经没有意义了，这是因为：即使把 5 选上，后面的数只有 6 和 7，一共就 3 个候选数，凑不出 4 个数的组合。因此，搜索起点有上界。
> 作者：liweiwei1419
> 链接：https://leetcode-cn.com/problems/combinations/solution/hui-su-suan-fa-jian-zhi-python-dai-ma-java-dai-ma-/
> 来源：力扣（LeetCode）

搜索上界 = n - 待选数 + 1

待选数 = k - 已选数

搜索上界 = n - (k - 已选数) + 1

