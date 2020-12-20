function twoCitySchedCost(costs: number[][]): number {
	costs.sort((a, b) => {
		const diff1 = a[0] - a[1];
		const diff2 = b[0] - b[1];

		return diff1 - diff2;
	});

	let ans: number = 0;
	const N: number = costs.length / 2;

	for (let i = 0; i < N; i++) {
		ans += costs[i][0] + costs[i + N][1];
	}

	return ans;
}
