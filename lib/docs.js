import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDir = path.join(process.cwd(), "docs"); // .../docs
const productDirs = fs.readdirSync(docsDir); // [cscalc],

export function getAllProductData() {
  let allProductData = [];
  for (let productDir of productDirs) {
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

export function getProductData(product) {
  const productDataPath = path.join(docsDir, product, "data.mdx");
  let source = fs.readFileSync(productDataPath, "utf8");
  let data = matter(source).data;
  data.path = `/${product}`;
  return data;
}

export function getSlugs() {
  let slugs = [];

  productDirs.map((dir) => {
    let subDirs = fs.readdirSync(path.join(docsDir, dir));
    subDirs.map((subDir) => {
      if (!fs.lstatSync(path.join(docsDir, dir, subDir)).isDirectory()) {
        slugs.push({ params: { slug: [`${dir}`] } });
        return;
      }
      let files = fs.readdirSync(path.join(docsDir, dir, subDir), "utf8");
      files.map((file) => {
        const slug = [`${dir}`, `${subDir}`, `${file.replace(/\.mdx$/, "")}`];
        slugs.push({ params: { slug: slug } });
      });
    });
  });
  return slugs;
}
