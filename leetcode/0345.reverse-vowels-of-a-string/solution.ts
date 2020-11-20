function reverseVowels(s: string): string {
	const vowels: Set<string> = new Set(["a", "e", "i", "o", "u"]);

	let l: number = 0;
	let r: number = s.length - 1;
	const chs: string[] = s.split("");

	while (l < r) {
		const leftVowel = vowels.has(chs[l].toLowerCase());
		const rightVowel = vowels.has(chs[r].toLowerCase());
		if (leftVowel && rightVowel) {
			[chs[l], chs[r]] = [chs[r], chs[l]];
			l++;
			r--;
		} else {
			if (!leftVowel) l++;
			if (!rightVowel) r--;
		}
	}

	return chs.join("");
}
