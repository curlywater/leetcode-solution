function sortByBits(arr: number[]): number[] {
	const size = Math.max(...arr);
	const bits: number[] = [0];

	for (let i = 1; i <= size; i++) {
		bits[i] = bits[i >> 1] + (i % 2);
	}

	arr.sort((a: number, b: number) => bits[a] - bits[b] || a - b);

	return arr;
}
