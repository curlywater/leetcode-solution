import fs from "fs";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";

export const getContentFromMarkdown = async (id, fullPath) => {
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const matterResult = matter(fileContents);

	const processedContent = await remark()
		.use(html)
		.use(prism)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	return {
		id,
		contentHtml,
		...matterResult.data,
	};
};

export const getMatterFromMarkdown = (fullPath) => {
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const matterResult = matter(fileContents);

	return matterResult;
};
