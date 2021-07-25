import Head from "next/head";
import { Header, Banner } from "../Components";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>E-commerce Web-Site</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        {/* Product Feed */}
      </main>
    </div>
  );
}
