import { getSlugs, getProductData } from "../lib/docs";
import Layout from "../components/docs/Layout";

export default function slug({ productData, pageSlug }) {
  return <Layout productData={productData} pageSlug={pageSlug}></Layout>;
}

export async function getStaticProps({ params }) {
  const productData = getProductData(params.slug[0]);
  const pageSlug = params.slug;
  console.log(pageSlug);
  return {
    props: {
      productData,
      pageSlug,
    },
  };
}

export async function getStaticPaths({}) {
  const paths = getSlugs();
  return {
    paths,
    fallback: false,
  };
}
