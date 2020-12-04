function shortestBridge(A: number[][]): number {
	const row: number = A.length;
	const col: number = A[0].length;
	const directions: number[] = [-1, 0, 1, 0, -1];
	const queue: number[][] = [];

	let isFind: boolean = false;
	for (let i = 0; i < row; i++) {
		if (isFind) break;
		for (let j = 0; j < col; j++) {
			if (A[i][j] === 1) {
				isFind = true;
				dfs(i, j);
				break;
			}
		}
	}

	let level: number = 0;
	while (queue.length) {
		level++;
		let size: number = queue.length;
		while (size--) {
			const [r, c] = <number[]>queue.shift();
			for (let k = 0; k < 4; k++) {
				const x = r + directions[k];
				const y = c + directions[k + 1];

				if (x >= 0 && x < row && y >= 0 && y < col) {
					if (A[x][y] === 2) continue;
					if (A[x][y] === 1) return level;
					queue.push([x, y]);
					A[x][y] = 2;
				}
			}
		}
	}
	return 0;

	function dfs(r: number, c: number) {
		A[r][c] = 2;

		for (let k = 0; k < 4; k++) {
			const x = r + directions[k];
			const y = c + directions[k + 1];
			if (x >= 0 && x < row && y >= 0 && y < col) {
				if (A[x][y] === 0) {
					queue.push([x, y]);
				} else if (A[x][y] === 1) {
					dfs(x, y);
				}
			}
		}
	}
}
