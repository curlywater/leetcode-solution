function singleNonDuplicate(nums: number[]): number {
	const n: number = nums.length - 1;
	let l: number = 0;
	let r: number = n;

	while (l < r) {
		const mid = l + ((r - l) >> 1);

		if (mid % 2 === 1) {
			if (nums[mid] === nums[mid - 1]) l = mid + 1;
			else r = mid;
		} else {
			if (nums[mid] === nums[mid + 1]) l = mid + 1;
			else r = mid;
		}
	}

	return nums[r];
}
