function findContentChildren(children: number[], cookies: number[]): number {
	children.sort((a, b) => a - b);
	cookies.sort((a, b) => a - b);

	let child: number = 0;
	let cookie: number = 0;

	while (child < children.length && cookie < cookies.length) {
		if (children[child] <= cookies[cookie]) child++;
		cookie++;
	}

	return child;
}
