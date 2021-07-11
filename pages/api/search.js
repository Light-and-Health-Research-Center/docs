import { docsCache } from "../../cache/docs";

export default (req, res) => {
  const results = req.query.q
    ? docsCache.filter((doc) => doc.title.toLowerCase().includes(req.query.q))
    : [];
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
