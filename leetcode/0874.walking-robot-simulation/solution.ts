function robotSim(commands: number[], obstacles: number[][]): number {
	const exec = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];
	const point: number[] = new Array(2).fill(0);
	let ans: number = 0;
	let execKey: number = 0;

	const obstacleSet: Set<string> = new Set();

	obstacles.forEach((p) => {
		obstacleSet.add(p.toString());
	});

	for (const c of commands) {
		if (c === -2) {
			execKey = (execKey + 3) % 4;
		} else if (c === -1) {
			execKey = (execKey + 1) % 4;
		} else {
			for (let i = 0; i < c; i++) {
				const x = point[0] + exec[execKey][0];
				const y = point[1] + exec[execKey][1];
				if (obstacleSet.has([x, y].toString())) {
					break;
				} else {
					point[0] = x;
					point[1] = y;
					ans = Math.max(ans, x * x + y * y);
				}
			}
		}
	}

	return ans;
}
