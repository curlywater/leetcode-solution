import Head from "next/head";
import Link from "next/link";
import Date from "./date";
import Tag from "./tag";
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
					{allPostsData.map(({ id, date, title, topic }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/leetcode/${id}`}>
								<a>{title}</a>
							</Link>
							<div
								className={`${utilStyles.smallText} ${utilStyles.lightText}`}
							>
								<small>
									<Date dateString={date} />
								</small>
								<small>
									<Tag
										text={topic}
										url={`/topic/#${topic}`}
									/>
								</small>
							</div>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
