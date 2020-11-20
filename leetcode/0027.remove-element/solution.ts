function removeElement(nums: number[], val: number): number {
	let i: number = 0;

	for (let j = 0, len = nums.length; j < len; j++) {
		if (nums[j] !== val) {
			nums[i++] = nums[j];
		}
	}

	return i;
}
