---
title: 数组数据结构
topic: 数组
---


# 数据结构

## 特性

数组的优势在于：支持随机访问，根据下标随机访问的时间复杂度为 $O(1)$

数组的限制在于：需要连续的存储空间，导致容量受限需要做扩容处理，增删操作的平均时间复杂度是 $O(n)$

## 基本操作

[867. 转置矩阵](/leetcode/0867.transpose-matrix/)

[118. 杨辉三角](/leetcode/0118.pascals-triangle/)


# 算法
## 双指针 —— 原地筛选

简单描述：一次遍历，前置符合条件的元素，直接截去残余部分

两个指针，一个用于遍历，一个用于已符合添加的元素。

[283. 移动零](/leetcode/0283.move-zeroes/)

[27. 移除元素](/leetcode/0027.remove-element/)

[26. 删除排序数组中的重复项](/leetcode/0026.remove-duplicates-from-sorted-array)

[80. 删除排序数组中的重复项 II](/leetcode/0080.remove-duplicates-from-sorted-array-ii)

## 双指针 —— 对撞指针

双指针从两端向中间进发

[167. 两数之和 II - 输入有序数组](/leetcode/0167.two-sum-ii-input-array-is-sorted)

[125. 验证回文串](/leetcode/0125.valid-palindrome/)

[345. 反转字符串中的元音字母](/leetcode/0345.reverse-vowels-of-a-string/solution/)

[11. 盛最多水的容器](/leetcode/0011.container-with-most-water/)

[977. 有序数组的平方](/leetcode/0977.squares-of-a-sorted-array/)

[344. 反转字符串](/leetcode/0344.reverse-string/)


## Boyer-Moore 摩尔投票算法

一对一对垒，要成为众数必须抵消掉其他数。

[面试题 17.10. 主要元素](/leetcode/17.10.find-majority-element-lcci/)

[169. 多数元素](/leetcode/0169.majority-element/)



## 应用快排思想

应用快速排序思想

[75. 颜色分类](https://leetcode-cn.com/problems/sort-colors/)

[215. 数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

[973. 最接近原点的 K 个点](https://leetcode-cn.com/problems/k-closest-points-to-origin/)


## 滑动窗口

[209. 长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)
