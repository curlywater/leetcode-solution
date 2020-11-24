function transpose(A: number[][]): number[][] {
	return Array.from({ length: A[0].length }, (_, k) =>
		A.map((row) => row[k])
	);
}
