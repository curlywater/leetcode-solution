import ArticleList from "~/components/articleList";
import { categories } from "~/components/layout";
import { getSortedPostList } from "~/lib/leetcode";

export default function LeetcodeIndex({ allPostsData }) {
	return (
		<ArticleList
			title={categories?.leetcode?.[0] || Articles}
			allPostsData={allPostsData}
		/>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostList();

	return {
		props: {
			allPostsData,
		},
	};
}
