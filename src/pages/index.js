import Head from "next/head";
import { Header } from "../Components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>E-commerce Web-Site</title>
      </Head>

      <Header />
    </div>
  );
}
