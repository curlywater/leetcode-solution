import ArticleList from "~/components/articleList";
import { categories } from "~/components/layout";
import { getPostList } from "~/lib/leetcode";
import { sortByDateDesc } from "~/lib/sort";

export default function Unsolved({ allPostsData }) {
	return (
		<ArticleList
			title={categories?.unsolved?.[0] || "Articles"}
			allPostsData={allPostsData}
		/>
	);
}

export async function getStaticProps() {
	const allPostsData = getPostList()
		.filter((post) => post.solved == false)
		.sort(sortByDateDesc);

	return {
		props: {
			allPostsData,
		},
	};
}
