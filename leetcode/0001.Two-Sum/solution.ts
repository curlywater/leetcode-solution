function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  const size: number = nums.length;

  for (let i = 0; i < size; i++) {
    const other = target - nums[i];
    if (map.has(other) && map.get(other) !== i) {
      return [<number>map.get(other), i];
    } else {
      map.set(nums[i], i);
    }
  }

  return [];
}
