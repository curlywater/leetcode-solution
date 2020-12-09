function matrixScore(A: number[][]): number {
	const row: number = A.length;
	const col: number = A[0].length;
	let sum: number = row * (1 << (col - 1));

	for (let j = 1; j < col; j++) {
		let count: number = 0;
		for (let i = 0; i < row; i++) {
			count += A[i][0] === 0 ? 1 - A[i][j] : A[i][j];
		}
		sum += Math.max(count, row - count) * (1 << (col - j - 1));
	}

	return sum;
}
