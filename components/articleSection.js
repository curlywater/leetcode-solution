import Link from "next/link";
import { useState } from "react";
import utilStyles from "../styles/utils.module.css";
import styles from "./articleSection.module.css";

export default function ArticleSection({ sectionData, isAbleFold = false }) {
	const { title, postData } = sectionData;
	const [isFold, setFold] = useState(true);
	return (
		<section className={isFold ? styles.foldStatus : styles.unfoldStatus}>
			<header
				className={styles.sectionHeader}
				onClick={() => {
					setFold((status) => !status);
				}}
			>
				<h3 className={styles.headerText}>
					{title} {postData.length}
				</h3>
				{isAbleFold && <div className={styles.foldTrigger}>▼</div>}
			</header>
			<ul className={`${utilStyles.list} ${styles.foldContent}`}>
				{postData.map(({ id, url, title }) => (
					<li className={utilStyles.listItem} key={id}>
						<Link href={url}>
							<a>{title}</a>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
