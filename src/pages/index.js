import Head from "next/head";
import { Header, Banner, ProductFeed, Footer } from "../Components";

export default function Home({ products }) {
  return (
    <div className="bg-gray-700">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>E-commerce Web-Site</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then(res => res.json());

  return {
    props: {
      products,
    },
  };
};
