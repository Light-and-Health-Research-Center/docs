import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import slugify from "slugify";

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
  function getProductTree(data) {
    let ret = [];
    data.structure.map((menu) => {
      const menuSeg = cleanPath(Object.keys(menu)[0]);
      const menuPath = path.join(docsDir, product, menuSeg, "_data.mdx");
      const menuSource = fs.readFileSync(menuPath, "utf8");
      const menuData = matter(menuSource).data;
      const menuObj = {
        title: menuData.title,
        link: `/${product}/${menuSeg}`,
        children: [],
      };
      Object.values(menu)[0].map((doc) => {
        const docSeg = cleanPath(doc);
        const docPath = path.join(docsDir, product, menuSeg, `${docSeg}.mdx`);
        const docSource = fs.readFileSync(docPath, "utf8");
        const docData = matter(docSource).data;
        const docObj = {
          title: docData.title,
          link: `/${product}/${menuSeg}/${docSeg}`,
        };
        menuObj.children.push(docObj);
      });
      ret.push(menuObj);
    });
    return ret;
  }

  const productDataPath = path.join(docsDir, product, "_data.mdx");
  let source = fs.readFileSync(productDataPath, "utf8");
  let data = matter(source).data;
  data.path = `/${product}`;
  data.tree = getProductTree(data);
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
      } else {
        slugs.push({ params: { slug: [`${dir}`, `${subDir}`] } });
      }
      let files = fs.readdirSync(path.join(docsDir, dir, subDir), "utf8");
      files.map((file) => {
        if (file === "_data.mdx") return;
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
  if (slug.length === 3) {
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

export async function getMdxSource(slug) {
  const mdxPath = path.join(docsDir, `${slug.join("/")}.mdx`);
  const source = fs.readFileSync(mdxPath, "utf8").trim();
  const { frontMatter, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        require("rehype-slug"),
        [
          require("rehype-autolink-headings"),
          {
            behavior: "wrap",
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    },
  });
  return mdxSource;
}

export function getTOC(slug) {
  let ret = [];
  const mdxPath = path.join(docsDir, `${slug.join("/")}.mdx`);
  const source = fs.readFileSync(mdxPath, "utf8");
  const { frontMatter, content } = matter(source);

  const headings = content.match(/^(## )(.*)/gm) || [];

  if (headings.length) {
    headings.map((heading) => {
      const text = heading.replace("## ", "");
      const link = "#" + slugify(text.replace(/<[^>]*>/g, ""), { lower: true });
      ret.push({ text, link });
    });
  }

  return ret;
}

export async function getGithub(slug) {
  const res = await fetch(
    `https://api.github.com/repos/Light-and-Health-Research-Center/docs/commits?path=docs/${slug.join(
      "/"
    )}.mdx`,
    {
      method: "GET",
      headers: {
        Authorization: `token ${process.env.GITHUB_OAUTH2_TOKEN}`,
      },
    }
  );
  if (!res.ok) {
    return {};
  }
  let date = await res.json();
  date = date[0] ? date[0].commit.committer.date : "";
  let link = `https://github.com/Light-and-Health-Research-Center/docs/blob/main/docs/${slug.join(
    "/"
  )}.mdx`;
  return { date, link };
}
