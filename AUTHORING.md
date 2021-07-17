# Authoring

## MDX

These docs are written in [markdown](https://www.markdownguide.org/), or more specifically [MDX](https://mdxjs.com/). More on MDX later.

### Markdown

> Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages.

Each of the individual pages in this website is written in markdown. Markdown provides a very simple authoring experience, allowing us to write documentation pages fast, without the need to program any html/css/js.

```md
## This is a heading

This is a paragraph with a [link](https://www.google.com). This paragraph also contains lists:

1. Item 1
2. Item 2
3. Item 3

- Item
- Item
- Item
```

<img src="./assets/img/md/authoring/Markdown.png" />

Markdown supports headings, paragraphs, lists, tables, links, and more.

To learn how to write markdown, visit [markdownguide.org](https://www.markdownguide.org/) or see Adam Pritchard's [Markdown Cheatseat](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#emphasis).

### Markdown extensions

[docs.light-health.org](https://docs.light-health.org) also supports a few markdown extensions empowered via [rehype](https://github.com/rehypejs/rehype) and [remark](https://github.com/gnab/remark).

#### KaTeX

[KaTeX](https://katex.org/) is a math typesetting library, which allows us to write [LaTeX](https://www.latex-project.org/) flavored text directly into our markdown.

```md
$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$
```

<img src="./assets/img/md/authoring/KaTeX.png" />

View KaTeX documentation [here](https://katex.org/docs/api.html), including [supported functions](https://katex.org/docs/supported.html)

#### Prism

[Prism](https://prismjs.com/) is a syntax highlighter which will highlight our markdown code blocks for us.

````md
```jsx
export default function Books() {
  return (
    <Image src={logistics} width={400} height={400} alt="Man moving boxes" />
  );
}
```
````

<img src="./assets/img/md/authoring/Prism.png" />

View Prism supported languages [here](https://prismjs.com/#supported-languages).

### Custom components

[MDX](https://mdxjs.com/) (.mdx) is an extension of markdown which allows us to author custom react components into our markdown. This essentially allows for limitless customizability in our markdown.

For a full list of available custom markdown components, see [COMPONENTS.md](./COMPONENTS.md).

To request a new custom markdown component, or to create your own, see [CONTRIBUTING.ms](./CONTRIBUTING.md)

### Frontmatter

Frontmatter is the bit at the top of markdown file which provides us with some metadata.

```md
---
title: "Charts"
desc: "A deep dive into the charts panel of the CS Calculator 2.0"
---
```

The website uses this metadata to organize files, provide search, title pages, etc.

## Documentation structure

### Directory structure

### \_data.mdx

### index.mdx

## Static files

## Style guidelines

```

```

```

```
