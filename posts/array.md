---
title: 数组
topic: 数组
date: "2020-11-20"
---


# 特性

数组的优势在于：支持随机访问，根据下标随机访问的时间复杂度为 $O(1)$

数组的限制在于：需要连续的存储空间，导致容量受限需要做扩容处理，增删操作的平均时间复杂度是 $O(n)$

# 基本操作

[867. 转置矩阵](/leetcode/0867.transpose-matrix/)

[118. 杨辉三角](/leetcode/0118.pascals-triangle/)

# 双指针

[双指针在数组中的应用](/posts/two-points/#数组应用)

# Boyer-Moore 摩尔投票算法

一对一对垒，要成为众数必须抵消掉其他数。

[面试题 17.10. 主要元素](/leetcode/17.10.find-majority-element-lcci/)

[169. 多数元素](/leetcode/0169.majority-element/)



# 应用快排思想

应用快速排序思想

[75. 颜色分类](/leetcode/0075.sort-colors/)

[215. 数组中的第K个最大元素](/leetcode/0215.kth-largest-element-in-an-array/)

[973. 最接近原点的 K 个点](/leetcode/0973.k-closest-points-to-origin)



# O(1)复杂度增删查

O(1)复杂度的删除：可以使用和末尾元素置换再pop的方式实现

O(1)复杂度的查找：可以搭配哈希表实现

[380. 常数时间插入、删除和获取随机元素](/leetcode/0380.insert-delete-getrandom-o1)

[381. O(1) 时间插入、删除和获取随机元素 - 允许重复](/leetcode/0381.insert-delete-getrandom-o1-duplicates-allowed)
