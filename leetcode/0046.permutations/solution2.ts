function permute(nums: number[]): number[][] {
	const ans: number[][] = [];
	const N: number = nums.length;
	const used: boolean[] = new Array(N).fill(false);
	const res: number[] = [];
	backtrack(0);
	return ans;

	function backtrack(level: number) {
		if (level === N) {
			ans.push([...res]);
			return;
		}

		for (let i = 0; i < N; i++) {
			if (used[i] !== false) continue;

			res.push(nums[i]);
			used[i] = true;
			backtrack(level + 1);
			res.pop();
			used[i] = false;
		}
	}
}
