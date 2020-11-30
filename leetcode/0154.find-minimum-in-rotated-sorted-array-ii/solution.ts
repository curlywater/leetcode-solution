function findMin(nums: number[]): number {
	let l: number = 0;
	let r: number = nums.length - 1;

	while (l < r) {
		const mid = l + ((r - l) >> 1);

		if (nums[r] === nums[mid]) r--;
		else if (nums[mid] > nums[r]) {
			// 最小值在右区间
			l = mid + 1;
		} else {
			// 最小值在左区间，或其自身
			r = mid;
		}
	}

	return nums[r];
}
