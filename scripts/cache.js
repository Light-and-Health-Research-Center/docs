const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function cacheDocs() {
  const docs = [];
  const docsDir = path.join(process.cwd(), "docs");
  const productDirs = fs.readdirSync(docsDir);
  productDirs.map((product) => {
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
