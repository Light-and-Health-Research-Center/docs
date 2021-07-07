import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function Layout({ productData, pageSlug, children }) {
  return (
    <div className="flex">
      <SideBar
        structure={productData.structure}
        title={productData.title}
        path={productData.path}
        slug={pageSlug}
      />
      <main className="flex-grow">
        <TopBar
          structure={productData.structure}
          title={productData.title}
          path={productData.path}
          slug={pageSlug}
        />
        {children}
      </main>
    </div>
  );
}
