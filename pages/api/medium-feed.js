import Parser from "rss-parser";

export default async function handler(req, res) {
  const parser = new Parser();
  const mediumRSSFeedUrl = "https://medium.com/feed/@tanav2202";

  try {
    const feed = await parser.parseURL(mediumRSSFeedUrl);
    console.log("feed", feed)
    res.status(200).json(feed);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Failed to fetch Medium RSS feed" });
  }
}