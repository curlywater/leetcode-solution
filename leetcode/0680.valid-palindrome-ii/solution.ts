function validPalindrome(s: string): boolean {
	let l: number = 0;
	let r: number = s.length - 1;

	let diffCount: number = 0;
	while (l < r) {
		if (s[l] !== s[r]) {
			if (diffCount > 0) {
				return false;
			}
			diffCount++;
			if (s[l + 1] === s[r] && (l + 2 > r - 1 || s[l + 2] === s[r - 1])) {
				l++;
			} else if (
				s[l] === s[r - 1] &&
				(l + 1 > r - 2 || s[l + 1] === s[r - 2])
			) {
				r--;
			} else {
				return false;
			}
		} else {
			l++;
			r--;
		}
	}

	return true;
}
