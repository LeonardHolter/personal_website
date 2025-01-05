import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Title></Title>
      <AboutMe></AboutMe>
      <Links></Links>
      <Blog></Blog>
    </div>
  );
}

function Title() {
  return <h1>Leonard Holter</h1>;
}

function AboutMe() {
  return (
    <ul>
      <li>A physics and finance student at Columbia University during day</li>
      <li>Builder and a visionary during night</li>
      <li>Currently working on a marketplace for AI agents</li>
      <li>Interested in aerospace and drones</li>
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
      <li>
        <a
          href="/Leonard_Holter_Resume.pdf"
          download="Leonard_Holter_Resume.pdf"
        >
          Resume
        </a>
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
