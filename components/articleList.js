import Head from "next/head";
import Link from "next/link";
import Date from "./date";
import Layout, { siteTitle } from "./layout";
import utilStyles from "~/styles/utils.module.css";

export default function ArticleList({ title, allPostsData }) {
	return (
		<Layout index>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<h2 className={utilStyles.headingLg}>
					{title} {allPostsData.length}
				</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/leetcode/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
