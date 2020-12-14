function canFormArray(arr: number[], pieces: number[][]): boolean {
	const map: Map<number, number> = new Map();
	pieces.forEach((arr, i) => {
		map.set(arr[0], i);
	});

	let index: number = 0;
	let point: number[] = [];

	for (let num of arr) {
		if (index === 0) {
			if (map.has(num)) {
				point = pieces[map.get(num)];
			} else {
				return false;
			}
		}

		if (point[index] !== num) {
			return false;
		}

		index++;
		if (point.length === index) {
			index = 0;
		}
	}

	return true;
}
