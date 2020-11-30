function minDeletionSize(A: string[]): number {
	let ans: number = 0;
	const row: number = A.length;
	const col: number = A[0].length;

	for (let i = 0; i < col; i++) {
		for (let j = 0; j < row - 1; j++) {
			if (A[j][i] > A[j + 1][i]) {
				ans++;
				break;
			}
		}
	}

	return ans;
}
