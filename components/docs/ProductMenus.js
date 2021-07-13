import ProductMenu from "./ProductMenu";

export default function ProductMenus({ productData }) {
  return (
    <div className="mt-8">
      <h2 className="font-bold text-3xl mb-4">
        All {productData.product_title} docs
      </h2>
      <div className="grid grid-cols-12 w-full gap-0 lg:gap-4">
        {productData.tree.map((menuObj) => (
          <ProductMenu key={menuObj.title} menuObj={menuObj} />
        ))}
      </div>
    </div>
  );
}
