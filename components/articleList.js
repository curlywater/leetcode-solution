import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";

export default function ArticleList({ articles }) {
  return (
    <section className={utilStyles.headingMd}>
      <ul className={utilStyles.list}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        {articles.map(({ slug, date, title }) => (
          <li className={utilStyles.listItem} key={slug}>
            <Link href={`/posts/${slug}`}>
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
  );
}
