function removeDuplicates(nums: number[]): number {
	let i: number = 0;

	for (let j = 0, len = nums.length; j < len; j++) {
		if (nums[j] !== nums[j + 2]) {
			nums[i++] = nums[j];
		}
	}

	return i;
}
