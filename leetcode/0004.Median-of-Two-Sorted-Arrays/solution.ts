function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const size = nums1.length + nums2.length;
  const size2 = nums2.length;
  const leftIndex = (size - 1) >> 1;
  const rightIndex = size >> 1;

  let i: number = 0;
  let j: number = 0;
  let left: number = 0;
  let right: number = 0;

  while (i + j < size) {
    const index = i + j;
    const num = j >= size2 || nums1[i] < nums2[j] ? nums1[i++] : nums2[j++];
    if (leftIndex === index) {
      left = num;
    }
    if (rightIndex === index) {
      right = num;
      break;
    }
  }

  return left + (right - left) / 2;
}
