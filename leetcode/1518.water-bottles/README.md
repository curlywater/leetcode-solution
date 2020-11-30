---
title: 1518. 换酒问题
date: "2020-11-30"
topic: 贪心算法
---
# 题目描述

小区便利店正在促销，用 numExchange 个空酒瓶可以兑换一瓶新酒。你购入了 numBottles 瓶酒。

如果喝掉了酒瓶中的酒，那么酒瓶就会变成空的。

请你计算 最多 能喝到多少瓶酒。

示例：
```
输入：numBottles = 9, numExchange = 3
输出：13
解释：你可以用 3 个空酒瓶兑换 1 瓶酒。
所以最多能喝到 9 + 3 + 1 = 13 瓶酒。
```

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/water-bottles


# 解题思路

尽可能多喝酒，那么喝完numExchange瓶，马上去换一瓶即可。