function permuteUnique(nums: number[]): number[][] {
	const ans: number[][] = [];
	const N: number = nums.length;
	const used: boolean[] = new Array(N).fill(false);
	const res: number[] = [];
	nums.sort((a, b) => a - b);
	backtrack(0);
	return ans;

	function backtrack(level: number) {
		if (level === N) {
			ans.push([...res]);
			return;
		}

		for (let i = 0; i < N; i++) {
			if (used[i] !== false) continue;
			if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false)
				continue;
			res.push(nums[i]);
			used[i] = true;
			backtrack(level + 1);
			res.pop();
			used[i] = false;
		}
	}
}
