function largestSumAfterKNegations(A: number[], K: number): number {
	A.sort((a, b) => a - b);

	let i: number = 0;
	while (K && A[i] < 0) {
		K--;
		A[i] = -A[i];
		i++;
	}

	let sum: number = A.reduce((sum, num) => (sum += num), 0);
	if (K > 0) {
		const min = Math.min(...A);
		sum = sum - min + ((K & 1) === 0 ? min : -min);
	}

	return sum;
}
