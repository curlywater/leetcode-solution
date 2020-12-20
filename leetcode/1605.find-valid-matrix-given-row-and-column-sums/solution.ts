function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
	const row: number = rowSum.length;
	const col: number = colSum.length;
	const ans: number[][] = Array.from({ length: row }, () => new Array(col));

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			ans[i][j] = Math.min(rowSum[i], colSum[j]);
			rowSum[i] -= ans[i][j];
			colSum[j] -= ans[i][j];
		}
	}

	return ans;
}
