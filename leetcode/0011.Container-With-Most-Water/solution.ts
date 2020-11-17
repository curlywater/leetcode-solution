function maxArea(height: number[]): number {
  let left: number = 0;
  let right: number = height.length - 1;
  let max: number = 0;

  while (left < right) {
    if (height[left] > height[right]) {
      max = Math.max(max, height[right] * (right - left));
      right--;
    } else {
      max = Math.max(max, height[left] * (right - left));
      left++;
    }
  }
  return max;
}
