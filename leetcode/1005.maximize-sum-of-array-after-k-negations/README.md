---
title: 1005. K 次取反后最大化的数组和
date: "2020-12-03"
topic: 贪心算法
---
# 题目描述
给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个索引 i 并将 A[i] 替换为 -A[i]，然后总共重复这个过程 K 次。（我们可以多次选择同一个索引 i。）

以这种方式修改数组后，返回数组可能的最大和。

示例：
```
输入：A = [4,2,3], K = 1
输出：5
解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations


# 解题思路

取反后和要尽可能大，那么取最小的数取反即可。

有几种情况分析：
1. 有负数，负数从小到大取反。如果所有负数都已取反得到非负数数组，跟情况2一致。
2. 只有非负数，取最小非负数持续取反