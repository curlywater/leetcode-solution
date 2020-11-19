function relativeSortArray(arr1: number[], arr2: number[]): number[] {
	const max: number = Math.max(...arr1);
	const count: number[] = new Array(max + 1).fill(0);
	const result: number[] = [];

	arr1.forEach((num) => {
		count[num]++;
	});

	arr2.forEach((num) => {
		result.push(...new Array(count[num]).fill(num));
		count[num] = 0;
	});

	count.forEach((count, num) => {
		if (num > 0) {
			result.push(...new Array(count).fill(num));
		}
	});

	return result;
}
