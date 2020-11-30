function minCostToMoveChips(position: number[]): number {
	let oddSum: number = 0;
	let evenSum: number = 0;

	position.forEach((num) => {
		num % 2 === 0 ? evenSum++ : oddSum++;
	});

	return Math.min(evenSum, oddSum);
}
