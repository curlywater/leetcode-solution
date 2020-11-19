function reconstructQueue(people: number[][]): number[][] {
	people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

	const result: number[][] = [];
	for (let item of people) {
		result.splice(item[1], 0, item);
	}

	return result;
}
