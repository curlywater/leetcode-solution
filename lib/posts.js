import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { slugify, unslugify } from "./slugify";

const postDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const name = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const slug = slugify(name);
    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });
}

export function getAllPostsSlug() {
  const fileNames = fs.readdirSync(postDirectory);

  return fileNames.map((fileName) => {
    const name = fileName.replace(/\.md$/, "");
    const slug = slugify(name);
    return {
      params: {
        slug,
      },
    };
  });
}

export async function getPostData(slug) {
  const fullPath = path.join(postDirectory, unslugify(slug));
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...matterResult.data,
  };
}
