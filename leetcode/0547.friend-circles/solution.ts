function findCircleNum(M: number[][]): number {
	const N: number = M.length;
	const visited: boolean[] = new Array(N).fill(false);
	let ans: number = 0;

	for (let i = 0; i < N; i++) {
		if (!visited[i]) {
			dfs(i);
			ans++;
		}
	}
	return ans;

	function dfs(i: number): void {
		visited[i] = true;
		for (let k = 0; k < N; k++) {
			if (M[i][k] === 1 && !visited[k]) {
				dfs(k);
			}
		}
	}
}
