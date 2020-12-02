function lemonadeChange(bills: number[]): boolean {
	const change: number[] = new Array(2).fill(0);

	for (const num of bills) {
		if (num === 5) {
			change[0]++;
		} else if (num === 10) {
			if (change[0] >= 1) {
				change[0]--;
				change[1]++;
			} else {
				return false;
			}
		} else if (num === 20) {
			if (change[0] >= 1 && change[1] >= 1) {
				change[0]--;
				change[1]--;
			} else if (change[0] >= 3) {
				change[0] -= 3;
			} else {
				return false;
			}
		}
	}

	return true;
}
