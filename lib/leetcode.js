import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const leetcodeDirectory = path.join(process.cwd(), "leetcode");
const FILENAME = "README.md";

export function getSortedPostsData() {
	const allProblemData = fs.readdirSync(leetcodeDirectory).map((problem) => {
		const id = problem;
		const fullPath = path.join(leetcodeDirectory, problem, FILENAME);

		const fileContents = fs.readFileSync(fullPath, "utf8");

		const matterResult = matter(fileContents);

		return {
			id,
			...matterResult.data,
		};
	});

	return allProblemData.sort((a, b) => {
		return a.date > b.date ? -1 : 1;
	});
}

export function getAllPostIds() {
	const problems = fs.readdirSync(leetcodeDirectory);

	return problems.map((id) => ({
		params: {
			id,
		},
	}));
}

export async function getPostData(id) {
	const fullPath = path.join(leetcodeDirectory, id, FILENAME);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const matterResult = matter(fileContents);

	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}
