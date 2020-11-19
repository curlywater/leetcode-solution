function relativeSortArray(arr1: number[], arr2: number[]): number[] {
	const map: Map<number, number> = new Map();
	arr2.forEach((num, i) => {
		map.set(num, i);
	});

	arr1.sort((a, b) => {
		if (map.has(a)) {
			return map.has(b) ? map.get(a) - map.get(b) : -1;
		} else {
			return map.has(b) ? 1 : a - b;
		}
	});

	return arr1;
}
