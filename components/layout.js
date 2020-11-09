import Head from "next/head";
import Link from "next/link";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const siteDescription = "Learn how to build a personal website using Next.js";
export const siteTitle = "LeetCode";
const author = "Curly";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDescription} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              src="/images/dog2.jpeg"
              alt={author}
            />
            <h1 className={`${utilStyles.heading2Xl}`}>{author}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/dog2.jpeg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={author}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{author}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
