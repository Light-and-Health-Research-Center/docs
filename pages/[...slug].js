import {
  getSlugs,
  getProductData,
  getFrontMatter,
  getMdxSource,
  getTOC,
  getGithub,
} from "../lib/docs";
import Layout from "../components/docs/Layout";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../components/markdown/MDXComponents";
import { SearchProvider } from "../components/global/SearchContext";

export default function slug({
  productData,
  pageSlug,
  frontMatter,
  mdxSource,
  toc,
  github,
}) {
  let rootDir = "https://docs.light-health.org";
  return (
    <>
      <Head>
        <title key="head-title">
          {frontMatter.title} | Light and Health Docs
        </title>
        <meta
          name="description"
          content={`${frontMatter.title} - ${frontMatter.desc}`}
          key="head-description"
        />
        <meta
          property="og:title"
          content={`${frontMatter.title} | Light and Health Docs`}
          key="head-ogtitle"
        />
        <meta
          property="og:description"
          content={`${frontMatter.title} - ${frontMatter.desc}`}
          key="head-ogdescription"
        />
        <meta
          property="og:image"
          content={`${rootDir}/img/undraw/books.jpg`}
          key="head-ogimage"
        ></meta>
        <meta
          property="og:url"
          content={`${rootDir}/${pageSlug.join("/")}`}
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
        <Layout
          productData={productData}
          pageSlug={pageSlug}
          frontMatter={frontMatter}
          toc={toc}
          github={github}
        >
          {frontMatter.pageType === "documentation" ? (
            <div className="mdx">
              <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
            </div>
          ) : (
            <></>
          )}
        </Layout>
      </SearchProvider>
    </>
  );
}

export async function getStaticProps({ params }) {
  const productData = getProductData(params.slug[0]);
  const pageSlug = params.slug;
  const frontMatter = getFrontMatter(pageSlug);
  const mdxSource =
    frontMatter.pageType === "documentation"
      ? await getMdxSource(pageSlug)
      : "";
  const toc = frontMatter.pageType === "documentation" ? getTOC(pageSlug) : "";
  const github =
    frontMatter.pageType === "documentation" ? await getGithub(pageSlug) : "";
  return {
    props: {
      productData,
      pageSlug,
      frontMatter,
      mdxSource,
      toc,
      github,
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
