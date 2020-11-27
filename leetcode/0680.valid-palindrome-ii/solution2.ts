function validPalindrome(s: string): boolean {
	let l: number = 0;
	let r: number = s.length - 1;

	for (let l: number = 0, r: number = s.length - 1; l < r; l++, r--) {
		if (s[l] !== s[r]) {
			return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
		}
	}
	return true;
}

function isPalindrome(s: string, i: number, j: number): boolean {
	while (i < j) {
		if (s[i] === s[j]) {
			i++;
			j--;
		} else {
			return false;
		}
	}
	return true;
}
