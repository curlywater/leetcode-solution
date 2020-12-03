function permute(nums: number[]): number[][] {
	const ans: number[][] = [];
	const N: number = nums.length;
	backtracking(0);
	return ans;

	function backtracking(start: number) {
		if (start === N) {
			ans.push([...nums]);
			return;
		}

		for (let i = start; i < N; i++) {
			[nums[start], nums[i]] = [nums[i], nums[start]];
			backtracking(start + 1);
			[nums[i], nums[start]] = [nums[start], nums[i]];
		}
	}
}
