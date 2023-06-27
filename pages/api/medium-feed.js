import Parser from "rss-parser";

export default async function handler(req, res) {
  const parser = new Parser();
  const mediumRSSFeedUrl = "https://medium.com/feed/@pratham-saraf";

  try {
    const feed = await parser.parseURL(mediumRSSFeedUrl);
    res.status(200).json(feed);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Medium RSS feed" });
  }
}