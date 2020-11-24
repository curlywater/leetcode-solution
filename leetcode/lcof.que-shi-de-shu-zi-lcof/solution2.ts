function missingNumber(nums: number[]): number {
	let i: number = 0;
	let j: number = nums.length - 1;

	while (i <= j) {
		const mid: number = (i + j) >> 1;

		if (nums[mid] === mid) i = mid + 1;
		else j = mid - 1;
	}

	return i;
}
