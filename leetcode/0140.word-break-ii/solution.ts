function wordBreak(s: string, wordDict: string[]): string[] {
  const wordSet: Set<string> = new Set(wordDict);
  const map: Map<number, string[]> = new Map();
  const sLength = s.length;

  function backtrack(index: number): string[] {
    if (map.has(index)) return map.get(index) || [];

    const sentences = [];

    if (index === sLength) sentences.push("");

    for (let i = index + 1; i <= sLength; i++) {
      const word = s.substring(index, i);
      if (wordSet.has(word)) {
        sentences.push(
          ...backtrack(i).map((str) => (!str ? word : `${word} ${str}`))
        );
      }
    }

    map.set(index, sentences);
    return sentences;
  }

  return backtrack(0);
}
