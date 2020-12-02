export const sortByDateDesc = (a, b) => {
	return a.date > b.date ? -1 : 1;
};

export const sortByDateAsc = (a, b) => {
	return a.date > b.date ? 1 : -1;
};

export const sortByNumber = (a, b) => {
	const number1 = parseInt(a.title, 10);
	const number2 = parseInt(b.title, 10);

	if (isNaN(number1)) {
		return isNaN(number2) ? 0 : 1;
	} else if (isNaN(number2)) {
		return isNaN(number1) ? 0 : -1;
	} else {
		return number1 > number2 ? 1 : -1;
	}
};
