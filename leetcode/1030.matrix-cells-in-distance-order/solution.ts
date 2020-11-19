function allCellsDistOrder(
	R: number,
	C: number,
	r0: number,
	c0: number
): number[][] {
	const maxDist: number = Math.max(r0, R - r0 - 1) + Math.max(c0, C - c0 - 1);
	const bucket: number[][][] = ([] = new Array(maxDist));

	for (let i = 0; i < R; i++) {
		for (let j = 0; j < C; j++) {
			const dist: number = Math.abs(i - r0) + Math.abs(j - c0);
			if (!bucket[dist]) {
				bucket[dist] = [];
			}
			bucket[dist].push([i, j]);
		}
	}

	const ret: number[][] = [];
	for (let i = 0; i <= maxDist; i++) {
		ret.push(...bucket[i]);
	}
	return ret;
}
