function minSubsequence(nums: number[]): number[] {
	nums.sort((a, b) => b - a);

	const ans: number[] = [];
	const sum: number = nums.reduce((sum, num) => sum + num, 0);
	let subSum: number = 0;

	for (const num of nums) {
		ans.push(num);
		subSum += num;
		if (subSum > sum - subSum) {
			break;
		}
	}

	return ans;
}
