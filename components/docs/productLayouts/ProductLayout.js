import TwoList from "./TwoList";

export default function ProductLayout({ productData, frontMatter }) {
  switch (frontMatter.layout) {
    case "twolist":
      return <TwoList productData={productData} frontMatter={frontMatter} />;
    default:
      return <></>;
  }
}
