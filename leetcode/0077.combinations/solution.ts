function combine(n: number, k: number): number[][] {
	const ans: number[][] = [];
	const knums: number[] = [];

	backtracking(1);
	return ans;

	function backtracking(start: number): void {
		if (knums.length === k) {
			ans.push([...knums]);
			return;
		}

		for (let i = start; i <= n - (k - knums.length) + 1; i++) {
			knums.push(i);
			backtracking(i + 1);
			knums.pop();
		}
	}
}
