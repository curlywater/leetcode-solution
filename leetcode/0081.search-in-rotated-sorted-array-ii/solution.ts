function search(nums: number[], target: number): boolean {
	let l: number = 0;
	let r: number = nums.length - 1;

	while (l <= r) {
		const mid = l + ((r - l) >> 1);

		if (nums[mid] === target) return true;

		// 包含重复元素，无法确定是左区间全部相同还是右区间全部相同
		if (nums[l] === nums[mid]) l++;
		else if (nums[mid] <= nums[r]) {
			// 右区间增序
			if (nums[mid] < target && target <= nums[r]) {
				// 目标值在右区间
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		} else {
			// 左区间增序
			if (nums[mid] > target && target >= nums[l]) {
				// 目标值在左区间
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		}
	}

	return false;
}
