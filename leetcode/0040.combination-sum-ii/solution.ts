function combinationSum2(candidates: number[], target: number): number[][] {
	const N: number = candidates.length;
	candidates.sort((a, b) => a - b);
	const ans: number[][] = [];
	const res: number[] = [];
	backtracking(0, target);
	return ans;

	function backtracking(start: number, target: number) {
		if (target === 0) {
			ans.push([...res]);
			return;
		}
		for (let i = start; i < N; i++) {
			if (target < candidates[i]) return;
			if (i > start && candidates[i] === candidates[i - 1]) continue;
			res.push(candidates[i]);
			backtracking(i + 1, target - candidates[i]);
			res.pop();
		}
	}
}
