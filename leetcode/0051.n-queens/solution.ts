function solveNQueens(n: number): string[][] {
	const ans: string[][] = [];
	const queues: number[] = [];
	const columns: boolean[] = new Array(n).fill(false);
	const ldiag: boolean[] = [];
	const rdiag: boolean[] = [];

	backtracking(0);
	return ans;

	function backtracking(row: number): void {
		if (row === n) {
			ans.push(
				queues.map((index) => {
					return Array.from({ length: n }, (_, k) =>
						k === index ? "Q" : "."
					).join("");
				})
			);
			return;
		}

		for (let col = 0; col < n; col++) {
			const ldiagIndex = n - 1 + row - col;
			const rdiagIndex = row + col;
			if (!columns[col] && !ldiag[ldiagIndex] && !rdiag[rdiagIndex]) {
				queues.push(col);
				columns[col] = true;
				ldiag[ldiagIndex] = true;
				rdiag[rdiagIndex] = true;
				backtracking(row + 1);
				queues.pop();
				columns[col] = false;
				ldiag[ldiagIndex] = false;
				rdiag[rdiagIndex] = false;
			}
		}
	}
}
