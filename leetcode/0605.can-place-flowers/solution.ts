function canPlaceFlowers(flowerbed: number[], n: number): boolean {
	if (n === 0) return true;

	const N: number = flowerbed.length;
	let i: number = 0;

	while (i < N) {
		if (!flowerbed[i + 1]) {
			if (flowerbed[i] === 0) {
				n--;
			}
			i += 2;
		} else {
			i += 3;
		}

		if (n === 0) {
			return true;
		}
	}

	return false;
}
