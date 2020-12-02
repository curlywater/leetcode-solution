import ArticleList from "../components/articleList";
import { categories } from "../components/layout";
import { getPostList as getAllProblems } from "../lib/leetcode";
import { getPostList as getAllPosts } from "../lib/post";
import { sortByDateDesc } from "../lib/sort";

export default function Home({ allPostsData }) {
	return (
		<ArticleList
			title={categories?.index?.[0] || Articles}
			allPostsData={allPostsData}
		/>
	);
}

export async function getStaticProps() {
	const allPostsData = getAllProblems()
		.concat(getAllPosts())
		.sort(sortByDateDesc);

	return {
		props: {
			allPostsData,
		},
	};
}
