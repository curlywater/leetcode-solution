function generate(numRows: number): number[][] {
	const ans: number[][] = [];

	for (let i = 0; i < numRows; i++) {
		const row: number[] = [];
		for (let j = 0; j <= i; j++) {
			if (j === 0 || j === i) {
				row.push(1);
			} else {
				row.push(ans[i - 1][j - 1] + ans[i - 1][j]);
			}
		}
		ans.push(row);
	}

	return ans;
}
