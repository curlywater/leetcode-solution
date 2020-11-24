function findRepeatNumber(nums: number[]): number {
	for (let i = 0, n = nums.length; i < n; i++) {
		const j = nums[i];
		if (i !== j) {
			if (nums[j] === j) {
				return j;
			} else {
				[nums[i], nums[j]] = [nums[j], nums[i]];
			}
		}
	}

	return -1;
}
