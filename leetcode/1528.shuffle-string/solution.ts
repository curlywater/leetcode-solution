function restoreString(s: string, indices: number[]): string {
	const chars: string[] = [];

	indices.forEach((index, i) => {
		chars[index] = s[i];
	});

	return chars.join("");
}
