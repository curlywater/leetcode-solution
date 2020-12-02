import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const siteDescription = "Learn how to build a personal website using Next.js";
export const siteTitle = "LeetCode";
export const categories = {
	index: ["Recent", "/"],
	topic: ["Topic", "/topic"],
	leetcode: ["Problems", "/leetcode"],
};

export default function Layout({ children, index }) {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={siteDescription} />
			</Head>
			{index && (
				<aside className={styles.sidebar}>
					<ul className={utilStyles.list}>
						{Object.entries(categories).map(
							([key, [title, url]]) => {
								return (
									<li
										className={utilStyles.listItem}
										key={key}
									>
										<Link href={url}>
											<a
												className={
													styles.sidebarItemLink
												}
											>
												{title}
											</a>
										</Link>
									</li>
								);
							}
						)}
					</ul>
				</aside>
			)}
			<main>{children}</main>
			{!index && (
				<div className={styles.backToHome}>
					<a onClick={() => router.back()}>← Back to list</a>
				</div>
			)}
		</div>
	);
}
