import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Breadcrumb from "./Breadcrumb";
import MenuList from "./MenuList";
import TOC from "./TOC";
import Github from "./Github";

export default function Layout({
  productData,
  pageSlug,
  frontMatter,
  toc,
  github,
  children,
}) {
  return (
    <div className="flex">
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
        <main
          id="main"
          className="p-4 md:p-8 lg:p-12  max-w-screen-md xl:max-w-screen-xl xl:mx-auto"
        >
          <Breadcrumb
            structure={productData.structure}
            slug={pageSlug}
            title={productData.product_title}
          />
          <div
            id="#content"
            className="content py-4 my-2 grid xl:gap-12 grid-cols-12"
          >
            <div className="xl:col-span-8 col-span-12 lg:pt-8">
              <div className="mb-8 border-b">
                <h1 className="mb-6">{frontMatter.title}</h1>
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

              {frontMatter.pageType == "menu" && (
                <MenuList list={frontMatter.list} />
              )}
              {children}
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
