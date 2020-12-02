---
title: 二分查找
date: "2020-11-24"
topic: 二分查找
---

# 介绍

一个长度为 N 的数组。

常规的顺序查找，需要耗费$O(N)$个时间复杂度。

而二分查找则是一种优化的查找思想：将区间分成两部分，缩小可能范围，只取可能的一部分继续查找。不断折半知道查找到目标，时间复杂度降低至$O(logN)$。

前提：针对有序数组的查找优化。具有连续线性空间搜索可以应用二分查找优化。

## 解题思路

分析中点值的分布情况，根据分析确定边界条件和最终返回值位置。

## 边界条件

- l < r，不会处理 r 上的情况，因此需要将 r 作为 mid 覆盖点考虑。配合`r = mid`使用，而非 `r = mid - 1`。表示目标值在(l, r]区间内。

- l <= r， 会处理 l 和 r 上的情况，配合`r = mid - 1`使用。表示目标值在(l, r)区间内。

## 二分查找的变体

- 查找第一个等于给定值的元素
- 查找最后一个等于给定值的元素
- 查找第一个大于等于给定值的元素
- 查找最后一个小于等于给定值的元素

本质上都是扩大限制范围，将左右指针往目标对象靠，到达边界后判断是否符合要求，边界：
- 数组边界
- 同值范围边界

``` js
function bsearch (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (nums[mid] >= target) {
            right = mid - 1;
            if (mid === 0 || nums[mid - 1] !== target) return mid;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
```

# 求开方

[69. x 的平方根](/leetcode/0069.sqrtx/)

# 查找区间

[34. 在排序数组中查找元素的第一个和最后一个位置](/leetcode/0034.find-first-and-last-position-of-element-in-sorted-array/)


# 旋转数组查找数字

[81. 搜索旋转排序数组 II](/leetcode/0081.search-in-rotated-sorted-array-ii/)

# 练习

[154. 寻找旋转排序数组中的最小值 II](/leetcode/0154.find-minimum-in-rotated-sorted-array-ii/)

[540. 有序数组中的单一元素](/leetcode/0540.single-element-in-a-sorted-array/)

[4. 寻找两个正序数组的中位数](/leetcode/0004.Median-of-Two-Sorted-Arrays/)