function judgeSquareSum(c: number): boolean {
	let lower: number = 0;
	let upper: number = Math.floor(Math.sqrt(c));

	while (lower <= upper) {
		const sum = lower * lower + upper * upper;
		if (sum === c) {
			return true;
		}
		if (sum > c) {
			upper--;
		} else {
			lower++;
		}
	}

	return false;
}
