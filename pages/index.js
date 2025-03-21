import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

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
      <Image src="/ung.png" alt="Image of me" width={217} height={217}></Image>
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
      <li>Interested in asteroid mining, drones and aerospace in general</li>
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
