function fourSumCount(
	A: number[],
	B: number[],
	C: number[],
	D: number[]
): number {
	const countAB: Map<number, number> = new Map();

	for (const numA of A) {
		for (const numB of B) {
			countAB.set(numA + numB, (countAB.get(numA + numB) || 0) + 1);
		}
	}

	let ans: number = 0;
	for (const numC of C) {
		for (const numD of D) {
			if (countAB.has(-numC - numD)) {
				ans += <number>countAB.get(-numC - numD);
			}
		}
	}

	return ans;
}
