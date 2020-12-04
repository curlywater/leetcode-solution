import fs from "fs";
import path from "path";
import { getContentFromMarkdown, getMatterFromMarkdown } from "./markdown";
import { sortByNumber } from "./sort";

const leetcodeDirectory = path.join(process.cwd(), "leetcode");
const FILENAME = "README.md";
const SOLUTION_NAME = "solution";
const SOLUTION_EXT = [".ts", ".js"];

export function getPostList() {
	const allProblemData = fs.readdirSync(leetcodeDirectory).map((problem) => {
		const id = problem;
		const dirPath = path.join(leetcodeDirectory, problem);
		const fullPath = path.join(dirPath, FILENAME);
		const matterResult = getMatterFromMarkdown(fullPath);

		const solutions = fs
			.readdirSync(dirPath)
			.filter((filename) => {
				const ext = path.extname(filename);
				return (
					SOLUTION_EXT.includes(ext) &&
					path.basename(filename, ext).startsWith(SOLUTION_NAME)
				);
			})
			.sort();

		return {
			id,
			...matterResult.data,
			solved: solutions.length > 0 ? true : false,
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
