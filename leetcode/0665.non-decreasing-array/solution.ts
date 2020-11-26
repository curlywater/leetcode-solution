function checkPossibility(nums: number[]): boolean {
	let count: number = 0;
	for (let i = 1, len = nums.length; i < len; i++) {
		if (nums[i - 1] > nums[i]) {
			if (nums[i - 2] > nums[i]) {
				nums[i] = nums[i - 1];
			} else {
				nums[i - 1] = nums[i];
			}
			count++;
		}

		if (count > 1) {
			return false;
		}
	}

	return true;
}
