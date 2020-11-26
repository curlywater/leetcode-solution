function candy(ratings: number[]): number {
	const N: number = ratings.length;
	const ans: number[] = new Array(N).fill(1);

	for (let i = 1; i < N; i++) {
		if (ratings[i] > ratings[i - 1]) {
			ans[i] = ans[i - 1] + 1;
		}
	}

	for (let i = N - 2; i >= 0; i--) {
		if (ratings[i] > ratings[i + 1] && ans[i] <= ans[i + 1]) {
			ans[i] = ans[i + 1] + 1;
		}
	}

	return ans.reduce((sum, num) => sum + num, 0);
}
