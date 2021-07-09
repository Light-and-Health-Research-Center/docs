import { getSlugs, getProductData, getFrontMatter } from "../lib/docs";
import Layout from "../components/docs/Layout";

export default function slug({ productData, pageSlug, frontMatter }) {
  return (
    <Layout
      productData={productData}
      pageSlug={pageSlug}
      frontMatter={frontMatter}
    ></Layout>
  );
}

export async function getStaticProps({ params }) {
  const productData = getProductData(params.slug[0]);
  const pageSlug = params.slug;
  const frontMatter = getFrontMatter(pageSlug);
  return {
    props: {
      productData,
      pageSlug,
      frontMatter,
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
