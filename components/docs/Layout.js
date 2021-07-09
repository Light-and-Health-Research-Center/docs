import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Breadcrumb from "./Breadcrumb";
import MenuList from "./MenuList";
import Head from "next/head";

export default function Layout({
  productData,
  pageSlug,
  frontMatter,
  children,
}) {
  return (
    <div className="flex">
      <Head>
        <title key="title">
          {frontMatter.title} - {productData.product_title} | Light and Health
          Docs
        </title>
      </Head>
      <a className="sr-only" href="#main">
        Skip to Main Content
      </a>
      <SideBar
        structure={productData.structure}
        title={productData.product_title}
        path={productData.path}
        slug={pageSlug}
      />
      <div className="flex-grow">
        <TopBar
          structure={productData.structure}
          title={productData.product_title}
          path={productData.path}
          slug={pageSlug}
        />
        <main id="main" className="p-4 md:p-8 lg:p-12">
          <Breadcrumb
            structure={productData.structure}
            slug={pageSlug}
            title={productData.product_title}
          />
          <div
            id="#content"
            className="content py-4 my-2 md:pt-4 lg:pt-8 grid grid-cols-12"
          >
            <div
              className={`${
                frontMatter.isData ? "" : "xl:col-span-8"
              } col-span-12`}
            >
              <div className="mb-4 border-b">
                <h1 className="mb-6">{frontMatter.title}</h1>
                <h6 className="text-black-60 mb-4">{frontMatter.desc}</h6>
              </div>

              {frontMatter.pageType == "menu" && (
                <MenuList list={frontMatter.list} />
              )}
              {children}
            </div>
            {!frontMatter.isData && (
              <div className="col-span-12 xl:col-span-4">right</div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
