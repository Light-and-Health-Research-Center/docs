import Head from "next/head";
import Hero from "../components/index/Hero";
import TopBar from "../components/index/TopBar";
import CardSection from "../components/index/CardSection";
import { getAllProductData } from "../lib/docs";

export default function Home({ cardData }) {
  return (
    <>
      <Head>
        <title>Light and Health Docs | Light and Health Research Center</title>
      </Head>
      <TopBar />
      <Hero />
      <CardSection data={cardData} />
    </>
  );
}

export async function getStaticProps() {
  const cardData = getAllProductData();
  console.log(JSON.stringify(cardData, null, 2));
  return {
    props: {
      cardData,
    },
  };
}
