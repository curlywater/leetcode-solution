---
title: 381. O(1) 时间插入、删除和获取随机元素 - 允许重复
date: "2020-11-25"
topic: 数组
---
# 题目描述
设计一个支持在平均 时间复杂度 O(1) 下， 执行以下操作的数据结构。

注意: 允许出现重复元素。

- insert(val)：向集合中插入元素 val。
- remove(val)：当 val 存在时，从集合中移除一个 val。
- getRandom：从现有集合中随机获取一个元素。每个元素被返回的概率应该与其在集合中的数量呈线性相关。

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/insert-delete-getrandom-o1-duplicates-allowed

# 解题思路

作为[380. 不可重复](/leetcode/0380.insert-delete-getrandom-o1)的进阶。可重复，需要将索引作为集合存放，考虑到索引插入删除的需求，索引集合选用set而非array的效果更好。