import ProductMenu from "./ProductMenu";

export default function ProductMenus({ productData }) {
  return (
    <div className="mt-8">
      <h3 className="pb-2 mb-4 border-b">
        All {productData.product_title} docs
      </h3>
      <div className="grid grid-cols-12 w-full gap-0 lg:gap-4">
        {productData.tree.map((menuObj) => (
          <ProductMenu key={menuObj.title} menuObj={menuObj} />
        ))}
      </div>
    </div>
  );
}
