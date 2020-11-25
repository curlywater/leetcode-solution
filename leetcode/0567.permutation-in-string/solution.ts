function checkInclusion(s1: string, s2: string): boolean {
	const chars: Map<string, number> = new Map();
	const others: Map<string, number> = new Map();

	for (const ch of s1) {
		addChar(chars, ch);
	}

	let l: number = 0;
	let r: number = 0;
	const N: number = s2.length;

	while (r < N) {
		const ch = s2[r];
		if (chars.has(ch)) {
			setCount(chars, ch, -1);
			while (checkCover(chars) && l <= r) {
				if (checkEmpty(chars) && checkEmpty(others)) return true;
				const ch = s2[l];
				if (chars.has(ch)) {
					setCount(chars, ch, 1);
				} else {
					setCount(others, ch, -1);
				}
				l++;
			}
		} else {
			addChar(others, ch);
		}

		r++;
	}

	return false;
}

function setCount(map: Map<string, number>, ch: string, num: number): void {
	map.set(ch, <number>map.get(ch) + num);
}

function addChar(map: Map<string, number>, ch: string): void {
	if (!map.has(ch)) {
		map.set(ch, 1);
	} else {
		setCount(map, ch, 1);
	}
}

function checkCover(map: Map<string, number>): boolean {
	for (const [_, count] of map) {
		if (count > 0) {
			return false;
		}
	}
	return true;
}

function checkEmpty(map: Map<string, number>): boolean {
	for (const [_, count] of map) {
		if (count !== 0) {
			return false;
		}
	}
	return true;
}
