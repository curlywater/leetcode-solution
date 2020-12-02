import Head from "next/head";
import Layout, { siteTitle } from "~/components/layout";
import utilStyles from "~/styles/utils.module.css";
import { getAllTopics } from "~/lib/topic";
import { categories } from "~/components/layout";
import ArticleSection from "~/components/articleSection";

export default function TopicIndex({ allTopics }) {
	const title = categories["topic"][0];
	return (
		<Layout index>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<h2 className={utilStyles.headingLg}>{title}</h2>
				{allTopics.map(({ id, ...sectionData }) => (
					<ArticleSection
						key={id}
						sectionData={sectionData}
						isAbleFold={true}
					/>
				))}
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const allTopics = getAllTopics();

	return {
		props: {
			allTopics: allTopics,
		},
	};
}
