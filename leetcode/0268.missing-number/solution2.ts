function missingNumber(nums: number[]): number {
	const n = nums.length;
	const sum = nums.reduce((sum, num) => sum + num, 0);

	return (n * (n + 1)) / 2 - sum;
}
