function minSetSize(arr: number[]): number {
	const map: Map<number, number> = new Map();

	arr.forEach((num) => {
		map.set(num, (map.get(num) || 0) + 1);
	});

	const counts: number[] = Array.from(map.values()).sort((a, b) => b - a);

	let ans: number = 0;
	let N: number = arr.length >> 1;

	while (N > 0) {
		N -= counts[ans];
		ans++;
	}

	return ans;
}
