import Link from "next/link";
import styles from "./tag.module.css";

export default function Date({ url, text }) {
	if (text) {
		return (
			<Link href={url}>
				<a className={styles.tag}>{text}</a>
			</Link>
		);
	} else {
		return null;
	}
}
