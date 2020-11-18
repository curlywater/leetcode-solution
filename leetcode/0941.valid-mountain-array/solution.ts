function validMountainArray(arr: number[]): boolean {
	const N: number = arr.length;
	let i: number = 0;

	while (i + 1 < N && arr[i] < arr[i + 1]) {
		i++;
	}

	if (i === 0 || i === N - 1) {
		return false;
	}

	while (i + 1 < N && arr[i] > arr[i + 1]) {
		i++;
	}

	return i === N - 1;
}
