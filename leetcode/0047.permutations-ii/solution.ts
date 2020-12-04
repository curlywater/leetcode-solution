function permuteUnique(nums: number[]): number[][] {
	const n = nums.length;
	const ans: number[][] = [];
	nums.sort((a, b) => a - b);
	backtracking([...nums], 0);
	return ans;

	function backtracking(nums: number[], start: number) {
		if (start === n) {
			ans.push(nums);
			return;
		}

		for (let i = start; i < n; i++) {
			if (i !== start && nums[i] === nums[start]) continue;
			[nums[start], nums[i]] = [nums[i], nums[start]];
			backtracking([...nums], start + 1);
		}
	}
}
