import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDir = path.join(process.cwd(), "docs"); // .../docs

export function getAllProductData() {
  let allProductData = [];
  for (let productDir of fs.readdirSync(docsDir)) {
    const dirPath = path.join(docsDir, productDir);
    if (!fs.lstatSync(dirPath).isDirectory()) continue;
    const productDataPath = path.join(dirPath, "data.mdx");
    let source = fs.readFileSync(productDataPath, "utf8");
    const cardData = matter(source).data;
    cardData.path = `/${productDir}`;
    allProductData.push(cardData);
  }
  return allProductData;
}

export function getProductData() {}

export function getProductPages() {
  return productDirs.map((dir) => {
    return {
      params: {
        product: dir,
      },
    };
  });
}
