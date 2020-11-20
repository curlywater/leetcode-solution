function ladderLength(
	beginWord: string,
	endWord: string,
	wordList: string[]
): number {
	const wordIds: Map<string, number> = new Map();
	const edges: number[][] = [];
	let id: number = 0;
	function addWord(word: string): number {
		if (!wordIds.has(word)) {
			wordIds.set(word, id);
			edges[id] = [];
			id++;
		}

		return <number>wordIds.get(word);
	}

	function addEdge(word: string): void {
		const curWordId = addWord(word);
		const letters: string[] = word.split("");

		for (let i = 0, len = letters.length; i < len; i++) {
			const tmp = letters[i];
			letters[i] = "*";
			const wordId = addWord(letters.join(""));
			edges[wordId].push(curWordId);
			edges[curWordId].push(wordId);
			letters[i] = tmp;
		}
	}

	wordList.forEach(addEdge);
	addEdge(beginWord);

	if (!wordIds.has(endWord)) return 0;

	const beginWordId: number = <number>wordIds.get(beginWord);
	const endWordId: number = <number>wordIds.get(endWord);
	const queue: number[] = [];
	const dis: number[] = [];
	queue.push(beginWordId);
	dis[beginWordId] = 0;

	while (queue.length) {
		const id = <number>queue.shift();
		if (id === endWordId) {
			return dis[id] / 2 + 1;
		}
		for (const siblingId of edges[id]) {
			if (dis[siblingId] === undefined) {
				queue.push(siblingId);
				dis[siblingId] = dis[id] + 1;
			}
		}
	}

	return 0;
}
