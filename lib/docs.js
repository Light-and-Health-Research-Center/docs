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
        desc: menuData.desc,
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
          desc: docData.desc,
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

export function getFrontMatter(slug, tree = {}) {
  function getProductLayoutData(frontMatter) {
    function getTwoListData(frontMatter) {
      let layoutData = {};

      let list1Data = {};
      list1Data.title = frontMatter.list1.title;
      list1Data.children = [];
      frontMatter.list1.children.map((child) => {
        let link = `/${slug[0]}${child}`;
        let childObj = tree
          .find((el) => el.children.find((child) => child.link == link))
          .children.find((child) => child.link == link);
        list1Data.children.push(childObj);
      });
      layoutData.list1 = list1Data;

      let list2Data = {};
      list2Data.title = frontMatter.list2.title;
      list2Data.children = [];
      frontMatter.list2.children.map((child) => {
        let link = `/${slug[0]}${child}`;
        let childObj = tree
          .find((el) => el.children.find((child) => child.link == link))
          .children.find((child) => child.link == link);
        list2Data.children.push(childObj);
      });
      layoutData.list2 = list2Data;

      frontMatter.layoutData = layoutData;
    }

    switch (frontMatter.layout) {
      case "twolist":
        getTwoListData(frontMatter);
      default:
        return;
    }
  }

  function getDocFooterData(frontMatter) {
    const pageUrl = `https://docs.light-health.org/${slug.join("/")}`;

    let editLinkVar = "";

    if (slug.length === 1) editLinkVar = "/index.mdx";
    else if (slug.length === 2) editLinkVar = "/_data.mdx";
    else if (slug.length === 3) editLinkVar = ".mdx";

    let obj = {
      links: {
        socials: {
          facebook: `https://www.facebook.com/sharer.php?u=${pageUrl}`,
          linkedin: `https://www.linkedin.com/shareArticle?url=${pageUrl}`,
          twitter: `https://twitter.com/intent/tweet?url=${pageUrl}`,
        },
        edit: `https://github.com/Light-and-Health-Research-Center/docs/edit/main/docs/${slug.join(
          "/"
        )}${editLinkVar}`,
        issue: `https://github.com/Light-and-Health-Research-Center/docs/issues/new`,
      },
    };

    return obj;
  }

  let filePath, source, frontMatter;

  if (slug.length === 3) {
    filePath = path.join(docsDir, slug[0], slug[1], `${slug[2]}.mdx`);
    source = fs.readFileSync(filePath, "utf8");
    frontMatter = matter(source).data;
    frontMatter.isData = false;
    frontMatter.pageType = "documentation";
  }

  if (slug.length === 1) {
    filePath = path.join(docsDir, `${slug.join("/")}`, "index.mdx");
    source = fs.readFileSync(filePath, "utf8");
    frontMatter = matter(source).data;
    frontMatter.isData = true;
    frontMatter.pageType = "product";
    getProductLayoutData(frontMatter);
  }

  if (slug.length === 2) {
    filePath = path.join(docsDir, `${slug.join("/")}/_data.mdx`);
    source = fs.readFileSync(filePath, "utf8");
    frontMatter = matter(source).data;
    frontMatter.isData = true;
    frontMatter.pageType = "menu";
    frontMatter.list = getMenuList(slug);
  }
  frontMatter.footer = getDocFooterData(frontMatter);
  return frontMatter;
}

function blankExternal(url, node) {
  if (url.host !== "internal.site") {
    node.properties.target = "_blank";
  }
}

export async function getMdxSource(slug, pageType) {
  let mdxPath = path.join(docsDir, `${slug.join("/")}.mdx`);
  if (pageType === "product") {
    mdxPath = path.join(docsDir, `${slug.join("/")}`, "index.mdx");
  }
  const source = fs.readFileSync(mdxPath, "utf8").trim();
  const { frontMatter, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-math"), require("remark-math")],
      rehypePlugins: [
        require("rehype-slug"),
        [require("rehype-urls"), blankExternal],
        [
          require("rehype-autolink-headings"),
          {
            behavior: "wrap",
            properties: {
              className: ["anchor"],
            },
          },
        ],
        require("rehype-katex"),
        require("mdx-prism"),
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
      const link =
        "#" +
        slugify(text.replace(/<[^>]*>|[^a-zA-Z0-9- ]+/g, ""), { lower: true });
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
