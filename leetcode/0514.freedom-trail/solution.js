/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
	const char2Index = new Map();
	Array.from(ring).forEach((ch, index) => {
		if (char2Index.has(ch)) {
			char2Index.get(ch).push(index);
		} else {
			char2Index.set(ch, [index]);
		}
	});

	function dp(options, ch) {
		return char2Index.get(ch).map((chIndex) => {
			const steps = Math.min(
				...options.map(({ steps, index }) => {
					if (chIndex === index) {
						return steps;
					}
					let max, min;
					if (chIndex > index) {
						max = chIndex;
						min = index;
					} else {
						max = index;
						min = chIndex;
					}

					return steps + Math.min(max - min, ring.length - max + min);
				})
			);

			return {
				steps,
				index: chIndex,
			};
		});
	}

	let options = [
		{
			steps: 0,
			index: 0,
		},
	];
	Array.from(key).forEach((ch) => {
		options = dp(options, ch);
	});

	return Math.min(...options.map((option) => option.steps)) + key.length;
};
