import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Breadcrumb from "./Breadcrumb";

export default function Layout({ productData, pageSlug, children }) {
  return (
    <div className="flex">
      <a className="sr-only" href="#main">
        Skip to Main Content
      </a>
      <SideBar
        structure={productData.structure}
        title={productData.title}
        path={productData.path}
        slug={pageSlug}
      />
      <div className="flex-grow">
        <TopBar
          structure={productData.structure}
          title={productData.title}
          path={productData.path}
          slug={pageSlug}
        />
        <main id="main" className="grid grid-cols-12 p-8">
          <div className="col-span-12 xl:col-span-8">
            <Breadcrumb
              structure={productData.structure}
              slug={pageSlug}
              title={productData.title}
            />
            {children}
          </div>
          <div className="col-span-12 xl:col-span-4"></div>
        </main>
      </div>
    </div>
  );
}
