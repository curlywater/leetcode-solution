// 栈实现
function maxAreaOfIsland(grid: number[][]): number {
	const direction = [-1, 0, 1, 0, -1];
	const row: number = grid.length;
	const col: number = grid[0].length;
	let ans: number = 0;

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (grid[i][j] === 0) continue;

			let area: number = 0;
			const stack: number[][] = [];
			stack.push([i, j]);
			grid[i][j] = 0;

			while (stack.length) {
				const [r, c]: number[] = stack.pop()!;
				area++;

				for (let k = 0; k < 4; k++) {
					const x = r + direction[k];
					const y = c + direction[k + 1];
					if (
						x >= 0 &&
						x < row &&
						y >= 0 &&
						y < col &&
						grid[x][y] === 1
					) {
						stack.push([x, y]);
						grid[x][y] = 0;
					}
				}
			}

			ans = Math.max(ans, area);
		}
	}

	return ans;
}
