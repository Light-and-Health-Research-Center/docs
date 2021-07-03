import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "docs");

export function getDocsCardData() {
  let data = [];
  const dirs = fs.readdirSync(docsDirectory);
  for (let dir of dirs) {
    const dirPath = path.join(docsDirectory, dir);
    if (!fs.lstatSync(dirPath).isDirectory()) continue;
    const cardDataPath = path.join(dirPath, "card.json");
    const cardData = fs.readFileSync(cardDataPath);
    data.push(JSON.parse(cardData));
  }
  return data;
}
