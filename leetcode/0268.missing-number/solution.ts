function missingNumber(nums: number[]): number {
	const n = nums.length;
	let ans: number = n;

	for (let i = 0; i < n; i++) {
		ans ^= nums[i] ^ i;
	}

	return ans;
}
