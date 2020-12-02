function lastStoneWeight(stones: number[]): number {
	stones.sort((a, b) => b - a);
	while (stones.length > 1) {
		stones[0] = stones[0] - stones[1];
		stones[1] = 0;
		stones.sort((a, b) => b - a);
		stones.pop();
	}
	return stones[0];
}
