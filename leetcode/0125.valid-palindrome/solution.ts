function isPalindrome(s: string): boolean {
	const str = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
	let l: number = 0;
	let r: number = str.length - 1;

	while (l < r) {
		if (str[l] !== str[r]) return false;
		l++;
		r--;
	}

	return true;
}
