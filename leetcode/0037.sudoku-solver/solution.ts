/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
	const rowArray: Array<Array<boolean>> = Array.from({ length: 9 }, () =>
		new Array(9).fill(false)
	);
	const colArray: Array<Array<boolean>> = Array.from({ length: 9 }, () =>
		new Array(9).fill(false)
	);
	const blockArray: Array<Array<boolean>> = Array.from({ length: 9 }, () =>
		new Array(9).fill(false)
	);
	const pos: Array<Array<number>> = [];

	board.forEach((row, r) =>
		row.forEach((item, c) => {
			if (item === ".") {
				pos.push([r, c]);
			} else {
				const num: number = +item - 1;
				rowArray[r][num] = colArray[c][num] = blockArray[
					calBlockIndex(r, c)
				][num] = true;
			}
		})
	);

	backtracking(0);

	function backtracking(posIndex: number): boolean {
		if (posIndex === pos.length) return true;
		const [x, y] = pos[posIndex];
		for (let k = 0; k < 9; k++) {
			const row = rowArray[x];
			const col = colArray[y];
			const block = blockArray[calBlockIndex(x, y)];
			if (!row[k] && !col[k] && !block[k]) {
				board[x][y] = `${k + 1}`;
				row[k] = col[k] = block[k] = true;
				if (backtracking(posIndex + 1)) return true;
				row[k] = col[k] = block[k] = false;
			}
		}
		return false;
	}

	function calBlockIndex(r: number, c: number): number {
		return 3 * Math.floor(r / 3) + Math.floor(c / 3);
	}
}
