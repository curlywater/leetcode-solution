function sortByBits(arr: number[]): number[] {
	const memo: Map<number, number> = new Map();

	function getBit(num: number): number {
		if (!memo.has(num)) {
			let bit = 0;
			let n = num;
			while (n) {
				bit += n & 1;
				n >>= 1;
			}
			memo.set(num, bit);
		}

		return <number>memo.get(num);
	}

	arr.sort((a: number, b: number) => {
		const bitA = getBit(a);
		const bitB = getBit(b);

		return bitA - bitB || a - b;
	});

	return arr;
}
