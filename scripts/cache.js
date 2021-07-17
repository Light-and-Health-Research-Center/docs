const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const docsDir = path.join(process.cwd(), "docs");
const productDirs = fs.readdirSync(docsDir);

function getProductData(product) {
  const productDataPath = path.join(docsDir, product, "_data.mdx");
  let source = fs.readFileSync(productDataPath, "utf8");
  let data = matter(source).data;
  data.path = `/${product}`;
  return data;
}

function cleanPath(raw) {
  return raw.toLowerCase().replace(/\s/g, "-");
}

function getLink(product, menu, docFile) {
  return `/${product}/${menu}/${docFile.replace(".mdx", "")}`;
}

function getSlug(productData, menu, docFile) {
  let slug = ["", "", ""];
  slug[0] = productData.module_title;

  for (const obj of productData.structure) {
    if (menu === cleanPath(Object.keys(obj)[0])) {
      slug[1] = Object.keys(obj)[0];
    }
    for (const doc of Object.values(obj)[0]) {
      if (docFile.replace(".mdx", "") == cleanPath(doc)) {
        slug[2] = doc;
      }
    }
  }
  return slug;
}

function cacheDocs() {
  const docs = [];

  productDirs.map((product) => {
    const productData = getProductData(product);

    const productDir = path.join(docsDir, product);
    if (!fs.lstatSync(productDir).isDirectory()) return;
    const menuDirs = fs.readdirSync(productDir);

    menuDirs.map((menu) => {
      menuDir = path.join(productDir, menu);
      if (!fs.lstatSync(menuDir).isDirectory()) return;
      const docsFiles = fs.readdirSync(menuDir);

      docsFiles.map((docFile) => {
        if (docFile === "_data.mdx") return;
        const docFilePath = path.join(menuDir, docFile);
        const source = fs.readFileSync(docFilePath, "utf8");
        const frontMatter = matter(source).data;
        frontMatter.link = getLink(product, menu, docFile);
        frontMatter.slug = getSlug(productData, menu, docFile);
        docs.push(frontMatter);
      });
    });
  });
  return JSON.stringify(docs);
}

const docsCache = `export const docsCache = ${cacheDocs()}`;

try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/docs.js", docsCache, function (err) {
  if (err) return console.err(err);
  console.log("Docs cached.");
});
