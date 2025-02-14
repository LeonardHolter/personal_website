import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      {/* Add Head component here */}
      <Head>
        <title>Leonard Holter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      <AboutMe />
      <Links />
      <Blog />
    </div>
  );
}

function Title() {
  return <h1>Leonard Holter</h1>;
}

function AboutMe() {
  return (
    <ul>
      <li>A Finance and Physics student at Columbia University during day</li>
      <li>Builder and a visionary during night</li>
      <li>Interested in aerospace, drones and real estate</li>
    </ul>
  );
}

function Links() {
  return (
    <ul>
      <h2>Links</h2>
      <li>
        <a href="https://x.com/LeonardHolter17">X</a>
      </li>
      <li>
        <a href="mailto:leonard.holter@columbia.edu">Email</a>
      </li>
    </ul>
  );
}

function Blog() {
  return (
    <ul>
      <h2>Blog</h2>
      <li>
        <a href="">Coming Soon</a>
      </li>
    </ul>
  );
}
