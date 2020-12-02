import fs from "fs";
import path from "path";
import { getContentFromMarkdown, getMatterFromMarkdown } from "./article";
import { sortByDateAsc } from "./sort";

const postDirectory = path.join(process.cwd(), "posts");

export function getPostList() {
	const fileNames = fs.readdirSync(postDirectory);

	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");
		const fullPath = path.join(postDirectory, fileName);
		const matterResult = getMatterFromMarkdown(fullPath);

		return {
			id,
			...matterResult.data,
		};
	});

	return allPostsData;
}

export function getSortedPostList() {
	return getPostList().sort(sortByDateAsc);
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postDirectory);

	return fileNames.map((fileName) => ({
		params: {
			id: fileName.replace(/\.md$/, ""),
		},
	}));
}

export async function getPostData(id) {
	const fullPath = path.join(postDirectory, `${id}.md`);
	return getContentFromMarkdown(id, fullPath);
}
