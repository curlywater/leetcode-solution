function maxProfit(prices: number[]): number {
	let ans: number = 0;
	const n: number = prices.length;
	for (let i = 1; i < n; i++) {
		ans += Math.max(0, prices[i] - prices[i - 1]);
	}
	return ans;
}
