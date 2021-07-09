import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDir = path.join(process.cwd(), "docs"); // .../docs
const productDirs = fs.readdirSync(docsDir); // [cscalc],

export function cleanPath(raw) {
  return raw.toLowerCase().replace(/\s/g, "-");
}

export function getAllProductData() {
  let allProductData = [];
  for (let productDir of productDirs) {
    const dirPath = path.join(docsDir, productDir);
    if (!fs.lstatSync(dirPath).isDirectory()) continue;
    const productDataPath = path.join(dirPath, "_data.mdx");
    let source = fs.readFileSync(productDataPath, "utf8");
    const cardData = matter(source).data;
    cardData.path = `/${productDir}`;
    allProductData.push(cardData);
  }
  return allProductData;
}

export function getProductData(product) {
  const productDataPath = path.join(docsDir, product, "_data.mdx");
  let source = fs.readFileSync(productDataPath, "utf8");
  let data = matter(source).data;
  data.path = `/${product}`;
  return data;
}

export function getSlugs() {
  let slugs = [];

  productDirs.map((dir) => {
    let subDirs = fs.readdirSync(path.join(docsDir, dir)); // [about, announcements, ...]
    subDirs.map((subDir) => {
      if (!fs.lstatSync(path.join(docsDir, dir, subDir)).isDirectory()) {
        slugs.push({ params: { slug: [`${dir}`] } });
        return;
      } else {
        slugs.push({ params: { slug: [`${dir}`, `${subDir}`] } });
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

export function getMenuList(slug) {
  let ret = [];
  let structure = getProductData(slug[0]).structure;
  console.log(structure);
  for (const obj of structure) {
    let menu = Object.keys(obj)[0];
    if (cleanPath(menu) == slug[1]) {
      for (const doc of Object.values(obj)[0]) {
        let item = {};
        let slugPath = `${slug.join("/")}/${cleanPath(doc)}`;
        item.path = `/${slugPath}`;
        item.frontMatter = getFrontMatter(slugPath.split("/"));
        ret.push(item);
      }
    }
  }
  return ret;
}

export function getFrontMatter(slug) {
  if (slug.length == 3) {
    let filePath = path.join(docsDir, slug[0], slug[1], `${slug[2]}.mdx`);
    let source = fs.readFileSync(filePath, "utf8");
    let frontMatter = matter(source).data;
    frontMatter.isData = false;
    frontMatter.pageType = "documentation";
    return frontMatter;
  }

  let filePath = path.join(docsDir, `${slug.join("/")}/_data.mdx`);
  let source = fs.readFileSync(filePath, "utf8");
  let frontMatter = matter(source).data;
  frontMatter.isData = true;
  if (slug.length === 1) frontMatter.pageType = "product";
  if (slug.length === 2) {
    frontMatter.pageType = "menu";
    frontMatter.list = getMenuList(slug);
  }
  return frontMatter;
}
