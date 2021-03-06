import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Breadcrumb from "./Breadcrumb";
import MenuList from "./MenuList";
import TOC from "./TOC";
import Github from "./Github";
import Footer from "../global/Footer";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearch } from "../global/SearchContext";
import SearchResultsDialog from "../global/SearchResultsDialog";
import ProductMenus from "./ProductMenus";
import ProductLayout from "./productLayouts/ProductLayout";
import DocFooter from "./footer/DocFooter";

export default function Layout({
  productData,
  pageSlug,
  frontMatter,
  toc,
  github,
  children,
}) {
  const searchContext = useSearch();
  let toFocus = useRef(null);
  let page = useRouter();

  useEffect(() => {
    searchContext.setQuery("");
    searchContext.setActive(false);
    searchContext.setResults([]);
    searchContext.setDialogWaitToClose(false);
    toFocus.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="flex">
      <a className="sr-only" href="#main">
        Skip to Main Content
      </a>
      <SideBar
        structure={productData.structure}
        title={productData.module_title}
        path={productData.path}
        slug={pageSlug}
      />
      <div className="flex-grow scroll-margin-top">
        <TopBar
          structure={productData.structure}
          title={productData.module_title}
          path={productData.path}
          slug={pageSlug}
        />
        <SearchResultsDialog />
        <main
          id="main"
          className="p-4 pb-0 md:p-8 md:pb-0 lg:p-12 lg:pb-0  max-w-screen-md xl:max-w-screen-xl xl:mx-auto"
        >
          <Breadcrumb
            toFocus={toFocus}
            structure={productData.structure}
            slug={pageSlug}
            title={productData.module_title}
          />
          <div
            id="content"
            className="content pt-4 mt-2 grid xl:gap-12 grid-cols-12"
          >
            <div
              className={`col-span-12 ${
                frontMatter.pageType === "product"
                  ? ""
                  : "lg:pt-8 xl:col-span-8"
              }`}
            >
              <div className="mb-4 border-b">
                <h1 className="mb-6 font-bold text-4xl lg:text-5xl">
                  {frontMatter.title}
                </h1>
                <h6 className="text-black-60 mb-4 text-lg">
                  {frontMatter.desc}
                </h6>
                {!frontMatter.isData && (
                  <>
                    <div className="xl:hidden">
                      <TOC toc={toc} />
                    </div>
                    <div>
                      <Github github={github} />
                    </div>
                  </>
                )}
              </div>

              {frontMatter.pageType === "menu" && (
                <MenuList list={frontMatter.list} />
              )}
              {children}
              {frontMatter.pageType === "product" && (
                <>
                  <ProductLayout
                    productData={productData}
                    frontMatter={frontMatter}
                  />
                  <ProductMenus productData={productData} />
                </>
              )}
              <DocFooter data={frontMatter.footer} />
              <Footer />
            </div>
            {!frontMatter.isData && (
              <div className="hidden xl:col-span-4 xl:block">
                <TOC toc={toc} sticky={true} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
