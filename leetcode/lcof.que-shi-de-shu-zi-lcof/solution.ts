function missingNumber(nums: number[]): number {
	const n = nums.length;
	for (let i = 0; i < n; i++) {
		if (i !== nums[i]) {
			return i;
		}
	}

	return n;
}
