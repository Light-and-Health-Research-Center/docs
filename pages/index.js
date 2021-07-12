import Head from "next/head";
import Hero from "../components/index/Hero";
import TopBar from "../components/index/TopBar";
import CardSection from "../components/index/CardSection";
import { getAllProductData } from "../lib/docs";
import Footer from "../components/global/Footer";
import { SearchProvider } from "../components/global/SearchContext";

export default function Home({ cardData }) {
  return (
    <>
      <Head>
        <title key="head-title">
          Light and Health Docs | Light and Health Research Center
        </title>
        <meta
          name="description"
          content="Explore the resources and documentation the Light and Health Research Center has to offer."
          key="head-description"
        />
        <meta
          property="og:title"
          content="Light and Health Docs"
          key="head-ogtitle"
        />
        <meta
          property="og:description"
          content="Explore the resources and documentation the Light and Health Research Center has to offer."
          key="head-ogdescription"
        />
        <meta
          property="og:image"
          content={`https://docs.light-health.org/img/undraw/books.jpg`}
          key="head-ogimage"
        ></meta>
        <meta
          property="og:url"
          content="https://docs.light-health.org"
          key="head-ogurl"
        ></meta>
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="head-twittercard"
        ></meta>
        <meta
          name="twitter:image:alt"
          content="Girl reading books"
          key="head-twitterimgalt"
        ></meta>
        <meta
          property="og:site_name"
          content="Light and Health Docs"
          key="head-ogsite_name"
        ></meta>
      </Head>
      <SearchProvider>
        <TopBar />
        <Hero />
        <CardSection data={cardData} />
        <Footer />
      </SearchProvider>
    </>
  );
}

export async function getStaticProps() {
  const cardData = getAllProductData();
  return {
    props: {
      cardData,
    },
  };
}
