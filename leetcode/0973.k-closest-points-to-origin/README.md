---
title: 973.最接近原点的-k-个点
date: "2020-11-09"
topic: 排序
---

# 问题描述

我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。

（这里，平面上两点之间的距离是欧几里德距离。）

你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。

示例 1：
```
输入：points = [[1,3],[-2,2]], K = 1
输出：[[-2,2]]
解释： 
(1, 3) 和原点之间的距离为 sqrt(10)，
(-2, 2) 和原点之间的距离为 sqrt(8)，
由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。
```

示例 2：
```
输入：points = [[3,3],[5,-1],[-2,4]], K = 2
输出：[[3,3],[-2,4]]
（答案 [[-2,4],[3,3]] 也会被接受。）
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/k-closest-points-to-origin


# 解题思路

## 记录法

- 遍历数组，将距离和原坐标存储到另一数组B中。
- 对数组B从小到大排序
- 取前K个元素遍历返回原坐标

时间复杂度：$O(NlogN)$
空间复杂度：$O(N)$


# 基于快排

基于快排求解，求前K个元素，只需从大到小排到前K个元素。利用快排的分治思想。

``` js
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  function distance([x, y]) {
    return x * x + y * y;
  }

  function quickSort(l, r) {
    if (l >= r) {
      return l;
    }

    const p = partition(l, r);
    if (p + 1 === K) return p;
    if (p + 1 < K) return quickSort(p + 1, r);
    else return quickSort(l, p - 1);
  }

  function partition(l, r) {
    const v = distance(points[l]);
    let i = l + 1;
    let j = l;

    while (i <= r) {
      if (distance(points[i]) <= v) {
        j++;
        [points[j], points[i]] = [points[i], points[j]];
      }
      i++;
    }
    [points[j], points[l]] = [points[l], points[j]];
    return j;
  }

  quickSort(0, points.length - 1);
  return points.slice(0, K);
};
```


# 扩展

类似题目：215. 数组中的第K个最大元素