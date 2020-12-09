function groupThePeople(groupSizes: number[]): number[][] {
	const map: Map<number, Array<number>> = new Map();
	const ans: number[][] = [];

	groupSizes.forEach((size, i) => {
		const array = map.has(size) ? <Array<number>>map.get(size) : [];
		array.push(i);
		if (array.length === size) {
			map.delete(size);
			ans.push(array);
		} else {
			map.set(size, array);
		}
	});

	return ans;
}
