import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanban Learning Project</title>
        <meta
          name="description"
          content="An interactive React learning exercise — build a Kanban board step by step with Next.js."
        />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Kanban Learning Project</h1>
          <p>
            This project is an <strong>interactive learning exercise</strong> designed to help you learn{" "}
            <strong>React</strong> and <strong>Next.js</strong> by building a fully functional{" "}
            <strong>Kanban Board</strong> — step by step, following real-world development tasks.
          </p>
          <p>
            Each task and milestone is tracked on{" "}
            <a
              href="https://github.com/orgs/zero-to-js/projects/3"
              target="_blank"
              rel="noopener noreferrer"
            >
              our GitHub project board
            </a>.
          </p>
        </section>

        <section className={styles.boardSection}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/kanban-hero.png"
              alt="Kanban Board Example"
              width={1381}
              height={861}
              className={styles.heroImage}
              priority
            />
          </div>

          <div className={styles.links}>
            <a
              href="https://www.figma.com/design/sx2NJMnfhkn5TcuWWBgZXY/Kanban--Community-?node-id=5-281&t=8T0m7LwFYc8FNnKc-0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              View Design in Figma →
            </a>
            <a
              href="https://github.com/orgs/zero-to-js/projects/3"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              View Project Board on GitHub →
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          Built as part of a mentorship exercise —{" "}
          <a
            href="https://github.com/zero-to-js/kanban-board"
            target="_blank"
            rel="noopener noreferrer"
          >
            view the repository
          </a>
          {" "} | {" "}
          <a
            href="https://kanban-eight-pink.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live demo
          </a>
        </p>
      </footer>
    </>
  );
}
