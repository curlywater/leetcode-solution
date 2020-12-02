import { getAllPostIds, getPostData } from "~/lib/post";
import Article from "~/components/article";

export default function Post({ postData }) {
	return <Article postData={postData} />;
}

export async function getStaticProps({ params }) {
	return {
		props: {
			postData: await getPostData(params.id),
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}
