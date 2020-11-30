function numWaterBottles(numBottles: number, numExchange: number): number {
	let ans: number = numBottles;
	let emptyBottles: number = numBottles;

	while (emptyBottles >= numExchange) {
		emptyBottles -= numExchange;
		ans++;
		emptyBottles++;
	}

	return ans;
}
