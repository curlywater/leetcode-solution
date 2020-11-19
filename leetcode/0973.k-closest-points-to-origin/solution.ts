function kClosest(points: number[][], K: number): number[][] {
	return points
		.map(([x, y], index) => ({
			value: x * x + y * y,
			index,
		}))
		.sort((a, b) => a.value - b.value)
		.slice(0, K)
		.map(({ index }) => points[index]);
}
