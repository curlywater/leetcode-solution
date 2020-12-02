import fs from "fs";
import path from "path";
import { getContentFromMarkdown, getMatterFromMarkdown } from "./article";
import { sortByNumber } from "./sort";

const leetcodeDirectory = path.join(process.cwd(), "leetcode");
const FILENAME = "README.md";

export function getPostList() {
	const allProblemData = fs.readdirSync(leetcodeDirectory).map((problem) => {
		const id = problem;
		const fullPath = path.join(leetcodeDirectory, problem, FILENAME);
		const matterResult = getMatterFromMarkdown(fullPath);

		return {
			id,
			...matterResult.data,
		};
	});

	return allProblemData;
}

export function getSortedPostList() {
	return getPostList().sort(sortByNumber);
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
	return getContentFromMarkdown(id, fullPath);
}
