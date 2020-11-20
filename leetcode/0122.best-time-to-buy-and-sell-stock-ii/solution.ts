function maxProfit(prices: number[]): number {
	// 持有和未持有两种状态 1, 0
	// dp[i][0] = max(dp[i - 1][0],dp[i - 1][1] + prices[i]);
	// dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
	// dp[0][0] = 0
	// dp[0][1] = -Infinity

	let dp_0: number = 0;
	let dp_1: number = -Infinity;
	let temp: number = 0;

	for (let i = 0, len = prices.length; i < len; i++) {
		temp = dp_0;
		dp_0 = Math.max(dp_0, dp_1 + prices[i]);
		dp_1 = Math.max(dp_1, temp - prices[i]);
	}

	return dp_0;
}
