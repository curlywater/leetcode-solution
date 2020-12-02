import Head from "next/head";
import Layout from "./layout";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";

export default function Article({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div
					dangerouslySetInnerHTML={{
						__html: postData.contentHtml,
					}}
				/>
			</article>
		</Layout>
	);
}
